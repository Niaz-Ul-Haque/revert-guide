import type { Metadata } from "next";
import { type Locale } from "./i18n";
import { getTranslator } from "./messages";
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
 * Turns body text into a search-friendly description: drops markdown
 * markers, collapses whitespace, and cuts at the last sentence end that
 * fits within `max` (or the last word boundary when no sentence fits).
 */
export function metaDescription(text: string, max = 155): string {
  const clean = text
    .replace(/\*\*|_/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (clean.length <= max) return clean;
  const head = clean.slice(0, max + 1);
  let cut = 0;
  const sentenceEnd = /[.!?]['"’)]?(?=\s|$)/g;
  let match: RegExpExecArray | null;
  while ((match = sentenceEnd.exec(head))) {
    const end = match.index + match[0].length;
    if (end <= max) cut = end;
  }
  // A very short first sentence reads worse than a longer word-boundary cut.
  if (cut >= 70) return clean.slice(0, cut);
  const space = clean.lastIndexOf(" ", max);
  return clean.slice(0, space > 0 ? space : max).replace(/[\s,;:]+$/, "");
}

/**
 * Builds complete per-page metadata: canonical URL, hreflang alternates
 * for every supported locale, Open Graph and Twitter cards.
 */
export function buildPageMetadata({
  locale,
  title,
  description: rawDescription,
  path,
  noindex = false,
  ogType = "website",
}: PageMetadataOptions): Metadata {
  const canonical = localeUrl(locale, path);
  const t = getTranslator(locale);
  const siteName = t("brand.name");
  const description = rawDescription && metaDescription(rawDescription);

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
