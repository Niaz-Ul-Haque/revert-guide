import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import { PrayerTimesClient } from "@/components/PrayerTimesClient";
import { SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { getTranslator, localizeHref, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "prayerTimes", "/prayer-times");
}

export default function PrayerTimesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Record<string, string>>("pages.prayerTimes");
  const sources =
    locale === "en" ? getSourcesByIds(["aladhan-api"], locale) : [];

  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.tools"), href: localizeHref(locale, "/resources") },
          { label: copy.title },
        ]}
      />

      <header className="mb-10">
        <AnimateIn animation="fade-up">
          <h1 className="mb-2 font-display text-3xl font-bold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
        </AnimateIn>
      </header>

      <AnimateIn>
        <PrayerTimesClient />
      </AnimateIn>

      {sources.length > 0 && (
        <AnimateIn>
          <div className="mt-10">
            <SourcesPanel
              sources={sources}
              note="Prayer times on this page come from AlAdhan. Calculation methods can differ, so confirm exact schedules with your local masjid when timing matters."
            />
          </div>
        </AnimateIn>
      )}
    </div>
  );
}
