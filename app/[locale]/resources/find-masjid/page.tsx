import { FindMasjidPageClient } from "@/components/FindMasjidPageClient";
import { getAllMasjids, getSourcesByIds } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { getTranslator } from "@/lib/messages";
import { localeUrl } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "findMasjid", "/resources/find-masjid");
}

export default function FindMasjidPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const masjids = getAllMasjids(params.locale);
  const sourceIds = Array.from(
    new Set([
      "openstreetmap",
      "nominatim",
      ...masjids.flatMap((masjid) => masjid.sourceIds ?? []),
    ]),
  );

  const locale = params.locale;
  const t = getTranslator(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: t("nav.resources"), url: localeUrl(locale, "/resources") },
          {
            name: t("nav.findMasjid"),
            url: localeUrl(locale, "/resources/find-masjid"),
          },
        ])}
      />
      <FindMasjidPageClient
        locale={params.locale}
        masjids={masjids}
        sources={getSourcesByIds(sourceIds, params.locale)}
      />
    </>
  );
}
