import { GlossaryPageClient } from "@/components/GlossaryPageClient";
import { getAllGlossaryEntries, getSourcesByIds } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { getTranslator } from "@/lib/messages";
import { localeUrl } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "glossary", "/glossary");
}

export default function GlossaryPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const entries = getAllGlossaryEntries(locale);
  const sources = getSourcesByIds(
    Array.from(new Set(entries.flatMap((entry) => entry.sourceIds ?? []))),
    locale,
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: t("nav.glossary"), url: localeUrl(locale, "/glossary") },
        ])}
      />
      <GlossaryPageClient
        locale={params.locale}
        entries={entries}
        sources={sources}
      />
    </>
  );
}
