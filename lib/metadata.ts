import type { Metadata } from "next";
import { getTranslator, type Locale } from "./i18n";

export function getPageMetadata(locale: Locale, pageKey: string): Metadata {
  const t = getTranslator(locale);

  return {
    title: t(`metadata.${pageKey}.title`),
    description: t(`metadata.${pageKey}.description`),
  };
}
