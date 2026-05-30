"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { Card } from "./Card";
import { Callout } from "./Callout";
import { Accordion } from "./Accordion";
import { Icon, type IconName } from "./Icon";
import { Button } from "./Button";
import { useLocale } from "./LocaleProvider";
import { localizeHref } from "@/lib/i18n";
import type {
  CommonQuestion,
  DawahGuide,
  DawahNode,
  DawahNodeKind,
  DuaReminder,
  IslamicReference,
  Misconception,
  Scenario,
} from "@/lib/dawah-types";

interface DawahGuideClientProps {
  guide: DawahGuide;
}

type ViewMode = "flow" | "quick";

const EXIT_NODE_KIND: DawahNodeKind = "exit";

interface DawahGuideUiLabels {
  breadcrumbHome: string;
  viewModeAriaLabel: string;
  guidedFlow: string;
  quickReference: string;
  printSavePdf: string;
  stepStatus: (step: number, total: number, title: string) => string;
  stepOf: (step: number, total: number) => string;
  conversationPathAriaLabel: string;
  conversationTips: string;
  gentlyAvoid: string;
  continue: string;
  back: string;
  restartGuide: string;
  pauseGentleExit: string;
  draftPendingReview: string;
  translation: string;
  sourcePrefix: string;
  viewSource: string;
  gorapHeading: string;
  gorapSubheading: string;
  suggestionsHeading: string;
  outsideTheField: string;
  onTheField: string;
  toneHeading: string;
  toneSubheading: string;
  quickReferenceHeading: string;
  gorapAtGlance: string;
  conversationFlow: string;
  keepInMind: string;
  approach: string;
  watchFor: string;
  sourcePendingReview: string;
  moreForDaees: string;
  moreForDaeesIntro: string;
  commonQuestionsTitle: string;
  misconceptionsTitle: string;
  scenariosTitle: string;
  duaRemindersTitle: string;
  printFieldSuggestions: string;
  printReferences: string;
  duaGroups: Record<DuaReminder["occasion"], string>;
  kind: Record<DawahNodeKind, string>;
}

const dawahGuideUiLabels: Record<"en" | "bn", DawahGuideUiLabels> = {
  en: {
    breadcrumbHome: "Home",
    viewModeAriaLabel: "View mode",
    guidedFlow: "Guided flow",
    quickReference: "Quick reference",
    printSavePdf: "Print / Save as PDF",
    stepStatus: (step, total, title) => `Step ${step} of ${total}: ${title}`,
    stepOf: (step, total) => `Step ${step} of ${total}`,
    conversationPathAriaLabel: "Conversation path so far",
    conversationTips: "Conversation tips",
    gentlyAvoid: "Gently avoid",
    continue: "Continue",
    back: "Back",
    restartGuide: "Restart guide",
    pauseGentleExit: "Pause — gentle exit",
    draftPendingReview: "Draft — pending review",
    translation: "Translation",
    sourcePrefix: "Source:",
    viewSource: "View source",
    gorapHeading: "GORAP — logical progression",
    gorapSubheading: "The path of truth and guidance.",
    suggestionsHeading: "General suggestions",
    outsideTheField: "Outside the field",
    onTheField: "On the field",
    toneHeading: "Be patient · Be sincere",
    toneSubheading: "Leave the result to Allah.",
    quickReferenceHeading: "Quick reference",
    gorapAtGlance: "GORAP at a glance",
    conversationFlow: "The conversation flow",
    keepInMind: "Keep in mind",
    approach: "Approach",
    watchFor: "Watch for",
    sourcePendingReview: "Source pending review",
    moreForDaees: "More for da'ees",
    moreForDaeesIntro:
      "Optional supporting material for real conversations — open what you need.",
    commonQuestionsTitle: "Common questions & gentle answers",
    misconceptionsTitle: "Responding to misconceptions",
    scenariosTitle: "Scenario-based guidance",
    duaRemindersTitle: "Dua reminders",
    printFieldSuggestions: "Field suggestions",
    printReferences: "References (verify before sharing)",
    duaGroups: {
      before: "Before the conversation",
      after: "During and after",
      general: "General",
    },
    kind: {
      intro: "Start",
      teaching: "Teaching",
      decision: "Decision",
      encouragement: "Encourage",
      exit: "Gentle exit",
      completion: "Community",
    },
  },
  bn: {
    breadcrumbHome: "হোম",
    viewModeAriaLabel: "ভিউ মোড",
    guidedFlow: "নির্দেশিত ধারা",
    quickReference: "দ্রুত রেফারেন্স",
    printSavePdf: "প্রিন্ট / PDF হিসেবে সংরক্ষণ",
    stepStatus: (step, total, title) => `ধাপ ${step} / ${total}: ${title}`,
    stepOf: (step, total) => `ধাপ ${step} / ${total}`,
    conversationPathAriaLabel: "এ পর্যন্ত কথোপকথনের পথ",
    conversationTips: "কথোপকথনের পরামর্শ",
    gentlyAvoid: "কোমলভাবে এড়িয়ে চলুন",
    continue: "চালিয়ে যান",
    back: "পেছনে",
    restartGuide: "গাইড আবার শুরু করুন",
    pauseGentleExit: "বিরতি — কোমলভাবে শেষ",
    draftPendingReview: "খসড়া — পর্যালোচনা বাকি",
    translation: "অর্থ",
    sourcePrefix: "উৎস:",
    viewSource: "উৎস দেখুন",
    gorapHeading: "GORAP — যৌক্তিক অগ্রগতি",
    gorapSubheading: "সত্য ও হিদায়াতের পথ।",
    suggestionsHeading: "সাধারণ পরামর্শ",
    outsideTheField: "মাঠের বাইরে",
    onTheField: "মাঠে",
    toneHeading: "ধৈর্য ধরুন · আন্তরিক থাকুন",
    toneSubheading: "ফলাফল আল্লাহর ওপর ছেড়ে দিন।",
    quickReferenceHeading: "দ্রুত রেফারেন্স",
    gorapAtGlance: "এক নজরে GORAP",
    conversationFlow: "কথোপকথনের ধারা",
    keepInMind: "মনে রাখুন",
    approach: "পদ্ধতি",
    watchFor: "সতর্ক থাকুন",
    sourcePendingReview: "উৎস পর্যালোচনার অপেক্ষায়",
    moreForDaees: "দাঈদের জন্য আরও",
    moreForDaeesIntro:
      "বাস্তব কথোপকথনের জন্য ঐচ্ছিক সহায়ক উপাদান — যা দরকার খুলুন।",
    commonQuestionsTitle: "সাধারণ প্রশ্ন ও কোমল উত্তর",
    misconceptionsTitle: "ভুল ধারণার জবাব",
    scenariosTitle: "পরিস্থিতিভিত্তিক দিকনির্দেশনা",
    duaRemindersTitle: "দোয়ার স্মরণিকা",
    printFieldSuggestions: "মাঠপর্যায়ের পরামর্শ",
    printReferences: "রেফারেন্স (শেয়ারের আগে যাচাই করুন)",
    duaGroups: {
      before: "কথোপকথনের আগে",
      after: "চলাকালীন ও পরে",
      general: "সাধারণ",
    },
    kind: {
      intro: "শুরু",
      teaching: "শিক্ষা",
      decision: "সিদ্ধান্ত",
      encouragement: "উৎসাহ",
      exit: "কোমল প্রস্থান",
      completion: "কমিউনিটি",
    },
  },
};

const kindConfig: Record<
  DawahNodeKind,
  { icon: IconName; badgeClass: string }
> = {
  intro: {
    icon: "star",
    badgeClass: "bg-surfaceElevated text-primary",
  },
  teaching: {
    icon: "book",
    badgeClass: "bg-surfaceElevated text-accent",
  },
  decision: {
    icon: "lightbulb",
    badgeClass: "bg-accentYellow/50 text-warning",
  },
  encouragement: {
    icon: "star",
    badgeClass: "bg-successBg text-success",
  },
  exit: {
    icon: "info",
    badgeClass: "bg-surfaceElevated text-textSecondary",
  },
  completion: {
    icon: "users",
    badgeClass: "bg-successBg text-success",
  },
};

export function DawahGuideClient({ guide }: DawahGuideClientProps) {
  const locale = useLocale();
  const labels =
    locale === "bn" ? dawahGuideUiLabels.bn : dawahGuideUiLabels.en;
  const [history, setHistory] = useState<string[]>([guide.startNodeId]);
  const [mode, setMode] = useState<ViewMode>("flow");
  const headingRef = useRef<HTMLHeadingElement>(null);

  const currentNodeId = history[history.length - 1];
  const currentNode = guide.nodes[currentNodeId];

  const referenceMap = useMemo(() => {
    const map = new Map<string, IslamicReference>();
    for (const ref of guide.references) map.set(ref.id, ref);
    return map;
  }, [guide.references]);

  const exitNodeId = useMemo(
    () =>
      guide.nodeOrder.find((id) => guide.nodes[id]?.kind === EXIT_NODE_KIND) ??
      guide.startNodeId,
    [guide.nodeOrder, guide.nodes, guide.startNodeId],
  );

  const stepNumber = guide.nodeOrder.indexOf(currentNodeId) + 1;
  const totalSteps = guide.nodeOrder.length;
  const isTerminal =
    currentNode.kind === "exit" || currentNode.kind === "completion";

  const focusHeading = useCallback(() => {
    // Move focus to the new step heading after navigation for screen readers
    // and keyboard users, once the node has rendered.
    requestAnimationFrame(() => headingRef.current?.focus());
  }, []);

  const goTo = useCallback(
    (nodeId: string) => {
      if (!guide.nodes[nodeId]) return;
      setHistory((prev) => [...prev, nodeId]);
      focusHeading();
    },
    [guide.nodes, focusHeading],
  );

  const back = useCallback(() => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    focusHeading();
  }, [focusHeading]);

  const restart = useCallback(() => {
    setHistory([guide.startNodeId]);
    focusHeading();
  }, [guide.startNodeId, focusHeading]);

  const config = kindConfig[currentNode.kind];

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: labels.breadcrumbHome, href: localizeHref(locale, "/") },
          { label: guide.title },
        ]}
      />

      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {guide.title}
        </p>
        <h1 className="mb-3 mt-1">{guide.subtitle}</h1>
        <p className="max-w-3xl text-textSecondary">{guide.audienceNote}</p>
      </header>

      {/* Toolbar: view mode + print. Hidden when printing. */}
      <div className="mt-6 flex flex-wrap items-center gap-2 print:hidden">
        <div
          className="inline-flex rounded-xl border border-border p-1"
          role="group"
          aria-label={labels.viewModeAriaLabel}
        >
          <button
            type="button"
            onClick={() => setMode("flow")}
            aria-pressed={mode === "flow"}
            className={`min-h-[40px] rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              mode === "flow"
                ? "bg-primary text-white"
                : "text-textSecondary hover:text-primary"
            }`}
          >
            {labels.guidedFlow}
          </button>
          <button
            type="button"
            onClick={() => setMode("quick")}
            aria-pressed={mode === "quick"}
            className={`min-h-[40px] rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              mode === "quick"
                ? "bg-primary text-white"
                : "text-textSecondary hover:text-primary"
            }`}
          >
            {labels.quickReference}
          </button>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-border px-3 py-1.5 text-sm font-medium text-textSecondary transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
        >
          <Icon name="file-text" size="sm" />
          {labels.printSavePdf}
        </button>
      </div>

      {/* Polite live region announcing step changes to screen readers. */}
      <div className="sr-only" role="status" aria-live="polite">
        {labels.stepStatus(stepNumber, totalSteps, currentNode.title)}
      </div>

      {mode === "flow" ? (
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] print:hidden">
          {/* Main column: the active step. */}
          <div className="min-w-0">
            <DawahProgress
              stepNumber={stepNumber}
              totalSteps={totalSteps}
              history={history}
              nodes={guide.nodes}
              labels={labels}
            />

            <div key={currentNodeId} className="mt-4 animate-fade-up">
              <Card className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${config.badgeClass}`}
                  >
                    <Icon name={config.icon} size="sm" />
                    {labels.kind[currentNode.kind]}
                  </span>
                  {currentNode.eyebrow && (
                    <span className="text-sm text-textMuted">
                      {currentNode.eyebrow}
                    </span>
                  )}
                </div>

                <h2
                  ref={headingRef}
                  tabIndex={-1}
                  className="mb-3 mt-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-borderStrong"
                >
                  {currentNode.title}
                </h2>

                <p className="text-lg text-textSecondary">
                  {currentNode.summary}
                </p>

                {currentNode.explanation?.map((paragraph, i) => (
                  <p key={i} className="mt-4 text-textPrimary">
                    {paragraph}
                  </p>
                ))}

                {currentNode.referenceIds &&
                  currentNode.referenceIds.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {currentNode.referenceIds.map((refId) => {
                        const reference = referenceMap.get(refId);
                        return reference ? (
                          <ReferenceBlock
                            key={refId}
                            reference={reference}
                            labels={labels}
                          />
                        ) : null;
                      })}
                    </div>
                  )}

                {currentNode.checklist && currentNode.checklist.length > 0 && (
                  <ul className="mt-6 list-none space-y-2 pl-0">
                    {currentNode.checklist.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-textPrimary"
                      >
                        <Icon
                          name="check"
                          size="sm"
                          className="mt-1 flex-shrink-0 text-success"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {currentNode.conversationTips &&
                  currentNode.conversationTips.length > 0 && (
                    <Callout variant="tip" title={labels.conversationTips}>
                      <ul className="mb-0 ml-4 list-disc space-y-1">
                        {currentNode.conversationTips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </Callout>
                  )}

                {currentNode.avoid && currentNode.avoid.length > 0 && (
                  <Callout variant="warning" title={labels.gentlyAvoid}>
                    <ul className="mb-0 ml-4 list-disc space-y-1">
                      {currentNode.avoid.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Callout>
                )}

                {currentNode.kind === "completion" && (
                  <div className="mt-6">
                    <Button
                      href={localizeHref(locale, "/resources/find-masjid")}
                      variant="primary"
                    >
                      <Icon name="map-pin" size="md" />
                      {guide.communityConnect.masjidFinderLabel}
                    </Button>
                  </div>
                )}

                {/* Decision / continue controls */}
                <div className="mt-8 border-t border-border pt-6">
                  {currentNode.options && currentNode.options.length > 0 ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {currentNode.options.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => goTo(option.nextNodeId)}
                          aria-label={option.ariaLabel ?? option.label}
                          className="flex min-h-[44px] flex-col items-start gap-1 rounded-xl border border-borderStrong bg-surface p-4 text-left transition-all duration-200 hover:border-primary hover:bg-surfaceElevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
                        >
                          <span className="flex items-center gap-2 font-semibold text-textPrimary">
                            <Icon
                              name={
                                option.id === "yes" ? "check" : "chevron-right"
                              }
                              size="sm"
                              className="text-primary"
                            />
                            {option.label}
                          </span>
                          {option.helperText && (
                            <span className="text-sm text-textSecondary">
                              {option.helperText}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  ) : currentNode.nextNodeId ? (
                    <Button
                      variant="primary"
                      onClick={() => goTo(currentNode.nextNodeId as string)}
                    >
                      {labels.continue}
                      <Icon name="chevron-right" size="md" />
                    </Button>
                  ) : null}

                  {/* Global controls */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {history.length > 1 && (
                      <button
                        type="button"
                        onClick={back}
                        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-medium text-textSecondary transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
                      >
                        <Icon
                          name="chevron-right"
                          size="sm"
                          className="rotate-180"
                        />
                        {labels.back}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={restart}
                      className="inline-flex min-h-[44px] items-center rounded-xl px-4 py-2 text-sm font-medium text-textSecondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
                    >
                      {labels.restartGuide}
                    </button>
                    {!isTerminal && currentNodeId !== exitNodeId && (
                      <button
                        type="button"
                        onClick={() => goTo(exitNodeId)}
                        className="inline-flex min-h-[44px] items-center rounded-xl px-4 py-2 text-sm font-medium text-textMuted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
                      >
                        {labels.pauseGentleExit}
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar: support panels. */}
          <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            <GorapPanel
              guide={guide}
              currentNodeId={currentNodeId}
              labels={labels}
            />
            <SuggestionsPanel guide={guide} labels={labels} />
            <TonePanel principles={guide.tonePrinciples} labels={labels} />
          </aside>
        </div>
      ) : (
        <QuickReferenceView
          guide={guide}
          labels={labels}
          className="mt-6 print:hidden"
        />
      )}

      {/* Additional field resources (plan §6 / §20). */}
      <AdditionalGuidancePanels
        guide={guide}
        referenceMap={referenceMap}
        labels={labels}
      />

      {/* Print-only full summary for training handouts. */}
      <PrintSummary guide={guide} labels={labels} />
    </div>
  );
}

function DawahProgress({
  stepNumber,
  totalSteps,
  history,
  nodes,
  labels,
}: {
  stepNumber: number;
  totalSteps: number;
  history: string[];
  nodes: Record<string, DawahNode>;
  labels: DawahGuideUiLabels;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-textSecondary">
        {labels.stepOf(Math.max(stepNumber, 1), totalSteps)}
      </p>
      <ol
        className="mb-0 mt-2 flex list-none flex-wrap gap-1.5 pl-0"
        aria-label={labels.conversationPathAriaLabel}
      >
        {history.map((nodeId, index) => {
          const isCurrent = index === history.length - 1;
          return (
            <li key={`${nodeId}-${index}`} className="mb-0">
              <span
                aria-current={isCurrent ? "step" : undefined}
                className={`inline-block rounded-full px-2.5 py-0.5 text-xs ${
                  isCurrent
                    ? "bg-primary font-medium text-white"
                    : "bg-surfaceElevated text-textSecondary"
                }`}
              >
                {nodes[nodeId]?.title ?? nodeId}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function ReferenceBlock({
  reference,
  labels,
}: {
  reference: IslamicReference;
  labels: DawahGuideUiLabels;
}) {
  return (
    <figure className="m-0 rounded-xl border border-border bg-surfaceElevated p-4">
      <figcaption className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-textPrimary">
          {reference.citation}
        </span>
        <span className="text-xs text-textMuted">{reference.label}</span>
        {reference.reviewStatus === "draft" && (
          <span
            className="rounded-lg bg-accentYellow/50 px-2 py-0.5 text-xs font-medium text-warning"
            title={reference.reviewNote}
          >
            {labels.draftPendingReview}
          </span>
        )}
      </figcaption>

      {reference.arabic && (
        <p
          lang="ar"
          dir="rtl"
          className="mb-0 mt-3 font-arabic text-2xl leading-loose text-textPrimary"
        >
          {reference.arabic}
        </p>
      )}

      {reference.translation && (
        <blockquote className="m-0 mt-2 text-textPrimary">
          <span className="text-xs uppercase tracking-wide text-textMuted">
            {labels.translation}
          </span>
          <p className="mb-0 mt-1 italic">“{reference.translation}”</p>
        </blockquote>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-textMuted">
        {reference.translator && <span>{reference.translator}</span>}
        <span>
          {labels.sourcePrefix} {reference.sourceName}
        </span>
        {reference.sourceUrl && (
          <a
            href={reference.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
          >
            {labels.viewSource}
            <Icon name="external-link" size="sm" />
          </a>
        )}
      </div>
    </figure>
  );
}

function GorapPanel({
  guide,
  currentNodeId,
  labels,
}: {
  guide: DawahGuide;
  currentNodeId: string;
  labels: DawahGuideUiLabels;
}) {
  return (
    <Card className="p-5">
      <h2 className="mb-1 mt-0 text-lg">{labels.gorapHeading}</h2>
      <p className="mb-0 text-sm text-textSecondary">
        {labels.gorapSubheading}
      </p>
      <ul className="mb-0 mt-3 list-none space-y-3 pl-0">
        {guide.gorap.map((item) => {
          const isActive = item.relatedNodeIds.includes(currentNodeId);
          return (
            <li key={item.letter} className="mb-0 flex gap-3">
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-surfaceElevated text-textSecondary"
                }`}
                aria-hidden="true"
              >
                {item.letter}
              </span>
              <div>
                <p className="mb-0 font-semibold text-textPrimary">
                  {item.title}
                </p>
                <p className="mb-0 text-xs text-textMuted">{item.shortLabel}</p>
                <p className="mb-0 mt-0.5 text-sm text-textSecondary">
                  {item.explanation}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

function SuggestionsPanel({
  guide,
  labels,
}: {
  guide: DawahGuide;
  labels: DawahGuideUiLabels;
}) {
  return (
    <Accordion title={labels.suggestionsHeading}>
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 mt-0 text-sm font-semibold text-textPrimary">
            {labels.outsideTheField}
          </h3>
          <ul className="mb-0 list-none space-y-2 pl-0">
            {guide.suggestions.outsideTheField.map((item) => (
              <li key={item.id} className="mb-0">
                <p className="mb-0 text-sm font-medium text-textPrimary">
                  {item.title}
                </p>
                <p className="mb-0 text-sm text-textSecondary">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 mt-0 text-sm font-semibold text-textPrimary">
            {labels.onTheField}
          </h3>
          <ul className="mb-0 list-none space-y-2 pl-0">
            {guide.suggestions.onTheField.map((item) => (
              <li key={item.id} className="mb-0">
                <p className="mb-0 text-sm font-medium text-textPrimary">
                  {item.title}
                </p>
                <p className="mb-0 text-sm text-textSecondary">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Accordion>
  );
}

function TonePanel({
  principles,
  labels,
}: {
  principles: string[];
  labels: DawahGuideUiLabels;
}) {
  return (
    <Card className="bg-surfaceElevated p-5">
      <h2 className="mb-1 mt-0 text-lg">{labels.toneHeading}</h2>
      <p className="mb-0 text-sm text-textSecondary">{labels.toneSubheading}</p>
      <ul className="mb-0 mt-3 list-none space-y-1.5 pl-0">
        {principles.map((principle, i) => (
          <li
            key={i}
            className="mb-0 flex items-start gap-2 text-sm text-textPrimary"
          >
            <Icon
              name="star"
              size="sm"
              className="mt-0.5 flex-shrink-0 text-primary"
            />
            <span>{principle}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function QuickReferenceView({
  guide,
  labels,
  className = "",
}: {
  guide: DawahGuide;
  labels: DawahGuideUiLabels;
  className?: string;
}) {
  const { quickReference } = guide.additionalGuidance;
  return (
    <div className={className}>
      <Card className="p-6 sm:p-8">
        <h2 className="mb-2 mt-0">{labels.quickReferenceHeading}</h2>
        <p className="text-textSecondary">{quickReference.intro}</p>

        <h3 className="mt-6">{labels.gorapAtGlance}</h3>
        <ol className="mb-0 list-none space-y-2 pl-0">
          {guide.gorap.map((item) => (
            <li key={item.letter} className="mb-0 flex gap-3">
              <span
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
                aria-hidden="true"
              >
                {item.letter}
              </span>
              <span className="text-textPrimary">
                <strong>{item.title}</strong> — {item.explanation}
              </span>
            </li>
          ))}
        </ol>

        <h3 className="mt-6">{labels.conversationFlow}</h3>
        <ol className="mb-0 space-y-1">
          {guide.nodeOrder.map((nodeId) => {
            const node = guide.nodes[nodeId];
            if (!node) return null;
            return (
              <li key={nodeId} className="text-textPrimary">
                <span className="font-medium">{node.title}</span>
                <span className="text-textSecondary"> — {node.summary}</span>
              </li>
            );
          })}
        </ol>

        {quickReference.points.length > 0 && (
          <>
            <h3 className="mt-6">{labels.keepInMind}</h3>
            <ul className="mb-0 space-y-1">
              {quickReference.points.map((point, i) => (
                <li key={i} className="text-textPrimary">
                  {point}
                </li>
              ))}
            </ul>
          </>
        )}
      </Card>
    </div>
  );
}

function CommonQuestionsList({
  items,
  referenceMap,
  labels,
}: {
  items: CommonQuestion[];
  referenceMap: Map<string, IslamicReference>;
  labels: DawahGuideUiLabels;
}) {
  return (
    <ul className="mb-0 list-none space-y-4 pl-0">
      {items.map((q) => (
        <li key={q.id} className="mb-0">
          <p className="mb-0 text-xs font-semibold uppercase tracking-wide text-primary">
            {q.topic}
          </p>
          <p className="mb-1 mt-0.5 font-semibold text-textPrimary">
            {q.question}
          </p>
          {q.answer.map((para, i) => (
            <p key={i} className="mb-0 mt-1 text-sm text-textSecondary">
              {para}
            </p>
          ))}
          {q.referenceIds && q.referenceIds.length > 0 && (
            <div className="mt-2 space-y-2">
              {q.referenceIds.map((refId) => {
                const ref = referenceMap.get(refId);
                return ref ? (
                  <ReferenceBlock key={refId} reference={ref} labels={labels} />
                ) : null;
              })}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function MisconceptionsList({
  items,
  referenceMap,
  labels,
}: {
  items: Misconception[];
  referenceMap: Map<string, IslamicReference>;
  labels: DawahGuideUiLabels;
}) {
  return (
    <ul className="mb-0 list-none space-y-4 pl-0">
      {items.map((m) => (
        <li key={m.id} className="mb-0">
          <p className="mb-1 font-semibold text-textPrimary">
            <span className="text-textMuted">“</span>
            {m.claim}
            <span className="text-textMuted">”</span>
          </p>
          {m.response.map((para, i) => (
            <p key={i} className="mb-0 mt-1 text-sm text-textSecondary">
              {para}
            </p>
          ))}
          {m.referenceIds && m.referenceIds.length > 0 && (
            <div className="mt-2 space-y-2">
              {m.referenceIds.map((refId) => {
                const ref = referenceMap.get(refId);
                return ref ? (
                  <ReferenceBlock key={refId} reference={ref} labels={labels} />
                ) : null;
              })}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function ScenariosList({
  items,
  labels,
}: {
  items: Scenario[];
  labels: DawahGuideUiLabels;
}) {
  return (
    <ul className="mb-0 list-none space-y-4 pl-0">
      {items.map((s) => (
        <li key={s.id} className="mb-0">
          <p className="mb-0 font-semibold text-textPrimary">{s.audience}</p>
          <p className="mb-1 mt-0.5 text-sm text-textSecondary">{s.summary}</p>
          <p className="mb-1 mt-2 text-xs font-semibold uppercase tracking-wide text-primary">
            {labels.approach}
          </p>
          <ul className="mb-0 ml-4 list-disc space-y-1 text-sm text-textSecondary">
            {s.approach.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
          {s.watchFor && s.watchFor.length > 0 && (
            <>
              <p className="mb-1 mt-2 text-xs font-semibold uppercase tracking-wide text-warning">
                {labels.watchFor}
              </p>
              <ul className="mb-0 ml-4 list-disc space-y-1 text-sm text-textSecondary">
                {s.watchFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function DuasList({
  items,
  referenceMap,
  labels,
}: {
  items: DuaReminder[];
  referenceMap: Map<string, IslamicReference>;
  labels: DawahGuideUiLabels;
}) {
  const groups: { label: string; occasion: DuaReminder["occasion"] }[] = [
    { label: labels.duaGroups.before, occasion: "before" },
    { label: labels.duaGroups.after, occasion: "after" },
    { label: labels.duaGroups.general, occasion: "general" },
  ];
  return (
    <div className="space-y-4">
      {groups.map((group) => {
        const groupItems = items.filter((d) => d.occasion === group.occasion);
        if (groupItems.length === 0) return null;
        return (
          <div key={group.occasion}>
            <h3 className="mb-2 mt-0 text-sm font-semibold text-textPrimary">
              {group.label}
            </h3>
            <ul className="mb-0 list-none space-y-3 pl-0">
              {groupItems.map((dua) => {
                const ref = dua.referenceId
                  ? referenceMap.get(dua.referenceId)
                  : undefined;
                return (
                  <li
                    key={dua.id}
                    className="mb-0 rounded-xl border border-border bg-surfaceElevated p-4"
                  >
                    <p className="mb-0 text-sm font-medium text-textPrimary">
                      {dua.title}
                    </p>
                    {dua.arabic && (
                      <p
                        lang="ar"
                        dir="rtl"
                        className="mb-0 mt-2 font-arabic text-xl leading-loose text-textPrimary"
                      >
                        {dua.arabic}
                      </p>
                    )}
                    {dua.transliteration && (
                      <p className="mb-0 mt-1 text-sm italic text-textSecondary">
                        {dua.transliteration}
                      </p>
                    )}
                    <p className="mb-0 mt-1 text-sm text-textSecondary">
                      “{dua.translation}”
                    </p>
                    <p className="mb-0 mt-1 text-xs text-textMuted">
                      {ref ? ref.citation : labels.sourcePendingReview}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function AdditionalGuidancePanels({
  guide,
  referenceMap,
  labels,
}: {
  guide: DawahGuide;
  referenceMap: Map<string, IslamicReference>;
  labels: DawahGuideUiLabels;
}) {
  const ag = guide.additionalGuidance;
  return (
    <section className="mt-12 print:hidden" aria-labelledby="more-for-daees">
      <h2 id="more-for-daees">{labels.moreForDaees}</h2>
      <p className="text-textSecondary">{labels.moreForDaeesIntro}</p>
      <div className="mt-4 space-y-3">
        {ag.commonQuestions.length > 0 && (
          <Accordion title={labels.commonQuestionsTitle}>
            <CommonQuestionsList
              items={ag.commonQuestions}
              referenceMap={referenceMap}
              labels={labels}
            />
          </Accordion>
        )}
        {ag.misconceptions.length > 0 && (
          <Accordion title={labels.misconceptionsTitle}>
            <MisconceptionsList
              items={ag.misconceptions}
              referenceMap={referenceMap}
              labels={labels}
            />
          </Accordion>
        )}
        {ag.scenarios.length > 0 && (
          <Accordion title={labels.scenariosTitle}>
            <ScenariosList items={ag.scenarios} labels={labels} />
          </Accordion>
        )}
        {ag.duas.length > 0 && (
          <Accordion title={labels.duaRemindersTitle}>
            <DuasList
              items={ag.duas}
              referenceMap={referenceMap}
              labels={labels}
            />
          </Accordion>
        )}
      </div>
    </section>
  );
}

// Plain, single-column layout shown only when printing — a clean training
// handout covering the whole flow, GORAP, suggestions, and references.
function PrintSummary({
  guide,
  labels,
}: {
  guide: DawahGuide;
  labels: DawahGuideUiLabels;
}) {
  return (
    <div className="hidden print:block">
      <h2>{labels.gorapHeading}</h2>
      <ul>
        {guide.gorap.map((item) => (
          <li key={item.letter}>
            <strong>
              {item.letter} — {item.title}:
            </strong>{" "}
            {item.explanation}
          </li>
        ))}
      </ul>

      <h2>{labels.conversationFlow}</h2>
      <ol>
        {guide.nodeOrder.map((nodeId) => {
          const node = guide.nodes[nodeId];
          if (!node) return null;
          return (
            <li key={nodeId}>
              <strong>{node.title}.</strong> {node.summary}
            </li>
          );
        })}
      </ol>

      <h2>{labels.printFieldSuggestions}</h2>
      <ul>
        {[
          ...guide.suggestions.outsideTheField,
          ...guide.suggestions.onTheField,
        ].map((item) => (
          <li key={item.id}>
            <strong>{item.title}:</strong> {item.body}
          </li>
        ))}
      </ul>

      <h2>{labels.printReferences}</h2>
      <ul>
        {guide.references.map((ref) => (
          <li key={ref.id}>
            <strong>{ref.citation}</strong>
            {ref.translation ? ` — “${ref.translation}”` : ""} (
            {ref.reviewStatus})
          </li>
        ))}
      </ul>
    </div>
  );
}
