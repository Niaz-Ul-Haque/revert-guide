"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { Callout } from "@/components/Callout";

interface AsmaName {
  name: string;
  transliteration: string;
  number: number;
  en: { meaning: string };
}

export function AsmaAlHusnaClient() {
  const t = useTranslations();
  const copy = t<Record<string, unknown>>("pages.asmaAlHusna");
  const liveRegion = copy.liveRegion as { one: string; other: string };

  const [names, setNames] = useState<AsmaName[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchNames() {
      try {
        const res = await fetch("https://api.aladhan.com/v1/asmaAlHusna");
        if (!res.ok) throw new Error("API error");
        const json = await res.json();
        if (json.code !== 200) throw new Error("Bad response");
        setNames(json.data);
      } catch {
        setError(copy.error as string);
      } finally {
        setLoading(false);
      }
    }
    fetchNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return names;
    const q = search.toLowerCase().trim();
    return names.filter(
      (n) =>
        n.transliteration.toLowerCase().includes(q) ||
        n.en.meaning.toLowerCase().includes(q) ||
        n.name.includes(q) ||
        String(n.number) === q,
    );
  }, [names, search]);

  // Name of the day — rotate based on day of year
  const nameOfTheDay = useMemo(() => {
    if (names.length === 0) return null;
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    return names[dayOfYear % 99];
  }, [names]);

  function handleClear() {
    setSearch("");
    inputRef.current?.focus();
  }

  return (
    <div>
      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center gap-3 py-16 text-textMuted">
          <svg
            className="h-5 w-5 animate-spin-slow"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"
            />
          </svg>
          <span className="text-sm">{copy.loading as string}</span>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <Callout variant="warning" title="Error">
          <p>{error}</p>
        </Callout>
      )}

      {/* Content */}
      {!loading && !error && names.length > 0 && (
        <>
          {/* Name of the Day */}
          {nameOfTheDay && !search && (
            <div className="mb-8 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {copy.nameOfTheDay as string}
              </p>
              <p
                className="mb-2 font-arabic text-4xl leading-relaxed text-textPrimary"
                lang="ar"
                dir="rtl"
              >
                {nameOfTheDay.name}
              </p>
              <p className="text-lg font-semibold text-textPrimary">
                {nameOfTheDay.transliteration}
              </p>
              <p className="mt-1 text-sm text-textSecondary">
                {nameOfTheDay.en.meaning}
              </p>
              <span className="mt-2 inline-block rounded-lg bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                #{nameOfTheDay.number}
              </span>
            </div>
          )}

          {/* Search */}
          <div className="mb-6">
            <label htmlFor="asma-search" className="sr-only">
              {copy.searchLabel as string}
            </label>
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-textMuted"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                ref={inputRef}
                id="asma-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={copy.searchPlaceholder as string}
                className="w-full rounded-xl border border-border/60 bg-white py-3 pl-12 pr-10 text-base text-textPrimary shadow-inner-glow placeholder:text-textMuted/60 transition-all duration-200 focus:border-primaryGreen focus:shadow-soft focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong"
              />
              {search.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-textMuted transition-all duration-200 hover:bg-surfaceElevated hover:text-textSecondary"
                  aria-label={t("common.clearSearch")}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Live region */}
          <div aria-live="polite" className="sr-only">
            {search &&
              (filtered.length === 1
                ? `1 ${liveRegion.one}`
                : `${filtered.length} ${liveRegion.other}`)}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && search && (
            <div className="py-10 text-center">
              <p className="text-sm font-medium text-textSecondary">
                {copy.emptyTitle as string}
              </p>
              <p className="mt-1 text-xs text-textMuted">
                {copy.emptyPrefix as string}{" "}
                <button
                  type="button"
                  onClick={handleClear}
                  className="font-medium text-primary hover:underline"
                >
                  {copy.emptyAction as string}
                </button>
              </p>
            </div>
          )}

          {/* Names grid */}
          {filtered.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((name) => (
                <div
                  key={name.number}
                  className="group rounded-2xl border border-border/40 bg-white p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-soft"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <span className="rounded-lg bg-surfaceElevated px-2 py-0.5 text-xs font-medium text-textMuted">
                      {name.number}
                    </span>
                  </div>
                  <p
                    className="mb-2 text-right font-arabic text-2xl leading-relaxed text-textPrimary"
                    lang="ar"
                    dir="rtl"
                  >
                    {name.name}
                  </p>
                  <p className="text-sm font-semibold text-textPrimary">
                    {name.transliteration}
                  </p>
                  <p className="mt-1 text-xs text-textSecondary">
                    {name.en.meaning}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Reflection */}
          {!search && (
            <Callout variant="info" title={copy.reflection as string}>
              <p>{copy.reflectionBody as string}</p>
            </Callout>
          )}

          {/* Disclaimer */}
          <p className="mt-4 text-xs leading-relaxed text-textMuted">
            {copy.disclaimer as string}
          </p>
        </>
      )}
    </div>
  );
}
