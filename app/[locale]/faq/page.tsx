import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqPageClient } from "@/components/FaqPageClient";
import { Icon } from "@/components/Icon";
import { SourceTags } from "@/components/SourceTags";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { getAllSources } from "@/lib/content";
import { getFaqByCategory } from "@/lib/faq";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { getPageMetadata } from "@/lib/metadata";
import { localeUrl } from "@/lib/site";
import type { SourceEntry } from "@/lib/types";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "faq", "/faq");
}

export default function FaqPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["faq"]>("pages.faq");
  const categories = copy.categories as Record<string, string>;
  const groups = getFaqByCategory(locale);
  const sourcesById = new Map(
    getAllSources(locale).map((source) => [source.id, source] as const),
  );
  const sourcesFor = (ids: string[]) =>
    ids
      .map((id) => sourcesById.get(id))
      .filter((source): source is SourceEntry => source !== undefined);
  const countLabel = (count: number) =>
    `${count} ${count === 1 ? copy.questionCount.one : copy.questionCount.other}`;

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <FaqPageClient />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: copy.title, url: localeUrl(locale, "/faq") },
        ])}
      />
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <header className="mb-8 max-w-2xl">
        <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          {copy.title}
        </h1>
        <p className="mb-5 text-lg leading-relaxed text-textSecondary">
          {copy.description}
        </p>
        <div className="rounded-2xl border border-warning/20 bg-accentYellow/20 p-4">
          <p className="mb-1 text-sm font-semibold text-textPrimary">
            {copy.noteTitle}
          </p>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {copy.noteBody}
          </p>
        </div>
      </header>

      <nav
        id="faq-index"
        aria-labelledby="faq-index-heading"
        className="mb-12 scroll-mt-24 border-y border-border/60 py-5"
      >
        <h2
          id="faq-index-heading"
          className="mb-3 mt-0 text-base font-semibold text-textPrimary"
        >
          {copy.indexLabel}
        </h2>
        <ul className="mb-0 grid gap-x-6 gap-y-1 pl-0 sm:grid-cols-2">
          {groups.map((group) => (
            <li key={group.id} className="list-none">
              <a
                href={`#faq-${group.id}`}
                className="flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-2 text-sm font-medium text-primary no-underline hover:bg-surfaceElevated hover:text-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
              >
                <span>{categories[group.id] ?? group.id}</span>
                <span className="shrink-0 text-xs font-normal text-textMuted">
                  {countLabel(group.entries.length)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-14">
        {groups.map((group) => (
          <section
            key={group.id}
            id={`faq-${group.id}`}
            aria-labelledby={`faq-${group.id}-heading`}
            className="scroll-mt-24"
          >
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-l-4 border-primaryGreen pl-4">
              <h2
                id={`faq-${group.id}-heading`}
                className="mb-0 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
              >
                {categories[group.id] ?? group.id}
              </h2>
              <span className="text-sm text-textMuted">
                {countLabel(group.entries.length)}
              </span>
            </div>

            <ul className="mb-3 divide-y divide-border/60 rounded-2xl border border-border/60 bg-white pl-0">
              {group.entries.map((entry) => {
                const sources = sourcesFor(entry.sourceIds);
                return (
                  <li key={entry.id} className="list-none">
                    <details
                      id={entry.id}
                      data-faq
                      className="group scroll-mt-24"
                    >
                      <summary className="flex min-h-[44px] cursor-pointer list-none items-start gap-3 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-borderStrong [&::-webkit-details-marker]:hidden">
                        <Icon
                          name="chevron-down"
                          size="sm"
                          className="mt-1 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                        />
                        <span className="flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="text-base font-semibold text-textPrimary">
                            {entry.question}
                          </span>
                          {entry.reviewStatus === "review-needed" ? (
                            <span className="rounded-full bg-accentYellow/40 px-2.5 py-0.5 text-xs font-medium text-textPrimary">
                              {copy.reviewBadge}
                            </span>
                          ) : null}
                        </span>
                      </summary>

                      <div className="px-5 pb-5 pl-12 text-sm leading-relaxed text-textSecondary">
                        <p className="mb-3 max-w-prose">{entry.answer}</p>
                        {entry.differences ? (
                          <p className="mb-3 max-w-prose border-l-2 border-primaryGreen/60 pl-3">
                            <span className="font-semibold text-textPrimary">
                              {copy.differencesLabel}:{" "}
                            </span>
                            {entry.differences}
                          </p>
                        ) : null}
                        {entry.askTeacher ? (
                          <p className="mb-3 flex max-w-prose items-start gap-2 text-textPrimary">
                            <Icon
                              name="info"
                              size="sm"
                              className="mt-0.5 shrink-0 text-primary"
                            />
                            <span>{copy.askTeacher}</span>
                          </p>
                        ) : null}
                        {entry.readMore ? (
                          <p className="mb-3">
                            {copy.readMoreLabel}{" "}
                            <Link
                              href={localizeHref(locale, entry.readMore.href)}
                              className="font-semibold text-primary hover:text-primaryHover"
                            >
                              {entry.readMore.label}
                            </Link>
                          </p>
                        ) : null}
                        {sources.length > 0 ? (
                          <div>
                            <p className="mb-2 text-xs font-medium text-textMuted">
                              {copy.sourcesLabel}
                            </p>
                            <SourceTags sources={sources} compact />
                          </div>
                        ) : null}
                      </div>
                    </details>
                  </li>
                );
              })}
            </ul>
            <a
              href="#faq-index"
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-primary hover:text-primaryHover"
            >
              {copy.backToIndex}
            </a>
          </section>
        ))}
      </div>
    </div>
  );
}
