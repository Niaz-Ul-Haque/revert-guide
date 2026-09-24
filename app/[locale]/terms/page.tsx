import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { getPageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { localeUrl } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "terms", "/terms");
}

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["terms"]>("pages.terms");

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: copy.title, url: localeUrl(locale, "/terms") },
        ])}
      />
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <AnimateIn>
        <h1 className="mb-2 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          {copy.title}
        </h1>
        <p className="mb-10 text-sm text-textMuted">{copy.effectiveDate}</p>
      </AnimateIn>

      {copy.sections.map((section) => (
        <AnimateIn key={section.id}>
          <section className="mb-10" aria-labelledby={section.id}>
            <h2
              id={section.id}
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {section.title}
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              {section.body}
            </p>
          </section>
        </AnimateIn>
      ))}
    </div>
  );
}
