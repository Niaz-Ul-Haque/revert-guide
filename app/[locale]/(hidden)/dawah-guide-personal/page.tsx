import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDawahGuide } from "@/lib/dawah-content";
import { DawahGuideClient } from "@/components/DawahGuideClient";

// This hidden route is published for English and Bengali only. Content lives in
// locale-specific dawah guide JSON files and still falls back to English if a
// localized file is missing.
const DAWAH_ROUTE_LOCALES = ["en", "bn"] as const;

// Hidden, direct-link page. Intentionally kept out of all navigation, the
// footer, the homepage, GlobalSearch, and any sitemap. Note: on a static
// public site "hidden" is not private. Anyone with the URL can reach it.

export function generateStaticParams() {
  return DAWAH_ROUTE_LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Dawah guide | Revert Guide",
  description: "A private, direct-link guide for dawah conversations.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

interface PageProps {
  params: { locale: string };
}

export default async function DawahGuidePersonalPage({ params }: PageProps) {
  const { locale } = params;
  if (!isLocale(locale)) {
    notFound();
  }

  const guide = await getDawahGuide(locale as Locale);
  return <DawahGuideClient guide={guide} />;
}
