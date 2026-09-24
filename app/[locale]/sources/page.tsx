import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import { Icon } from "@/components/Icon";
import { getAllSources, getSourceCategoryContent } from "@/lib/content";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { getPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, localeUrl } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { PLACEHOLDER_LINK_REL } from "@/lib/link-rel";

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
  const registrySources = getAllSources(locale);
  const { groups: sourceGroups, policyNotes } =
    getSourceCategoryContent(locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: copy.title, url: localeUrl(locale, "/sources") },
        ])}
      />
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
          {copy.registryIntro}
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
            {copy.policyTitle}
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
            {copy.howToUseTitle}
          </h2>
          <p className="mb-0 text-base leading-relaxed text-textSecondary">
            {copy.howToUseBody}
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
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primaryHover">
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
                      {copy.linkLastChecked.replace("{date}", source.accessed)}
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
          <p className="mb-0 text-sm text-textMuted">{copy.closingContact}</p>
          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-base">
            <Link
              href={href("/get-help")}
              className="inline-flex min-h-[44px] items-center font-medium text-primary hover:text-primaryHover"
            >
              {copy.contactLinks.getHelpLabel}
            </Link>
            <span className="inline-flex min-h-[44px] items-center gap-1 text-textSecondary">
              {copy.contactLinks.emailLabel}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                rel={PLACEHOLDER_LINK_REL}
                className="font-medium text-primary hover:text-primaryHover"
              >
                {CONTACT_EMAIL}
              </a>
            </span>
          </p>
          <p className="mt-4 text-sm text-textMuted">{copy.endorsementNote}</p>
        </section>
      </AnimateIn>
    </div>
  );
}
