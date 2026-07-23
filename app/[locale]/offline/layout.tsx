import { getPageMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

// The offline fallback is a client component, so its metadata (including
// noindex — the page has no value in search results) lives in this layout.
export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "offline", "/offline", {
    noindex: true,
  });
}

export default function OfflineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
