import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import { AsmaAlHusnaClient } from "@/components/AsmaAlHusnaClient";
import { getTranslator, localizeHref, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "asmaAlHusna");
}

export default function AsmaAlHusnaPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Record<string, string>>("pages.asmaAlHusna");

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.tools"), href: localizeHref(locale, "/resources") },
          { label: copy.title },
        ]}
      />

      <header className="mb-10">
        <AnimateIn animation="fade-up">
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
        </AnimateIn>
      </header>

      <AnimateIn>
        <AsmaAlHusnaClient />
      </AnimateIn>
    </div>
  );
}
