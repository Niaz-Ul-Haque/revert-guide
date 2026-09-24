"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  localizeHref,
  resolveLocale,
} from "@/lib/i18n";

interface LocaleLink {
  locale: string;
  href: string;
  label: string;
}

/** Sends a returning visitor to their saved language and lists the rest. */
export function RootLocaleChooser({
  body,
  links,
}: {
  body: string;
  links: LocaleLink[];
}) {
  const router = useRouter();

  useEffect(() => {
    const savedLocale = resolveLocale(
      window.localStorage.getItem(LOCALE_STORAGE_KEY),
    );
    router.replace(localizeHref(savedLocale, "/"));
  }, [router]);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="mb-4 text-sm text-textSecondary">{body}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <Link
            key={link.locale}
            href={link.href}
            className={`rounded-xl px-4 py-2 text-sm font-semibold no-underline ${
              link.locale === DEFAULT_LOCALE
                ? "bg-primary text-white"
                : "border border-border/60 text-textPrimary"
            }`}
            lang={link.locale}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
