"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { useLocale, useTranslations } from "@/components/LocaleProvider";
import { localizeHref } from "@/lib/i18n";
import type { VideoWithChapters } from "@/lib/types";

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

/**
 * Click-to-play YouTube embed. Nothing is requested from YouTube (not even a
 * thumbnail) until the person presses play; the cover is drawn locally.
 */
export function VideoEmbed({
  videoId,
  title,
  channel,
  duration,
  start,
  note,
  chapters,
}: VideoWithChapters) {
  const t = useTranslations();
  const locale = useLocale();
  const [playFrom, setPlayFrom] = useState<number | null>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (playFrom !== null) frameRef.current?.focus();
  }, [playFrom]);

  const begin = start ?? 0;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}${
    begin ? `&t=${begin}s` : ""
  }`;
  const embedUrl =
    playFrom === null
      ? ""
      : `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1${
          playFrom ? `&start=${playFrom}` : ""
        }`;

  return (
    <figure className="page-break-avoid m-0">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-primary print:hidden">
        {playFrom === null ? (
          <button
            type="button"
            onClick={() => setPlayFrom(begin)}
            aria-label={t<string>("pages.video.playAria").replace(
              "{title}",
              title,
            )}
            className="group absolute inset-0 flex h-full w-full flex-col justify-between p-5 text-left text-white focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-accentYellow sm:p-6"
          >
            <span
              className="pointer-events-none absolute inset-0 bg-dots opacity-10"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-primaryGreen/25"
              aria-hidden="true"
            />
            <span className="relative block max-w-[34ch] text-lg font-semibold leading-snug sm:text-xl">
              {title}
            </span>
            <span className="relative flex items-end justify-between gap-4">
              <span className="text-sm leading-relaxed">
                <span className="block">{channel}</span>
                <span className="block">
                  {t<string>("pages.video.length").replace(
                    "{duration}",
                    duration,
                  )}
                </span>
              </span>
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accentYellow text-primary shadow-elevated transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none sm:h-20 sm:w-20">
                <Icon name="play" size="lg" />
              </span>
            </span>
          </button>
        ) : (
          <iframe
            ref={frameRef}
            src={embedUrl}
            title={t<string>("pages.video.playerTitle").replace(
              "{title}",
              title,
            )}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>

      <figcaption className="mt-3 space-y-2 text-sm leading-relaxed text-textSecondary">
        <p className="mb-0 hidden font-semibold text-textPrimary print:block">
          {title} ({channel}, {duration})
        </p>
        {chapters && chapters.length > 0 && (
          <div>
            <p className="mb-2 font-semibold text-textPrimary">
              {t<string>("pages.video.chaptersLabel")}
            </p>
            <ul className="mb-0 flex flex-wrap gap-2 pl-0 print:hidden">
              {chapters.map((chapter) => (
                <li key={chapter.start}>
                  <button
                    type="button"
                    onClick={() => setPlayFrom(chapter.start)}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-border/70 bg-white px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-primaryGreen hover:bg-surfaceElevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
                  >
                    {chapter.label}
                    <span className="text-textMuted">
                      {formatTime(chapter.start)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {note && <p className="mb-0">{note}</p>}
        <p className="mb-0">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-primary"
          >
            {t<string>("pages.video.watchOnYouTube")}
            <Icon name="external-link" size="sm" />
            <span className="sr-only">{t<string>("pages.video.newTab")}</span>
          </a>
        </p>
        <p className="mb-0 text-xs text-textMuted print:hidden">
          {t<string>("pages.video.privacyNote")}{" "}
          <Link href={localizeHref(locale, "/privacy")}>
            {t<string>("pages.video.privacyLink")}
          </Link>
          .
        </p>
      </figcaption>
    </figure>
  );
}
