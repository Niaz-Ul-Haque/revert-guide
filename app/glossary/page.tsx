"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchBar } from "@/components/SearchBar";
import { AnimateIn } from "@/components/AnimateIn";
import type { GlossaryEntry } from "@/lib/types";

import glossaryData from "@/content/en/glossary.json";

export default function GlossaryPage() {
  const allTerms = glossaryData as GlossaryEntry[];
  const [query, setQuery] = useState("");

  const filteredTerms = useMemo(() => {
    if (!query.trim()) return allTerms;
    const q = query.toLowerCase();
    return allTerms.filter(
      (entry) =>
        entry.term.toLowerCase().includes(q) ||
        entry.definition.toLowerCase().includes(q) ||
        (entry.transliteration &&
          entry.transliteration.toLowerCase().includes(q)) ||
        (entry.arabicText && entry.arabicText.includes(query)),
    );
  }, [allTerms, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryEntry[]>();
    const sorted = [...filteredTerms].sort((a, b) =>
      a.term.localeCompare(b.term),
    );
    for (const entry of sorted) {
      const letter = entry.term[0].toUpperCase();
      const arr = map.get(letter) ?? [];
      arr.push(entry);
      map.set(letter, arr);
    }
    return Array.from(map.entries());
  }, [filteredTerms]);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
      />

      {/* Header */}
      <header className="mb-8">
        <AnimateIn>
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Glossary
          </h1>
          <p className="text-lg text-textSecondary">
            Quick reference for Islamic terms and concepts. Search and learn at
            your own pace.
          </p>
        </AnimateIn>
      </header>

      {/* Search */}
      <AnimateIn delay={0.1}>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search terms..."
          label="Search glossary"
          hideLabel
          className="mb-8"
        />
      </AnimateIn>

      {/* Live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {query.trim()
          ? `${filteredTerms.length} term${filteredTerms.length !== 1 ? "s" : ""} found`
          : ""}
      </div>

      {/* Terms List */}
      {grouped.length === 0 ? (
        <div className="rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center">
          <p className="mb-2 font-display text-lg font-semibold text-textPrimary">
            No terms found
          </p>
          <p className="mb-0 text-sm text-textSecondary">
            Try a different search term or{" "}
            <button
              type="button"
              onClick={() => setQuery("")}
              className="font-medium text-primary underline hover:text-primaryHover"
            >
              clear the search
            </button>
            .
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {grouped.map(([letter, entries]) => (
            <section key={letter} aria-labelledby={`letter-${letter}`}>
              <h2
                id={`letter-${letter}`}
                className="mb-5 border-b border-primaryGreen/30 pb-2 font-display text-2xl font-semibold text-primary"
              >
                {letter}
              </h2>
              <dl className="flex flex-col gap-4">
                {entries.map((entry) => (
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
                          <span>See also:</span>
                          {entry.seeAlso.map((relatedId, index) => {
                            const relatedTerm = allTerms.find(
                              (t) => t.id === relatedId,
                            );
                            return (
                              <span key={relatedId}>
                                <a
                                  href={`#${relatedId}`}
                                  className="rounded-lg bg-surfaceElevated px-2 py-0.5 font-medium text-primary no-underline transition-colors hover:bg-primary/15 hover:text-primaryHover"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const el =
                                      document.getElementById(relatedId);
                                    if (el) {
                                      setQuery("");
                                      requestAnimationFrame(() => {
                                        el.scrollIntoView({
                                          behavior: "smooth",
                                          block: "center",
                                        });
                                        el.classList.add(
                                          "ring-2",
                                          "ring-primary",
                                          "ring-offset-2",
                                        );
                                        setTimeout(() => {
                                          el.classList.remove(
                                            "ring-2",
                                            "ring-primary",
                                            "ring-offset-2",
                                          );
                                        }, 2000);
                                      });
                                    }
                                  }}
                                >
                                  {relatedTerm?.term ?? relatedId}
                                </a>
                                {index < entry.seeAlso.length - 1 ? "" : ""}
                              </span>
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
