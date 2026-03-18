import { ResourcesPageClient } from "@/components/ResourcesPageClient";
import { getAllResources } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "resources");
}

export default function ResourcesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  return (
    <ResourcesPageClient
      locale={params.locale}
      resources={getAllResources(params.locale)}
    />
  );
}
