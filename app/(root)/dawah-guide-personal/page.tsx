import type { Metadata } from "next";
import { HiddenLocaleRedirect } from "@/components/HiddenLocaleRedirect";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";

// Hidden root alias: /dawah-guide-personal -> /<saved-or-default-locale>/dawah-guide-personal.
// Kept out of navigation, search, and sitemaps; noindex like the canonical route.

const t = getTranslator(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: t("pages.dawahGuide.metadataTitle"),
  description: t("pages.dawahGuide.metadataDescription"),
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function DawahGuideAliasPage() {
  return (
    <HiddenLocaleRedirect
      path="/dawah-guide-personal"
      loadingLabel={t("common.loadingPage")}
    />
  );
}
