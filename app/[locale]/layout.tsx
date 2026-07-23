import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import { LocaleProvider } from "@/components/LocaleProvider";
import { HtmlLocaleAttributes } from "@/components/HtmlLocaleAttributes";
import { GlobalSearchProvider } from "@/components/GlobalSearchProvider";
import { GlobalSearch } from "@/components/GlobalSearch";
import {
  SUPPORTED_LOCALES,
  createTranslator,
  getMessages,
  isLocale,
} from "@/lib/i18n";
import {
  getAllStages,
  getAllSteps,
  getAllTopics,
  getAllGlossaryEntries,
  getAllResources,
} from "@/lib/content";

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

  const stages = getAllStages(params.locale);
  const steps = getAllSteps(params.locale);
  const topics = getAllTopics(params.locale);
  const glossary = getAllGlossaryEntries(params.locale);
  const resources = getAllResources(params.locale);

  return (
    <LocaleProvider locale={params.locale} messages={messages}>
      <HtmlLocaleAttributes locale={params.locale} />
      <GlobalSearchProvider>
        <a href="#main-content" className="skip-link">
          {t("common.skipToContent")}
        </a>
        <Navbar />
        <div className="border-b border-amber-200 bg-amber-50 px-5 py-2 text-center text-sm text-amber-900">
          {t("common.translationNotice")}
        </div>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <OfflineIndicator />
        <GlobalSearch
          stages={stages}
          steps={steps}
          topics={topics}
          glossary={glossary}
          resources={resources}
        />
      </GlobalSearchProvider>
    </LocaleProvider>
  );
}
