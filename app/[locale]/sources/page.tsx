import { ContactEmail } from "@/components/ContactEmail";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import { DetailsOpener } from "@/components/DetailsOpener";
import { Icon } from "@/components/Icon";
import { getAllSources, getSourceCategoryContent } from "@/lib/content";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { getPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, localeUrl } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";

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

  const collator = new Intl.Collator(locale, {
    numeric: true,
    sensitivity: "base",
  });
  const groups = sourceGroups
    .map((group) => ({
      ...group,
      sources: registrySources
        .filter((source) => source.category === group.id)
        .sort((a, b) => collator.compare(a.title, b.title)),
    }))
    .filter((group) => group.sources.length > 0);
  const plural = (count: number, forms: { one: string; other: string }) =>
    (count === 1 ? forms.one : forms.other).replace("{count}", String(count));

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <DetailsOpener selector="details[data-sources]" />
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

      <nav
        id="sources-index"
        aria-labelledby="sources-index-heading"
        className="mb-10 scroll-mt-24 border-y border-border/60 py-5"
      >
        <h2
          id="sources-index-heading"
          className="mb-3 mt-0 text-base font-semibold text-textPrimary"
        >
          {copy.indexLabel}
        </h2>
        <ul className="mb-0 grid gap-x-6 gap-y-1 pl-0 sm:grid-cols-2">
          {groups.map((group) => (
            <li key={group.id} className="list-none">
              <a
                href={`#${group.id}`}
                className="flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-2 text-sm font-medium text-primary no-underline hover:bg-surfaceElevated hover:text-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
              >
                <span>{group.title}</span>
                <span className="shrink-0 text-xs font-normal text-textMuted">
                  {group.sources.length}{" "}
                  {plural(group.sources.length, copy.entryCount)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-12 flex flex-col gap-10">
        {groups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="scroll-mt-24"
          >
            <h2
              id={`${group.id}-heading`}
              className="mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {group.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-textSecondary">
              {group.description}
            </p>
            <details
              data-sources
              className="group rounded-2xl border border-border/60 bg-white"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center gap-3 px-5 py-3 text-sm font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-borderStrong [&::-webkit-details-marker]:hidden">
                <Icon
                  name="chevron-down"
                  size="sm"
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                />
                {plural(group.sources.length, copy.showSources)}
              </summary>
              <table className="w-full border-collapse border-t border-border/60 text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-textMuted">
                    <th
                      scope="col"
                      className="w-2/5 px-4 py-2 text-start font-semibold"
                    >
                      {copy.columnSource}
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-start font-semibold"
                    >
                      {copy.columnSupports}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {group.sources.map((source) => (
                    <tr key={source.id} className="align-top">
                      <td className="px-4 py-3">
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
                        >
                          {source.title}
                          <Icon
                            name="external-link"
                            size="sm"
                            className="shrink-0"
                          />
                        </a>
                        <p className="mb-1.5 mt-1 text-xs text-textMuted">
                          {source.organization} - {source.sourceType}
                        </p>
                        <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primaryHover">
                          {source.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-textSecondary">
                        <p className="mb-1 leading-relaxed">{source.note}</p>
                        <p className="mb-0 text-xs text-textMuted">
                          {copy.linkLastChecked.replace(
                            "{date}",
                            source.accessed,
                          )}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          </section>
        ))}
      </div>

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
              <ContactEmail
                email={CONTACT_EMAIL}
                locale={locale}
                className="font-medium text-primary hover:text-primaryHover"
              />
            </span>
          </p>
          <p className="mt-4 text-sm text-textMuted">{copy.endorsementNote}</p>
        </section>
      </AnimateIn>
    </div>
  );
}
