import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "accessibility");
}

export default function AccessibilityPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["accessibility"]>("pages.accessibility");

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <AnimateIn>
        <h1 className="mb-10 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          {copy.title}
        </h1>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="commitment">
          <h2
            id="commitment"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.commitmentTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.commitment}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="standards">
          <h2
            id="standards"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.standardsTitle}
          </h2>
          <ul className="flex flex-col gap-3 pl-0 text-base text-textSecondary">
            {copy.standards.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4"
              >
                <span
                  className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="features">
          <h2
            id="features"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.featuresTitle}
          </h2>
          <ul className="flex flex-col gap-3 pl-0 text-base text-textSecondary">
            {copy.features.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4"
              >
                <span
                  className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="limitations">
          <h2
            id="limitations"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.limitationsTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.limitations}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="feedback">
          <h2
            id="feedback"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.feedbackTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.feedback}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section aria-labelledby="last-updated">
          <h2
            id="last-updated"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.lastUpdatedTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.lastUpdated}
          </p>
        </section>
      </AnimateIn>
    </div>
  );
}
