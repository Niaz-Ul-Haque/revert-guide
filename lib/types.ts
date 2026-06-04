/* Stages */
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
  focusNow?: string[];
  canWait?: string[];
  askHelpIf?: string[];
  goodNextQuestions?: {
    label: string;
    href: string;
  }[];
  sourceIds?: string[];
}

/* Steps */
export interface StepAction {
  text: string;
  subSteps?: string[];
}

export interface StepObstacle {
  problem: string;
  solution: string;
}

export interface StepNote {
  title: string;
  body: string;
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
  commonQuestions?: StepObstacle[];
  contextNotes?: StepNote[];
  gentleScripts?: StepNote[];
  sourceIds?: string[];
  reviewStatus?: ContentReviewStatus;
}

/* Topics */
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
  sourceIds?: string[];
  reviewStatus?: ContentReviewStatus;
}

/* Glossary */
export interface GlossaryEntry {
  id: string;
  term: string;
  arabicText?: string;
  transliteration?: string;
  definition: string;
  seeAlso: string[];
}

/* Resources */
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
  organization?: string;
  bestFor?: string;
  trustNote?: string;
  sourceIds?: string[];
  reviewStatus?: ContentReviewStatus;
}

/* Masjids */
export type MasjidServiceId =
  | "quran-classes"
  | "community-events"
  | "new-muslim-support"
  | "youth-programs"
  | "weekend-school"
  | "library"
  | "interfaith-outreach";

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
  email?: string;
  website?: string;
  notes?: string;
  visitorNotes?: string;
  womenSpaceNote?: string;
  newMuslimSupportNote?: string;
  accessibilityNote?: string;
  jumuahNote?: string;
  classSupportNote?: string;
  parkingNote?: string;
  serviceIds?: MasjidServiceId[];
  womenFriendly?: boolean;
  convertSupport?: boolean;
  parking?: boolean;
  accessibility?: boolean;
  sourceIds?: string[];
  reviewStatus?: ContentReviewStatus;
}

export type ContentReviewStatus =
  | "draft"
  | "source-checked"
  | "review-needed"
  | "approved";

export type SourceCategory =
  | "quran"
  | "hadith"
  | "new-muslim-education"
  | "mental-health"
  | "public-rights"
  | "public-safety"
  | "public-travel"
  | "tools-data"
  | "masjid-community"
  | "zakat-financial-education"
  | "resource-publisher";

export interface SourceEntry {
  id: string;
  title: string;
  organization: string;
  category: SourceCategory;
  url: string;
  sourceType: string;
  label: string;
  accessed: string;
  reviewStatus: ContentReviewStatus;
  note: string;
}
