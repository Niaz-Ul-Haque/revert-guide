import type { Metadata, Viewport } from "next";
import { Outfit, Fraunces, Amiri } from "next/font/google";
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
  title: "Revert Guide - Your Journey Begins Here",
  description:
    "An offline-first educational guide for new Muslim converts in the Toronto area. Step-by-step onboarding with empathy and practical guidance.",
  keywords: ["Islam", "convert", "revert", "Muslim", "guide", "Toronto"],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Revert Guide",
  },
  openGraph: {
    title: "Revert Guide",
    description:
      "Your guided journey into Islam - practical, compassionate, and at your own pace.",
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
