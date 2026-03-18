"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  getLocaleLabel,
  LOCALE_STORAGE_KEY,
  SUPPORTED_LOCALES,
  switchLocaleInPath,
} from "@/lib/i18n";
import { useLocale, useTranslations } from "@/components/LocaleProvider";

export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <label className="flex items-center gap-2 rounded-xl border border-border/60 bg-white/85 px-3 py-2 shadow-soft">
      <span className="text-xs font-semibold uppercase tracking-wide text-textMuted">
        {t("languageSwitcher.label")}
      </span>
      <select
        aria-label={t("languageSwitcher.ariaLabel")}
        value={locale}
        onChange={(event) => {
          const targetLocale = event.target.value;
          window.localStorage.setItem(LOCALE_STORAGE_KEY, targetLocale);
          router.push(
            switchLocaleInPath(pathname, targetLocale as typeof locale),
          );
        }}
        className="bg-transparent text-sm font-medium text-textPrimary outline-none"
      >
        {SUPPORTED_LOCALES.map((targetLocale) => (
          <option key={targetLocale} value={targetLocale} lang={targetLocale}>
            {getLocaleLabel(targetLocale)}
          </option>
        ))}
      </select>
    </label>
  );
}
