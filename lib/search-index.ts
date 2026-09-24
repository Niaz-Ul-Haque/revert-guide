import type { Locale } from "./i18n";
import {
  getAllGlossaryEntries,
  getAllResources,
  getAllStages,
  getAllSteps,
  getAllTopics,
} from "./content";
import { getAllFaqEntries } from "./faq";
import type {
  FaqEntry,
  GlossaryEntry,
  Resource,
  Stage,
  Step,
  Topic,
} from "./types";

/**
 * The compact index behind site search. It is served as a static JSON file
 * per locale and fetched the first time a person opens the search box, so
 * no page has to carry the whole content set in its own payload.
 */

export type SearchStage = Pick<Stage, "id" | "stepIds">;
export type SearchStep = Pick<
  Step,
  | "id"
  | "slug"
  | "stageId"
  | "title"
  | "whyMatters"
  | "tinyVersion"
  | "unlocksNext"
  | "timeEstimate"
  | "exactActions"
>;
export type SearchTopic = Pick<
  Topic,
  "id" | "slug" | "title" | "description" | "sections"
>;
export type SearchGlossaryEntry = Pick<
  GlossaryEntry,
  "id" | "term" | "arabicText" | "transliteration" | "definition"
>;
export type SearchResource = Pick<
  Resource,
  "id" | "title" | "description" | "type"
>;
export type SearchFaqEntry = Pick<FaqEntry, "id" | "question" | "answer">;

export interface SearchIndex {
  stages: SearchStage[];
  steps: SearchStep[];
  topics: SearchTopic[];
  glossary: SearchGlossaryEntry[];
  resources: SearchResource[];
  faq: SearchFaqEntry[];
}

export function searchIndexPath(locale: Locale): string {
  return `/${locale}/search-index.json`;
}

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
      answer: answer.slice(0, 160),
    })),
  };
}
