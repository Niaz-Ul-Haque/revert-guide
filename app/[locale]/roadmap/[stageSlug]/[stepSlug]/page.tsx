import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion } from "@/components/Accordion";
import { Callout } from "@/components/Callout";
import { ResourceCard } from "@/components/Card";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import {
  getAllStages,
  getStageById,
  getStepBySlug,
  getStepsByStageId,
  getResourceById,
  getGlossaryEntryById,
  getTopicById,
} from "@/lib/content";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";

export function generateStaticParams({
  params,
}: {
  params: { locale: Locale };
}) {
  const output: { stageSlug: string; stepSlug: string }[] = [];

  for (const stage of getAllStages(params.locale)) {
    for (const step of getStepsByStageId(stage.id, params.locale)) {
      output.push({ stageSlug: stage.id, stepSlug: step.slug });
    }
  }

  return output;
}

export function generateMetadata({
  params,
}: {
  params: { locale: Locale; stepSlug: string };
}) {
  const step = getStepBySlug(params.stepSlug, params.locale);
  const t = getTranslator(params.locale);
  return {
    title: step
      ? `${step.title} - ${t("brand.name")}`
      : t("metadata.dynamic.stepNotFoundTitle"),
  };
}

export default function StepPage({
  params,
}: {
  params: { locale: Locale; stageSlug: string; stepSlug: string };
}) {
  const { locale, stageSlug, stepSlug } = params;
  const stage = getStageById(stageSlug, locale);
  if (!stage) notFound();
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["step"]>("pages.step");

  const step = getStepBySlug(stepSlug, locale);
  if (!step || step.stageId !== stage.id) notFound();

  const stages = getAllStages(locale);
  const ordered = stages.flatMap((item) =>
    getStepsByStageId(item.id, locale).map((stageStep) => ({
      step: stageStep,
      stageId: item.id,
    })),
  );

  const currentIndex = ordered.findIndex((entry) => entry.step.id === step.id);
  const prevEntry = currentIndex > 0 ? ordered[currentIndex - 1] : null;
  const nextEntry =
    currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null;
  const stepNumber = currentIndex + 1;

  const resources = step.resourceIds
    .map((id) => getResourceById(id, locale))
    .filter(
      (resource): resource is NonNullable<typeof resource> =>
        resource !== undefined,
    );

  const relatedTopics = step.relatedTopicIds
    .map((id) => getTopicById(id, locale))
    .filter((topic): topic is NonNullable<typeof topic> => topic !== undefined);

  const glossaryTerms = step.relatedGlossaryIds
    .map((id) => getGlossaryEntryById(id, locale))
    .filter((entry): entry is NonNullable<typeof entry> => entry !== undefined);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.roadmap"), href: localizeHref(locale, "/roadmap") },
          {
            label: stage.title,
            href: localizeHref(locale, `/roadmap/${stage.id}`),
          },
          { label: step.title },
        ]}
      />

      <AnimateIn>
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primaryHover px-4 py-1.5 text-xs font-bold text-white shadow-soft">
              {copy.stepLabel} {stepNumber}
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

      <AnimateIn>
        <section className="mb-12" aria-labelledby="why-heading">
          <h2
            id="why-heading"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.whyThisStepMatters}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {step.whyMatters}
          </p>
        </section>
      </AnimateIn>

      <section className="mb-12" aria-labelledby="actions-heading">
        <AnimateIn>
          <h2
            id="actions-heading"
            className="mb-6 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.exactActions}
          </h2>
        </AnimateIn>
        <ol className="flex flex-col gap-6 pl-0">
          {step.exactActions.map((action, index) => (
            <AnimateIn key={`${action.text}-${index}`} delay={index * 0.06}>
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
                      {action.subSteps.map((subStep) => (
                        <li
                          key={subStep}
                          className="flex items-start gap-2.5 text-sm text-textSecondary"
                        >
                          <span
                            className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primaryGreen"
                            aria-hidden="true"
                          />
                          <span>{subStep}</span>
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

      {step.obstacles.length > 0 && (
        <section className="mb-12" aria-labelledby="obstacles-heading">
          <AnimateIn>
            <h2
              id="obstacles-heading"
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.commonObstacles}
            </h2>
          </AnimateIn>
          <div className="flex flex-col gap-3">
            {step.obstacles.map((obstacle, index) => (
              <AnimateIn
                key={`${obstacle.problem}-${index}`}
                delay={index * 0.05}
              >
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

      <AnimateIn>
        <Callout variant="tip" title={copy.tinyVersion}>
          <p>{step.tinyVersion}</p>
        </Callout>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="unlocks-heading">
          <h2
            id="unlocks-heading"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.whatUnlocksNext}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {step.unlocksNext}
          </p>
        </section>
      </AnimateIn>

      {resources.length > 0 && (
        <section className="mb-12" aria-labelledby="resources-heading">
          <AnimateIn>
            <h2
              id="resources-heading"
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.recommendedResources}
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
                  locale={locale}
                />
              </AnimateIn>
            ))}
          </div>
        </section>
      )}

      {relatedTopics.length > 0 && (
        <AnimateIn>
          <section className="mb-12" aria-labelledby="related-topics-heading">
            <h2
              id="related-topics-heading"
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.relatedTopics}
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={localizeHref(locale, `/topics/${topic.id}`)}
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

      {glossaryTerms.length > 0 && (
        <AnimateIn>
          <section className="mb-12" aria-labelledby="glossary-heading">
            <h2
              id="glossary-heading"
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.keyTerms}
            </h2>
            <div className="flex flex-wrap gap-2">
              {glossaryTerms.map((entry) => (
                <Link
                  key={entry.id}
                  href={localizeHref(locale, `/glossary#${entry.id}`)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border/60 bg-white px-4 py-2 text-sm font-medium text-primary no-underline shadow-card transition-all duration-200 hover:border-primaryGreen/50 hover:bg-surfaceElevated hover:shadow-soft"
                >
                  {entry.term}
                </Link>
              ))}
            </div>
          </section>
        </AnimateIn>
      )}

      <nav
        className="flex flex-col gap-3 border-t border-border/40 pt-10 sm:flex-row sm:justify-between"
        aria-label={copy.navigationAriaLabel}
      >
        {prevEntry?.step ? (
          <Button
            href={localizeHref(
              locale,
              `/roadmap/${prevEntry.stageId}/${prevEntry.step.slug}`,
            )}
            variant="outline"
            className="flex-1 justify-start"
          >
            <Icon name="chevron-right" size="sm" className="rotate-180" />
            <span className="text-left">
              <span className="block text-xs font-normal text-textMuted">
                {copy.previous}
              </span>
              <span className="block">{prevEntry.step.title}</span>
            </span>
          </Button>
        ) : (
          <div className="flex-1" />
        )}

        {nextEntry?.step ? (
          <Button
            href={localizeHref(
              locale,
              `/roadmap/${nextEntry.stageId}/${nextEntry.step.slug}`,
            )}
            variant="primary"
            className="flex-1 justify-end"
          >
            <span className="text-right">
              <span className="block text-xs font-normal opacity-80">
                {copy.next}
              </span>
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
