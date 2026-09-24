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
import { createTranslator, type Locale, type Messages } from "./i18n";

/**
 * The UI dictionaries for every locale. This module is server only, so the
 * thirteen JSON files never end up in the client bundle: pages read the
 * dictionary on the server and hand the current locale's messages to
 * LocaleProvider.
 */

type MessageTree = Record<string, unknown>;

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

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export function getTranslator(locale: Locale) {
  return createTranslator(getMessages(locale));
}
