import * as fs from "fs";
import * as path from "path";
import type {
  Stage,
  Step,
  Topic,
  GlossaryEntry,
  Resource,
  Masjid,
} from "./types";

const contentDir = path.join(process.cwd(), "content", "en");

function readJson<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

function readJsonDir<T>(dirPath: string): T[] {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<T>(path.join(dirPath, f)));
}

/* ─── Stages ─── */

export function getAllStages(): Stage[] {
  return readJson<Stage[]>(path.join(contentDir, "stages.json"));
}

export function getStageById(id: string): Stage | undefined {
  return getAllStages().find((s) => s.id === id);
}

/* ─── Steps ─── */

export function getAllSteps(): Step[] {
  return readJsonDir<Step>(path.join(contentDir, "steps"));
}

export function getStepById(id: string): Step | undefined {
  return getAllSteps().find((s) => s.id === id);
}

export function getStepBySlug(slug: string): Step | undefined {
  return getAllSteps().find((s) => s.slug === slug);
}

export function getStepsByStageId(stageId: string): Step[] {
  const stage = getStageById(stageId);
  if (!stage) return [];
  return stage.stepIds
    .map((id) => getStepById(id))
    .filter((s): s is Step => s !== undefined);
}

/* ─── Topics ─── */

export function getAllTopics(): Topic[] {
  return readJsonDir<Topic>(path.join(contentDir, "topics"));
}

export function getTopicById(id: string): Topic | undefined {
  return getAllTopics().find((t) => t.id === id);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return getAllTopics().find((t) => (t.slug ?? t.id) === slug);
}

/* ─── Glossary ─── */

export function getAllGlossaryEntries(): GlossaryEntry[] {
  return readJson<GlossaryEntry[]>(path.join(contentDir, "glossary.json")).sort(
    (a, b) => a.term.localeCompare(b.term),
  );
}

export function getGlossaryEntryById(id: string): GlossaryEntry | undefined {
  return getAllGlossaryEntries().find((g) => g.id === id);
}

/* ─── Resources ─── */

export function getAllResources(): Resource[] {
  return readJson<Resource[]>(path.join(contentDir, "resources.json"));
}

export function getResourceById(id: string): Resource | undefined {
  return getAllResources().find((r) => r.id === id);
}

export function getResourcesByStepId(stepId: string): Resource[] {
  return getAllResources().filter((r) => r.relatedStepIds.includes(stepId));
}

export function getResourcesByTopicId(topicId: string): Resource[] {
  return getAllResources().filter((r) => r.relatedTopicIds.includes(topicId));
}

/* ─── Masjids ─── */

export function getAllMasjids(): Masjid[] {
  return readJson<Masjid[]>(path.join(contentDir, "masjids.json"));
}

export function getMasjidById(id: string): Masjid | undefined {
  return getAllMasjids().find((m) => m.id === id);
}
