import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Callout";
import {
  CONTACT_EMAIL,
  ORGANISATION_LOCATION,
  ORGANISATION_NAME,
  hasPlaceholderConfig,
} from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "about", "/about");
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["about"]>("pages.about");
  const placeholder = hasPlaceholderConfig();

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <div className="relative">
        <AnimateIn>
          <h1 className="mb-10 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
        </AnimateIn>

        <div
          className="pointer-events-none absolute -right-6 top-0 hidden h-48 w-36 opacity-10 lg:block"
          aria-hidden="true"
        >
          <Image
            src="/Grandfather male Character Standing.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="mission">
          <h2
            id="mission"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.missionTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.mission}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="approach">
          <h2
            id="approach"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.approachTitle}
          </h2>
          <ul className="flex flex-col gap-3 pl-0 text-base text-textSecondary">
            {copy.approachItems.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span
                    className="block h-1.5 w-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <strong className="text-textPrimary">{item.title}</strong> -{" "}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="who-runs">
          <h2
            id="who-runs"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.whoRunsTitle}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            {copy.whoRunsBody}
          </p>
          <dl className="mb-0 grid gap-3 sm:grid-cols-2">
            {[
              { label: copy.organisationLabel, value: ORGANISATION_NAME },
              { label: copy.locationLabel, value: ORGANISATION_LOCATION },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-border/60 bg-white p-4"
              >
                <dt className="mb-1 text-sm font-medium text-textMuted">
                  {row.label}
                </dt>
                <dd className="mb-0 ml-0 text-base font-semibold text-textPrimary">
                  {row.value}
                  {placeholder && (
                    <span className="ml-2 inline-block rounded-full border border-warning/40 bg-accentYellow/20 px-2 py-0.5 align-middle text-xs font-medium text-textPrimary">
                      {copy.toBeConfirmed}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="review">
          <h2
            id="review"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.reviewTitle}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            {copy.reviewIntro}
          </p>
          <ol className="mb-6 flex flex-col gap-3 pl-0">
            {copy.reviewStates.map((state, index) => (
              <li
                key={state.name}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="text-base leading-relaxed text-textSecondary">
                  <strong className="text-textPrimary">{state.name}.</strong>{" "}
                  {state.body}
                </span>
              </li>
            ))}
          </ol>
          <Callout variant="info" title={copy.badgeTitle}>
            <p>{copy.badgeBody}</p>
          </Callout>
          <h3 className="mb-2 font-display text-lg font-semibold text-textPrimary">
            {copy.reviewerTitle}
          </h3>
          <p className="mb-0 text-base leading-relaxed text-textSecondary">
            {copy.reviewerBody}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="disclaimer">
          <h2
            id="disclaimer"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.disclaimerTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.disclaimer}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section aria-labelledby="contact">
          <h2
            id="contact"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.contactTitle}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            {copy.contact}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Button href={localizeHref(locale, "/get-help")} variant="outline">
              {copy.contactLinkLabel}
            </Button>
            <p className="mb-0 text-base">
              <span className="font-medium text-textPrimary">
                {copy.contactEmailLabel}:
              </span>{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-primary underline-offset-2 hover:text-primaryHover hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </AnimateIn>

      <p className="mb-0 mt-10 text-sm text-textMuted">
        {copy.lastReviewedLabel}{" "}
        <time dateTime={copy.lastReviewedDate}>{copy.lastReviewed}</time>
      </p>
    </div>
  );
}
