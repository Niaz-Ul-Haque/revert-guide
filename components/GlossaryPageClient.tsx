"use client";

import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useTranslations } from "@/components/LocaleProvider";
import { SearchBar } from "@/components/SearchBar";
import { AnimateIn } from "@/components/AnimateIn";
import type { GlossaryEntry } from "@/lib/types";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";

interface GlossaryPageClientProps {
  locale: Locale;
  entries: GlossaryEntry[];
}

export function GlossaryPageClient({
  locale,
  entries,
}: GlossaryPageClientProps) {
  const t = useTranslations();
  const copy = t<Messages["pages"]["glossary"]>("pages.glossary");
  const [query, setQuery] = useState("");

  const filteredTerms = useMemo(() => {
    if (!query.trim()) return entries;
    const value = query.toLowerCase();

    return entries.filter(
      (entry) =>
        entry.term.toLowerCase().includes(value) ||
        entry.definition.toLowerCase().includes(value) ||
        (entry.transliteration &&
          entry.transliteration.toLowerCase().includes(value)) ||
        (entry.arabicText && entry.arabicText.includes(query)),
    );
  }, [entries, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryEntry[]>();
    const sorted = [...filteredTerms].sort((a, b) =>
      a.term.localeCompare(b.term),
    );

    for (const entry of sorted) {
      const letter = entry.term[0].toUpperCase();
      const group = map.get(letter) ?? [];
      group.push(entry);
      map.set(letter, group);
    }

    return Array.from(map.entries());
  }, [filteredTerms]);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.glossary") },
        ]}
      />

      <header className="mb-8">
        <AnimateIn>
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {t("nav.glossary")}
          </h1>
          <p className="text-lg text-textSecondary">{copy.description}</p>
        </AnimateIn>
      </header>

      <AnimateIn delay={0.1}>
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
          ? `${filteredTerms.length} ${filteredTerms.length === 1 ? copy.liveRegion.one : copy.liveRegion.other}`
          : ""}
      </div>

      {grouped.length === 0 ? (
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
        <div className="flex flex-col gap-10">
          {grouped.map(([letter, items]) => (
            <section key={letter} aria-labelledby={`letter-${letter}`}>
              <h2
                id={`letter-${letter}`}
                className="mb-5 border-b border-primaryGreen/30 pb-2 font-display text-2xl font-semibold text-primary"
              >
                {letter}
              </h2>
              <dl className="flex flex-col gap-4">
                {items.map((entry) => (
                  <div
                    key={entry.id}
                    id={entry.id}
                    className="scroll-mt-24 rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-soft"
                  >
                    <dt className="mb-2 flex flex-wrap items-baseline gap-2">
                      <span className="text-lg font-bold text-textPrimary">
                        {entry.term}
                      </span>
                      {entry.arabicText && (
                        <span
                          className="font-arabic text-xl text-textMuted"
                          lang="ar"
                          dir="rtl"
                        >
                          {entry.arabicText}
                        </span>
                      )}
                      {entry.transliteration && (
                        <span className="text-sm italic text-textMuted">
                          ({entry.transliteration})
                        </span>
                      )}
                    </dt>
                    <dd className="mb-0">
                      <p className="mb-2 text-sm leading-relaxed text-textSecondary">
                        {entry.definition}
                      </p>
                      {entry.seeAlso.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-textMuted">
                          <span>{copy.seeAlso}</span>
                          {entry.seeAlso.map((relatedId) => {
                            const relatedTerm = entries.find(
                              (item) => item.id === relatedId,
                            );
                            return (
                              <a
                                key={relatedId}
                                href={`#${relatedId}`}
                                className="rounded-lg bg-surfaceElevated px-2 py-0.5 font-medium text-primary no-underline transition-colors hover:bg-primary/15 hover:text-primaryHover"
                                onClick={(event) => {
                                  event.preventDefault();
                                  const element =
                                    document.getElementById(relatedId);
                                  if (!element) return;

                                  setQuery("");
                                  requestAnimationFrame(() => {
                                    element.scrollIntoView({
                                      behavior: "smooth",
                                      block: "center",
                                    });
                                    element.classList.add(
                                      "ring-2",
                                      "ring-primary",
                                      "ring-offset-2",
                                    );
                                    setTimeout(() => {
                                      element.classList.remove(
                                        "ring-2",
                                        "ring-primary",
                                        "ring-offset-2",
                                      );
                                    }, 2000);
                                  });
                                }}
                              >
                                {relatedTerm?.term ?? relatedId}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
