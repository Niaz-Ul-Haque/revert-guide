import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { PrintButton } from "@/components/PrintButton";
import { SourceTags, SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import {
  getQuranStarterContent,
  type ReadingPath,
  type ResourceLink,
  type WeekDay,
} from "@/lib/tool-content";
import { getTranslator, localizeHref, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

interface QuranStarterCopy {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  quranBreadcrumb: string;
  quranTopicButton: string;
  salahCompanionButton: string;
  mattersMostTitle: string;
  mattersMost: string[];
  translationTitle: string;
  translationBody: string;
  vocabularyTitle: string;
  readingPathsTitle: string;
  readingPathsBody: string;
  weekTitle: string;
  weekBody: string;
  listeningTitle: string;
  listening: string[];
  respectTitle: string;
  respect: string[];
  confusingTitle: string;
  confusingVerse: { title: string; body: string }[];
  resourcesTitle: string;
  resourcesBody: string;
  openResource: string;
  sourcesNote: string;
  roadmapButton: string;
  duaDhikrButton: string;
}

const pageSourceIds = [
  "quran-com",
  "tanzil",
  "clear-quran",
  "quran-al-fatihah-1",
  "quran-al-ikhlas-112",
  "quran-al-falaq-113",
  "quran-an-nas-114",
  "quran-39-53-mercy",
  "quran-2-186-dua-nearness",
  "quran-23-109-forgiveness",
  "quran-yusuf-12",
  "quran-20-14-prayer-remembrance",
  "quran-2-153-patience-prayer",
  "quran-al-asr-103",
  "quran-reciter-mishary",
  "new-muslim-academy-quran-etiquette",
  "new-muslim-academy",
  "seekersguidance",
  "yaqeen-institute",
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  const copy = t<QuranStarterCopy>("pages.quranStarter");
  return buildPageMetadata({
    locale: params.locale,
    title: `${copy.metadataTitle} - ${t("brand.name")}`,
    description: copy.metadataDescription,
    path: "/quran-starter",
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

function ReadingPathCard({
  path,
  locale,
}: {
  path: ReadingPath;
  locale: Locale;
}) {
  return (
    <article className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
            {path.time}
          </p>
          <h3 className="mb-0 mt-0 text-lg font-semibold text-textPrimary">
            {path.title}
          </h3>
        </div>
        <SourceTags sources={getSourcesByIds(path.sourceIds, locale)} compact />
      </div>
      <p className="mb-4 text-sm leading-relaxed text-textSecondary">
        {path.body}
      </p>
      <SimpleList items={path.readings} />
    </article>
  );
}

function WeekCard({ item, locale }: { item: WeekDay; locale: Locale }) {
  return (
    <article className="page-break-avoid rounded-xl border border-border/50 bg-white p-4">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {item.day}
          </p>
          <h3 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
            {item.title}
          </h3>
        </div>
        <SourceTags sources={getSourcesByIds(item.sourceIds, locale)} compact />
      </div>
      <p className="mb-0 text-sm leading-relaxed text-textSecondary">
        {item.body}
      </p>
    </article>
  );
}

function ResourceCard({
  item,
  locale,
  openLabel,
}: {
  item: ResourceLink;
  locale: Locale;
  openLabel: string;
}) {
  return (
    <article className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon name={item.icon} size="md" />
        </span>
        <div>
          <h3 className="mb-1 mt-0 text-base font-semibold text-textPrimary">
            {item.title}
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-textSecondary">
            {item.body}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-surfaceElevated px-3 py-1.5 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/15 hover:text-primaryHover"
            >
              {openLabel}
              <Icon name="external-link" size="sm" />
            </a>
            <SourceTags
              sources={getSourcesByIds(item.sourceIds, locale)}
              compact
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function QuranStarterPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<QuranStarterCopy>("pages.quranStarter");
  const { vocabulary, translationTips, readingPaths, weekPlan, resourceLinks } =
    getQuranStarterContent(locale);
  const pageSources = getSourcesByIds(pageSourceIds, locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.topics"), href: localizeHref(locale, "/topics") },
          {
            label: copy.quranBreadcrumb,
            href: localizeHref(locale, "/topics/quran"),
          },
          { label: t("nav.quranStarter") },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="book" size="sm" />
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
              href={localizeHref(locale, "/topics/quran")}
              variant="outline"
            >
              {copy.quranTopicButton}
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

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="translation-policy-heading"
          >
            <h2
              id="translation-policy-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.translationTitle}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-textSecondary">
              {copy.translationBody}
            </p>
            <SourceTags
              sources={getSourcesByIds(
                ["quran-com", "tanzil", "clear-quran"],
                locale,
              )}
              compact
              className="mb-4"
            />
            <SimpleList items={translationTips} />
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-surfaceElevated/50 p-6"
            aria-labelledby="vocabulary-heading"
          >
            <h2
              id="vocabulary-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.vocabularyTitle}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {vocabulary.map((item) => (
                <article
                  key={item.term}
                  className="rounded-xl border border-border/50 bg-white p-4"
                >
                  <h3 className="mb-1 mt-0 text-base font-semibold text-textPrimary">
                    {item.term}
                  </h3>
                  <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </AnimateIn>
      </div>

      <AnimateIn>
        <section className="my-12" aria-labelledby="reading-paths-heading">
          <div className="mb-5">
            <h2
              id="reading-paths-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.readingPathsTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.readingPathsBody}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {readingPaths.map((path) => (
              <ReadingPathCard key={path.title} path={path} locale={locale} />
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-12 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="week-plan-heading"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2
                id="week-plan-heading"
                className="mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
              >
                {copy.weekTitle}
              </h2>
              <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                {copy.weekBody}
              </p>
            </div>
            <PrintButton />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {weekPlan.map((item) => (
              <WeekCard key={item.day} item={item} locale={locale} />
            ))}
          </div>
        </section>
      </AnimateIn>

      <div className="grid gap-5 lg:grid-cols-2">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="listening-heading"
          >
            <h2
              id="listening-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.listeningTitle}
            </h2>
            <SimpleList items={copy.listening} />
            <SourceTags
              sources={getSourcesByIds(["quran-reciter-mishary"], locale)}
              compact
              className="mt-4"
            />
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-warning/25 bg-accentYellow/15 p-6"
            aria-labelledby="respect-heading"
          >
            <h2
              id="respect-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.respectTitle}
            </h2>
            <SimpleList items={copy.respect} />
            <SourceTags
              sources={getSourcesByIds(
                ["new-muslim-academy-quran-etiquette"],
                locale,
              )}
              compact
              className="mt-4"
            />
          </section>
        </AnimateIn>
      </div>

      <AnimateIn>
        <section
          className="my-12 rounded-2xl border border-primary/25 bg-surfaceElevated/60 p-6"
          aria-labelledby="confusing-verse-heading"
        >
          <h2
            id="confusing-verse-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.confusingTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {copy.confusingVerse.map((item) => (
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

      <AnimateIn>
        <section className="mb-12" aria-labelledby="resources-heading">
          <div className="mb-5">
            <h2
              id="resources-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.resourcesTitle}
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {copy.resourcesBody}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {resourceLinks.map((item) => (
              <ResourceCard
                key={item.title}
                item={item}
                locale={locale}
                openLabel={copy.openResource}
              />
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
            href={localizeHref(locale, "/topics/quran")}
            variant="primary"
          >
            {copy.quranTopicButton}
          </Button>
          <Button
            href={localizeHref(locale, "/roadmap/week-2-3/quran")}
            variant="outline"
          >
            {copy.roadmapButton}
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
