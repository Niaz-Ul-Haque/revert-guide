"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useTranslations } from "@/components/LocaleProvider";
import { SearchBar } from "@/components/SearchBar";
import { Icon } from "@/components/Icon";
import { Callout } from "@/components/Callout";
import { AnimateIn } from "@/components/AnimateIn";
import type { Masjid } from "@/lib/types";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";

interface FindMasjidPageClientProps {
  locale: Locale;
  masjids: Masjid[];
}

export function FindMasjidPageClient({
  locale,
  masjids,
}: FindMasjidPageClientProps) {
  const t = useTranslations();
  const copy = t<Messages["pages"]["findMasjid"]>("pages.findMasjid");
  const [query, setQuery] = useState("");
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(!navigator.onLine);

    function handleOnline() {
      setIsOffline(false);
    }

    function handleOffline() {
      setIsOffline(true);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return masjids;
    const value = query.toLowerCase();
    return masjids.filter(
      (masjid) =>
        masjid.name.toLowerCase().includes(value) ||
        masjid.city.toLowerCase().includes(value) ||
        masjid.postalCode.toLowerCase().includes(value) ||
        masjid.address.toLowerCase().includes(value),
    );
  }, [masjids, query]);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          {
            label: t("nav.resources"),
            href: localizeHref(locale, "/resources"),
          },
          { label: t("nav.findMasjid") },
        ]}
      />

      <header className="mb-8">
        <AnimateIn>
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {t("nav.findMasjid")}
          </h1>
          <p className="text-lg text-textSecondary">{copy.description}</p>
        </AnimateIn>
      </header>

      {isOffline && (
        <Callout variant="warning" title={copy.offlineTitle}>
          <p>{copy.offlineBody}</p>
        </Callout>
      )}

      <AnimateIn delay={0.1}>
        <div className="mb-8 flex h-52 items-center justify-center rounded-2xl border-2 border-dashed border-border/60 bg-surfaceElevated/30 text-center sm:h-64">
          <div>
            <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Icon name="map-pin" size="lg" className="text-primary" />
            </span>
            <p className="mb-1 text-base font-semibold text-textMuted">
              {copy.mapTitle}
            </p>
            <p className="mb-0 text-sm text-textMuted">{copy.mapBody}</p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={copy.searchPlaceholder}
          label={copy.searchLabel}
          hideLabel
          className="mb-8"
        />
      </AnimateIn>

      <div aria-live="polite" className="sr-only">
        {query.trim()
          ? `${filtered.length} ${filtered.length === 1 ? copy.liveRegion.one : copy.liveRegion.other}`
          : ""}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center">
          <p className="mb-2 font-display text-lg font-semibold text-textPrimary">
            {copy.emptyTitle}
          </p>
          <p className="mb-0 text-sm text-textSecondary">
            {copy.emptyPrefix}{" "}
            <button
              type="button"
              onClick={() => setQuery("")}
              className="font-medium text-primary underline hover:text-primaryHover"
            >
              {copy.emptyAction}
            </button>
            .
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-4 pl-0">
          {filtered.map((masjid) => (
            <li
              key={masjid.id}
              className="rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-soft"
            >
              <h2 className="mb-3 mt-0 font-display text-lg font-bold text-textPrimary">
                {masjid.name}
              </h2>
              <div className="flex flex-col gap-2 text-sm text-textSecondary">
                <p className="mb-0 flex items-start gap-2.5">
                  <Icon
                    name="map-pin"
                    size="sm"
                    className="mt-0.5 shrink-0 text-primary/60"
                  />
                  <span>
                    {masjid.address}, {masjid.city}, {masjid.stateProvince}{" "}
                    {masjid.postalCode}
                  </span>
                </p>
                {masjid.phone && (
                  <p className="mb-0 flex items-center gap-2.5">
                    <svg
                      className="h-4 w-4 shrink-0 text-primary/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    <a
                      href={`tel:${masjid.phone.replace(/[^\d+]/g, "")}`}
                      className="text-primary no-underline hover:underline"
                    >
                      {masjid.phone}
                    </a>
                  </p>
                )}
                {masjid.website && (
                  <p className="mb-0 flex items-center gap-2.5">
                    <Icon
                      name="globe"
                      size="sm"
                      className="shrink-0 text-primary/60"
                    />
                    <a
                      href={masjid.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary no-underline hover:underline"
                    >
                      {copy.visitWebsite}
                      <span className="sr-only">
                        {copy.visitWebsiteSuffix}
                        {masjid.name}
                      </span>
                    </a>
                  </p>
                )}
                {masjid.notes && (
                  <p className="mb-0 mt-1 rounded-lg bg-surfaceElevated/50 px-3 py-1.5 text-xs text-textMuted">
                    {masjid.notes}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      <AnimateIn className="mt-10">
        <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center">
          <p className="mb-3 text-sm text-textSecondary">
            {copy.crossLinkPrompt}
          </p>
          <Link
            href={localizeHref(locale, "/topics/community")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/20 hover:text-primaryHover"
          >
            {copy.crossLinkLabel}
            <Icon name="chevron-right" size="sm" />
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}
