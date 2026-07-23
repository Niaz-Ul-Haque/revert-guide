import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Callout";
import { ResourceCard } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { PrintButton } from "@/components/PrintButton";
import { AnimateIn } from "@/components/AnimateIn";
import { SourcesPanel } from "@/components/SourceTags";
import { getAllResources, getSourcesByIds } from "@/lib/content";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const firstRamadanSections = [
  {
    title: "Pre-Ramadan Checklist",
    items: [
      "Ask your masjid how they announce the start of Ramadan.",
      "Check prayer and iftar times for your local area.",
      "Plan a simple suhoor you can actually wake up for.",
      "Tell work, school, or family only what they need to know.",
    ],
  },
  {
    title: "First Fast Guide",
    items: [
      "Wake for suhoor, drink water, and eat something steady.",
      "Make the intention in your heart to fast for Allah.",
      "Break the fast at Maghrib without delaying out of anxiety.",
      "If you make a mistake, ask a qualified person instead of assuming the worst.",
    ],
  },
  {
    title: "Suhoor and Iftar Basics",
    items: [
      "Keep suhoor simple: water, protein, fiber, and something you tolerate well.",
      "Break fast gently before a large meal.",
      "Do not turn every iftar into a heavy social event.",
      "If you have medical concerns, speak with a clinician and a qualified religious teacher.",
    ],
  },
  {
    title: "Taraweeh for Beginners",
    items: [
      "Taraweeh is an extra night prayer in Ramadan, usually after Isha.",
      "You can attend part of it and leave respectfully if tired.",
      "Follow the rows and copy the congregation if you are still learning.",
      "Ask where to stand or sit before prayer starts if you are unsure.",
    ],
  },
  {
    title: "Hardship Notes",
    items: [
      "Menstruation, illness, travel, pregnancy, nursing, medication, and serious hardship can affect fasting.",
      "Do not self-diagnose a ruling from one short post.",
      "Ask a qualified local scholar about missed fasts, fidyah, or making days up.",
      "For health risk, seek medical advice as well as religious guidance.",
    ],
  },
  {
    title: "Laylat al-Qadr Action Plan",
    items: [
      "Choose one simple dua to repeat often.",
      "Pray what you can, even two rak'ahs.",
      "Read or listen to a small portion of Quran.",
      "Give charity if you are able, even a small amount.",
    ],
  },
];

const ramadanCareSections = [
  {
    title: "Missed Fasts Orientation",
    body: "If you missed a Ramadan fast because of illness, travel, menstruation, or another valid situation, do not panic or guess from a short post. Quran 2:184-185 gives the broad make-up-days foundation for sickness and travel, but the details of qada, fidyah, pregnancy, nursing, chronic illness, and repeated years need qualified review.",
    items: [
      "Write down the number of days you are sure about, if you know it.",
      "Ask a qualified local scholar how your case should be handled.",
      "Ask a clinician too if fasting or making up fasts may affect your health.",
      "Do not treat this app as a calculator or personal ruling.",
    ],
  },
  {
    title: "Menstruation, Illness, And Travel",
    body: "Some situations affect whether a person fasts during Ramadan. Menstruation, significant illness, travel, medication, pregnancy, nursing, disability, and chronic health issues are not shame topics; they are personal cases that deserve careful, qualified guidance.",
    items: [
      "Ask privately if you are embarrassed; you do not need to explain details publicly.",
      "If your body or medication is involved, include a qualified clinician in the decision.",
      "Follow reliable local guidance instead of comparing strangers' cases online.",
      "Keep worship gentle: dua, dhikr, Quran listening, charity, and kindness still matter.",
    ],
  },
  {
    title: "First Eid Alone Support",
    body: "Your first Eid may feel joyful, lonely, or both. A small Eid still counts. Try to make one concrete plan before Ramadan ends so the day does not arrive without support.",
    items: [
      "Ask your masjid whether there is an Eid breakfast, convert gathering, or community meal.",
      "Message one mentor or Muslim friend before Eid morning.",
      "Plan transportation, prayer location, and a simple meal.",
      "Leave early if the crowd overwhelms you; attending what you can is enough.",
    ],
  },
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "ramadan", "/ramadan");
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
  const sources =
    locale === "en"
      ? getSourcesByIds(
          [
            "quran-fasting-2-183-185",
            "quran-laylat-al-qadr-97",
            "sunnah-bukhari-laylat-qadr",
            "sunnah-bukhari-menstruation-fasting",
            "new-muslim-guide",
            "yaqeen-ramadan",
          ],
          locale,
        )
      : [];

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
          {locale === "en" && (
            <div className="mt-6 flex flex-wrap gap-3">
              <PrintButton />
              <Button
                href={localizeHref(locale, "/seasonal")}
                variant="outline"
              >
                Seasonal guides
                <Icon name="chevron-right" size="sm" />
              </Button>
            </div>
          )}
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

      {locale === "en" && (
        <AnimateIn>
          <section
            className="mb-10"
            aria-labelledby="first-ramadan-plan-heading"
          >
            <div className="mb-5">
              <h2
                id="first-ramadan-plan-heading"
                className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
              >
                First Ramadan Planning
              </h2>
              <p className="mb-0 max-w-2xl text-sm leading-relaxed text-textSecondary">
                Use these small checklists as a calm starting point. Ramadan is
                a month, not a test of how much you can do at once.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {firstRamadanSections.map((section) => (
                <article
                  key={section.title}
                  className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card"
                >
                  <h3 className="mb-3 mt-0 text-base font-semibold text-textPrimary">
                    {section.title}
                  </h3>
                  <ul className="mb-0 flex flex-col gap-2 pl-0">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-textSecondary"
                      >
                        <Icon
                          name="check"
                          size="sm"
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </AnimateIn>
      )}

      {locale === "en" && (
        <AnimateIn>
          <section className="mb-10" aria-labelledby="ramadan-care-heading">
            <div className="mb-5">
              <h2
                id="ramadan-care-heading"
                className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
              >
                Sensitive Ramadan Questions
              </h2>
              <p className="mb-0 max-w-2xl text-sm leading-relaxed text-textSecondary">
                These notes are for orientation only. Personal fasting cases
                deserve qualified religious review, and health-related cases
                should include medical advice.
              </p>
            </div>
            <div className="grid gap-4">
              {ramadanCareSections.map((section) => (
                <article
                  key={section.title}
                  className="page-break-avoid rounded-2xl border border-warning/20 bg-accentYellow/20 p-5"
                >
                  <h3 className="mb-2 mt-0 text-base font-semibold text-textPrimary">
                    {section.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                    {section.body}
                  </p>
                  <ul className="mb-0 flex flex-col gap-2 pl-0">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-textSecondary"
                      >
                        <Icon
                          name="check"
                          size="sm"
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </AnimateIn>
      )}

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
          {locale === "en" && (
            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                href={localizeHref(locale, "/seasonal/eid-al-fitr")}
                variant="primary"
              >
                First Eid guide
              </Button>
              <Button
                href={localizeHref(locale, "/seasonal/zakat")}
                variant="outline"
              >
                Zakat beginner guide
                <Icon name="chevron-right" size="sm" />
              </Button>
            </div>
          )}
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
                  organization={resource.organization}
                  bestFor={resource.bestFor}
                  trustNote={resource.trustNote}
                  sources={getSourcesByIds(resource.sourceIds ?? [], locale)}
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

      {sources.length > 0 && (
        <AnimateIn>
          <SourcesPanel
            sources={sources}
            note="Ramadan guidance uses Quran and hadith references for core worship concepts and beginner education sources for practical framing. Ask a qualified local imam about illness, travel, menstruation, medication, fidyah, or missed fasts."
          />
        </AnimateIn>
      )}
    </div>
  );
}
