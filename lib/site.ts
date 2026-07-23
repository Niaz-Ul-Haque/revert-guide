import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "./i18n";

/**
 * Canonical origin of the deployed site. Override per environment with
 * NEXT_PUBLIC_SITE_URL (no trailing slash), e.g. in .env.production.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.revertguide.com"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/og-image.png";

/** Locales rendered right-to-left. */
export const RTL_LOCALES: readonly Locale[] = ["ur", "fa"];

export function getTextDirection(locale: Locale): "ltr" | "rtl" {
  return RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
}

/** Open Graph locale identifiers per supported locale. */
export const OG_LOCALE_MAP: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_CA",
  es: "es_ES",
  hi: "hi_IN",
  ur: "ur_PK",
  zh: "zh_CN",
  tl: "tl_PH",
  pa: "pa_IN",
  pt: "pt_BR",
  ko: "ko_KR",
  fa: "fa_IR",
  ru: "ru_RU",
  bn: "bn_BD",
};

/** Normalizes a route path: "" or "/" -> "", "about" -> "/about". */
function normalizePath(path: string): string {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

/** Absolute URL for a locale-prefixed route, e.g. localeUrl("fr", "/about"). */
export function localeUrl(locale: Locale, path: string): string {
  return `${SITE_URL}/${locale}${normalizePath(path)}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${normalizePath(path) || "/"}`;
}

/**
 * hreflang alternates for a route across every supported locale.
 * x-default points at the default-locale version (the language chooser
 * at "/" for the home page).
 */
export function languageAlternates(path: string): Record<string, string> {
  const normalized = normalizePath(path);
  const alternates: Record<string, string> = {};

  for (const locale of SUPPORTED_LOCALES) {
    alternates[locale] = localeUrl(locale, normalized);
  }

  alternates["x-default"] =
    normalized === "" ? `${SITE_URL}/` : localeUrl(DEFAULT_LOCALE, normalized);

  return alternates;
}
