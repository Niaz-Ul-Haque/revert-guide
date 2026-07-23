"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { getTextDirection } from "@/lib/site";

/**
 * The root layout renders <html lang="en"> and cannot see the [locale]
 * segment, so this keeps the document's lang/dir in sync with the active
 * locale for assistive tech and search engines.
 */
export function HtmlLocaleAttributes({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getTextDirection(locale);
  }, [locale]);

  return null;
}
