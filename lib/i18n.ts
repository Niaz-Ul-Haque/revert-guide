import en from "@/locales/en/ui.json";
import fr from "@/locales/fr/ui.json";
import es from "@/locales/es/ui.json";
import hi from "@/locales/hi/ui.json";
import ur from "@/locales/ur/ui.json";
import zh from "@/locales/zh/ui.json";
import tl from "@/locales/tl/ui.json";
import pa from "@/locales/pa/ui.json";
import pt from "@/locales/pt/ui.json";
import ko from "@/locales/ko/ui.json";
import fa from "@/locales/fa/ui.json";
import ru from "@/locales/ru/ui.json";
import bn from "@/locales/bn/ui.json";

export const SUPPORTED_LOCALES = [
  "en",
  "fr",
  "es",
  "hi",
  "ur",
  "zh",
  "tl",
  "pa",
  "pt",
  "ko",
  "fa",
  "ru",
  "bn",
] as const;
export const DEFAULT_LOCALE = "en";
export const LOCALE_STORAGE_KEY = "revert-guide-locale";
export const LOCALE_DISPLAY_NAMES: Record<
  (typeof SUPPORTED_LOCALES)[number],
  string
> = {
  en: "English",
  fr: "Français",
  es: "Español",
  hi: "हिन्दी",
  ur: "اردو",
  zh: "中文",
  tl: "Tagalog",
  pa: "ਪੰਜਾਬੀ",
  pt: "Português",
  ko: "한국어",
  fa: "فارسی",
  ru: "Русский",
  bn: "বাংলা",
};

export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type Messages = typeof en;

type MessageTree = Record<string, unknown>;

const dictionaries: Record<Locale, Messages> = {
  en,
  fr: deepMerge(en, fr) as unknown as Messages,
  es: deepMerge(en, es) as unknown as Messages,
  hi: deepMerge(en, hi) as unknown as Messages,
  ur: deepMerge(en, ur) as unknown as Messages,
  zh: deepMerge(en, zh) as unknown as Messages,
  tl: deepMerge(en, tl) as unknown as Messages,
  pa: deepMerge(en, pa) as unknown as Messages,
  pt: deepMerge(en, pt) as unknown as Messages,
  ko: deepMerge(en, ko) as unknown as Messages,
  fa: deepMerge(en, fa) as unknown as Messages,
  ru: deepMerge(en, ru) as unknown as Messages,
  bn: deepMerge(en, bn) as unknown as Messages,
};

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function resolveLocale(value?: string | null): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export function getLocaleDisplayName(locale: Locale): string {
  return LOCALE_DISPLAY_NAMES[locale];
}

export function createTranslator(messages: Messages) {
  return function t<T = string>(key: string): T {
    const value = key.split(".").reduce<unknown>((current, part) => {
      if (!current || typeof current !== "object" || Array.isArray(current)) {
        return undefined;
      }
      return (current as MessageTree)[part];
    }, messages as unknown);

    if (value === undefined) {
      throw new Error(`Missing translation key: ${key}`);
    }

    return value as T;
  };
}

export function getTranslator(locale: Locale) {
  return createTranslator(getMessages(locale));
}

export function localizeHref(locale: Locale, href: string): string {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  if (href.startsWith(`/${locale}`)) {
    return href;
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

export function switchLocaleInPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (isLocale(currentLocale)) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return localizeHref(locale, pathname || "/");
}

function deepMerge<T>(base: T, override: unknown): T {
  if (
    Array.isArray(base) ||
    Array.isArray(override) ||
    !base ||
    !override ||
    typeof base !== "object" ||
    typeof override !== "object"
  ) {
    return (override ?? base) as T;
  }

  const merged: MessageTree = { ...(base as MessageTree) };
  for (const [key, value] of Object.entries(override as MessageTree)) {
    const existing = merged[key];
    if (existing === undefined) {
      merged[key] = value;
      continue;
    }

    merged[key] = deepMerge(existing, value);
  }

  return merged as T;
}
