import * as fs from "fs";
import * as path from "path";
import { DEFAULT_LOCALE, type Locale } from "./i18n";
import type {
  Stage,
  Step,
  Topic,
  GlossaryEntry,
  Resource,
  Masjid,
} from "./types";

const contentRoot = path.join(process.cwd(), "content");

function readJson<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

function getContentDir(locale: Locale) {
  return path.join(contentRoot, locale);
}

function resolveContentFile(locale: Locale, relativePath: string) {
  const localizedPath = path.join(getContentDir(locale), relativePath);
  if (fs.existsSync(localizedPath)) {
    return localizedPath;
  }

  return path.join(getContentDir(DEFAULT_LOCALE), relativePath);
}

function readJsonFile<T>(locale: Locale, relativePath: string): T {
  return readJson<T>(resolveContentFile(locale, relativePath));
}

function readJsonDir<T>(locale: Locale, relativeDir: string): T[] {
  const fallbackDir = path.join(getContentDir(DEFAULT_LOCALE), relativeDir);
  const localizedDir = path.join(getContentDir(locale), relativeDir);
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

  return Array.from(fileNames).map((fileName) =>
    readJson<T>(resolveContentFile(locale, path.join(relativeDir, fileName))),
  );
}

export function getAllStages(locale: Locale = DEFAULT_LOCALE): Stage[] {
  return readJsonFile<Stage[]>(locale, "stages.json");
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
  return readJsonFile<GlossaryEntry[]>(locale, "glossary.json").sort((a, b) =>
    a.term.localeCompare(b.term),
  );
}

export function getGlossaryEntryById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): GlossaryEntry | undefined {
  return getAllGlossaryEntries(locale).find((entry) => entry.id === id);
}

export function getAllResources(locale: Locale = DEFAULT_LOCALE): Resource[] {
  return readJsonFile<Resource[]>(locale, "resources.json");
}

export function getResourceById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): Resource | undefined {
  return getAllResources(locale).find((resource) => resource.id === id);
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
  return readJsonFile<Masjid[]>(locale, "masjids.json");
}

export function getMasjidById(
  id: string,
  locale: Locale = DEFAULT_LOCALE,
): Masjid | undefined {
  return getAllMasjids(locale).find((masjid) => masjid.id === id);
}
