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
  videos?: VideoRef[];
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
  videos?: VideoRef[];
  /** Optional illustration shown under the intro (SVG in public/). */
  image?: TopicImage;
  /** Optional cards linking to steps or tools, rendered after the sections. */
  linkCards?: TopicLinkCard[];
}

export interface TopicImage {
  src: string;
  alt: string;
  caption?: string;
  /** Licence or attribution line, shown in the caption. */
  credit?: string;
}

export interface TopicLinkCard {
  label: string;
  href: string;
  body?: string;
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
  /** Omitted when no street address could be matched; the record then shows
   *  in the list only. */
  coordinates?: {
    lat: number;
    lng: number;
  };
  /** "street" when the pin was matched to the street address; "city-centre"
   *  when only a city-centre fallback was available (shown as approximate). */
  coordinatesPrecision?: "street" | "city-centre";
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

/* ── Videos ──────────────────────────────────────────────────────────────
 * A click-to-play YouTube reference rendered by components/VideoEmbed.tsx.
 * Nothing loads from YouTube until the person presses play. Ids come from the
 * research Videos sheet; every video has a source entry in sources.json.
 */
export interface VideoRef {
  /** YouTube video id, for example "2xS70Zn-jRk". */
  videoId: string;
  title: string;
  channel: string;
  /** Length as shown on YouTube, for example "6:08". */
  duration: string;
  /** Second offset to start at, for a verified chapter timestamp. */
  start?: number;
  /** Shown under the cover, for example a note about background music. */
  note?: string;
  sourceIds: string[];
}

/* ── FAQ ─────────────────────────────────────────────────────────────────
 * Entries live in locales/en/faq.json and render at /faq.
 */
export interface FaqEntry {
  id: string;
  /** Category id, for example "prayer" or "menstruation". */
  category: string;
  question: string;
  answer: string;
  /** Differences of opinion, stated without choosing. */
  differences?: string;
  readMore?: { label: string; href: string };
  sourceIds: string[];
  reviewStatus: ContentReviewStatus;
  /** True when the answer ends with an "ask a qualified teacher" line. */
  askTeacher?: boolean;
}

/* ── Events ──────────────────────────────────────────────────────────────
 * Team-edited list in locales/en/events.json, rendered at /events.
 */
export interface EventEntry {
  id: string;
  title: string;
  city: string;
  /** Two-letter province code, for example "ON". */
  province: string;
  /** ISO date, for example "2026-10-04". */
  date: string;
  time?: string;
  venue?: string;
  organiser: string;
  /** Official page for the event or organiser. */
  url: string;
  description?: string;
}

/* ── Slice regions ───────────────────────────────────────────────────────
 * Keep additions from the expansion slices under their own marker so parallel
 * work merges cleanly. Remove the markers once the slices have merged.
 */

/* Slice A additions (safety and accuracy) */

/* Slice B additions (prayer and worship) */

/** A labelled start point inside a video, for example one prayer in a
 *  full demonstration. `start` is a second offset. */
export interface VideoChapter {
  label: string;
  start: number;
}

/** A video with optional chapter buttons, rendered by VideoEmbed. */
export interface VideoWithChapters extends VideoRef {
  chapters?: VideoChapter[];
}

/* Slice C additions (new content pages) */

/* Slice D additions (help, mentoring and community) */

/** Shape of locales/<locale>/events.json. */
export interface EventsContent {
  /** ISO date the list was last checked. */
  lastUpdated: string;
  events: EventEntry[];
}

/* Slice E additions (masjid directory and Canada scope) */

/* Slice F additions (visuals and housekeeping) */
