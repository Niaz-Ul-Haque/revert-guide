import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { PrintButton } from "@/components/PrintButton";
import { VideoEmbed } from "@/components/VideoEmbed";
import { InfoCardSection } from "@/components/InfoCardSection";
import { SourceTags, SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { getWuduGhuslContent, type PracticeStep } from "@/lib/tool-content";
import { localizeHref, type Locale } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { buildPageMetadata } from "@/lib/metadata";
import type { TopicImage } from "@/lib/types";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { localeUrl } from "@/lib/site";

interface WuduGhuslCopy {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  purificationTopicButton: string;
  mattersMostTitle: string;
  mattersMost: string[];
  wuduTitle: string;
  wuduBody: string;
  ghuslTitle: string;
  ghuslBody: string;
  stepLabel: string;
  wuduBreaksTitle: string;
  ghuslNeededTitle: string;
  correctionsTitle: string;
  askQualifiedTitle: string;
  askQualified: string[];
  sourcesNote: string;
  ghuslRoadmapButton: string;
  prayerTopicButton: string;
  watchTitle: string;
  breaksAgreedTitle: string;
  breaksDifferTitle: string;
  convertGhuslTitle: string;
  menstruationLink: string;
  tayammumTitle: string;
  tayammumStepsTitle: string;
  questionsTitle: string;
}

const sourceIds = [
  "quran-com",
  "new-muslim-guide-wudu",
  "new-muslim-guide-hadath",
  "seekersguidance",
  "video-greenlane-wudu",
  "video-greenlane-ghusl",
  "sunnah-bukhari-wudu-after-hadath",
  "sunnah-abudawud-sleep-wudu",
  "sunnah-bukhari-doubt-wind",
  "seekersguidance-what-breaks-wudu",
  "islamic-foundation-ireland-prayer-booklet",
  "sunnah-abudawud-convert-bath",
  "muslimmatters-convert-ghusl",
  "islamweb-convert-ghusl",
  "quran-4-43-tayammum",
  "quran-5-6-wudu-tayammum",
  "sunnah-bukhari-tayammum-one-strike",
  "newmuslims-tayammum",
  "seekersguidance-tayammum",
  "video-greenlane-tayammum",
  "seekersguidance-thick-socks",
  "seekersguidance-nail-polish",
  "seekersguidance-cast-hanafi",
  "seekersguidance-cast-shafii",
  "newmuslims-ghusl",
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  const copy = t<WuduGhuslCopy>("pages.wuduGhusl");
  return buildPageMetadata({
    locale: params.locale,
    title: `${copy.metadataTitle} - ${t("brand.name")}`,
    description: copy.metadataDescription,
    path: "/tools/wudu-ghusl",
  });
}

function StepGrid({
  steps,
  stepLabel,
}: {
  steps: PracticeStep[];
  stepLabel: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card"
        >
          <div className="mb-3 flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon name={step.icon} size="md" />
            </span>
            <div>
              <p className="mb-0 text-xs font-semibold uppercase tracking-wider text-textMuted">
                {stepLabel.replace("{number}", String(index + 1))}
              </p>
              <h3 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
                {step.title}
              </h3>
            </div>
          </div>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {step.body}
          </p>
        </article>
      ))}
    </div>
  );
}

function ContentFigure({ image }: { image: TopicImage }) {
  return (
    <figure className="page-break-avoid m-0 overflow-hidden rounded-2xl border border-border/60 bg-white p-4">
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={800}
        className="h-auto w-full"
      />
      {(image.caption || image.credit) && (
        <figcaption className="mt-3 text-sm leading-relaxed text-textSecondary">
          {image.caption}
          {image.credit && (
            <span className="block text-xs text-textMuted">{image.credit}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="mb-0 flex flex-col gap-2.5 pl-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-textSecondary"
        >
          <span
            className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primaryGreen"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WuduGhuslPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<WuduGhuslCopy>("pages.wuduGhusl");
  const {
    wuduSteps,
    ghuslSteps,
    wuduBreaks,
    ghuslNeeded,
    commonCorrections,
    wuduVideo,
    ghuslVideo,
    wuduBreaksDiffer,
    wuduBreaksNote,
    wuduBreaksSourceIds,
    wuduBreaksImage,
    convertGhusl,
    wuduImage,
    ghuslImage,
    tayammum,
    commonQuestions,
    istinja,
    moreCards = [],
  } = getWuduGhuslContent(locale);
  const sources = getSourcesByIds(
    Array.from(
      new Set([
        ...sourceIds,
        ...(istinja?.sourceIds ?? []),
        ...moreCards.flatMap((card) => card.sourceIds),
        ...commonQuestions.flatMap((item) => item.sourceIds),
      ]),
    ),
    locale,
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: t("nav.tools"), url: localeUrl(locale, "/resources") },
          { name: copy.title, url: localeUrl(locale, "/tools/wudu-ghusl") },
        ])}
      />
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.tools") },
          { label: copy.title },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="check" size="sm" />
            {copy.eyebrow}
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <Button
              href={localizeHref(locale, "/topics/purification")}
              variant="outline"
            >
              {copy.purificationTopicButton}
              <Icon name="chevron-right" size="sm" />
            </Button>
          </div>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="what-matters-heading"
        >
          <h2
            id="what-matters-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.mattersMostTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.mattersMost.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/50 bg-white p-4"
              >
                <Icon name="check" size="sm" className="mb-2 text-primary" />
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {istinja && (
        <AnimateIn>
          <InfoCardSection card={istinja} locale={locale} className="mb-12" />
        </AnimateIn>
      )}

      <AnimateIn>
        <section className="mb-12" aria-labelledby="wudu-heading">
          <div className="mb-5">
            <h2
              id="wudu-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.wuduTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.wuduBody}
            </p>
          </div>
          <div className="mb-6 max-w-3xl">
            <ContentFigure image={wuduImage} />
          </div>
          <StepGrid steps={wuduSteps} stepLabel={copy.stepLabel} />
          <div className="mt-8 max-w-2xl">
            <h3 className="mb-3 mt-0 text-lg font-semibold text-textPrimary">
              {copy.watchTitle}
            </h3>
            <VideoEmbed {...wuduVideo} />
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="ghusl-heading">
          <div className="mb-5">
            <h2
              id="ghusl-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.ghuslTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.ghuslBody}
            </p>
          </div>
          <div className="mb-6 max-w-3xl">
            <ContentFigure image={ghuslImage} />
          </div>
          <StepGrid steps={ghuslSteps} stepLabel={copy.stepLabel} />
          <div className="mt-8 max-w-2xl">
            <h3 className="mb-3 mt-0 text-lg font-semibold text-textPrimary">
              {copy.watchTitle}
            </h3>
            <VideoEmbed {...ghuslVideo} />
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-12 rounded-2xl border border-border/60 bg-white p-6 shadow-card"
          aria-labelledby="wudu-breaks-heading"
        >
          <h2
            id="wudu-breaks-heading"
            className="mb-5 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.wuduBreaksTitle}
          </h2>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="mb-3 mt-0 text-base font-semibold text-textPrimary">
                  {copy.breaksAgreedTitle}
                </h3>
                <SimpleList items={wuduBreaks} />
              </div>
              <div>
                <h3 className="mb-3 mt-0 text-base font-semibold text-textPrimary">
                  {copy.breaksDifferTitle}
                </h3>
                <SimpleList items={wuduBreaksDiffer} />
              </div>
              <p className="mb-0 text-sm font-medium leading-relaxed text-textPrimary">
                {wuduBreaksNote}
              </p>
              <SourceTags
                sources={getSourcesByIds(wuduBreaksSourceIds, locale)}
                compact
              />
            </div>
            <ContentFigure image={wuduBreaksImage} />
          </div>
        </section>
      </AnimateIn>

      <div className="grid gap-5 lg:grid-cols-2">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="ghusl-needed-heading"
          >
            <h2
              id="ghusl-needed-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.ghuslNeededTitle}
            </h2>
            <SimpleList items={ghuslNeeded} />
            <Link
              href={localizeHref(locale, "/topics/menstruation-and-worship")}
              className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {copy.menstruationLink}
              <Icon name="chevron-right" size="sm" />
            </Link>
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-primaryGreen/40 bg-surfaceElevated/60 p-6"
            aria-labelledby="convert-ghusl-heading"
          >
            <h2
              id="convert-ghusl-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.convertGhuslTitle}
            </h2>
            <SimpleList items={convertGhusl.points} />
            <div className="mt-4">
              <SourceTags
                sources={getSourcesByIds(convertGhusl.sourceIds, locale)}
                compact
              />
            </div>
          </section>
        </AnimateIn>
      </div>

      <AnimateIn>
        <section
          className="mt-12 rounded-2xl border border-border/60 bg-white p-6 shadow-card"
          aria-labelledby="tayammum-heading"
        >
          <h2
            id="tayammum-heading"
            className="mb-3 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.tayammumTitle}
          </h2>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm leading-relaxed text-textSecondary">
                {tayammum.summary}
              </p>
              <h3 className="mb-3 mt-0 text-base font-semibold text-textPrimary">
                {copy.tayammumStepsTitle}
              </h3>
              <ol className="mb-4 flex flex-col gap-2 pl-0">
                {tayammum.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-relaxed text-textSecondary"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                {tayammum.schoolNote}
              </p>
              <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                {tayammum.ends}
              </p>
              <p className="mb-4 text-sm font-medium leading-relaxed text-textPrimary">
                {tayammum.referral}
              </p>
              <SourceTags
                sources={getSourcesByIds(tayammum.sourceIds, locale)}
                compact
              />
            </div>
            <VideoEmbed {...tayammum.video} />
          </div>
        </section>
      </AnimateIn>

      {moreCards.map((card) => (
        <AnimateIn key={card.id}>
          <InfoCardSection card={card} locale={locale} />
        </AnimateIn>
      ))}

      <AnimateIn>
        <section className="mt-12" aria-labelledby="questions-heading">
          <h2
            id="questions-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.questionsTitle}
          </h2>
          <div className="flex flex-col gap-3">
            {commonQuestions.map((item) => (
              <Accordion key={item.question} title={item.question}>
                <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                  {item.answer}
                </p>
                <SourceTags
                  sources={getSourcesByIds(item.sourceIds, locale)}
                  compact
                />
              </Accordion>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="my-12" aria-labelledby="corrections-heading">
          <h2
            id="corrections-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.correctionsTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {commonCorrections.map((item) => (
              <article
                key={item.title}
                className="page-break-avoid rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5"
              >
                <h3 className="mb-2 mt-0 text-base font-semibold text-textPrimary">
                  {item.title}
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-12 rounded-2xl border border-warning/20 bg-accentYellow/20 p-5"
          aria-labelledby="qualified-help-heading"
        >
          <h2
            id="qualified-help-heading"
            className="mb-2 mt-0 text-lg font-semibold text-textPrimary"
          >
            {copy.askQualifiedTitle}
          </h2>
          <SimpleList items={copy.askQualified} />
        </section>
      </AnimateIn>

      {sources.length > 0 && (
        <AnimateIn>
          <div className="mb-10">
            <SourcesPanel sources={sources} note={copy.sourcesNote} />
          </div>
        </AnimateIn>
      )}

      <AnimateIn>
        <div className="flex flex-wrap gap-3">
          <Button
            href={localizeHref(locale, "/roadmap/day-0-1/ghusl")}
            variant="primary"
          >
            {copy.ghuslRoadmapButton}
          </Button>
          <Button
            href={localizeHref(locale, "/topics/prayer")}
            variant="outline"
          >
            {copy.prayerTopicButton}
            <Icon name="chevron-right" size="sm" />
          </Button>
        </div>
      </AnimateIn>
    </div>
  );
}
