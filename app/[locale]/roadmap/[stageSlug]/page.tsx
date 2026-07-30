import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StepCard } from "@/components/Card";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { SourcesPanel } from "@/components/SourceTags";
import {
  getAllStages,
  getStageById,
  getStepsByStageId,
  getSourcesByIds,
} from "@/lib/content";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { localeUrl } from "@/lib/site";

export function generateStaticParams({
  params,
}: {
  params: { locale: Locale };
}) {
  return getAllStages(params.locale).map((stage) => ({ stageSlug: stage.id }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: Locale; stageSlug: string };
}) {
  const stage = getStageById(params.stageSlug, params.locale);
  const t = getTranslator(params.locale);
  if (!stage) {
    return { title: t("metadata.dynamic.stageNotFoundTitle") };
  }

  return buildPageMetadata({
    locale: params.locale,
    title: `${stage.title} - ${t("brand.name")}`,
    description: stage.description,
    path: `/roadmap/${stage.id}`,
    ogType: "article",
  });
}

export default function StagePage({
  params,
}: {
  params: { locale: Locale; stageSlug: string };
}) {
  const { locale, stageSlug } = params;
  const stages = getAllStages(locale);
  const stage = getStageById(stageSlug, locale);
  if (!stage) notFound();
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["stage"]>("pages.stage");

  const steps = getStepsByStageId(stage.id, locale);
  const stageSources = getSourcesByIds(stage.sourceIds ?? [], locale);
  const stageIndex = stages.findIndex((item) => item.id === stage.id);
  const nextStage =
    stageIndex < stages.length - 1 ? stages[stageIndex + 1] : null;

  let stepOffset = 0;
  for (let index = 0; index < stageIndex; index += 1) {
    stepOffset += stages[index].stepIds.length;
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <div
        className="mx-auto mb-6 h-[3px] w-full rounded-full bg-gradient-to-r from-primary to-secondaryGreen"
        aria-hidden="true"
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: t("nav.roadmap"), url: localeUrl(locale, "/roadmap") },
          { name: stage.title, url: localeUrl(locale, `/roadmap/${stage.id}`) },
        ])}
      />
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.roadmap"), href: localizeHref(locale, "/roadmap") },
          { label: stage.title },
        ]}
      />

      <AnimateIn>
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primaryHover px-4 py-1.5 text-xs font-bold text-white shadow-soft">
              {copy.stageLabel} {stageIndex + 1}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surfaceElevated px-3 py-1.5 text-xs font-medium text-textMuted">
              <Icon name="clock" size="sm" />
              {stage.duration}
            </span>
          </div>
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {stage.title}
          </h1>
          <p className="text-lg text-textSecondary">{stage.subtitle}</p>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="overview-heading">
          <h2
            id="overview-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.overview}
          </h2>
          <p className="mb-6 text-base text-textSecondary">
            {stage.description}
          </p>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-primaryGreen/20 border-l-4 border-l-primary bg-surfaceElevated/50 p-6">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-textMuted">
                {copy.mainGoal}
              </p>
              <p className="mb-0 font-medium text-textPrimary">
                {stage.mainGoal}
              </p>
            </div>
            <div className="rounded-xl border border-primaryGreen/20 border-l-4 border-l-primary bg-surfaceElevated/50 p-6">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-textMuted">
                {copy.successLooksLike}
              </p>
              <p className="mb-0 font-medium text-textPrimary">
                {stage.success}
              </p>
            </div>
          </div>
        </section>
      </AnimateIn>

      {(stage.focusNow?.length ||
        stage.canWait?.length ||
        stage.askHelpIf?.length) && (
        <AnimateIn>
          <section className="mb-12" aria-labelledby="stage-guidance-heading">
            <h2
              id="stage-guidance-heading"
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              What to Focus On Now
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {stage.focusNow && stage.focusNow.length > 0 ? (
                <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-5">
                  <h3 className="mb-3 mt-0 text-base font-semibold text-textPrimary">
                    Focus on now
                  </h3>
                  <ul className="mb-0 flex flex-col gap-2.5 pl-0">
                    {stage.focusNow.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-textSecondary"
                      >
                        <Icon
                          name="check"
                          size="sm"
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {stage.canWait && stage.canWait.length > 0 ? (
                <div className="rounded-2xl border border-border/60 bg-white p-5">
                  <h3 className="mb-3 mt-0 text-base font-semibold text-textPrimary">
                    What can wait
                  </h3>
                  <ul className="mb-0 flex flex-col gap-2.5 pl-0">
                    {stage.canWait.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-textSecondary"
                      >
                        <span
                          className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primaryGreen"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {stage.askHelpIf && stage.askHelpIf.length > 0 ? (
                <div className="rounded-2xl border border-warning/20 bg-accentYellow/20 p-5">
                  <h3 className="mb-3 mt-0 text-base font-semibold text-textPrimary">
                    Ask someone for help if
                  </h3>
                  <ul className="mb-0 flex flex-col gap-2.5 pl-0">
                    {stage.askHelpIf.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-textSecondary"
                      >
                        <Icon
                          name="info"
                          size="sm"
                          className="mt-0.5 shrink-0 text-warning"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        </AnimateIn>
      )}

      {stage.goodNextQuestions && stage.goodNextQuestions.length > 0 && (
        <AnimateIn>
          <section className="mb-12" aria-labelledby="good-questions-heading">
            <h2
              id="good-questions-heading"
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Good Next Questions
            </h2>
            <div className="flex flex-wrap gap-2">
              {stage.goodNextQuestions.map((question) => (
                <Button
                  key={question.href}
                  href={localizeHref(locale, question.href)}
                  variant="outline"
                >
                  {question.label}
                  <Icon name="chevron-right" size="sm" />
                </Button>
              ))}
            </div>
          </section>
        </AnimateIn>
      )}

      <section className="mb-12" aria-labelledby="steps-heading">
        <AnimateIn>
          <h2
            id="steps-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.stepsInStage}
          </h2>
        </AnimateIn>

        <div className="relative flex flex-col gap-3">
          {steps.length > 1 && (
            <div
              className="absolute bottom-5 left-5 top-5 w-0.5 border-l-2 border-dashed border-primaryGreen/40"
              aria-hidden="true"
            />
          )}

          {steps.map((step, index) => (
            <AnimateIn
              key={step.id}
              delay={index * 0.06}
              className="relative z-10"
            >
              <StepCard
                title={step.title}
                stepNumber={stepOffset + index + 1}
                timeEstimate={step.timeEstimate}
                href={localizeHref(locale, `/roadmap/${stage.id}/${step.slug}`)}
              />
            </AnimateIn>
          ))}
        </div>
      </section>

      {stage.dontWorry.length > 0 && (
        <AnimateIn>
          <section className="mb-12" aria-labelledby="dontworry-heading">
            <Accordion title={copy.dontWorryYet}>
              <ul className="mb-0 flex flex-col gap-3 pl-0">
                {stage.dontWorry.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-textSecondary"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon name="check" size="sm" className="text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
          </section>
        </AnimateIn>
      )}

      {stageSources.length > 0 && (
        <AnimateIn>
          <div className="mb-12">
            <SourcesPanel
              sources={stageSources}
              note={t("pages.sourceNotes.stage")}
            />
          </div>
        </AnimateIn>
      )}

      <AnimateIn>
        <section aria-labelledby="next-heading">
          <h2
            id="next-heading"
            className="mb-5 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.whatsNext}
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </h2>
          {nextStage ? (
            <div className="relative overflow-hidden rounded-2xl border border-primaryGreen/30 bg-gradient-to-br from-surfaceElevated to-white p-7">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primaryGreen/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-textMuted">
                  {copy.nextStage}
                </p>
                <p className="mb-1 font-display text-xl font-semibold text-textPrimary">
                  {nextStage.title}
                </p>
                <p className="mb-5 text-sm text-textSecondary">
                  {nextStage.description}
                </p>
                <Button
                  href={localizeHref(locale, `/roadmap/${nextStage.id}`)}
                  variant="primary"
                >
                  {copy.continueTo} {nextStage.title}
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-2xl border border-primaryGreen/30 bg-gradient-to-br from-surfaceElevated to-white p-7 text-center">
              <div
                className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accentYellow/15 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="mb-2 font-display text-xl font-semibold text-textPrimary">
                  {copy.finalStageTitle}
                </p>
                <p className="mb-5 text-sm text-textSecondary">
                  {copy.finalStageBody}
                </p>
                <Button
                  href={localizeHref(locale, "/topics")}
                  variant="primary"
                >
                  {copy.exploreTopics}
                </Button>
              </div>
            </div>
          )}
        </section>
      </AnimateIn>
    </div>
  );
}
