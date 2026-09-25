import * as fs from "fs";
import * as path from "path";
import { DEFAULT_LOCALE, type Locale } from "./i18n";
import type { FaqEntry } from "./types";

/** Display order of the FAQ categories. Headings live in ui.json pages.faq. */
export const FAQ_CATEGORY_ORDER = [
  "foundations",
  "prayer",
  "purification",
  "quran",
  "ramadan",
  "zakat",
  "hajj",
  "menstruation",
  "family",
  "relationships-and-intimacy",
  "holidays",
  "everyday-life",
  "community",
  "safety",
  "mentorship",
  "site",
] as const;

function faqFile(locale: Locale) {
  return path.join(process.cwd(), "locales", locale, "faq.json");
}

function readFaqFile<T>(locale: Locale): T {
  return JSON.parse(fs.readFileSync(faqFile(locale), "utf-8")) as T;
}

// Same fallback as the other collections: English is the base, and a
// translated file overrides entries by id, field by field.
export function getAllFaqEntries(locale: Locale = DEFAULT_LOCALE): FaqEntry[] {
  const base = readFaqFile<FaqEntry[]>(DEFAULT_LOCALE);
  if (locale === DEFAULT_LOCALE || !fs.existsSync(faqFile(locale))) {
    return base;
  }

  const localized = new Map(
    readFaqFile<Partial<FaqEntry>[]>(locale).map(
      (entry) => [entry.id, entry] as const,
    ),
  );
  return base.map((entry) => ({ ...entry, ...localized.get(entry.id) }));
}

export interface FaqCategoryGroup {
  id: string;
  entries: FaqEntry[];
}

export function getFaqByCategory(
  locale: Locale = DEFAULT_LOCALE,
): FaqCategoryGroup[] {
  const entries = getAllFaqEntries(locale);
  return FAQ_CATEGORY_ORDER.map((id) => ({
    id,
    entries: entries.filter((entry) => entry.category === id),
  })).filter((group) => group.entries.length > 0);
}
