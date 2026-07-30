import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { PrintButton } from "@/components/PrintButton";
import { SourceTags, SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { getDuaDhikrContent, type DuaEntry } from "@/lib/tool-content";
import { getTranslator, localizeHref, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

interface DuaDhikrCopy {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  duaTopicButton: string;
  salahCompanionButton: string;
  usingTitle: string;
  usingPoints: string[];
  crisisTitle: string;
  crisisBody: string;
  noArabicNote: string;
  transliterationLabel: string;
  meaningLabel: string;
  beginnerNoteLabel: string;
  compactTitle: string;
  compactReference: { title: string; body: string }[];
  sourcesNote: string;
  prayerTopicButton: string;
  mentalHealthButton: string;
  questionsButton: string;
}

const pageSourceIds = [
  "quran-al-fatihah-1",
  "quran-2-186-dua-nearness",
  "quran-2-201-rabbana-atina",
  "quran-2-250-patience",
  "quran-3-8-steadfastness",
  "quran-20-25-28-musa-ease",
  "quran-23-109-forgiveness",
  "sunnah-muslim-after-prayer-dhikr",
  "sunnah-bukhari-sayyid-istighfar",
  "sunnah-bukhari-anxiety-grief",
  "sunnah-ibnmajah-beneficial-knowledge",
  "darussalam",
  "988-lifeline",
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  const copy = t<DuaDhikrCopy>("pages.duaDhikr");
  return buildPageMetadata({
    locale: params.locale,
    title: `${copy.metadataTitle} - ${t("brand.name")}`,
    description: copy.metadataDescription,
    path: "/dua-dhikr",
  });
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

function EntryCard({
  entry,
  locale,
  copy,
}: {
  entry: DuaEntry;
  locale: Locale;
  copy: DuaDhikrCopy;
}) {
  const sources = getSourcesByIds(entry.sourceIds, locale);

  return (
    <article className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {entry.kind}
            </span>
            <span className="text-xs font-medium text-textMuted">
              {entry.occasion}
            </span>
          </div>
          <h3 className="mb-0 mt-0 text-lg font-semibold text-textPrimary">
            {entry.title}
          </h3>
        </div>
        <SourceTags sources={sources} compact />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        {entry.arabic ? (
          <ArabicText text={entry.arabic} />
        ) : (
          <div className="rounded-xl border border-border/50 bg-surfaceElevated/40 p-4">
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.noArabicNote}
            </p>
          </div>
        )}
        <div className="rounded-xl border border-border/50 bg-surface/70 p-4">
          {entry.transliteration ? (
            <>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                {copy.transliterationLabel}
              </p>
              <p className="mb-3 text-sm italic leading-relaxed text-textSecondary">
                {entry.transliteration}
              </p>
            </>
          ) : null}
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
            {copy.meaningLabel}
          </p>
          <p className="mb-3 text-sm leading-relaxed text-textSecondary">
            {entry.meaning}
          </p>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
            {copy.beginnerNoteLabel}
          </p>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {entry.note}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function DuaDhikrPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<DuaDhikrCopy>("pages.duaDhikr");
  const { sections } = getDuaDhikrContent(locale);
  const pageSources = getSourcesByIds(pageSourceIds, locale);
  const totalEntries = sections.reduce(
    (count, section) => count + section.entries.length,
    0,
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.topics"), href: localizeHref(locale, "/topics") },
          { label: t("nav.duaDhikr") },
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
              href={localizeHref(locale, "/topics/dua-and-dhikr")}
              variant="outline"
            >
              {copy.duaTopicButton}
              <Icon name="chevron-right" size="sm" />
            </Button>
            <Button
              href={localizeHref(locale, "/tools/salah-companion")}
              variant="outline"
            >
              {copy.salahCompanionButton}
              <Icon name="chevron-right" size="sm" />
            </Button>
          </div>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="using-reference-heading"
        >
          <h2
            id="using-reference-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.usingTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.usingPoints
              .map((point) => point.replace("{count}", String(totalEntries)))
              .map((item) => (
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
        <section
          className="mb-10 rounded-2xl border border-warning/25 bg-accentYellow/15 p-5"
          aria-labelledby="crisis-boundary-heading"
        >
          <h2
            id="crisis-boundary-heading"
            className="mb-2 mt-0 text-lg font-semibold text-textPrimary"
          >
            {copy.crisisTitle}
          </h2>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {copy.crisisBody}
          </p>
        </section>
      </AnimateIn>

      {sections.map((section, index) => (
        <AnimateIn key={section.id} delay={index * 0.04}>
          <section className="mb-12" aria-labelledby={`${section.id}-heading`}>
            <div className="mb-5">
              <h2
                id={`${section.id}-heading`}
                className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
              >
                {section.title}
              </h2>
              <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                {section.intro}
              </p>
            </div>
            <div className="grid gap-5">
              {section.entries.map((entry) => (
                <EntryCard
                  key={`${section.id}-${entry.title}`}
                  entry={entry}
                  locale={locale}
                  copy={copy}
                />
              ))}
            </div>
          </section>
        </AnimateIn>
      ))}

      <AnimateIn>
        <section
          className="mb-12 rounded-2xl border border-border/60 bg-surfaceElevated/50 p-6"
          aria-labelledby="compact-reference-heading"
        >
          <h2
            id="compact-reference-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.compactTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.compactReference.map((item) => (
              <article
                key={item.title}
                className="page-break-avoid rounded-xl border border-border/50 bg-white p-4"
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
            href={localizeHref(locale, "/mental-health")}
            variant="outline"
          >
            {copy.mentalHealthButton}
            <Icon name="chevron-right" size="sm" />
          </Button>
          <Button
            href={localizeHref(locale, "/roadmap/week-1/questions-and-doubts")}
            variant="outline"
          >
            {copy.questionsButton}
            <Icon name="chevron-right" size="sm" />
          </Button>
        </div>
      </AnimateIn>
    </div>
  );
}
