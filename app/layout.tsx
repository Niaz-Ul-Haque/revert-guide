import type { Metadata, Viewport } from "next";
import { Outfit, Fraunces, Amiri } from "next/font/google";
import "leaflet/dist/leaflet.css";
import en from "@/locales/en/ui.json";
import { JsonLd } from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_URL, languageAlternates } from "@/lib/site";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-amiri",
});

export const metadata: Metadata = {
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

export const viewport: Viewport = {
  themeColor: "#4A7C59",
};

const websiteJsonLd = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} ${amiri.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
