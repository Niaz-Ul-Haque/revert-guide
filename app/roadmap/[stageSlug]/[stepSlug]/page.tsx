import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllStages,
  getStageById,
  getStepBySlug,
  getStepsByStageId,
  getResourceById,
  getGlossaryEntryById,
  getTopicById,
  getAllSteps,
} from "@/lib/content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion } from "@/components/Accordion";
import { Callout } from "@/components/Callout";
import { ResourceCard } from "@/components/Card";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import type { Metadata } from "next";

interface StepPageProps {
  params: { stageSlug: string; stepSlug: string };
}

export function generateStaticParams() {
  const stages = getAllStages();
  const params: { stageSlug: string; stepSlug: string }[] = [];
  for (const stage of stages) {
    const steps = getStepsByStageId(stage.id);
    for (const step of steps) {
      params.push({ stageSlug: stage.id, stepSlug: step.slug });
    }
  }
  return params;
}

export function generateMetadata({ params }: StepPageProps): Metadata {
  const step = getStepBySlug(params.stepSlug);
  if (!step) return { title: "Step Not Found - Revert Guide" };
  return { title: `${step.title} - Revert Guide` };
}

export default function StepPage({ params }: StepPageProps) {
  const stage = getStageById(params.stageSlug);
  if (!stage) notFound();

  const step = getStepBySlug(params.stepSlug);
  if (!step || step.stageId !== stage.id) notFound();

  const stages = getAllStages();

  const allStepsOrdered: {
    step: ReturnType<typeof getStepBySlug>;
    stageId: string;
  }[] = [];
  for (const s of stages) {
    const stageSteps = getStepsByStageId(s.id);
    for (const st of stageSteps) {
      allStepsOrdered.push({ step: st, stageId: s.id });
    }
  }
  const currentIndex = allStepsOrdered.findIndex((e) => e.step?.id === step.id);
  const prevEntry = currentIndex > 0 ? allStepsOrdered[currentIndex - 1] : null;
  const nextEntry =
    currentIndex < allStepsOrdered.length - 1
      ? allStepsOrdered[currentIndex + 1]
      : null;

  const stepNumber = currentIndex + 1;

  const resources = step.resourceIds
    .map((id) => getResourceById(id))
    .filter((r): r is NonNullable<typeof r> => r !== undefined);

  const glossaryTerms = step.relatedGlossaryIds
    .map((id) => getGlossaryEntryById(id))
    .filter((g): g is NonNullable<typeof g> => g !== undefined);

  const relatedTopics = step.relatedTopicIds
    .map((id) => getTopicById(id))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Roadmap", href: "/roadmap" },
          { label: stage.title, href: `/roadmap/${stage.id}` },
          { label: step.title },
        ]}
      />

      {/* Step Header */}
      <AnimateIn>
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primaryHover px-4 py-1.5 text-xs font-bold text-white shadow-soft">
              Step {stepNumber}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surfaceElevated px-3 py-1.5 text-xs font-medium text-textMuted">
              {stage.title}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-textMuted">
              <Icon name="clock" size="sm" />
              {step.timeEstimate}
            </span>
          </div>
          <h1 className="mb-0 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {step.title}
          </h1>
        </header>
      </AnimateIn>

      {/* Why This Step Matters */}
      <AnimateIn>
        <section className="mb-12" aria-labelledby="why-heading">
          <h2
            id="why-heading"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Why This Step Matters
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {step.whyMatters}
          </p>
        </section>
      </AnimateIn>

      {/* Exact Actions */}
      <section className="mb-12" aria-labelledby="actions-heading">
        <AnimateIn>
          <h2
            id="actions-heading"
            className="mb-6 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Exact Actions
          </h2>
        </AnimateIn>
        <ol className="flex flex-col gap-6 pl-0">
          {step.exactActions.map((action, index) => (
            <AnimateIn key={index} delay={index * 0.06}>
              <li className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-soft"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-base font-semibold text-textPrimary">
                    {action.text}
                  </p>
                  {action.subSteps && action.subSteps.length > 0 && (
                    <ul className="mb-0 mt-3 flex flex-col gap-2 pl-0">
                      {action.subSteps.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex items-start gap-2.5 text-sm text-textSecondary"
                        >
                          <span
                            className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primaryGreen"
                            aria-hidden="true"
                          />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </section>

      {/* Common Obstacles */}
      {step.obstacles.length > 0 && (
        <section className="mb-12" aria-labelledby="obstacles-heading">
          <AnimateIn>
            <h2
              id="obstacles-heading"
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Common Obstacles
            </h2>
          </AnimateIn>
          <div className="flex flex-col gap-3">
            {step.obstacles.map((obstacle, index) => (
              <AnimateIn key={index} delay={index * 0.05}>
                <Accordion title={obstacle.problem}>
                  <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {obstacle.solution}
                  </p>
                </Accordion>
              </AnimateIn>
            ))}
          </div>
        </section>
      )}

      {/* Tiny Version */}
      <AnimateIn>
        <Callout variant="tip" title="Tiny Version">
          <p>{step.tinyVersion}</p>
        </Callout>
      </AnimateIn>

      {/* What Unlocks Next */}
      <AnimateIn>
        <section className="mb-12" aria-labelledby="unlocks-heading">
          <h2
            id="unlocks-heading"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            What Unlocks Next
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {step.unlocksNext}
          </p>
        </section>
      </AnimateIn>

      {/* Recommended Resources */}
      {resources.length > 0 && (
        <section className="mb-12" aria-labelledby="resources-heading">
          <AnimateIn>
            <h2
              id="resources-heading"
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Recommended Resources
            </h2>
          </AnimateIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((resource, index) => (
              <AnimateIn key={resource.id} delay={index * 0.06}>
                <ResourceCard
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  url={resource.url}
                />
              </AnimateIn>
            ))}
          </div>
        </section>
      )}

      {/* Related Topics */}
      {relatedTopics.length > 0 && (
        <AnimateIn>
          <section className="mb-12" aria-labelledby="related-topics-heading">
            <h2
              id="related-topics-heading"
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Related Topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/topics/${topic.id}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border/60 bg-white px-4 py-2 text-sm font-medium text-primary no-underline shadow-card transition-all duration-200 hover:border-primaryGreen/50 hover:bg-surfaceElevated hover:shadow-soft"
                >
                  {topic.title}
                  <Icon name="chevron-right" size="sm" />
                </Link>
              ))}
            </div>
          </section>
        </AnimateIn>
      )}

      {/* Prev / Next Navigation */}
      <nav
        className="flex flex-col gap-3 border-t border-border/40 pt-10 sm:flex-row sm:justify-between"
        aria-label="Step navigation"
      >
        {prevEntry?.step ? (
          <Button
            href={`/roadmap/${prevEntry.stageId}/${prevEntry.step.slug}`}
            variant="outline"
            className="flex-1 justify-start"
          >
            <Icon name="chevron-right" size="sm" className="rotate-180" />
            <span className="text-left">
              <span className="block text-xs font-normal text-textMuted">
                Previous
              </span>
              <span className="block">{prevEntry.step.title}</span>
            </span>
          </Button>
        ) : (
          <div className="flex-1" />
        )}

        {nextEntry?.step ? (
          <Button
            href={`/roadmap/${nextEntry.stageId}/${nextEntry.step.slug}`}
            variant="primary"
            className="flex-1 justify-end"
          >
            <span className="text-right">
              <span className="block text-xs font-normal opacity-80">Next</span>
              <span className="block">{nextEntry.step.title}</span>
            </span>
            <Icon name="chevron-right" size="sm" />
          </Button>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </div>
  );
}
