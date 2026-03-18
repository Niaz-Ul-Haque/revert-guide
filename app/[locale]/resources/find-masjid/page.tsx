import { FindMasjidPageClient } from "@/components/FindMasjidPageClient";
import { getAllMasjids } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "findMasjid");
}

export default function FindMasjidPage({
  params,
}: {
  params: { locale: Locale };
}) {
  return (
    <FindMasjidPageClient
      locale={params.locale}
      masjids={getAllMasjids(params.locale)}
    />
  );
}
