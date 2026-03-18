import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import { LocaleProvider } from "@/components/LocaleProvider";
import {
  SUPPORTED_LOCALES,
  createTranslator,
  getMessages,
  isLocale,
} from "@/lib/i18n";

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
    <LocaleProvider locale={params.locale} messages={messages}>
      <a href="#main-content" className="skip-link">
        {t("common.skipToContent")}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <OfflineIndicator />
    </LocaleProvider>
  );
}
