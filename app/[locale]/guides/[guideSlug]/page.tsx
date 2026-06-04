import { notFound } from "next/navigation";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { getLifeGuideBySlug, lifeGuides } from "@/lib/life-guides";
import {
  DEFAULT_LOCALE,
  getTranslator,
  localizeHref,
  type Locale,
} from "@/lib/i18n";

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
  if (params.locale !== DEFAULT_LOCALE) return [];
  return lifeGuides.map((guide) => ({ guideSlug: guide.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: Locale; guideSlug: string };
}) {
  const t = getTranslator(params.locale);
  const guide = getLifeGuideBySlug(params.guideSlug);
  return {
    title: guide
      ? `${guide.title} - ${t("brand.name")}`
      : `Guide Not Found - ${t("brand.name")}`,
    description: guide?.description,
  };
}

export default function GuideDetailPage({
  params,
}: {
  params: { locale: Locale; guideSlug: string };
}) {
  const locale = params.locale;
  if (locale !== DEFAULT_LOCALE) notFound();

  const guide = getLifeGuideBySlug(params.guideSlug);
  if (!guide) notFound();

  const t = getTranslator(locale);
  const sources = getSourcesByIds(guide.sourceIds, locale);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          {
            label: "Practical Life Guides",
            href: localizeHref(locale, "/guides"),
          },
          { label: guide.title },
        ]}
      />

      <AnimateIn>
        <header className="mb-10">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="file-text" size="sm" />
            Practical guide
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
            Start Here
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
            Gentle Scripts
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
            Common Situations
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
            Related Next Steps
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
            When To Ask Someone Qualified
          </h2>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            This guide is general education. If the issue affects safety,
            marriage, family pressure, work or school rights, mental health,
            finances, or a personal religious ruling, speak with a qualified
            local imam, scholar, clinician, legal professional, or safety
            service as appropriate.
          </p>
        </section>
      </AnimateIn>

      {sources.length > 0 && (
        <AnimateIn>
          <div className="mb-10">
            <SourcesPanel
              sources={sources}
              note="These sources support the general guide framing. They do not replace personal advice from a qualified local professional or scholar."
            />
          </div>
        </AnimateIn>
      )}

      <AnimateIn>
        <Link
          href={localizeHref(locale, "/guides")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
        >
          <Icon name="chevron-right" size="sm" className="rotate-180" />
          Back to all practical guides
        </Link>
      </AnimateIn>
    </div>
  );
}
