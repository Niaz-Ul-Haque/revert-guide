/* ─── Stages ─── */
export interface Stage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mainGoal: string;
  success: string;
  dontWorry: string[];
  stepIds: string[];
  duration: string;
}

/* ─── Steps ─── */
export interface StepAction {
  text: string;
  subSteps?: string[];
}

export interface StepObstacle {
  problem: string;
  solution: string;
}

export interface Step {
  id: string;
  slug: string;
  stageId: string;
  title: string;
  whyMatters: string;
  exactActions: StepAction[];
  timeEstimate: string;
  obstacles: StepObstacle[];
  tinyVersion: string;
  unlocksNext: string;
  resourceIds: string[];
  relatedGlossaryIds: string[];
  relatedTopicIds: string[];
}

/* ─── Topics ─── */
export interface TopicSection {
  heading: string;
  content: string;
}

export interface Topic {
  id: string;
  slug?: string;
  title: string;
  description: string;
  icon?: string;
  sections: TopicSection[];
  relatedStepIds?: string[];
  relatedGlossaryIds?: string[];
  relatedResourceIds?: string[];
}

/* ─── Glossary ─── */
export interface GlossaryEntry {
  id: string;
  term: string;
  arabicText?: string;
  transliteration?: string;
  definition: string;
  seeAlso: string[];
}

/* ─── Resources ─── */
export type ResourceType =
  | "article"
  | "video"
  | "book"
  | "app"
  | "community"
  | "pdf";

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  description: string;
  relatedStepIds: string[];
  relatedTopicIds: string[];
}

/* ─── Masjids ─── */
export interface Masjid {
  id: string;
  name: string;
  address: string;
  city: string;
  stateProvince: string;
  country: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone?: string;
  website?: string;
  notes?: string;
}
