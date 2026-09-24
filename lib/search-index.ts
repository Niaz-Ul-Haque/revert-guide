import type { Locale } from "./i18n";
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
