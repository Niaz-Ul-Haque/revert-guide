import { FindMasjidPageClient } from "@/components/FindMasjidPageClient";
import { getAllMasjids, getSourcesByIds } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

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

  return (
    <FindMasjidPageClient
      locale={params.locale}
      masjids={masjids}
      sources={
        params.locale === "en" ? getSourcesByIds(sourceIds, params.locale) : []
      }
    />
  );
}
