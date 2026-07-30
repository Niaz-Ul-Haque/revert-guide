/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import { Icon } from "@/components/Icon";
import { getAllSources, getSourceCategoryContent } from "@/lib/content";
import {
  DEFAULT_LOCALE,
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const sourceLinkHrefs: Record<string, string[]> = {
  "quran-refs": [
    "/ramadan",
    "/topics/prayer",
    "/topics/beliefs",
    "/topics/beliefs",
    "/topics/beliefs",
    "/ramadan",
  ],
  "hadith-refs": [
    "",
    "/topics/beliefs",
    "/topics/prayer",
    "/topics/beliefs",
    "/mental-health",
  ],
  "article-refs": ["", "/roadmap/week-1/prayer", "/mental-health", "/ramadan"],
  "book-refs": ["/topics/quran", "", "", "/topics/prayer"],
};

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "sources", "/sources");
}

export default function SourcesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const href = (path: string) => localizeHref(locale, path);
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["sources"]>("pages.sources");
  const registrySources =
    locale === DEFAULT_LOCALE ? getAllSources(locale) : [];

  if (locale === DEFAULT_LOCALE) {
    const { groups: sourceGroups, policyNotes } =
      getSourceCategoryContent(locale);

    return (
      <div className="mx-auto max-w-5xl px-5 py-10">
        <Breadcrumb
          items={[
            { label: t("nav.home"), href: href("/") },
            { label: copy.title },
          ]}
        />

        <AnimateIn>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-textSecondary">
            This page shows you where the guidance on Revert Guide comes from,
            whether it is religious, practical, health related, or built into
            one of the tools. None of it replaces a qualified local imam,
            scholar, clinician, or other professional once the question is about
            your own situation.
          </p>
        </AnimateIn>

        <AnimateIn>
          <section
            className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
            aria-labelledby="source-policy-heading"
          >
            <h2
              id="source-policy-heading"
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              How Revert Guide uses sources
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {policyNotes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/60 bg-white p-4"
                >
                  <h3 className="mb-2 mt-0 text-base font-semibold text-textPrimary">
                    {item.title}
                  </h3>
                  <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>

        <AnimateIn>
          <section
            className="mb-10 rounded-2xl border border-border/60 bg-white p-6"
            aria-labelledby="how-to-use-sources-heading"
          >
            <h2
              id="how-to-use-sources-heading"
              className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              How to use sources without feeling overwhelmed
            </h2>
            <p className="mb-0 text-base leading-relaxed text-textSecondary">
              You do not need to become an expert in checking sources. Start
              with the basics, learn from teachers you trust, and ask someone
              qualified when a question touches your worship, your family, your
              health, or your money. The tags are here so you can check our
              work. They are not one more thing you have to master.
            </p>
          </section>
        </AnimateIn>

        {sourceGroups.map((group) => {
          const groupSources = registrySources.filter(
            (source) => source.category === group.id,
          );
          if (groupSources.length === 0) return null;

          return (
            <AnimateIn key={group.id}>
              <section className="mb-10" aria-labelledby={group.id}>
                <div className="mb-5">
                  <h2
                    id={group.id}
                    className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
                  >
                    {group.title}
                  </h2>
                  <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {group.description}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {groupSources.map((source) => (
                    <article
                      key={source.id}
                      className="rounded-2xl border border-border/60 bg-surfaceElevated/40 p-5"
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-base font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
                        >
                          {source.title}
                          <Icon name="external-link" size="sm" />
                        </a>
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                          {source.label}
                        </span>
                      </div>
                      <p className="mb-2 text-xs font-medium text-textMuted">
                        {source.organization} - {source.sourceType}
                      </p>
                      <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                        {source.note}
                      </p>
                      <p className="mb-0 text-xs text-textMuted">
                        Link last checked: {source.accessed}.
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </AnimateIn>
          );
        })}

        <AnimateIn>
          <section aria-labelledby="closing">
            <p className="text-sm text-textMuted">
              A source tag does not mean that organisation endorses Revert
              Guide. It shows where we looked for supporting information and
              where you can keep reading.
            </p>
          </section>
        </AnimateIn>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: href("/") },
          { label: copy.title },
        ]}
      />

      <AnimateIn>
        <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          {copy.title}
        </h1>
        <p className="mb-10 text-base leading-relaxed text-textSecondary">
          {copy.intro}
        </p>
      </AnimateIn>

      {copy.sections.map((section) => (
        <AnimateIn key={section.id}>
          <section className="mb-10" aria-labelledby={section.id}>
            <h2
              id={section.id}
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {section.title}
            </h2>
            <ol className="flex flex-col gap-3 pl-0">
              {section.items.map((item, index) => {
                const linkPath = sourceLinkHrefs[section.id]?.[index];

                return (
                  <li
                    key={item.code}
                    className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary"
                  >
                    <span className="font-bold text-textPrimary">
                      [{item.code}]
                    </span>{" "}
                    {item.text}
                    {item.linkLabel && linkPath ? (
                      <Link href={href(linkPath)} className="text-primary">
                        {item.linkLabel}
                      </Link>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </section>
        </AnimateIn>
      ))}

      <AnimateIn>
        <section aria-labelledby="closing">
          <p className="text-sm text-textMuted">{copy.closing}</p>
        </section>
      </AnimateIn>
    </div>
  );
}
