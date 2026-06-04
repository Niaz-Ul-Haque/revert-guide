/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import { Icon } from "@/components/Icon";
import { getAllSources } from "@/lib/content";
import {
  DEFAULT_LOCALE,
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { SourceCategory } from "@/lib/types";

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

const sourceGroups: {
  id: SourceCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "quran",
    title: "Quran Text and Translation",
    description:
      "Quran Arabic text and English translations of meaning must be clearly distinguished.",
  },
  {
    id: "hadith",
    title: "Hadith References",
    description:
      "Hadith citations should preserve collection names, numbering, and grading where available.",
  },
  {
    id: "new-muslim-education",
    title: "New Muslim Education",
    description:
      "Beginner education sources are used for practical framing, not personalized rulings.",
  },
  {
    id: "mental-health",
    title: "Mental Health and Crisis Support",
    description:
      "Health and crisis content links to official public health or qualified clinical sources.",
  },
  {
    id: "public-rights",
    title: "Public Rights and Accommodation",
    description:
      "Legal-adjacent content stays general and links to official public information without replacing legal advice.",
  },
  {
    id: "public-safety",
    title: "Public Safety and Abuse Support",
    description:
      "Safety content points users toward professional local support and avoids personalized safety planning.",
  },
  {
    id: "public-travel",
    title: "Public Travel and Pilgrimage Rules",
    description:
      "Travel-adjacent pilgrimage content links to official public information and warns that rules can change.",
  },
  {
    id: "tools-data",
    title: "Tools and Data",
    description:
      "Tool pages identify their data providers, calculation notes, and accuracy limits.",
  },
  {
    id: "masjid-community",
    title: "Masjid and Community",
    description:
      "Local information can change, so users should verify times and programs directly.",
  },
  {
    id: "zakat-financial-education",
    title: "Zakat and Financial Education",
    description:
      "Financial content stays educational and points users to qualified review for personal cases.",
  },
  {
    id: "resource-publisher",
    title: "Resource Publishers and Organizations",
    description:
      "Resource cards identify the organization, author, or publisher behind the recommendation.",
  },
];

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
  const registrySources =
    locale === DEFAULT_LOCALE ? getAllSources(locale) : [];

  if (locale === DEFAULT_LOCALE) {
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
            Revert Guide uses sources to help new Muslims see where religious,
            practical, health, and tool guidance comes from. Sources do not
            replace a qualified local imam, scholar, clinician, or professional
            for personal situations.
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
              How Revert Guide Uses Sources
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "What counts as a Quran translation?",
                  body: "English Quran text on this site is a translation of meaning, not the Arabic Quran itself. Arabic text should come from a verified Quran text source.",
                },
                {
                  title: "How hadith citations are shown",
                  body: "Hadith-based guidance should keep the collection name, numbering, URL, and grading when that information is available.",
                },
                {
                  title: "When to ask a local imam",
                  body: "For personal fiqh questions, family complications, marriage, finance, or sensitive details, use this site as a starting point and ask a qualified local imam or scholar.",
                },
                {
                  title: "When to seek professional help",
                  body: "Mental health content is educational and supportive. Crisis, medical, legal, and financial concerns need qualified professional support.",
                },
              ].map((item) => (
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
              How to Use Sources Without Feeling Overwhelmed
            </h2>
            <p className="mb-0 text-base leading-relaxed text-textSecondary">
              You do not need to master source criticism immediately. Start with
              the basics, learn from reliable teachers, and ask qualified people
              when a matter affects your worship, family, health, or finances.
              Source tags are here to build trust and transparency, not to add
              pressure.
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
                        Access reviewed: {source.accessed}.
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
              Source tags do not imply endorsement by the external organization.
              They show where Revert Guide looked for supporting information and
              where you can continue reading.
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
