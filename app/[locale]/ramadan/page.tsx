import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Callout } from "@/components/Callout";
import { ResourceCard } from "@/components/Card";
import { AnimateIn } from "@/components/AnimateIn";
import { getAllResources } from "@/lib/content";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "ramadan");
}

export default function RamadanPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["ramadan"]>("pages.ramadan");
  const allResources = getAllResources(locale);
  const ramadanResources = allResources.filter(
    (r) =>
      r.relatedStepIds.includes("fasting") ||
      r.relatedTopicIds.includes("fasting"),
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.ramadan") },
        ]}
      />

      {/* ── 1. Title ── */}
      <header className="relative mb-12">
        <AnimateIn animation="fade-up">
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
        </AnimateIn>

        {/* Decorative illustration */}
        <div
          className="pointer-events-none absolute -right-4 top-0 hidden h-[160px] w-[100px] opacity-[0.12] lg:block"
          aria-hidden="true"
        >
          <Image
            src="/Grandmother female Character Standing.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* ── 2. Intro ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="what-is-ramadan">
          <h2
            id="what-is-ramadan"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.whatIsRamadan.title}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.whatIsRamadan.body}
          </p>
        </section>
      </AnimateIn>

      {/* ── 3. For New Muslims ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="for-new-muslims">
          <h2
            id="for-new-muslims"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.forNewMuslims.title}
          </h2>
          <Callout variant="tip" title={copy.forNewMuslims.calloutTitle}>
            <p>{copy.forNewMuslims.calloutBody}</p>
          </Callout>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.forNewMuslims.body}
          </p>
        </section>
      </AnimateIn>

      {/* ── 4. Fasting Basics ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="fasting-basics">
          <h2
            id="fasting-basics"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.fastingBasics.title}
          </h2>
          <div className="flex flex-col gap-3">
            {copy.fastingBasics.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4"
              >
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-textSecondary">
                  <strong className="text-textPrimary">{item.term}</strong>{" "}
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-textMuted">
            {copy.fastingBasics.footerPrefix}
            <Link
              href={localizeHref(locale, "/topics/fasting")}
              className="font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover"
            >
              {copy.fastingBasics.footerLinkLabel}
            </Link>
            {copy.fastingBasics.footerSuffix}
          </p>
        </section>
      </AnimateIn>

      {/* ── 5. Preparing for Ramadan ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="preparing">
          <h2
            id="preparing"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.preparing.title}
          </h2>
          <ul className="flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {copy.preparing.items.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      {/* ── 6. During Ramadan ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="during-ramadan">
          <h2
            id="during-ramadan"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.duringRamadan.title}
          </h2>

          <h3 className="mb-3 mt-4 font-display text-lg font-semibold text-textPrimary">
            {copy.duringRamadan.spiritualPracticesTitle}
          </h3>
          <ul className="mb-6 flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {copy.duringRamadan.spiritualPractices.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          <h3 className="mb-3 mt-4 font-display text-lg font-semibold text-textPrimary">
            {copy.duringRamadan.practicalTipsTitle}
          </h3>
          <Callout
            variant="tip"
            title={copy.duringRamadan.practicalTipsCalloutTitle}
          >
            <p>{copy.duringRamadan.practicalTipsCalloutBody}</p>
          </Callout>
          <ul className="flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {copy.duringRamadan.practicalTips.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      {/* ── 7. Tarawih and Community ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="tarawih">
          <h2
            id="tarawih"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.tarawihAndCommunity.title}
          </h2>
          <p className="mb-3 text-base leading-relaxed text-textSecondary">
            {copy.tarawihAndCommunity.tarawihBodyBeforeIsha}
            <span lang="ar" dir="rtl" className="font-arabic">
              العشاء
            </span>
            {copy.tarawihAndCommunity.tarawihBodyAfterIsha}
          </p>
          <p className="mb-3 text-base leading-relaxed text-textSecondary">
            {copy.tarawihAndCommunity.iftarBody}
          </p>
          <Callout variant="info" title={copy.tarawihAndCommunity.calloutTitle}>
            <p>{copy.tarawihAndCommunity.calloutBody}</p>
          </Callout>
        </section>
      </AnimateIn>

      {/* ── 8. Laylat al-Qadr ── */}
      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/40 p-6"
          aria-labelledby="laylat-al-qadr"
        >
          <h2
            id="laylat-al-qadr"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.laylatAlQadr.title}
          </h2>
          <p className="mb-0 text-base leading-relaxed text-textSecondary">
            {copy.laylatAlQadr.body}
          </p>
        </section>
      </AnimateIn>

      {/* ── 9. Eid al-Fitr ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="eid">
          <h2
            id="eid"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.eidAlFitr.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            {copy.eidAlFitr.body}
          </p>
          <ul className="mb-4 flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {copy.eidAlFitr.items.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
          <Callout variant="tip" title={copy.eidAlFitr.calloutTitle}>
            <p>{copy.eidAlFitr.calloutBody}</p>
          </Callout>
        </section>
      </AnimateIn>

      {/* ── 10. Resources ── */}
      {ramadanResources.length > 0 && (
        <AnimateIn>
          <section className="mb-10" aria-labelledby="ramadan-resources">
            <h2
              id="ramadan-resources"
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {copy.resources.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ramadanResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  url={resource.url}
                  locale={locale}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-textMuted">
              {copy.resources.footerPrefix}
              <Link
                href={localizeHref(locale, "/topics/fasting")}
                className="font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover"
              >
                {copy.resources.footerLinkLabel}
              </Link>
              {copy.resources.footerSuffix}
            </p>
          </section>
        </AnimateIn>
      )}
    </div>
  );
}
