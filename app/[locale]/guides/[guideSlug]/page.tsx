import { notFound } from "next/navigation";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { getLifeGuideBySlug, getLifeGuides } from "@/lib/life-guides";
import { getTranslator, localizeHref, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { localeUrl } from "@/lib/site";

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((paragraph) => (
        <p key={paragraph} className="mb-4 leading-relaxed text-textSecondary">
          {paragraph}
        </p>
      ))}
    </>
  );
}

export function generateStaticParams({
  params,
}: {
  params: { locale: Locale };
}) {
  return getLifeGuides(params.locale).map((guide) => ({
    guideSlug: guide.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: Locale; guideSlug: string };
}) {
  const t = getTranslator(params.locale);
  const guide = getLifeGuideBySlug(params.guideSlug, params.locale);
  const copy = t<{ notFoundTitle: string }>("pages.guides.detail");
  if (!guide) {
    return { title: `${copy.notFoundTitle} - ${t("brand.name")}` };
  }

  return buildPageMetadata({
    locale: params.locale,
    title: `${guide.title} - ${t("brand.name")}`,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    ogType: "article",
  });
}

export default function GuideDetailPage({
  params,
}: {
  params: { locale: Locale; guideSlug: string };
}) {
  const locale = params.locale;
  const guide = getLifeGuideBySlug(params.guideSlug, locale);
  if (!guide) notFound();

  const t = getTranslator(locale);
  const copy = t<{
    indexTitle: string;
    eyebrow: string;
    startHere: string;
    scriptsTitle: string;
    situationsTitle: string;
    relatedTitle: string;
    qualifiedTitle: string;
    qualifiedBody: string;
    sourcesNote: string;
    backLink: string;
  }>("pages.guides.detail");
  const sources = getSourcesByIds(guide.sourceIds, locale);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: copy.indexTitle, url: localeUrl(locale, "/guides") },
          {
            name: guide.title,
            url: localeUrl(locale, `/guides/${guide.slug}`),
          },
        ])}
      />
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          {
            label: copy.indexTitle,
            href: localizeHref(locale, "/guides"),
          },
          { label: guide.title },
        ]}
      />

      <AnimateIn>
        <header className="mb-10">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="file-text" size="sm" />
            {copy.eyebrow}
          </p>
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {guide.title}
          </h1>
          <p className="mb-0 text-lg leading-relaxed text-textSecondary">
            {guide.intro}
          </p>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="start-here-heading"
        >
          <h2
            id="start-here-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.startHere}
          </h2>
          <ul className="mb-0 grid gap-3 pl-0 md:grid-cols-2">
            {guide.summary.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border/50 bg-white p-4 text-sm leading-relaxed text-textSecondary"
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
        </section>
      </AnimateIn>

      {guide.sections.map((section, index) => (
        <AnimateIn key={section.heading} delay={index * 0.04}>
          <section className="mb-10" aria-labelledby={`section-${index}`}>
            <h2
              id={`section-${index}`}
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {section.heading}
            </h2>
            {section.body ? <Paragraphs text={section.body} /> : null}
            {section.items && section.items.length > 0 ? (
              <ul className="mb-0 flex flex-col gap-2.5 pl-0">
                {section.items.map((item) => (
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
            ) : null}
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
        <section className="mb-10" aria-labelledby="scenarios-heading">
          <h2
            id="scenarios-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.situationsTitle}
          </h2>
          <div className="flex flex-col gap-3">
            {guide.scenarios.map((scenario) => (
              <Accordion key={scenario.title} title={scenario.title}>
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  {scenario.response}
                </p>
              </Accordion>
            ))}
          </div>
        </section>
      </AnimateIn>

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
              <Button
                key={link.href}
                href={localizeHref(locale, link.href)}
                variant="outline"
              >
                {link.label}
                <Icon name="chevron-right" size="sm" />
              </Button>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-warning/20 bg-accentYellow/20 p-5"
          aria-labelledby="disclaimer-heading"
        >
          <h2
            id="disclaimer-heading"
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
        <Link
          href={localizeHref(locale, "/guides")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
        >
          <Icon name="chevron-right" size="sm" className="rotate-180" />
          {copy.backLink}
        </Link>
      </AnimateIn>
    </div>
  );
}
