import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import { QiblaClient } from "@/components/QiblaClient";
import { SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { localizeHref, type Locale } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { getPageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { localeUrl } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "qibla", "/qibla");
}

export default function QiblaPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Record<string, string>>("pages.qibla");
  const sources = getSourcesByIds(["qibla-local-calculation"], locale);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: t("nav.tools"), url: localeUrl(locale, "/resources") },
          { name: copy.title, url: localeUrl(locale, "/qibla") },
        ])}
      />
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.tools"), href: localizeHref(locale, "/resources") },
          { label: copy.title },
        ]}
      />

      <header className="mb-10">
        <AnimateIn animation="fade-up">
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
        </AnimateIn>
      </header>

      <AnimateIn>
        <QiblaClient />
      </AnimateIn>

      {sources.length > 0 && (
        <AnimateIn>
          <div className="mt-10">
            <SourcesPanel
              sources={sources}
              note={t("pages.sourceNotes.qibla")}
            />
          </div>
        </AnimateIn>
      )}
    </div>
  );
}
