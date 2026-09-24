import type { Metadata, Viewport } from "next";
import en from "@/locales/en/ui.json";
import { DEFAULT_OG_IMAGE, SITE_URL, languageAlternates } from "./site";
import { SUPPORTED_LOCALES } from "./i18n";

/* Site-level metadata shared by both root layouts. Pages override the
   title, description, canonical and social tags through lib/metadata.ts. */

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: en.metadata.site.title,
    template: `%s`,
  },
  description: en.metadata.site.description,
  keywords: en.metadata.site.keywords,
  applicationName: en.brand.name,
  category: "education",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    languages: languageAlternates(""),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: en.brand.name,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: en.brand.name,
    description: en.metadata.site.openGraphDescription,
    type: "website",
    url: "/",
    siteName: en.brand.name,
    locale: "en_US",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: en.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: en.metadata.site.title,
    description: en.metadata.site.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const siteViewport: Viewport = {
  themeColor: "#4A7C59",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: en.brand.name,
  url: `${SITE_URL}/`,
  description: en.metadata.site.description,
  inLanguage: [...SUPPORTED_LOCALES],
  publisher: {
    "@type": "Organization",
    name: en.brand.name,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/revert-guide-logo.png`,
    },
  },
};
