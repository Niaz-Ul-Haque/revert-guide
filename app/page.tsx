"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  DEFAULT_LOCALE,
  getLocaleLabel,
  getTranslator,
  LOCALE_STORAGE_KEY,
  SUPPORTED_LOCALES,
  localizeHref,
  resolveLocale,
  type Messages,
} from "@/lib/i18n";

export default function RootPage() {
  const router = useRouter();
  const t = getTranslator(DEFAULT_LOCALE);
  const copy = t<Messages["pages"]["rootRedirect"]>("pages.rootRedirect");

  useEffect(() => {
    const savedLocale = resolveLocale(
      window.localStorage.getItem(LOCALE_STORAGE_KEY),
    );
    router.replace(localizeHref(savedLocale, "/"));
  }, [router]);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="mb-4 text-sm text-textSecondary">{copy.body}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {SUPPORTED_LOCALES.map((locale) => (
          <Link
            key={locale}
            href={localizeHref(locale, "/")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold no-underline ${
              locale === DEFAULT_LOCALE
                ? "bg-primary text-white"
                : "border border-border/60 text-textPrimary"
            }`}
            lang={locale}
          >
            {getLocaleLabel(locale)}
          </Link>
        ))}
      </div>
    </main>
  );
}
