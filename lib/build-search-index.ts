import type { Locale } from "./i18n";
import {
  getAllGlossaryEntries,
  getAllResources,
  getAllStages,
  getAllSteps,
  getAllTopics,
} from "./content";
import { getAllFaqEntries } from "./faq";
import { getLifeGuides } from "./life-guides";
import { getTranslator } from "./messages";
import { getSeasonalGuides } from "./seasonal-guides";
import {
  getDuaDhikrContent,
  getQuranStarterContent,
  getRamadanPlanningContent,
  getSalahCompanionContent,
  getWuduGhuslContent,
} from "./tool-content";
import type { SearchIndex, SearchPage } from "./search-index";

/** Headings found anywhere in a copy or content object: string values under
 *  "title" or "heading" keys, or keys ending in "Title". */
function headings(value: unknown, out: string[] = []): string[] {
  if (Array.isArray(value)) {
    for (const item of value) headings(item, out);
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if (
        typeof item === "string" &&
        (key === "title" || key === "heading" || key.endsWith("Title"))
      ) {
        out.push(item);
      } else {
        headings(item, out);
      }
    }
  }
  return out;
}

const join = (parts: (string | undefined)[]) =>
  parts.filter(Boolean).join(" | ");

/** Guides, seasonal guides, tools and help pages. The hidden dawah guide is
 *  never indexed. */
function buildPages(locale: Locale): SearchPage[] {
  const t = getTranslator(locale);
  const lifeGuides = getLifeGuides(locale).map((guide) => ({
    id: `guide-${guide.id}`,
    href: `/guides/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    text: join([
      ...guide.summary,
      ...guide.sections.flatMap((section) => [
        section.heading,
        section.body,
        ...(section.items ?? []),
      ]),
      ...guide.scenarios.map((scenario) => scenario.title),
    ]),
  }));
  const seasonal = getSeasonalGuides(locale).map((guide) => ({
    id: `seasonal-${guide.id}`,
    href: `/seasonal/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    text: join([
      ...guide.summary,
      ...guide.sections.flatMap((section) => [
        section.heading,
        section.body,
        ...(section.items ?? []),
      ]),
    ]),
  }));
  const staticPages: [string, string, unknown[]][] = [
    [
      "/tools/salah-companion",
      "salahCompanion",
      [getSalahCompanionContent(locale)],
    ],
    ["/tools/wudu-ghusl", "wuduGhusl", [getWuduGhuslContent(locale)]],
    ["/quran-starter", "quranStarter", [getQuranStarterContent(locale)]],
    ["/dua-dhikr", "duaDhikr", [getDuaDhikrContent(locale)]],
    ["/ramadan", "ramadan", [getRamadanPlanningContent(locale)]],
    ["/mental-health", "mentalHealth", []],
    ["/get-help", "getHelp", []],
  ];
  const pages = staticPages.map(([href, key, content]) => {
    const copy = t<Record<string, unknown>>(`pages.${key}`);
    const text = (name: string) =>
      typeof copy[name] === "string" ? (copy[name] as string) : undefined;
    return {
      id: `page-${key}`,
      href,
      title: text("title") ?? "",
      description: text("metadataDescription") ?? text("subtitle") ?? "",
      text: join(
        Array.from(new Set(headings([copy, ...content]))).filter(
          (heading) => heading !== text("title"),
        ),
      ),
    };
  });
  return [...lifeGuides, ...seasonal, ...pages];
}

/** Server side: builds the index that lib/search-index.ts describes. */
export function buildSearchIndex(locale: Locale): SearchIndex {
  return {
    stages: getAllStages(locale).map(({ id, stepIds }) => ({ id, stepIds })),
    steps: getAllSteps(locale).map((step) => ({
      id: step.id,
      slug: step.slug,
      stageId: step.stageId,
      title: step.title,
      whyMatters: step.whyMatters,
      tinyVersion: step.tinyVersion,
      unlocksNext: step.unlocksNext,
      timeEstimate: step.timeEstimate,
      exactActions: step.exactActions,
    })),
    topics: getAllTopics(locale).map((topic) => ({
      id: topic.id,
      slug: topic.slug,
      title: topic.title,
      description: topic.description,
      sections: topic.sections,
    })),
    glossary: getAllGlossaryEntries(locale).map((entry) => ({
      id: entry.id,
      term: entry.term,
      arabicText: entry.arabicText,
      transliteration: entry.transliteration,
      definition: entry.definition,
    })),
    resources: getAllResources(locale).map((resource) => ({
      id: resource.id,
      title: resource.title,
      description: resource.description,
      type: resource.type,
    })),
    faq: getAllFaqEntries(locale).map(({ id, question, answer }) => ({
      id,
      question,
      answer,
    })),
    pages: buildPages(locale),
  };
}
