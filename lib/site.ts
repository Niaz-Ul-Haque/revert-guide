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

/* ── Team-owned placeholders ──────────────────────────────────────────────
 * Every real-world detail the team has not created yet lives here, in one
 * place, so nothing is scattered through content files. Replace each value
 * when the real one exists. Content and components must read from these
 * constants and never hard-code the values.
 */

/** Google Form for help requests (mentor, question, events, community).
 *  PLACEHOLDER: replace with the real forms.gle link once the form exists. */
export const HELP_FORM_URL = "https://forms.gle/PLACEHOLDER";

/** Monitored contact mailbox for questions, corrections and accessibility
 *  reports. PLACEHOLDER: replace with the real address. */
export const CONTACT_EMAIL = "hello@PLACEHOLDER.example";

/** WhatsApp Channel for reminders. Followers' numbers stay private.
 *  PLACEHOLDER: replace with the real channel invite link. */
export const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/PLACEHOLDER";

/** Small moderated WhatsApp groups, one per city or region. Members' numbers
 *  are visible to other members. PLACEHOLDER: add the real invite links, or
 *  leave the list empty to hide the section. */
export const WHATSAPP_GROUPS: { label: string; url: string }[] = [];

/** Organisation or group name published on the About page.
 *  PLACEHOLDER: replace with the legal or working name the team agrees on. */
export const ORGANISATION_NAME = "[Organisation name to be confirmed]";

/** Where the team is based, published on the About page.
 *  PLACEHOLDER: replace with the city and province. */
export const ORGANISATION_LOCATION = "[City, Province to be confirmed]";

/** Address to which a mentee or member can report a mentor, group or admin.
 *  PLACEHOLDER: replace with the real address (may equal CONTACT_EMAIL). */
export const REPORT_EMAIL = "report@PLACEHOLDER.example";

/** True while any value above is still a placeholder. Used to show a short
 *  notice on pages that depend on these values. */
export function hasPlaceholderConfig(): boolean {
  return [
    HELP_FORM_URL,
    CONTACT_EMAIL,
    WHATSAPP_CHANNEL_URL,
    ORGANISATION_NAME,
    ORGANISATION_LOCATION,
    REPORT_EMAIL,
  ].some((value) => value.includes("PLACEHOLDER") || value.includes("["));
}
