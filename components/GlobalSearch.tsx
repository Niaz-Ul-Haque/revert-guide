"use client";

import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  Fragment,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalSearch } from "@/components/GlobalSearchProvider";
import { useLocale, useTranslations } from "@/components/LocaleProvider";
import { localizeHref } from "@/lib/i18n";
import type { Stage, Step, Topic, GlossaryEntry, Resource } from "@/lib/types";

/* ─── Types ─── */

interface SearchResult {
  id: string;
  type: "step" | "topic" | "glossary" | "resource";
  title: string;
  description: string;
  href: string;
  extra?: string;
}

interface GlobalSearchProps {
  stages: Stage[];
  steps: Step[];
  topics: Topic[];
  glossary: GlossaryEntry[];
  resources: Resource[];
}

/* ─── Constants ─── */

const MAX_PER_CATEGORY = 5;
const DEBOUNCE_MS = 150;

/* ─── Helpers ─── */

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

function matchScore(text: string, query: string): number {
  const normalizedText = normalize(text);
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return 0;

  if (normalizedText === normalizedQuery) return 100;
  if (normalizedText.startsWith(normalizedQuery)) return 80;
  if (normalizedText.includes(normalizedQuery)) return 60;

  const words = normalizedQuery.split(/\s+/);
  const matched = words.filter((w) => normalizedText.includes(w));
  if (matched.length === words.length) return 40;
  if (matched.length > 0) return 20 * (matched.length / words.length);

  return 0;
}

function bestScore(fields: string[], query: string): number {
  return Math.max(...fields.map((f) => matchScore(f, query)));
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "…";
}

/* ─── Highlight Component ─── */

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;

  const words = query
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 1)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (words.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        pattern.test(part) ? (
          <mark
            key={i}
            className="rounded-sm bg-accentYellow/70 px-0.5 text-textPrimary"
          >
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/* ─── Category Icons ─── */

function StepIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
      />
    </svg>
  );
}

function TopicIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

function GlossaryIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
      />
    </svg>
  );
}

function ResourceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  );
}

const CATEGORY_META: Record<
  SearchResult["type"],
  {
    icon: (props: { className?: string }) => JSX.Element;
    colorClass: string;
    bgClass: string;
  }
> = {
  step: {
    icon: StepIcon,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
  },
  topic: {
    icon: TopicIcon,
    colorClass: "text-[#6B7A3D]",
    bgClass: "bg-[#6B7A3D]/10",
  },
  glossary: {
    icon: GlossaryIcon,
    colorClass: "text-[#C77700]",
    bgClass: "bg-[#C77700]/10",
  },
  resource: {
    icon: ResourceIcon,
    colorClass: "text-[#4A5D4A]",
    bgClass: "bg-[#4A5D4A]/10",
  },
};

/* ─── Main Component ─── */

export function GlobalSearch({
  stages,
  steps,
  topics,
  glossary,
  resources,
}: GlobalSearchProps) {
  const { isSearchOpen, closeSearch } = useGlobalSearch();
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  /* Build stage lookup for step URLs */
  const stageMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const stage of stages) {
      for (const stepId of stage.stepIds) {
        map.set(stepId, stage.id);
      }
    }
    return map;
  }, [stages]);

  /* Debounce query */
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  /* Search logic */
  const results = useMemo(() => {
    const q = debouncedQuery.trim();
    if (!q) return [];

    const all: (SearchResult & { score: number })[] = [];

    for (const step of steps) {
      const fields = [
        step.title,
        step.whyMatters,
        step.tinyVersion,
        step.unlocksNext,
        ...step.exactActions.map((a) => a.text),
      ];
      const score = bestScore(fields, q);
      if (score > 0) {
        const stageId = stageMap.get(step.id) ?? step.stageId;
        all.push({
          id: `step-${step.id}`,
          type: "step",
          title: step.title,
          description: truncate(step.whyMatters, 120),
          href: localizeHref(locale, `/roadmap/${stageId}/${step.slug}`),
          extra: step.timeEstimate,
          score,
        });
      }
    }

    for (const topic of topics) {
      const fields = [
        topic.title,
        topic.description,
        ...topic.sections.map((s) => s.heading),
        ...topic.sections.map((s) => s.content),
      ];
      const score = bestScore(fields, q);
      if (score > 0) {
        all.push({
          id: `topic-${topic.id}`,
          type: "topic",
          title: topic.title,
          description: truncate(topic.description, 120),
          href: localizeHref(locale, `/topics/${topic.slug ?? topic.id}`),
          score,
        });
      }
    }

    for (const entry of glossary) {
      const fields = [
        entry.term,
        entry.definition,
        entry.transliteration ?? "",
        entry.arabicText ?? "",
      ];
      const score = bestScore(fields, q);
      if (score > 0) {
        all.push({
          id: `glossary-${entry.id}`,
          type: "glossary",
          title: entry.term,
          description: truncate(entry.definition, 120),
          href: localizeHref(locale, `/glossary#${entry.id}`),
          extra: entry.arabicText,
          score,
        });
      }
    }

    for (const resource of resources) {
      const fields = [resource.title, resource.description];
      const score = bestScore(fields, q);
      if (score > 0) {
        all.push({
          id: `resource-${resource.id}`,
          type: "resource",
          title: resource.title,
          description: truncate(resource.description, 120),
          href: localizeHref(locale, "/resources"),
          extra: resource.type,
          score,
        });
      }
    }

    all.sort((a, b) => b.score - a.score);
    return all;
  }, [debouncedQuery, steps, topics, glossary, resources, stageMap, locale]);

  /* Group results by category */
  const grouped = useMemo(() => {
    const categories: SearchResult["type"][] = [
      "step",
      "topic",
      "glossary",
      "resource",
    ];
    const groups: {
      type: SearchResult["type"];
      items: SearchResult[];
      total: number;
    }[] = [];

    for (const cat of categories) {
      const items = results.filter((r) => r.type === cat);
      if (items.length > 0) {
        groups.push({
          type: cat,
          items: items.slice(0, MAX_PER_CATEGORY),
          total: items.length,
        });
      }
    }

    return groups;
  }, [results]);

  /* Flat list of visible results for keyboard nav */
  const flatResults = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  const totalCount = results.length;

  /* Reset state when opening/closing */
  useEffect(() => {
    if (isSearchOpen) {
      setQuery("");
      setDebouncedQuery("");
      setActiveIndex(-1);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isSearchOpen]);

  /* Lock body scroll */
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  /* Navigate to result */
  const navigateTo = useCallback(
    (href: string) => {
      closeSearch();
      router.push(href);
    },
    [closeSearch, router],
  );

  /* Keyboard navigation */
  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < flatResults.length - 1 ? prev + 1 : 0,
        );
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : flatResults.length - 1,
        );
        break;
      }
      case "Enter": {
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < flatResults.length) {
          navigateTo(flatResults[activeIndex].href);
        }
        break;
      }
      case "Escape": {
        e.preventDefault();
        closeSearch();
        break;
      }
    }
  }

  /* Scroll active result into view */
  useEffect(() => {
    if (activeIndex < 0 || !resultsRef.current) return;
    const el = resultsRef.current.querySelector(
      `[data-result-index="${activeIndex}"]`,
    );
    if (el) {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  /* Focus trap */
  useEffect(() => {
    if (!isSearchOpen) return;

    function handleTabTrap(e: KeyboardEvent) {
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, input, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleTabTrap);
    return () => document.removeEventListener("keydown", handleTabTrap);
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const categoryLabel = (type: SearchResult["type"]) => {
    const labels: Record<SearchResult["type"], string> = {
      step: t("search.categories.steps"),
      topic: t("search.categories.topics"),
      glossary: t("search.categories.glossary"),
      resource: t("search.categories.resources"),
    };
    return labels[type];
  };

  const hasQuery = debouncedQuery.trim().length > 0;
  const hasResults = grouped.length > 0;

  let flatIndex = -1;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[12vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-textPrimary/30 backdrop-blur-sm animate-fade-in"
        onClick={closeSearch}
        aria-hidden="true"
      />

      {/* Dialog */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t("search.label")}
        className="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-elevated animate-scale-in mx-4 sm:mx-0"
        style={{ maxHeight: "min(70vh, 560px)" }}
        onKeyDown={handleKeyDown}
      >
        {/* Search input area */}
        <div className="flex items-center gap-3 border-b border-border/40 px-5 py-4">
          {/* Search icon */}
          <svg
            className="h-5 w-5 shrink-0 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
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
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
            }}
            placeholder={t("search.placeholder")}
            className="flex-1 bg-transparent text-base text-textPrimary outline-none placeholder:text-textMuted/60"
            aria-label={t("search.label")}
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-activedescendant={
              activeIndex >= 0
                ? `search-result-${flatResults[activeIndex]?.id}`
                : undefined
            }
          />

          {/* Clear button */}
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveIndex(-1);
                inputRef.current?.focus();
              }}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-textMuted transition-colors duration-150 hover:bg-surfaceElevated hover:text-textSecondary"
              aria-label={t("search.close")}
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

          {/* Close / Esc hint */}
          <button
            type="button"
            onClick={closeSearch}
            className="hidden shrink-0 items-center rounded-lg border border-border/60 px-2 py-1 text-xs font-medium text-textMuted transition-colors duration-150 hover:bg-surfaceElevated sm:flex"
            aria-label={t("search.close")}
          >
            Esc
          </button>
        </div>

        {/* Results area */}
        <div
          ref={resultsRef}
          id="search-results"
          role="listbox"
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          {/* Empty state — no query */}
          {!hasQuery && (
            <div className="px-5 py-8 text-center">
              {/* Decorative leaf pattern */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-surfaceElevated">
                <svg
                  className="h-7 w-7 text-primary"
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
              </div>
              <p className="mb-1 text-sm font-medium text-textSecondary">
                {t("search.tips.title")}
              </p>
              <ul className="space-y-1">
                {t<string[]>("search.tips.items").map((tip, i) => (
                  <li key={i} className="text-xs text-textMuted">
                    {tip}
                  </li>
                ))}
              </ul>

              {/* Quick category links */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {(
                  [
                    { type: "step" as const, href: "/roadmap" },
                    { type: "topic" as const, href: "/topics" },
                    { type: "glossary" as const, href: "/glossary" },
                    { type: "resource" as const, href: "/resources" },
                  ] as const
                ).map(({ type, href }) => {
                  const meta = CATEGORY_META[type];
                  const Icon = meta.icon;
                  return (
                    <Link
                      key={type}
                      href={localizeHref(locale, href)}
                      onClick={closeSearch}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium no-underline transition-all duration-150 ${meta.bgClass} ${meta.colorClass} hover:shadow-soft`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {categoryLabel(type)}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* No results */}
          {hasQuery && !hasResults && (
            <div className="px-5 py-10 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface">
                <svg
                  className="h-6 w-6 text-textMuted"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-textSecondary">
                {t("search.noResults")}
              </p>
              <p className="mt-1 text-xs text-textMuted">
                {t("search.noResultsHint")}
              </p>
            </div>
          )}

          {/* Grouped results */}
          {hasQuery && hasResults && (
            <div className="py-2">
              {grouped.map((group) => {
                const meta = CATEGORY_META[group.type];
                const Icon = meta.icon;

                return (
                  <div key={group.type} className="mb-1">
                    {/* Category header */}
                    <div className="flex items-center gap-2 px-5 py-2">
                      <Icon className={`h-4 w-4 ${meta.colorClass}`} />
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${meta.colorClass}`}
                      >
                        {categoryLabel(group.type)}
                      </span>
                      <span className="text-xs text-textMuted">
                        ({group.total})
                      </span>
                    </div>

                    {/* Results */}
                    <ul className="px-2">
                      {group.items.map((result) => {
                        flatIndex++;
                        const idx = flatIndex;
                        const isActive = idx === activeIndex;

                        return (
                          <li key={result.id}>
                            <Link
                              id={`search-result-${result.id}`}
                              href={result.href}
                              role="option"
                              aria-selected={isActive}
                              data-result-index={idx}
                              className={`group flex items-start gap-3 rounded-xl px-3 py-2.5 no-underline transition-all duration-150 ${
                                isActive
                                  ? "bg-surfaceElevated shadow-soft"
                                  : "hover:bg-surface"
                              }`}
                              onClick={closeSearch}
                              onMouseEnter={() => setActiveIndex(idx)}
                            >
                              {/* Icon */}
                              <span
                                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${meta.bgClass}`}
                              >
                                <Icon
                                  className={`h-4 w-4 ${meta.colorClass}`}
                                />
                              </span>

                              {/* Content */}
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-textPrimary">
                                  <HighlightedText
                                    text={result.title}
                                    query={debouncedQuery}
                                  />
                                </p>
                                <p className="mt-0.5 text-xs leading-relaxed text-textMuted line-clamp-2">
                                  <HighlightedText
                                    text={result.description}
                                    query={debouncedQuery}
                                  />
                                </p>
                                {result.extra && (
                                  <span className="mt-1 inline-block rounded-md bg-surface px-1.5 py-0.5 text-[10px] font-medium text-textMuted">
                                    {result.extra}
                                  </span>
                                )}
                              </div>

                              {/* Arrow indicator */}
                              <svg
                                className={`mt-1 h-4 w-4 shrink-0 text-textMuted transition-all duration-150 ${
                                  isActive
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>

                    {/* "See all" link when truncated */}
                    {group.total > MAX_PER_CATEGORY && (
                      <div className="px-5 pb-2">
                        <Link
                          href={
                            group.type === "step"
                              ? localizeHref(locale, "/roadmap")
                              : group.type === "topic"
                                ? localizeHref(locale, "/topics")
                                : group.type === "glossary"
                                  ? localizeHref(locale, "/glossary")
                                  : localizeHref(locale, "/resources")
                          }
                          onClick={closeSearch}
                          className={`text-xs font-medium no-underline ${meta.colorClass} hover:underline`}
                        >
                          {t("search.seeAll").replace(
                            "{count}",
                            String(group.total),
                          )}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {hasQuery && hasResults && (
          <div className="flex items-center justify-between border-t border-border/40 px-5 py-2.5">
            <span className="text-xs text-textMuted" aria-live="polite">
              {totalCount === 1
                ? t("search.resultCount.one")
                : t("search.resultCount.other").replace(
                    "{count}",
                    String(totalCount),
                  )}
            </span>
            <div className="hidden items-center gap-1.5 text-[10px] text-textMuted sm:flex">
              <kbd className="rounded border border-border/60 bg-surface px-1.5 py-0.5 font-sans">
                ↑↓
              </kbd>
              <span>navigate</span>
              <kbd className="ml-1 rounded border border-border/60 bg-surface px-1.5 py-0.5 font-sans">
                ↵
              </kbd>
              <span>open</span>
            </div>
          </div>
        )}
      </div>

      {/* Screen reader live region */}
      <div aria-live="polite" className="sr-only">
        {hasQuery &&
          (hasResults
            ? totalCount === 1
              ? t("search.resultCount.one")
              : t("search.resultCount.other").replace(
                  "{count}",
                  String(totalCount),
                )
            : t("search.noResults"))}
      </div>
    </div>
  );
}
