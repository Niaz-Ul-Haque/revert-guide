import fs from "fs";
import path from "path";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export interface GuideSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface GuideScript {
  title: string;
  body: string;
}

export interface GuideScenario {
  title: string;
  response: string;
}

export interface GuideLink {
  label: string;
  href: string;
}

export interface LifeGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  intro: string;
  summary: string[];
  sourceIds: string[];
  sections: GuideSection[];
  scripts: GuideScript[];
  scenarios: GuideScenario[];
  relatedLinks: GuideLink[];
  reviewStatus: "source-checked" | "review-needed";
}

type LifeGuideTranslation = Partial<Omit<LifeGuide, "id" | "slug">> &
  Pick<LifeGuide, "id">;

const localizedGuideCache = new Map<Locale, LifeGuide[]>();

let baseGuides: LifeGuide[] | null = null;

function guideFilePath(locale: Locale): string {
  return path.join(process.cwd(), "locales", locale, "life-guides.json");
}

// The English guides are content, so they live under locales/en with the rest
// of the content files. Other locales override entries by id.
function readBaseGuides(): LifeGuide[] {
  if (!baseGuides) {
    const raw = fs.readFileSync(guideFilePath(DEFAULT_LOCALE), "utf8");
    baseGuides = JSON.parse(raw) as LifeGuide[];
  }

  return baseGuides;
}

export function getLifeGuides(locale: Locale = DEFAULT_LOCALE): LifeGuide[] {
  const base = readBaseGuides();
  if (locale === DEFAULT_LOCALE) return base;

  const cached = localizedGuideCache.get(locale);
  if (cached) return cached;

  const translations = readLifeGuideTranslations(locale);
  const localized = base.map((guide) => {
    const translated = translations.find((item) => item.id === guide.id);
    return translated ? mergeLifeGuide(guide, translated) : guide;
  });

  localizedGuideCache.set(locale, localized);
  return localized;
}

export function getLifeGuideBySlug(
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
) {
  return getLifeGuides(locale).find((guide) => guide.slug === slug);
}

function readLifeGuideTranslations(locale: Locale): LifeGuideTranslation[] {
  const filePath = guideFilePath(locale);

  if (!fs.existsSync(filePath)) return [];

  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function mergeLifeGuide(
  guide: LifeGuide,
  translation: LifeGuideTranslation,
): LifeGuide {
  return {
    ...guide,
    ...translation,
    id: guide.id,
    slug: guide.slug,
    sourceIds: guide.sourceIds,
    reviewStatus: guide.reviewStatus,
    sections: translation.sections ?? guide.sections,
    scripts: translation.scripts ?? guide.scripts,
    scenarios: translation.scenarios ?? guide.scenarios,
    relatedLinks: translation.relatedLinks ?? guide.relatedLinks,
    summary: translation.summary ?? guide.summary,
  };
}
