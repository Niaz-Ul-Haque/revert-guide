import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "leaflet/dist/leaflet.css";
import "../globals.css";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import { LocaleProvider } from "@/components/LocaleProvider";
import { GlobalSearchProvider } from "@/components/GlobalSearchProvider";
import { GlobalSearch } from "@/components/GlobalSearch";
import { SUPPORTED_LOCALES, createTranslator, isLocale } from "@/lib/i18n";
import { getMessages } from "@/lib/messages";
import { getTextDirection } from "@/lib/site";
import { fontClassName } from "@/lib/fonts";
import { siteMetadata, siteViewport, websiteJsonLd } from "@/lib/site-metadata";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const messages = getMessages(params.locale);
  const t = createTranslator(messages);

  return (
    <html
      lang={params.locale}
      dir={getTextDirection(params.locale)}
      className={fontClassName}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={websiteJsonLd} />
        <LocaleProvider locale={params.locale} messages={messages}>
          <GlobalSearchProvider>
            <a href="#main-content" className="skip-link">
              {t("common.skipToContent")}
            </a>
            <Navbar />
            {params.locale !== "en" && (
              <div className="border-b border-amber-200 bg-amber-50 px-5 py-2 text-center text-sm text-amber-900">
                {t("common.translationNotice")}
              </div>
            )}
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <OfflineIndicator />
            <GlobalSearch />
          </GlobalSearchProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
