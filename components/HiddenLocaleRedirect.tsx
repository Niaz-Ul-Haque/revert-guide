"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOCALE_STORAGE_KEY, resolveLocale } from "@/lib/i18n";

interface HiddenLocaleRedirectProps {
  // Path (without locale prefix) to redirect to, e.g. "/dawah-guide-personal".
  path: string;
}

// Thin client redirect that mirrors app/page.tsx: read the saved locale,
// fall back to the default, and send the user to the localized route. Used
// for hidden direct-link aliases so the project can stay statically exported
// without middleware or server redirects.
export function HiddenLocaleRedirect({ path }: HiddenLocaleRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    const savedLocale = resolveLocale(
      window.localStorage.getItem(LOCALE_STORAGE_KEY),
    );
    router.replace(`/${savedLocale}${path}`);
  }, [router, path]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-textSecondary">Loading…</p>
    </div>
  );
}
