import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { PrintButton } from "@/components/PrintButton";
import { VideoEmbed } from "@/components/VideoEmbed";
import { SourceTags, SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { getSalahCompanionContent } from "@/lib/tool-content";
import { getTranslator, localizeHref, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import type { TopicImage } from "@/lib/types";

interface SalahCompanionCopy {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  wuduButton: string;
  prayerTimesButton: string;
  mattersMostTitle: string;
  mattersMost: string[];
  shapeTitle: string;
  shapeBody: string;
  stepLabel: string;
  recitationTitle: string;
  recitationBody: string;
  transliterationLabel: string;
  meaningLabel: string;
  beginnerNoteLabel: string;
  cannotReciteTitle: string;
  invalidatesTitle: string;
  invalidatesBody: string;
  correctionsTitle: string;
  askImamTitle: string;
  askImam: string[];
  sourcesNote: string;
  prayerTopicButton: string;
  prayerOnRampButton: string;
  duaDhikrButton: string;
  watchTitle: string;
  watchBody: string;
  phrasesVideoTitle: string;
  phrasesVideoBody: string;
  openSeries: string;
  placementTitle: string;
  placementBody: string;
  sahwTitle: string;
  tableTitle: string;
  tableCaption: string;
  tablePrayer: string;
  tableWindow: string;
  tableUnits: string;
  notOwedTitle: string;
  seatedTitle: string;
}

const pageSourceIds = [
  "quran-al-fatihah-1",
  "quran-al-ikhlas-112",
  "quran-al-asr-103",
  "sunnah-bukhari-pray-as-seen",
  "new-muslim-guide-prayer",
  "hisn-ruku-dhikr",
  "hisn-sujud-dhikr",
  "sunnah-bukhari-tashahhud",
  "sunnah-abudawud-taslim",
  "seekersguidance",
  "video-greenlane-five-prayers",
  "video-islamwise-rakah-recap",
  "video-islamwise-comprehensive-remembrance",
  "video-islamwise-prayer-series",
  "sunnah-bukhari-rising-from-ruku",
  "sunnah-ibnmajah-between-sujud",
  "sunnah-abudawud-ruku-sujud-dhikr",
  "sunnah-bukhari-salawat-ibrahimiyyah",
  "sunnah-bukhari-prayed-badly",
  "sunnah-bukhari-prayed-badly-long",
  "islamic-foundation-ireland-prayer-booklet",
  "sunnah-muslim-sahw-doubt",
  "sunnah-bukhari-sahw-after-salam",
  "seekersguidance-sajda-sahw",
  "newmuslims-prostration-forgetfulness",
  "sunnah-muslim-prayer-times",
  "quran-4-103-appointed-times",
  "newmuslims-prayer-for-beginners",
  "sunnah-muslim-islam-wipes-out",
  "seekersguidance-converts-missed-prayers",
  "sunnah-bukhari-pray-standing-sitting",
  "seekersguidance-praying-sitting",
  "seekersguidance-sick-person-prayer",
  "video-greenlane-physical-disability",
  "video-assim-chair-prayer",
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  const copy = t<SalahCompanionCopy>("pages.salahCompanion");
  return buildPageMetadata({
    locale: params.locale,
    title: `${copy.metadataTitle} - ${t("brand.name")}`,
    description: copy.metadataDescription,
    path: "/tools/salah-companion",
  });
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

function ArabicText({ text }: { text: string }) {
  return (
    <p
      className="mb-0 whitespace-pre-line rounded-xl bg-surfaceElevated/60 p-4 text-right font-arabic text-2xl leading-loose text-textPrimary"
      lang="ar"
      dir="rtl"
    >
      {text}
    </p>
  );
}

export default function SalahCompanionPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<SalahCompanionCopy>("pages.salahCompanion");
  const {
    prayerSequence,
    recitations,
    cannotReciteYet,
    invalidatesPrayer,
    commonCorrections,
    mainVideo,
    phraseVideos,
    phraseSeries,
    shapeImage,
    tashahhudPlacement,
    sujudAlSahw,
    prayerTable,
    notOwed,
    seatedPrayer,
  } = getSalahCompanionContent(locale);
  const pageSources = getSourcesByIds(pageSourceIds, locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.tools") },
          { label: t("nav.salahCompanion") },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="star" size="sm" />
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
              href={localizeHref(locale, "/tools/wudu-ghusl")}
              variant="outline"
            >
              {copy.wuduButton}
              <Icon name="chevron-right" size="sm" />
            </Button>
            <Button
              href={localizeHref(locale, "/prayer-times")}
              variant="outline"
            >
              {copy.prayerTimesButton}
              <Icon name="chevron-right" size="sm" />
            </Button>
          </div>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="matters-most-heading"
        >
          <h2
            id="matters-most-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.mattersMostTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.mattersMost.map((item) => (
              <div
                key={item}
                className="page-break-avoid rounded-xl border border-border/50 bg-white p-4"
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

      <AnimateIn>
        <section className="mb-12" aria-labelledby="table-heading">
          <h2
            id="table-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.tableTitle}
          </h2>
          <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="overflow-x-auto rounded-2xl border border-border/60 bg-white shadow-card">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="sr-only">{copy.tableCaption}</caption>
                  <thead className="bg-surfaceElevated text-textPrimary">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        {copy.tablePrayer}
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        {copy.tableWindow}
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        {copy.tableUnits}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {prayerTable.rows.map((row) => (
                      <tr key={row.name} className="border-t border-border/50">
                        <th
                          scope="row"
                          className="px-4 py-3 align-top font-semibold text-textPrimary"
                        >
                          {row.name}
                        </th>
                        <td className="px-4 py-3 align-top leading-relaxed text-textSecondary">
                          {row.window}
                        </td>
                        <td className="px-4 py-3 align-top text-base font-semibold text-primary">
                          {row.units}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mb-3 mt-4 text-sm leading-relaxed text-textSecondary">
                {prayerTable.note}
              </p>
              <SourceTags
                sources={getSourcesByIds(prayerTable.sourceIds, locale)}
                compact
              />
            </div>
            <ContentFigure image={prayerTable.image} />
          </div>
          <div className="mt-6 rounded-2xl border border-primaryGreen/40 bg-surfaceElevated/60 p-5">
            <h3 className="mb-2 mt-0 text-base font-semibold text-textPrimary">
              {copy.notOwedTitle}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-textSecondary">
              {notOwed.text}
            </p>
            <SourceTags
              sources={getSourcesByIds(notOwed.sourceIds, locale)}
              compact
            />
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="shape-heading">
          <div className="mb-5">
            <h2
              id="shape-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.shapeTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.shapeBody}
            </p>
          </div>
          <div className="mb-6 max-w-3xl">
            <ContentFigure image={shapeImage} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {prayerSequence.map((step, index) => (
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
                      {copy.stepLabel.replace("{number}", String(index + 1))} -{" "}
                      {step.posture}
                    </p>
                    <h3 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                  {step.body}
                </p>
                <SourceTags
                  sources={getSourcesByIds(step.sourceIds ?? [], locale)}
                  compact
                />
              </article>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="watch-heading">
          <div className="mb-5 max-w-3xl">
            <h2
              id="watch-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.watchTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.watchBody}
            </p>
          </div>
          <div className="max-w-3xl">
            <VideoEmbed {...mainVideo} />
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="recitation-heading">
          <div className="mb-5">
            <h2
              id="recitation-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.recitationTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.recitationBody}
            </p>
          </div>
          <div className="grid gap-5">
            {recitations.map((item) => (
              <article
                key={item.title}
                className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                      {item.occasion}
                    </p>
                    <h3 className="mb-0 mt-0 text-lg font-semibold text-textPrimary">
                      {item.title}
                    </h3>
                  </div>
                  <SourceTags
                    sources={getSourcesByIds(item.sourceIds, locale)}
                    compact
                  />
                </div>
                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  {item.arabic ? <ArabicText text={item.arabic} /> : null}
                  <div className="rounded-xl border border-border/50 bg-surface/70 p-4">
                    {item.transliteration ? (
                      <>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                          {copy.transliterationLabel}
                        </p>
                        <p className="mb-3 text-sm italic leading-relaxed text-textSecondary">
                          {item.transliteration}
                        </p>
                      </>
                    ) : null}
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                      {copy.meaningLabel}
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                      {item.meaning}
                    </p>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                      {copy.beginnerNoteLabel}
                    </p>
                    <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                      {item.beginnerNote}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="placement-heading">
          <div className="mb-5 max-w-3xl">
            <h2
              id="placement-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.placementTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.placementBody}
            </p>
          </div>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <ContentFigure image={tashahhudPlacement.image} />
            <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-card">
              <SimpleList items={tashahhudPlacement.items} />
              <div className="mt-4">
                <SourceTags
                  sources={getSourcesByIds(
                    tashahhudPlacement.sourceIds,
                    locale,
                  )}
                  compact
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="phrase-videos-heading">
          <div className="mb-5 max-w-3xl">
            <h2
              id="phrase-videos-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.phrasesVideoTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.phrasesVideoBody}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {phraseVideos.map((video) => (
              <VideoEmbed key={video.videoId} {...video} />
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5">
            <h3 className="mb-1 mt-0 text-base font-semibold text-textPrimary">
              {phraseSeries.label}
            </h3>
            {phraseSeries.body && (
              <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                {phraseSeries.body}
              </p>
            )}
            <a
              href={phraseSeries.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-primary"
            >
              {copy.openSeries}
              <Icon name="external-link" size="sm" />
            </a>
          </div>
        </section>
      </AnimateIn>

      <div className="grid gap-5 lg:grid-cols-2">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="cannot-recite-heading"
          >
            <h2
              id="cannot-recite-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.cannotReciteTitle}
            </h2>
            <SimpleList items={cannotReciteYet} />
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-warning/25 bg-accentYellow/15 p-6"
            aria-labelledby="invalidates-heading"
          >
            <h2
              id="invalidates-heading"
              className="mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.invalidatesTitle}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-textSecondary">
              {copy.invalidatesBody}
            </p>
            <SimpleList items={invalidatesPrayer} />
          </section>
        </AnimateIn>
      </div>

      <AnimateIn>
        <section
          className="mt-12 rounded-2xl border border-border/60 bg-white p-6 shadow-card"
          aria-labelledby="sahw-heading"
        >
          <h2
            id="sahw-heading"
            className="mb-3 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.sahwTitle}
          </h2>
          <p className="mb-4 max-w-3xl text-sm leading-relaxed text-textSecondary">
            {sujudAlSahw.summary}
          </p>
          <SimpleList items={sujudAlSahw.steps} />
          <p className="mb-4 mt-4 text-sm font-medium leading-relaxed text-textPrimary">
            {sujudAlSahw.referral}
          </p>
          <SourceTags
            sources={getSourcesByIds(sujudAlSahw.sourceIds, locale)}
            compact
          />
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mt-12 rounded-2xl border border-border/60 bg-white p-6 shadow-card"
          aria-labelledby="seated-heading"
        >
          <h2
            id="seated-heading"
            className="mb-3 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.seatedTitle}
          </h2>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm leading-relaxed text-textSecondary">
                {seatedPrayer.summary}
              </p>
              <SimpleList items={seatedPrayer.points} />
              <p className="mb-4 mt-4 text-sm font-medium leading-relaxed text-textPrimary">
                {seatedPrayer.referral}
              </p>
              <SourceTags
                sources={getSourcesByIds(seatedPrayer.sourceIds, locale)}
                compact
              />
            </div>
            <div>
              <VideoEmbed {...seatedPrayer.video} />
              <div className="mt-4 rounded-xl border border-border/50 bg-surfaceElevated/50 p-4">
                <a
                  href={seatedPrayer.extraLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  {seatedPrayer.extraLink.label}
                  <Icon name="external-link" size="sm" />
                </a>
                {seatedPrayer.extraLink.body && (
                  <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {seatedPrayer.extraLink.body}
                  </p>
                )}
              </div>
            </div>
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
          className="mb-12 rounded-2xl border border-primary/25 bg-surfaceElevated/60 p-5"
          aria-labelledby="ask-imam-heading"
        >
          <h2
            id="ask-imam-heading"
            className="mb-2 mt-0 text-lg font-semibold text-textPrimary"
          >
            {copy.askImamTitle}
          </h2>
          <SimpleList items={copy.askImam} />
        </section>
      </AnimateIn>

      {pageSources.length > 0 && (
        <AnimateIn>
          <div className="mb-10">
            <SourcesPanel sources={pageSources} note={copy.sourcesNote} />
          </div>
        </AnimateIn>
      )}

      <AnimateIn>
        <div className="flex flex-wrap gap-3">
          <Button
            href={localizeHref(locale, "/topics/prayer")}
            variant="primary"
          >
            {copy.prayerTopicButton}
          </Button>
          <Button
            href={localizeHref(locale, "/roadmap/week-1/prayer-on-ramp")}
            variant="outline"
          >
            {copy.prayerOnRampButton}
            <Icon name="chevron-right" size="sm" />
          </Button>
          <Button href={localizeHref(locale, "/dua-dhikr")} variant="outline">
            {copy.duaDhikrButton}
            <Icon name="chevron-right" size="sm" />
          </Button>
        </div>
      </AnimateIn>
    </div>
  );
}
