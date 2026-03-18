/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import {
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
  return getPageMetadata(params.locale, "sources");
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
