// Type definitions for the hidden Dawah Guide feature.
// This content lives outside the public content collections (stages, steps,
// topics, glossary, resources) so it is never indexed by GlobalSearch.

export type DawahNodeKind =
  | "intro"
  | "teaching"
  | "decision"
  | "encouragement"
  | "exit"
  | "completion";

export type DawahOptionId = "yes" | "no" | "continue" | "pause" | "restart";

export interface DawahDecisionOption {
  id: DawahOptionId;
  label: string;
  helperText?: string;
  nextNodeId: string;
  ariaLabel?: string;
}

export interface DawahNode {
  id: string;
  kind: DawahNodeKind;
  title: string;
  eyebrow?: string;
  summary: string;
  explanation?: string[];
  conversationTips?: string[];
  avoid?: string[];
  referenceIds?: string[];
  checklist?: string[];
  options?: DawahDecisionOption[];
  nextNodeId?: string;
}

export interface IslamicReference {
  id: string;
  type:
    | "quran"
    | "hadith"
    | "scholarly-note"
    | "public-health"
    | "public-safety"
    | "public-rights";
  citation: string;
  label: string;
  arabic?: string;
  translation?: string;
  translator?: string;
  sourceName: string;
  sourceUrl?: string;
  reviewStatus: "draft" | "source-checked" | "verified";
  reviewNote?: string;
}

export interface GorapItem {
  letter: "G" | "O" | "R" | "A" | "P";
  title: string;
  shortLabel: string;
  explanation: string;
  relatedNodeIds: string[];
}

export interface SuggestionItem {
  id: string;
  title: string;
  body: string;
  priority?: "core" | "helpful";
}

export interface CommunityConnectContent {
  title: string;
  intro: string;
  checklist: string[];
  masjidFinderLabel: string;
}

// ── Additional field resources for da'ees (plan §6 / §20) ──

export interface CommonQuestion {
  id: string;
  topic: string;
  question: string;
  answer: string[];
  referenceIds?: string[];
}

export interface Misconception {
  id: string;
  claim: string;
  response: string[];
  referenceIds?: string[];
}

export interface Scenario {
  id: string;
  audience: string;
  summary: string;
  approach: string[];
  watchFor?: string[];
  referenceIds?: string[];
}

export interface TrainingCard {
  id: string;
  title: string;
  summary: string;
  practice: string[];
  avoid?: string[];
  referenceIds?: string[];
}

export interface HandoffSection {
  id: string;
  title: string;
  summary: string;
  actions: string[];
  avoid?: string[];
  referenceIds?: string[];
}

export interface ReferralBoundary {
  id: string;
  title: string;
  summary: string;
  examples: string[];
  referTo: string;
  referenceIds?: string[];
}

export interface DuaReminder {
  id: string;
  occasion: "before" | "after" | "general";
  title: string;
  arabic?: string;
  transliteration?: string;
  translation: string;
  referenceId?: string;
}

export interface QuickReferenceContent {
  intro: string;
  points: string[];
}

export interface AdditionalGuidance {
  trainingCards?: TrainingCard[];
  postShahadaHandoff?: HandoffSection[];
  referralBoundaries?: ReferralBoundary[];
  commonQuestions: CommonQuestion[];
  misconceptions: Misconception[];
  scenarios: Scenario[];
  duas: DuaReminder[];
  quickReference: QuickReferenceContent;
}

export interface DawahGuide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  audienceNote: string;
  reviewStatus?: "draft" | "source-checked" | "verified";
  reviewNote?: string;
  lastSourceChecked?: string;
  tonePrinciples: string[];
  startNodeId: string;
  nodeOrder: string[];
  nodes: Record<string, DawahNode>;
  gorap: GorapItem[];
  suggestions: {
    outsideTheField: SuggestionItem[];
    onTheField: SuggestionItem[];
  };
  references: IslamicReference[];
  communityConnect: CommunityConnectContent;
  additionalGuidance: AdditionalGuidance;
}
