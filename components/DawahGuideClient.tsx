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

const kindConfig: Record<
  DawahNodeKind,
  { label: string; icon: IconName; badgeClass: string }
> = {
  intro: {
    label: "Start",
    icon: "star",
    badgeClass: "bg-surfaceElevated text-primary",
  },
  teaching: {
    label: "Teaching",
    icon: "book",
    badgeClass: "bg-surfaceElevated text-accent",
  },
  decision: {
    label: "Decision",
    icon: "lightbulb",
    badgeClass: "bg-accentYellow/50 text-warning",
  },
  encouragement: {
    label: "Encourage",
    icon: "star",
    badgeClass: "bg-successBg text-success",
  },
  exit: {
    label: "Gentle exit",
    icon: "info",
    badgeClass: "bg-surfaceElevated text-textSecondary",
  },
  completion: {
    label: "Community",
    icon: "users",
    badgeClass: "bg-successBg text-success",
  },
};

export function DawahGuideClient({ guide }: DawahGuideClientProps) {
  const locale = useLocale();
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
          { label: "Home", href: localizeHref(locale, "/") },
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
          aria-label="View mode"
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
            Guided flow
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
            Quick reference
          </button>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-border px-3 py-1.5 text-sm font-medium text-textSecondary transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
        >
          <Icon name="file-text" size="sm" />
          Print / Save as PDF
        </button>
      </div>

      {/* Polite live region announcing step changes to screen readers. */}
      <div className="sr-only" role="status" aria-live="polite">
        {`Step ${stepNumber} of ${totalSteps}: ${currentNode.title}`}
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
            />

            <div key={currentNodeId} className="mt-4 animate-fade-up">
              <Card className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${config.badgeClass}`}
                  >
                    <Icon name={config.icon} size="sm" />
                    {config.label}
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
                          <ReferenceBlock key={refId} reference={reference} />
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
                    <Callout variant="tip" title="Conversation tips">
                      <ul className="mb-0 ml-4 list-disc space-y-1">
                        {currentNode.conversationTips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </Callout>
                  )}

                {currentNode.avoid && currentNode.avoid.length > 0 && (
                  <Callout variant="warning" title="Gently avoid">
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
                      Continue
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
                        Back
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={restart}
                      className="inline-flex min-h-[44px] items-center rounded-xl px-4 py-2 text-sm font-medium text-textSecondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
                    >
                      Restart guide
                    </button>
                    {!isTerminal && currentNodeId !== exitNodeId && (
                      <button
                        type="button"
                        onClick={() => goTo(exitNodeId)}
                        className="inline-flex min-h-[44px] items-center rounded-xl px-4 py-2 text-sm font-medium text-textMuted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
                      >
                        Pause — gentle exit
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar: support panels. */}
          <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            <GorapPanel guide={guide} currentNodeId={currentNodeId} />
            <SuggestionsPanel guide={guide} />
            <TonePanel principles={guide.tonePrinciples} />
          </aside>
        </div>
      ) : (
        <QuickReferenceView guide={guide} className="mt-6 print:hidden" />
      )}

      {/* Additional field resources (plan §6 / §20). */}
      <AdditionalGuidancePanels guide={guide} referenceMap={referenceMap} />

      {/* Print-only full summary for training handouts. */}
      <PrintSummary guide={guide} />
    </div>
  );
}

function DawahProgress({
  stepNumber,
  totalSteps,
  history,
  nodes,
}: {
  stepNumber: number;
  totalSteps: number;
  history: string[];
  nodes: Record<string, DawahNode>;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-textSecondary">
        Step {Math.max(stepNumber, 1)} of {totalSteps}
      </p>
      <ol
        className="mb-0 mt-2 flex list-none flex-wrap gap-1.5 pl-0"
        aria-label="Conversation path so far"
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

function ReferenceBlock({ reference }: { reference: IslamicReference }) {
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
            Draft — pending review
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
            Translation
          </span>
          <p className="mb-0 mt-1 italic">“{reference.translation}”</p>
        </blockquote>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-textMuted">
        {reference.translator && <span>{reference.translator}</span>}
        <span>Source: {reference.sourceName}</span>
        {reference.sourceUrl && (
          <a
            href={reference.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
          >
            View source
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
}: {
  guide: DawahGuide;
  currentNodeId: string;
}) {
  return (
    <Card className="p-5">
      <h2 className="mb-1 mt-0 text-lg">GORAP — logical progression</h2>
      <p className="mb-0 text-sm text-textSecondary">
        The path of truth and guidance.
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

function SuggestionsPanel({ guide }: { guide: DawahGuide }) {
  return (
    <Accordion title="General suggestions">
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 mt-0 text-sm font-semibold text-textPrimary">
            Outside the field
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
            On the field
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

function TonePanel({ principles }: { principles: string[] }) {
  return (
    <Card className="bg-surfaceElevated p-5">
      <h2 className="mb-1 mt-0 text-lg">Be patient · Be sincere</h2>
      <p className="mb-0 text-sm text-textSecondary">
        Leave the result to Allah.
      </p>
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
  className = "",
}: {
  guide: DawahGuide;
  className?: string;
}) {
  const { quickReference } = guide.additionalGuidance;
  return (
    <div className={className}>
      <Card className="p-6 sm:p-8">
        <h2 className="mb-2 mt-0">Quick reference</h2>
        <p className="text-textSecondary">{quickReference.intro}</p>

        <h3 className="mt-6">GORAP at a glance</h3>
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

        <h3 className="mt-6">The conversation flow</h3>
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
            <h3 className="mt-6">Keep in mind</h3>
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
}: {
  items: CommonQuestion[];
  referenceMap: Map<string, IslamicReference>;
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
                  <ReferenceBlock key={refId} reference={ref} />
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
}: {
  items: Misconception[];
  referenceMap: Map<string, IslamicReference>;
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
                  <ReferenceBlock key={refId} reference={ref} />
                ) : null;
              })}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function ScenariosList({ items }: { items: Scenario[] }) {
  return (
    <ul className="mb-0 list-none space-y-4 pl-0">
      {items.map((s) => (
        <li key={s.id} className="mb-0">
          <p className="mb-0 font-semibold text-textPrimary">{s.audience}</p>
          <p className="mb-1 mt-0.5 text-sm text-textSecondary">{s.summary}</p>
          <p className="mb-1 mt-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Approach
          </p>
          <ul className="mb-0 ml-4 list-disc space-y-1 text-sm text-textSecondary">
            {s.approach.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
          {s.watchFor && s.watchFor.length > 0 && (
            <>
              <p className="mb-1 mt-2 text-xs font-semibold uppercase tracking-wide text-warning">
                Watch for
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
}: {
  items: DuaReminder[];
  referenceMap: Map<string, IslamicReference>;
}) {
  const groups: { label: string; occasion: DuaReminder["occasion"] }[] = [
    { label: "Before the conversation", occasion: "before" },
    { label: "During and after", occasion: "after" },
    { label: "General", occasion: "general" },
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
                      {ref ? ref.citation : "Source pending review"}
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
}: {
  guide: DawahGuide;
  referenceMap: Map<string, IslamicReference>;
}) {
  const ag = guide.additionalGuidance;
  return (
    <section className="mt-12 print:hidden" aria-labelledby="more-for-daees">
      <h2 id="more-for-daees">More for da&apos;ees</h2>
      <p className="text-textSecondary">
        Optional supporting material for real conversations — open what you
        need.
      </p>
      <div className="mt-4 space-y-3">
        {ag.commonQuestions.length > 0 && (
          <Accordion title="Common questions & gentle answers">
            <CommonQuestionsList
              items={ag.commonQuestions}
              referenceMap={referenceMap}
            />
          </Accordion>
        )}
        {ag.misconceptions.length > 0 && (
          <Accordion title="Responding to misconceptions">
            <MisconceptionsList
              items={ag.misconceptions}
              referenceMap={referenceMap}
            />
          </Accordion>
        )}
        {ag.scenarios.length > 0 && (
          <Accordion title="Scenario-based guidance">
            <ScenariosList items={ag.scenarios} />
          </Accordion>
        )}
        {ag.duas.length > 0 && (
          <Accordion title="Dua reminders">
            <DuasList items={ag.duas} referenceMap={referenceMap} />
          </Accordion>
        )}
      </div>
    </section>
  );
}

// Plain, single-column layout shown only when printing — a clean training
// handout covering the whole flow, GORAP, suggestions, and references.
function PrintSummary({ guide }: { guide: DawahGuide }) {
  return (
    <div className="hidden print:block">
      <h2>GORAP — logical progression</h2>
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

      <h2>Conversation flow</h2>
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

      <h2>Field suggestions</h2>
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

      <h2>References (verify before sharing)</h2>
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
