import * as fs from "fs";
import * as path from "path";
import type { IconName } from "@/components/Icon";
import { DEFAULT_LOCALE, type Locale } from "./i18n";
import type { TopicImage, VideoRef, VideoWithChapters } from "./types";

/**
 * Loader for the longer-form content that sits behind the tool pages and the
 * Ramadan planning sections. Mirrors lib/content.ts: read
 * `locales/<locale>/<path>` when it exists, otherwise fall back to the English
 * file, so a page renders in every locale even before it is translated.
 */

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

/* ── Shared shapes ── */

export interface CorrectionNote {
  title: string;
  body: string;
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

export interface DuaDhikrContent {
  sections: DuaSection[];
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

export interface LearnArabicContent {
  image: TopicImage;
  stages: string[];
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
