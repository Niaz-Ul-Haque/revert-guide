import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  isLocale,
  type Locale,
} from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { getDawahGuide } from "@/lib/dawah-content";
import { DawahGuideClient } from "@/components/DawahGuideClient";

// This hidden route is published for every supported locale. Content lives in
// locale-specific dawah guide JSON files and falls back to English if a
// localized file is missing.

// Hidden, direct-link page. Intentionally kept out of all navigation, the
// footer, the homepage, GlobalSearch, and any sitemap. Note: on a static
// public site "hidden" is not private. Anyone with the URL can reach it.

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const t = getTranslator(
    isLocale(params.locale) ? params.locale : DEFAULT_LOCALE,
  );
  return {
    title: t("pages.dawahGuide.metadataTitle"),
    description: t("pages.dawahGuide.metadataDescription"),
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  };
}

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
