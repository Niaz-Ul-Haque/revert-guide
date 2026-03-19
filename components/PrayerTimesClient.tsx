"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "@/components/LocaleProvider";
import { localizeHref } from "@/lib/i18n";
import { Callout } from "@/components/Callout";

/* ─── Types ─── */
interface PrayerTimesData {
  timings: Record<string, string>;
  date: {
    hijri: {
      date: string;
      day: string;
      weekday: { en: string; ar: string };
      month: { number: number; en: string; ar: string };
      year: string;
      holidays: string[];
    };
    gregorian: {
      date: string;
      day: string;
      weekday: { en: string };
      month: { number: number; en: string };
      year: string;
    };
  };
}

/* ─── Constants ─── */
const PRAYER_KEYS = [
  "Fajr",
  "Sunrise",
  "Dhuhr",
  "Asr",
  "Maghrib",
  "Isha",
] as const;
const ACTUAL_PRAYERS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

/**
 * Each prayer maps to a sky-state: a subtle gradient and icon
 * that evokes its time of day using existing palette tokens.
 */
const SKY_THEME: Record<
  string,
  {
    gradient: string;
    iconBg: string;
    accentRing: string;
    glowColor: string;
  }
> = {
  Fajr: {
    gradient: "from-[#3D6649]/20 to-[#4A7C59]/5",
    iconBg: "bg-[#3D6649]/15",
    accentRing: "ring-[#3D6649]/30",
    glowColor: "shadow-[0_0_20px_rgba(61,102,73,0.15)]",
  },
  Sunrise: {
    gradient: "from-[#AEB877]/20 to-[#D8E983]/5",
    iconBg: "bg-[#AEB877]/15",
    accentRing: "ring-[#AEB877]/30",
    glowColor: "shadow-[0_0_20px_rgba(174,184,119,0.15)]",
  },
  Dhuhr: {
    gradient: "from-[#A5C89E]/20 to-[#D8E983]/5",
    iconBg: "bg-[#A5C89E]/15",
    accentRing: "ring-[#A5C89E]/30",
    glowColor: "shadow-[0_0_20px_rgba(165,200,158,0.15)]",
  },
  Asr: {
    gradient: "from-[#4A7C59]/15 to-[#AEB877]/5",
    iconBg: "bg-[#4A7C59]/15",
    accentRing: "ring-[#4A7C59]/30",
    glowColor: "shadow-[0_0_20px_rgba(74,124,89,0.15)]",
  },
  Maghrib: {
    gradient: "from-[#C77700]/15 to-[#AEB877]/5",
    iconBg: "bg-[#C77700]/12",
    accentRing: "ring-[#C77700]/25",
    glowColor: "shadow-[0_0_20px_rgba(199,119,0,0.12)]",
  },
  Isha: {
    gradient: "from-[#1A2E1A]/15 to-[#4A7C59]/5",
    iconBg: "bg-[#1A2E1A]/12",
    accentRing: "ring-[#1A2E1A]/20",
    glowColor: "shadow-[0_0_20px_rgba(26,46,26,0.12)]",
  },
};

/* ─── SVG prayer icons (sun position for each time of day) ─── */
function PrayerIcon({
  prayer,
  className = "",
}: {
  prayer: string;
  className?: string;
}) {
  const base = `${className} shrink-0 overflow-visible`;
  switch (prayer) {
    case "Fajr":
      return (
        <svg
          className={base}
          viewBox="2 8 28 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 24h20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 20a8 8 0 0 1 8-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M16 20a8 8 0 0 0-8-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle
            cx="16"
            cy="20"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M16 14v-2M10.5 16l-1.5-1M21.5 16l1.5-1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      );
    case "Sunrise":
      return (
        <svg
          className={base}
          viewBox="4 6 24 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 22h20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="16"
            cy="18"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M16 11v-2M9 14.5l-1.5-1M23 14.5l1.5-1M7.5 20H6M26 20h-1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M16 8l-2 3h4l-2-3z" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "Dhuhr":
      return (
        <svg
          className={base}
          viewBox="3 3 26 26"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="16"
            cy="16"
            r="5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M16 7v-2M16 27v-2M7 16H5M27 16h-2M9.8 9.8L8.4 8.4M22.2 9.8l1.4-1.4M9.8 22.2l-1.4 1.4M22.2 22.2l1.4 1.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Asr":
      return (
        <svg
          className={base}
          viewBox="6 3 22 26"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="18"
            cy="14"
            r="4.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M18 6v-1.5M18 21v1.5M10 14H8.5M27.5 14H26M11.6 7.6l-1-1M24.4 7.6l1-1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 26h16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M12 26l4-7"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      );
    case "Maghrib":
      return (
        <svg
          className={base}
          viewBox="4 13 24 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 22h20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="16"
            cy="22"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M16 15v-1.5M10 18.5l-1-1M22 18.5l1-1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path d="M16 28l2-3h-4l2 3z" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "Isha":
      return (
        <svg
          className={base}
          viewBox="6 6 20 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M18 8a7 7 0 0 0-5 12 7 7 0 0 1 5-12z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="20" cy="10" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="24" cy="14" r="0.7" fill="currentColor" opacity="0.4" />
          <circle cx="22" cy="18" r="0.7" fill="currentColor" opacity="0.3" />
          <circle cx="10" cy="12" r="0.7" fill="currentColor" opacity="0.3" />
          <circle cx="8" cy="17" r="0.5" fill="currentColor" opacity="0.2" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─── Helpers ─── */
function formatApiDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

function parseTime(timeStr: string): Date | null {
  const cleaned = timeStr.replace(/\s*\(.*\)/, "").trim();
  const parts = cleaned.split(":");
  if (parts.length !== 2) return null;
  const now = new Date();
  now.setHours(parseInt(parts[0], 10), parseInt(parts[1], 10), 0, 0);
  return now;
}

function getNextPrayer(timings: Record<string, string>): string | null {
  const now = new Date();
  for (const key of ACTUAL_PRAYERS) {
    const time = parseTime(timings[key] ?? "");
    if (time && time > now) return key;
  }
  return ACTUAL_PRAYERS[0];
}

function getCountdown(
  timings: Record<string, string>,
  nextPrayer: string | null,
): string {
  if (!nextPrayer) return "";
  const time = parseTime(timings[nextPrayer] ?? "");
  if (!time) return "";
  const now = new Date();
  let diff = time.getTime() - now.getTime();
  if (diff < 0) diff += 24 * 60 * 60 * 1000; // wrap to next day for Fajr
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (hours > 0) return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  if (minutes > 0) return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
  return `${seconds}s`;
}

function isPassed(timings: Record<string, string>, key: string): boolean {
  const time = parseTime(timings[key] ?? "");
  if (!time) return false;
  return time < new Date();
}

function formatTime12(timeStr: string): { time: string; period: string } {
  const cleaned = timeStr.replace(/\s*\(.*\)/, "").trim();
  const parts = cleaned.split(":");
  if (parts.length !== 2) return { time: cleaned, period: "" };
  let h = parseInt(parts[0], 10);
  const m = parts[1];
  const period = h >= 12 ? "PM" : "AM";
  if (h > 12) h -= 12;
  if (h === 0) h = 12;
  return { time: `${h}:${m}`, period };
}

/* ─── Skeleton loader ─── */
function TimelineSkeleton() {
  return (
    <div
      className="space-y-4 py-6"
      aria-busy="true"
      aria-label="Loading prayer times"
    >
      {/* Hero skeleton */}
      <div className="mb-8 animate-pulse rounded-3xl bg-surfaceElevated/60 p-8">
        <div className="h-4 w-24 rounded-lg bg-border/40" />
        <div className="mt-3 h-10 w-48 rounded-xl bg-border/40" />
        <div className="mt-3 h-6 w-32 rounded-lg bg-border/30" />
      </div>
      {/* Timeline skeletons */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="flex animate-pulse items-center gap-5 py-4"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <div className="h-10 w-10 rounded-2xl bg-border/30" />
          <div className="flex-1">
            <div className="h-4 w-20 rounded bg-border/40" />
            <div className="mt-2 h-3 w-32 rounded bg-border/30" />
          </div>
          <div className="h-8 w-20 rounded-lg bg-border/30" />
        </div>
      ))}
    </div>
  );
}

/* ─── Main component ─── */
export function PrayerTimesClient() {
  const locale = useLocale();
  const t = useTranslations();
  const copy = t<Record<string, unknown>>("pages.prayerTimes");
  const prayers = copy.prayers as Record<string, string>;
  const descriptions = copy.prayerDescriptions as Record<string, string>;

  const [location, setLocation] = useState("Toronto, ON, Canada");
  const [data, setData] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchTimes = useCallback(
    async (addr: string) => {
      setLoading(true);
      setError(null);
      try {
        const date = formatApiDate(new Date());
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByAddress/${date}?address=${encodeURIComponent(addr)}&method=2&school=0&timezonestring=America/Toronto`,
        );
        if (!res.ok) throw new Error("API error");
        const json = await res.json();
        if (json.code !== 200) throw new Error("Bad response");
        setData(json.data);
      } catch {
        setError(copy.error as string);
      } finally {
        setLoading(false);
      }
    },
    [copy.error],
  );

  useEffect(() => {
    fetchTimes(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPrayer = useMemo(() => {
    if (!data) return null;
    return getNextPrayer(data.timings);
  }, [data]);

  /* Live countdown tick */
  useEffect(() => {
    if (!data || !nextPrayer) return;
    setCountdown(getCountdown(data.timings, nextPrayer));
    const timer = setInterval(() => {
      setCountdown(getCountdown(data.timings, nextPrayer));
    }, 1000);
    return () => clearInterval(timer);
  }, [data, nextPrayer]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (location.trim()) {
      fetchTimes(location.trim());
    }
  }

  const nextTheme = nextPrayer ? SKY_THEME[nextPrayer] : SKY_THEME.Dhuhr;

  return (
    <div>
      {/* ── Location search ── */}
      <form onSubmit={handleSubmit} className="mb-10">
        <label
          htmlFor="prayer-location"
          className="mb-2.5 block text-sm font-medium tracking-wide text-textSecondary uppercase"
        >
          {copy.locationLabel as string}
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-textMuted/60"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd"
              />
            </svg>
            <input
              ref={inputRef}
              id="prayer-location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={copy.locationPlaceholder as string}
              className="w-full rounded-2xl border border-border/50 bg-white py-3.5 pl-10 pr-4 text-base text-textPrimary shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] placeholder:text-textMuted/50 transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(74,124,89,0.1)] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group shrink-0 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-primaryHover hover:shadow-elevated disabled:opacity-50"
          >
            <span className="hidden sm:inline">
              {copy.locationButton as string}
            </span>
            <svg
              className="h-5 w-5 sm:hidden"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-label={copy.locationButton as string}
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* ── Loading ── */}
      {loading && <TimelineSkeleton />}

      {/* ── Error ── */}
      {error && !loading && (
        <Callout variant="warning" title="Error">
          <p>{error}</p>
        </Callout>
      )}

      {/* ── Results ── */}
      {data && !loading && (
        <div className="animate-fade-in">
          {/* ── Date strip ── */}
          <div
            className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-border/30 pb-5"
            style={{ lineHeight: "20px" }}
          >
            <div className="flex items-center gap-2.5">
              <svg
                className="h-4 w-4 shrink-0 text-textMuted"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-textPrimary">
                <span className="font-semibold">
                  {data.date.gregorian.weekday.en}
                </span>
                <span className="text-textMuted"> &middot; </span>
                {data.date.gregorian.month.en} {data.date.gregorian.day},{" "}
                {data.date.gregorian.year}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg
                className="h-4 w-4 shrink-0 text-textMuted"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.052.683a1 1 0 000 1.898l2.052.683a1 1 0 01.633.633l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.052-.683a1 1 0 000-1.898l-2.052-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
              </svg>
              <span className="text-sm text-textPrimary">
                {data.date.hijri.day} {data.date.hijri.month.en}{" "}
                {data.date.hijri.year}
              </span>
              <span
                className="font-arabic text-textMuted"
                lang="ar"
                dir="rtl"
                style={{ fontSize: "13px", lineHeight: "20px" }}
              >
                {data.date.hijri.month.ar}
              </span>
            </div>
            {data.date.hijri.holidays.length > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C77700]/25 bg-accentYellow/30 px-3 py-1.5 text-xs font-semibold text-[#C77700]">
                <svg
                  className="h-3 w-3 shrink-0"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 1l1.545 3.13L11 4.635 8.5 7.07l.59 3.44L6 8.885 2.91 10.51l.59-3.44L1 4.635l3.455-.505L6 1z" />
                </svg>
                {data.date.hijri.holidays.join(", ")}
              </span>
            )}
          </div>

          {/* ── Next prayer hero card ── */}
          {nextPrayer && (
            <div
              className={`relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br ${nextTheme.gradient} ring-1 ${nextTheme.accentRing} p-6 sm:p-8 ${nextTheme.glowColor}`}
            >
              {/* Decorative background pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-textMuted">
                    {copy.nextPrayer as string}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <PrayerIcon
                      prayer={nextPrayer}
                      className="h-8 w-8 text-primary"
                    />
                    <h2 className="font-display text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl">
                      {prayers[nextPrayer] ?? nextPrayer}
                    </h2>
                  </div>
                  <p className="mt-1.5 text-sm text-textSecondary">
                    {descriptions[nextPrayer] ?? ""}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-display text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl">
                    {(() => {
                      const { time, period } = formatTime12(
                        data.timings[nextPrayer] ?? "",
                      );
                      return (
                        <>
                          {time}
                          <span className="ml-1 text-lg font-semibold text-textMuted sm:text-xl">
                            {period}
                          </span>
                        </>
                      );
                    })()}
                  </p>
                  {countdown && (
                    <p className="mt-1 text-sm tabular-nums text-primary font-medium">
                      in {countdown}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── Prayer timeline ── */}
          <div className="relative" role="list" aria-label="Prayer times">
            {/* Vertical timeline line */}
            <div
              className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-border/60 via-border/30 to-border/60 sm:left-6"
              aria-hidden="true"
            />

            {PRAYER_KEYS.map((key, i) => {
              const timeRaw = data.timings[key] ?? "";
              const { time, period } = formatTime12(timeRaw);
              const isNext = key === nextPrayer;
              const isActual = (ACTUAL_PRAYERS as readonly string[]).includes(
                key,
              );
              const passed = isPassed(data.timings, key) && !isNext;
              const theme = SKY_THEME[key] ?? SKY_THEME.Dhuhr;

              return (
                <div
                  key={key}
                  role="listitem"
                  className={`group relative flex items-center gap-4 py-4 pl-0 pr-2 sm:gap-5 transition-all duration-300 ${
                    passed ? "opacity-50" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex shrink-0 items-center justify-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 sm:rounded-2xl ${
                        isNext
                          ? `${theme.iconBg} ring-2 ${theme.accentRing} scale-110`
                          : passed
                            ? "bg-surfaceElevated/40"
                            : `${theme.iconBg}`
                      }`}
                    >
                      <PrayerIcon
                        prayer={key}
                        className={`h-6 w-6 sm:h-7 sm:w-7 transition-colors duration-200 ${
                          isNext
                            ? "text-primary"
                            : passed
                              ? "text-textMuted/60"
                              : "text-textSecondary"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Prayer info */}
                  <div className="flex flex-1 items-center justify-between min-w-0">
                    <div className="min-w-0">
                      <p
                        className={`text-base font-semibold transition-colors duration-200 ${
                          isNext
                            ? "text-primary"
                            : isActual
                              ? "text-textPrimary"
                              : "text-textSecondary"
                        } ${passed ? "line-through decoration-border/60" : ""}`}
                      >
                        {prayers[key] ?? key}
                      </p>
                      <p className="mt-0.5 text-xs text-textMuted truncate">
                        {descriptions[key] ?? ""}
                      </p>
                    </div>

                    <div className="ml-4 text-right shrink-0">
                      <p
                        className={`font-display text-xl font-bold tabular-nums tracking-tight transition-colors duration-200 sm:text-2xl ${
                          isNext ? "text-primary" : "text-textPrimary"
                        } ${passed ? "text-textMuted" : ""}`}
                      >
                        {time}
                        <span className="ml-0.5 text-xs font-medium text-textMuted">
                          {period}
                        </span>
                      </p>
                      {isNext && countdown && (
                        <p className="mt-0.5 text-[11px] tabular-nums font-medium text-primary/80 animate-pulse-soft">
                          in {countdown}
                        </p>
                      )}
                      {passed && (
                        <p className="mt-0.5 text-[11px] font-medium text-textMuted/70">
                          Passed
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Disclaimer ── */}
          <p className="mt-8 text-xs leading-relaxed text-textMuted border-t border-border/20 pt-5">
            {copy.disclaimer as string}
          </p>
        </div>
      )}

      {/* ── Learn more ── */}
      <div className="mt-10 flex items-center gap-3 rounded-2xl bg-surfaceElevated/40 p-5 ring-1 ring-border/20">
        <svg
          className="h-5 w-5 shrink-0 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06V4.94a.75.75 0 00-.546-.721A9.006 9.006 0 0015 4a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v10.12a.75.75 0 00.954.721A7.506 7.506 0 015 14.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
        </svg>
        <p className="text-sm text-textSecondary">
          {copy.learnMore as string}{" "}
          <Link
            href={localizeHref(locale, "/topics/prayer")}
            className="font-semibold text-primary no-underline hover:text-primaryHover transition-colors duration-150"
          >
            {copy.learnMoreLink as string}
          </Link>
        </p>
      </div>
    </div>
  );
}
