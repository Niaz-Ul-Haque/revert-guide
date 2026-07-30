import type { Metadata } from "next";
import { HiddenLocaleRedirect } from "@/components/HiddenLocaleRedirect";

// Hidden root alias: /dawah-guide-personal -> /<saved-or-default-locale>/dawah-guide-personal.
// Kept out of navigation, search, and sitemaps; noindex like the canonical route.

export const metadata: Metadata = {
  title: "Dawah guide | Revert Guide",
  description: "A private, direct-link guide for dawah conversations.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function DawahGuideAliasPage() {
  return <HiddenLocaleRedirect path="/dawah-guide-personal" />;
}
