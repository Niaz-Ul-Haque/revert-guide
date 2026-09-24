import type { Locale } from "./i18n";
import {
  getAllGlossaryEntries,
  getAllResources,
  getAllStages,
  getAllSteps,
  getAllTopics,
} from "./content";
import { getAllFaqEntries } from "./faq";
import type { SearchIndex } from "./search-index";

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
      answer: answer.slice(0, 160),
    })),
  };
}
