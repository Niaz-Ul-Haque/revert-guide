import * as fs from "fs";
import * as path from "path";
import { DEFAULT_LOCALE, type Locale } from "./i18n";
import type { IconName } from "@/components/Icon";
import type {
  GlossaryEntry,
  Masjid,
  Resource,
  SourceCategory,
  SourceEntry,
  Stage,
  Step,
  Topic,
} from "./types";

const localeRoot = path.join(process.cwd(), "locales");

function readJson<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

function getLocaleDir(locale: Locale) {
  return path.join(localeRoot, locale);
}

function resolveLocaleFile(locale: Locale, relativePath: string) {
  const localizedPath = path.join(getLocaleDir(locale), relativePath);
  if (fs.existsSync(localizedPath)) {
    return localizedPath;
  }

  return path.join(getLocaleDir(DEFAULT_LOCALE), relativePath);
}

function readJsonFile<T>(locale: Locale, relativePath: string): T {
  return readJson<T>(resolveLocaleFile(locale, relativePath));
}

function mergeLocalizedCollectionById<T extends { id: string }>(
  baseItems: T[],
  localizedItems: Partial<T>[],
): T[] {
  const localizedById = new Map(
    localizedItems.map((item) => [item.id, item] as const),
  );

  const merged = baseItems.map((baseItem) => {
    const localizedItem = localizedById.get(baseItem.id);
    if (!localizedItem) {
      return baseItem;
    }

    return {
      ...baseItem,
      ...localizedItem,
    };
  });

  const baseIds = new Set(baseItems.map((item) => item.id));
  const localizedOnlyItems = localizedItems.filter((item): item is T => {
    const id = item.id;
    return typeof id === "string" && !baseIds.has(id);
  });

  return [...merged, ...localizedOnlyItems];
}

function readJsonDir<T>(locale: Locale, relativeDir: string): T[] {
  const fallbackDir = path.join(getLocaleDir(DEFAULT_LOCALE), relativeDir);
  const localizedDir = path.join(getLocaleDir(locale), relativeDir);
  const fileNames = new Set<string>();

  if (fs.existsSync(fallbackDir)) {
    for (const fileName of fs.readdirSync(fallbackDir)) {
      if (fileName.endsWith(".json")) {
        fileNames.add(fileName);
      }
    }
  }

  if (fs.existsSync(localizedDir)) {
    for (const fileName of fs.readdirSync(localizedDir)) {
      if (fileName.endsWith(".json")) {
        fileNames.add(fileName);
      }
    }
  }

  // A translated file overrides field by field, so a field added to the
  // English file (sources, videos, a new section) still renders in every
  // locale until it is translated.
  return Array.from(fileNames).map((fileName) => {
    const fallbackPath = path.join(fallbackDir, fileName);
    const localizedPath = path.join(localizedDir, fileName);
    const base = fs.existsSync(fallbackPath)
      ? readJson<T>(fallbackPath)
      : undefined;
    const localized =
      locale !== DEFAULT_LOCALE && fs.existsSync(localizedPath)
        ? readJson<Partial<T>>(localizedPath)
        : undefined;
    if (base && localized) return { ...base, ...localized } as T;
    return (base ?? localized) as T;
  });
}

// Collections (stages, glossary, resources, sources) fall back to the English
// entry by id, so entries added in English are available in every locale.
function readLocalizedCollection<T extends { id: string }>(
  locale: Locale,
  relativePath: string,
): T[] {
  const baseItems = readJson<T[]>(
    path.join(getLocaleDir(DEFAULT_LOCALE), relativePath),
  );
  if (locale === DEFAULT_LOCALE) return baseItems;

  const localizedPath = path.join(getLocaleDir(locale), relativePath);
  if (!fs.existsSync(localizedPath)) return baseItems;

  return mergeLocalizedCollectionById(
    baseItems,
    readJson<Partial<T>[]>(localizedPath),
  );
}

export function getAllStages(locale: Locale = DEFAULT_LOCALE): Stage[] {
  return readLocalizedCollection<Stage>(locale, "stages.json");
}

export function getStageById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): Stage | undefined {
  return getAllStages(locale).find((stage) => stage.id === id);
}

export function getAllSteps(locale: Locale = DEFAULT_LOCALE): Step[] {
  return readJsonDir<Step>(locale, "steps");
}

export function getStepById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): Step | undefined {
  return getAllSteps(locale).find((step) => step.id === id);
}

export function getStepBySlug(
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Step | undefined {
  return getAllSteps(locale).find((step) => step.slug === slug);
}

export function getStepsByStageId(
  stageId: string,
  locale: Locale = DEFAULT_LOCALE,
): Step[] {
  const stage = getStageById(stageId, locale);
  if (!stage) return [];

  return stage.stepIds
    .map((id) => getStepById(id, locale))
    .filter((step): step is Step => step !== undefined);
}

export function getAllTopics(locale: Locale = DEFAULT_LOCALE): Topic[] {
  return readJsonDir<Topic>(locale, "topics");
}

export function getTopicById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): Topic | undefined {
  return getAllTopics(locale).find((topic) => topic.id === id);
}

export function getTopicBySlug(
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Topic | undefined {
  return getAllTopics(locale).find(
    (topic) => (topic.slug ?? topic.id) === slug,
  );
}

export function getAllGlossaryEntries(
  locale: Locale = DEFAULT_LOCALE,
): GlossaryEntry[] {
  return readLocalizedCollection<GlossaryEntry>(locale, "glossary.json").sort(
    (a, b) => a.term.localeCompare(b.term),
  );
}

export function getGlossaryEntryById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): GlossaryEntry | undefined {
  return getAllGlossaryEntries(locale).find((entry) => entry.id === id);
}

export function getAllResources(locale: Locale = DEFAULT_LOCALE): Resource[] {
  return readLocalizedCollection<Resource>(locale, "resources.json");
}

export function getResourceById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): Resource | undefined {
  return getAllResources(locale).find((resource) => resource.id === id);
}

export function getAllSources(locale: Locale = DEFAULT_LOCALE): SourceEntry[] {
  return readLocalizedCollection<SourceEntry>(locale, "sources.json");
}

export function getSourceById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): SourceEntry | undefined {
  return getAllSources(locale).find((source) => source.id === id);
}

export function getSourcesByIds(
  ids: string[] = [],
  locale: Locale = DEFAULT_LOCALE,
): SourceEntry[] {
  const sourcesById = new Map(
    getAllSources(locale).map((source) => [source.id, source] as const),
  );

  return ids
    .map((id) => sourcesById.get(id))
    .filter((source): source is SourceEntry => source !== undefined);
}

export function getResourcesByStepId(
  stepId: string,
  locale: Locale = DEFAULT_LOCALE,
): Resource[] {
  return getAllResources(locale).filter((resource) =>
    resource.relatedStepIds.includes(stepId),
  );
}

export function getResourcesByTopicId(
  topicId: string,
  locale: Locale = DEFAULT_LOCALE,
): Resource[] {
  return getAllResources(locale).filter((resource) =>
    resource.relatedTopicIds.includes(topicId),
  );
}

export function getAllMasjids(locale: Locale = DEFAULT_LOCALE): Masjid[] {
  const fallbackMasjids = readJsonFile<Masjid[]>(
    DEFAULT_LOCALE,
    "masjids.json",
  );

  if (locale === DEFAULT_LOCALE) {
    return fallbackMasjids;
  }

  const localizedPath = path.join(getLocaleDir(locale), "masjids.json");
  if (!fs.existsSync(localizedPath)) {
    return fallbackMasjids;
  }

  const localizedMasjids = readJson<Partial<Masjid>[]>(localizedPath);
  return mergeLocalizedCollectionById(fallbackMasjids, localizedMasjids);
}

export function getMasjidById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): Masjid | undefined {
  return getAllMasjids(locale).find((masjid) => masjid.id === id);
}

export interface SourceCategoryGroup {
  id: SourceCategory;
  title: string;
  description: string;
}

export interface SourcePolicyNote {
  title: string;
  body: string;
}

export interface SourceCategoryContent {
  groups: SourceCategoryGroup[];
  policyNotes: SourcePolicyNote[];
}

export function getSourceCategoryContent(
  locale: Locale = DEFAULT_LOCALE,
): SourceCategoryContent {
  return readJsonFile<SourceCategoryContent>(locale, "source-categories.json");
}

export interface ResourceCollection {
  title: string;
  body: string;
  icon: IconName;
  resourceIds: string[];
}

export interface ResourceFeatureCard {
  title: string;
  body: string;
  href: string;
  icon: IconName;
}

export interface ResourceCollectionsContent {
  collections: ResourceCollection[];
  featureCards: ResourceFeatureCard[];
  chooseChecklist: string[];
  warnings: string[];
}

export function getResourceCollections(
  locale: Locale = DEFAULT_LOCALE,
): ResourceCollectionsContent {
  return readJsonFile<ResourceCollectionsContent>(
    locale,
    "resource-collections.json",
  );
}
