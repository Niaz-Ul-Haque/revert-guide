import * as fs from "fs";
import * as path from "path";
import type { IconName } from "@/components/Icon";
import { DEFAULT_LOCALE, type Locale } from "./i18n";
import type { TopicImage, VideoRef, VideoWithChapters } from "./types";

/**
 * Loader for the longer-form content that sits behind the tool pages and the
 * Ramadan planning sections. Mirrors lib/content.ts: read
 * `locales/<locale>/<path>` over the English file, so a page renders in every
 * locale even before it is translated.
 */

const localeRoot = path.join(process.cwd(), "locales");

function readJson<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

function getLocaleDir(locale: Locale) {
  return path.join(localeRoot, locale);
}

// Top-level keys added to the English file before their translation lands
// still render, in English, instead of breaking the page.
function readJsonFile<T>(locale: Locale, relativePath: string): T {
  const filePath = resolveLocaleFile(locale, relativePath);
  const englishPath = path.join(getLocaleDir(DEFAULT_LOCALE), relativePath);
  if (filePath === englishPath) {
    return readJson<T>(filePath);
  }
  // Top-level keys added to English before their translation lands fall
  // back to English, so a new section never crashes a translated page.
  return { ...readJson<T>(englishPath), ...readJson<T>(filePath) };
}

/* ── Shared shapes ── */

export interface CorrectionNote {
  title: string;
  body: string;
}

/** A titled card of points with sources, used for the situational sections
 * on the tool pages (joining late, istinja, the excused person and so on). */
export interface InfoCard {
  id: string;
  title: string;
  summary?: string;
  points: string[];
  differencesTitle?: string;
  differences?: string[];
  referral?: string;
  links?: { label: string; href: string }[];
  sourceIds: string[];
}

export interface ExternalLink {
  label: string;
  body?: string;
  href: string;
  sourceIds: string[];
}

/* ── Dua and dhikr reference ── */

export type EntryKind = "Quranic dua" | "Hadith dua" | "Dhikr" | "Personal dua";

export interface DuaEntry {
  title: string;
  kind: EntryKind;
  occasion: string;
  arabic?: string;
  transliteration?: string;
  meaning: string;
  note: string;
  sourceIds: string[];
}

export interface DuaSection {
  id: string;
  title: string;
  intro: string;
  entries: DuaEntry[];
}

export interface PhraseEntry {
  phrase: string;
  arabic?: string;
  meaning: string;
  when: string;
  reply?: string;
  // "text" when the reply wording comes from the Quran or a hadith,
  // "custom" when it is common courtesy.
  replySource?: "text" | "custom";
  note?: string;
  sourceIds: string[];
}

export interface EverydayPhrases {
  id: string;
  title: string;
  intro: string;
  tips: string[];
  entries: PhraseEntry[];
  otherWords: {
    title: string;
    intro: string;
    items: { word: string; meaning: string }[];
  };
}

export interface DuaDhikrContent {
  sections: DuaSection[];
  // Optional so locale files written before this section still load.
  phrases?: EverydayPhrases;
}

export function getDuaDhikrContent(
  locale: Locale = DEFAULT_LOCALE,
): DuaDhikrContent {
  return readJsonFile<DuaDhikrContent>(locale, "tools/dua-dhikr.json");
}

/* ── Quran starter path ── */

export interface VocabularyEntry {
  term: string;
  body: string;
}

export interface ReadingPath {
  title: string;
  time: string;
  body: string;
  readings: string[];
  sourceIds: string[];
}

export interface WeekDay {
  day: string;
  title: string;
  body: string;
  sourceIds: string[];
}

export interface ResourceLink {
  title: string;
  body: string;
  href: string;
  sourceIds: string[];
  icon: IconName;
}

export interface FatihahWord {
  arabic: string;
  transliteration: string;
  meaning: string;
}

export interface SoundsToListenFor {
  title: string;
  intro: string;
  sounds: { letter: string; name: string; tip: string }[];
  mistakesTitle: string;
  mistakes: string[];
  practiceTitle: string;
  practice: string[];
  sourceIds: string[];
}

export interface LearnArabicContent {
  image: TopicImage;
  stages: string[];
  // Optional so locale files written before these blocks still load.
  sounds?: SoundsToListenFor;
  plan?: { title: string; notes: string[]; sourceIds: string[] };
  fatihahWords: { verse: number; words: FatihahWord[] }[];
  fatihahSourceIds: string[];
  links: ExternalLink[];
  fatihahVideo: VideoRef;
  alphabetVideo: VideoRef;
}

export interface QuranStarterContent {
  learnArabic: LearnArabicContent;
  vocabulary: VocabularyEntry[];
  translationTips: string[];
  readingPaths: ReadingPath[];
  weekPlan: WeekDay[];
  resourceLinks: ResourceLink[];
}

export function getQuranStarterContent(
  locale: Locale = DEFAULT_LOCALE,
): QuranStarterContent {
  return readJsonFile<QuranStarterContent>(locale, "tools/quran-starter.json");
}

/* ── Salah companion ── */

export interface SequenceStep {
  title: string;
  posture: string;
  body: string;
  icon: IconName;
  sourceIds?: string[];
}

export interface RecitationBlock {
  title: string;
  occasion: string;
  arabic?: string;
  transliteration?: string;
  meaning: string;
  beginnerNote: string;
  sourceIds: string[];
}

export interface SalahCompanionContent {
  prayerSequence: SequenceStep[];
  recitations: RecitationBlock[];
  cannotReciteYet: string[];
  cannotReciteSourceIds: string[];
  invalidatesPrayer: string[];
  commonCorrections: CorrectionNote[];
  mainVideo: VideoWithChapters;
  phraseVideos: VideoRef[];
  phraseSeries: ExternalLink;
  shapeImage: TopicImage;
  tashahhudPlacement: {
    items: string[];
    sourceIds: string[];
    image: TopicImage;
  };
  sujudAlSahw: {
    summary: string;
    steps: string[];
    referral: string;
    sourceIds: string[];
  };
  prayerTable: {
    rows: { name: string; window: string; units: string }[];
    note: string;
    sourceIds: string[];
    image: TopicImage;
  };
  notOwed: { text: string; sourceIds: string[] };
  seatedPrayer: {
    summary: string;
    points: string[];
    referral: string;
    sourceIds: string[];
    video: VideoWithChapters;
    extraLink: ExternalLink;
  };
  situationIndex?: {
    title: string;
    intro: string;
    items: { label: string; href: string }[];
  };
  moreCards?: InfoCard[];
}

export function getSalahCompanionContent(
  locale: Locale = DEFAULT_LOCALE,
): SalahCompanionContent {
  return readJsonFile<SalahCompanionContent>(
    locale,
    "tools/salah-companion.json",
  );
}

/* ── Wudu and ghusl ── */

export interface PracticeStep {
  title: string;
  body: string;
  icon: IconName;
}

export interface WuduGhuslContent {
  wuduSteps: PracticeStep[];
  ghuslSteps: PracticeStep[];
  wuduBreaks: string[];
  ghuslNeeded: string[];
  commonCorrections: CorrectionNote[];
  wuduVideo: VideoRef;
  ghuslVideo: VideoRef;
  wuduBreaksDiffer: string[];
  wuduBreaksNote: string;
  wuduBreaksSourceIds: string[];
  wuduBreaksImage: TopicImage;
  convertGhusl: { points: string[]; sourceIds: string[] };
  wuduImage: TopicImage;
  ghuslImage: TopicImage;
  commonQuestions: { question: string; answer: string; sourceIds: string[] }[];
  tayammum: {
    summary: string;
    steps: string[];
    schoolNote: string;
    ends: string;
    referral: string;
    sourceIds: string[];
    video: VideoWithChapters;
  };
  istinja?: InfoCard;
  moreCards?: InfoCard[];
}

export function getWuduGhuslContent(
  locale: Locale = DEFAULT_LOCALE,
): WuduGhuslContent {
  return readJsonFile<WuduGhuslContent>(locale, "tools/wudu-ghusl.json");
}

/* ── Ramadan planning ── */

export interface ChecklistSection {
  title: string;
  items: string[];
}

export interface CareSection {
  title: string;
  body: string;
  items: string[];
}

export interface RamadanPlanningContent {
  firstRamadanSections: ChecklistSection[];
  ramadanCareSections: CareSection[];
}

export function getRamadanPlanningContent(
  locale: Locale = DEFAULT_LOCALE,
): RamadanPlanningContent {
  return readJsonFile<RamadanPlanningContent>(
    locale,
    "pages/ramadan-planning.json",
  );
}
