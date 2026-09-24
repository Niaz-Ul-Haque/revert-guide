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
type UiModule = typeof import("@/locales/en/ui.json");
/** Shape of the UI dictionary (locales/en/ui.json). */
export type Messages = UiModule extends { default: infer D } ? D : UiModule;

type MessageTree = Record<string, unknown>;

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function resolveLocale(value?: string | null): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
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
