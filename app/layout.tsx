import type { Metadata, Viewport } from "next";
import { Outfit, Fraunces, Amiri } from "next/font/google";
import en from "@/locales/en/ui.json";
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
  title: en.metadata.site.title,
  description: en.metadata.site.description,
  keywords: en.metadata.site.keywords,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: en.brand.name,
  },
  openGraph: {
    title: en.brand.name,
    description: en.metadata.site.openGraphDescription,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4A7C59",
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
      <body className="flex min-h-screen flex-col font-sans">{children}</body>
    </html>
  );
}
