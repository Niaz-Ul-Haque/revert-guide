import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Callout } from "@/components/Callout";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "mentalHealth");
}

export default function MentalHealthPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["mentalHealth"]>("pages.mentalHealth");
  const helplines = copy.resources.crisisHelplines.map((item, index) => ({
    ...item,
    href: ["tel:988", "sms:741741", "tel:1-866-627-3342"][index],
  }));
  const directories = copy.resources.directories.map((item, index) => ({
    ...item,
    href: index === 0 ? "https://khalilcenter.com/" : null,
  }));
  const furtherReading = copy.resources.furtherReading.map((item, index) => ({
    ...item,
    href:
      index === 0
        ? "https://yaqeeninstitute.org/read/paper/new-muslims-and-mental-health"
        : null,
  }));

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
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
            src="/Adult female Character Standing.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* ── 2. Validation ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="validation">
          <h2
            id="validation"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.validation.title}
          </h2>
          <Callout variant="info" title={copy.validation.calloutTitle}>
            <p>{copy.validation.calloutBody}</p>
          </Callout>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.validation.body}
          </p>
        </section>
      </AnimateIn>

      {/* ── 3. Islamic Framing ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="islamic-framing">
          <h2
            id="islamic-framing"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.faithAndHelp.title}
          </h2>
          {copy.faithAndHelp.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-3 text-base leading-relaxed text-textSecondary"
            >
              {paragraph}
            </p>
          ))}
          <Callout variant="tip" title={copy.faithAndHelp.calloutTitle}>
            <p>{copy.faithAndHelp.calloutBody}</p>
          </Callout>
        </section>
      </AnimateIn>

      {/* ── 4. Common Experiences ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="common-experiences">
          <h2
            id="common-experiences"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.commonExperiences.title}
          </h2>

          <div className="flex flex-col gap-5">
            {copy.commonExperiences.items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-card"
              >
                <h3 className="mb-2 mt-0 font-display text-lg font-semibold text-textPrimary">
                  {item.title}
                </h3>
                <p className="mb-3 text-base leading-relaxed text-textSecondary">
                  {item.body}
                </p>
                <p className="mb-0 text-base leading-relaxed text-textSecondary">
                  <strong className="text-textPrimary">
                    {copy.commonExperiences.helpLabel}
                  </strong>{" "}
                  {item.help}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* ── 5. Practical Self-Care ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="self-care">
          <h2
            id="self-care"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.selfCare.title}
          </h2>
          <ul className="flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {copy.selfCare.items.map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-3.5"
              >
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

      {/* ── 6. When to Seek Help ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="seek-help">
          <h2
            id="seek-help"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.seekHelp.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            {copy.seekHelp.intro}
          </p>
          <ul className="mb-4 flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {copy.seekHelp.items.map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-error/20 bg-error/5 p-3.5"
              >
                <Icon
                  name="alert-circle"
                  size="sm"
                  className="mt-0.5 shrink-0 text-error"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <Callout variant="important" title={copy.seekHelp.calloutTitle}>
            <p>{copy.seekHelp.calloutBody}</p>
          </Callout>
        </section>
      </AnimateIn>

      {/* ── 7. Disclaimer ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="disclaimer">
          <p className="rounded-xl bg-surfaceElevated/50 p-4 text-sm italic leading-relaxed text-textMuted">
            <strong>{copy.disclaimer.label}</strong> {copy.disclaimer.body}
          </p>
        </section>
      </AnimateIn>

      {/* ── 8. Resources ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="resources">
          <h2
            id="resources"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.resources.title}
          </h2>

          {/* Crisis Helplines */}
          <h3 className="mb-3 font-display text-lg font-semibold text-textPrimary">
            {copy.resources.crisisHelplinesTitle}
          </h3>
          <div className="mb-8 flex flex-col gap-3">
            {helplines.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft"
              >
                <p className="mb-1 text-base font-bold text-textPrimary">
                  {item.name}
                </p>
                <p className="mb-2 text-sm leading-relaxed text-textSecondary">
                  {item.desc}
                </p>
                <p className="mb-0 flex items-center gap-2 text-sm">
                  <span className="font-medium text-textPrimary">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="font-bold text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline"
                  >
                    {item.contact}
                  </a>
                </p>
              </div>
            ))}
          </div>

          {/* Directories & Support */}
          <h3 className="mb-3 font-display text-lg font-semibold text-textPrimary">
            {copy.resources.directoriesTitle}
          </h3>
          <div className="mb-8 flex flex-col gap-3">
            {directories.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft"
              >
                <p className="mb-1 text-base font-bold text-textPrimary">
                  {item.name}
                </p>
                <p
                  className={`text-sm leading-relaxed text-textSecondary ${
                    item.href ? "mb-2" : "mb-0"
                  }`}
                >
                  {item.desc}
                </p>
                {item.href && item.linkLabel ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline"
                  >
                    {item.linkLabel}
                    <Icon name="external-link" size="sm" />
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          {/* Educational */}
          <h3 className="mb-3 font-display text-lg font-semibold text-textPrimary">
            {copy.resources.furtherReadingTitle}
          </h3>
          <div className="flex flex-col gap-3">
            {furtherReading.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft"
              >
                <p className="mb-1 text-base font-bold text-textPrimary">
                  {item.name}
                </p>
                <p className="mb-2 text-sm leading-relaxed text-textSecondary">
                  {item.desc}
                </p>
                {item.href && item.linkLabel ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline"
                  >
                    {item.linkLabel}
                    <Icon name="external-link" size="sm" />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* ── Cross-links ── */}
      <AnimateIn>
        <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center shadow-card">
          <p className="mb-3 text-sm text-textSecondary">
            {copy.crossLink.prompt}
          </p>
          <Link
            href={localizeHref(locale, "/topics/community")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary no-underline transition-all duration-300 ease-out-expo hover:bg-primary/20 hover:text-primaryHover"
          >
            {copy.crossLink.linkLabel}
            <Icon name="chevron-right" size="sm" />
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}
