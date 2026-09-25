import Link from "next/link";
import type { ReactNode } from "react";
import type { GlossaryEntry } from "@/lib/types";

// The words a term can appear as in running text: the term itself, a
// one-word alternative in brackets ("Zabiha (dhabihah)"), and the id.
function namesFor(entry: GlossaryEntry) {
  const names = new Set<string>();
  const bracket = entry.term.match(/^(.+?)\s*\(([^)]+)\)$/);
  names.add((bracket ? bracket[1] : entry.term).trim());
  if (bracket && !/[,\s]/.test(bracket[2].trim())) names.add(bracket[2].trim());
  names.add(entry.id);
  return Array.from(names).filter((name) => name.length > 2);
}

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Returns a function that links the first use of each of a page's related
 * glossary terms to its entry on /glossary. Call it on the page's text in
 * reading order; a term is linked once per page. A plain link works with a
 * keyboard, a screen reader and a touch screen, which a hover tooltip does not.
 */
export function createGlossaryLinker(
  entries: GlossaryEntry[],
  hrefFor: (id: string) => string,
  hint: string,
) {
  const pending = entries.map((entry) => ({
    entry,
    pattern: new RegExp(
      `(?<![\\p{L}\\p{M}'-])(?:${namesFor(entry).map(escape).join("|")})(?![\\p{L}\\p{M}])`,
      "iu",
    ),
  }));

  return function linkTerms(text: string): ReactNode {
    const matches: { start: number; end: number; entry: GlossaryEntry }[] = [];
    for (const item of pending) {
      const found = item.pattern.exec(text);
      if (found) {
        matches.push({
          start: found.index,
          end: found.index + found[0].length,
          entry: item.entry,
        });
      }
    }
    if (matches.length === 0) return text;

    matches.sort((a, b) => a.start - b.start);
    const parts: ReactNode[] = [];
    let cursor = 0;
    for (const match of matches) {
      if (match.start < cursor) continue;
      const index = pending.findIndex((item) => item.entry === match.entry);
      pending.splice(index, 1);
      parts.push(text.slice(cursor, match.start));
      parts.push(
        <Link
          key={match.entry.id}
          href={hrefFor(match.entry.id)}
          title={match.entry.definition}
          className="text-inherit underline decoration-primary/60 decoration-dotted underline-offset-4 hover:text-primary"
        >
          {text.slice(match.start, match.end)}
          <span className="sr-only"> ({hint})</span>
        </Link>,
      );
      cursor = match.end;
    }
    parts.push(text.slice(cursor));
    return parts;
  };
}
