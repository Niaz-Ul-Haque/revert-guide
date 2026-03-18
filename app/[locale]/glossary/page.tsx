import { GlossaryPageClient } from "@/components/GlossaryPageClient";
import { getAllGlossaryEntries } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "glossary");
}

export default function GlossaryPage({
  params,
}: {
  params: { locale: Locale };
}) {
  return (
    <GlossaryPageClient
      locale={params.locale}
      entries={getAllGlossaryEntries(params.locale)}
    />
  );
}
