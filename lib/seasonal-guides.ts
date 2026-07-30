import fs from "fs";
import path from "path";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export interface SeasonalSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface SeasonalScript {
  title: string;
  body: string;
}

export interface SeasonalGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  badge: string;
  intro: string;
  summary: string[];
  focusNow: string[];
  canWait: string[];
  sections: SeasonalSection[];
  scripts: SeasonalScript[];
  sourceIds: string[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
  reviewStatus: "source-checked" | "review-needed";
}

type SeasonalGuideTranslation = Partial<Omit<SeasonalGuide, "id" | "slug">> &
  Pick<SeasonalGuide, "id">;

const localizedGuideCache = new Map<Locale, SeasonalGuide[]>();

let baseGuides: SeasonalGuide[] | null = null;

function guideFilePath(locale: Locale): string {
  return path.join(process.cwd(), "locales", locale, "seasonal-guides.json");
}

// The English guides are content, so they live under locales/en with the rest
// of the content files. Other locales override entries by id.
function readBaseGuides(): SeasonalGuide[] {
  if (!baseGuides) {
    const raw = fs.readFileSync(guideFilePath(DEFAULT_LOCALE), "utf8");
    baseGuides = JSON.parse(raw) as SeasonalGuide[];
  }

  return baseGuides;
}

export function getSeasonalGuides(locale: Locale = DEFAULT_LOCALE) {
  const base = readBaseGuides();
  if (locale === DEFAULT_LOCALE) return base;

  const cached = localizedGuideCache.get(locale);
  if (cached) return cached;

  const translations = readSeasonalGuideTranslations(locale);
  const localized = base.map((guide) => {
    const translated = translations.find((item) => item.id === guide.id);
    return translated ? mergeSeasonalGuide(guide, translated) : guide;
  });

  localizedGuideCache.set(locale, localized);
  return localized;
}

export function getSeasonalGuideBySlug(
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
) {
  return getSeasonalGuides(locale).find((guide) => guide.slug === slug);
}

function readSeasonalGuideTranslations(
  locale: Locale,
): SeasonalGuideTranslation[] {
  const filePath = guideFilePath(locale);

  if (!fs.existsSync(filePath)) return [];

  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function mergeSeasonalGuide(
  guide: SeasonalGuide,
  translation: SeasonalGuideTranslation,
): SeasonalGuide {
  return {
    ...guide,
    ...translation,
    id: guide.id,
    slug: guide.slug,
    sourceIds: guide.sourceIds,
    reviewStatus: guide.reviewStatus,
    summary: translation.summary ?? guide.summary,
    focusNow: translation.focusNow ?? guide.focusNow,
    canWait: translation.canWait ?? guide.canWait,
    sections: translation.sections ?? guide.sections,
    scripts: translation.scripts ?? guide.scripts,
    relatedLinks: translation.relatedLinks ?? guide.relatedLinks,
  };
}
