import type { Metadata } from "next";
import { getTranslator, type Locale } from "./i18n";
import {
  DEFAULT_OG_IMAGE,
  OG_LOCALE_MAP,
  languageAlternates,
  localeUrl,
} from "./site";

interface PageMetadataOptions {
  locale: Locale;
  title: string;
  description?: string;
  /** Locale-relative route path, e.g. "/about" or "/roadmap/week-1". */
  path: string;
  noindex?: boolean;
  ogType?: "website" | "article";
}

/**
 * Builds complete per-page metadata: canonical URL, hreflang alternates
 * for every supported locale, Open Graph and Twitter cards.
 */
export function buildPageMetadata({
  locale,
  title,
  description,
  path,
  noindex = false,
  ogType = "website",
}: PageMetadataOptions): Metadata {
  const canonical = localeUrl(locale, path);
  const t = getTranslator(locale);
  const siteName = t("brand.name");

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: ogType,
      locale: OG_LOCALE_MAP[locale],
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };

  if (noindex) {
    metadata.robots = { index: false, follow: false };
  }

  return metadata;
}

/**
 * Metadata for pages whose title/description live under
 * `metadata.<pageKey>` in the locale UI strings.
 */
export function getPageMetadata(
  locale: Locale,
  pageKey: string,
  path: string,
  options?: { noindex?: boolean },
): Metadata {
  const t = getTranslator(locale);

  return buildPageMetadata({
    locale,
    title: t(`metadata.${pageKey}.title`),
    description: t(`metadata.${pageKey}.description`),
    path,
    noindex: options?.noindex,
  });
}
