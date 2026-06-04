import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { PrintButton } from "@/components/PrintButton";
import { SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import {
  getSeasonalGuideBySlug,
  getSeasonalGuides,
} from "@/lib/seasonal-guides";
import { getTranslator, localizeHref, type Locale } from "@/lib/i18n";

export function generateStaticParams({
  params,
}: {
  params: { locale: Locale };
}) {
  return getSeasonalGuides(params.locale).map((guide) => ({
    guideSlug: guide.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: Locale; guideSlug: string };
}) {
  const t = getTranslator(params.locale);
  const guide = getSeasonalGuideBySlug(params.guideSlug, params.locale);
  const copy = t<{ notFoundTitle: string }>("pages.seasonal.detail");

  return {
    title: guide
      ? `${guide.title} - ${t("brand.name")}`
      : `${copy.notFoundTitle} - ${t("brand.name")}`,
    description: guide?.description,
  };
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="mb-0 flex flex-col gap-2.5 pl-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-textSecondary"
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
  );
}

export default function SeasonalGuideDetailPage({
  params,
}: {
  params: { locale: Locale; guideSlug: string };
}) {
  const locale = params.locale;
  const guide = getSeasonalGuideBySlug(params.guideSlug, locale);
  if (!guide) notFound();

  const t = getTranslator(locale);
  const copy = t<{
    indexTitle: string;
    allButton: string;
    startHere: string;
    focusNow: string;
    canWait: string;
    scriptsTitle: string;
    qualifiedTitle: string;
    qualifiedBody: string;
    sourcesNote: string;
    relatedTitle: string;
    backLink: string;
  }>("pages.seasonal.detail");
  const href = (path: string) => localizeHref(locale, path);
  const sources = getSourcesByIds(guide.sourceIds, locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: href("/") },
          { label: copy.indexTitle, href: href("/seasonal") },
          { label: guide.title },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="star" size="sm" />
            {guide.badge}
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {guide.title}
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-textSecondary">
            {guide.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <Button href={href("/seasonal")} variant="outline">
              {copy.allButton}
              <Icon name="chevron-right" size="sm" />
            </Button>
          </div>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="start-here-heading">
          <h2
            id="start-here-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.startHere}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {guide.summary.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/60 bg-white p-4 shadow-card"
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

      <div className="mb-10 grid gap-5 lg:grid-cols-2">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-5"
            aria-labelledby="focus-now-heading"
          >
            <h2
              id="focus-now-heading"
              className="mb-4 mt-0 text-lg font-semibold text-textPrimary"
            >
              {copy.focusNow}
            </h2>
            <SimpleList items={guide.focusNow} />
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card"
            aria-labelledby="can-wait-heading"
          >
            <h2
              id="can-wait-heading"
              className="mb-4 mt-0 text-lg font-semibold text-textPrimary"
            >
              {copy.canWait}
            </h2>
            <SimpleList items={guide.canWait} />
          </section>
        </AnimateIn>
      </div>

      {guide.sections.map((section, index) => (
        <AnimateIn key={section.heading} delay={index * 0.04}>
          <section className="mb-10" aria-labelledby={`section-${index}`}>
            <h2
              id={`section-${index}`}
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {section.heading}
            </h2>
            {section.body ? (
              <p className="mb-4 leading-relaxed text-textSecondary">
                {section.body}
              </p>
            ) : null}
            {section.items ? <SimpleList items={section.items} /> : null}
          </section>
        </AnimateIn>
      ))}

      <AnimateIn>
        <section className="mb-10" aria-labelledby="scripts-heading">
          <h2
            id="scripts-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.scriptsTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {guide.scripts.map((script) => (
              <article
                key={script.title}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-card"
              >
                <h3 className="mb-2 mt-0 text-base font-semibold text-textPrimary">
                  {script.title}
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  {script.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-warning/20 bg-accentYellow/20 p-5"
          aria-labelledby="qualified-help-heading"
        >
          <h2
            id="qualified-help-heading"
            className="mb-2 mt-0 text-lg font-semibold text-textPrimary"
          >
            {copy.qualifiedTitle}
          </h2>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {copy.qualifiedBody}
          </p>
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
        <section className="mb-10" aria-labelledby="related-heading">
          <h2
            id="related-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.relatedTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {guide.relatedLinks.map((link) => (
              <Button key={link.href} href={href(link.href)} variant="outline">
                {link.label}
                <Icon name="chevron-right" size="sm" />
              </Button>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <Link
          href={href("/seasonal")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
        >
          <Icon name="chevron-right" size="sm" className="rotate-180" />
          {copy.backLink}
        </Link>
      </AnimateIn>
    </div>
  );
}
