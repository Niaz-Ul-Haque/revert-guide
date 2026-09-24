import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Callout";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { getPageMetadata } from "@/lib/metadata";
import {
  CONTACT_EMAIL,
  HELP_FORM_URL,
  REPORT_EMAIL,
  hasPlaceholderConfig,
  localeUrl,
} from "@/lib/site";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { PLACEHOLDER_LINK_REL } from "@/lib/link-rel";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "getHelp", "/get-help");
}

const linkClass =
  "font-semibold text-primary underline-offset-2 hover:text-primaryHover hover:underline";

export default function GetHelpPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["getHelp"]>("pages.getHelp");
  const sources = getSourcesByIds(
    [
      "opc-meaningful-consent",
      "opc-limiting-collection",
      "opc-safeguards",
      "opc-retention-disposal",
      "google-forms-responses",
      "google-workspace-data-regions",
      "cafc-report-fraud",
    ],
    locale,
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: copy.title, url: localeUrl(locale, "/get-help") },
        ])}
      />
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <header className="mb-8">
        <AnimateIn animation="fade-up">
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
        </AnimateIn>
      </header>

      {/* Crisis reminder first, so nobody waits on a form in an emergency. */}
      <div className="mb-8 flex items-start gap-3 rounded-2xl border border-error/30 bg-error/5 p-5">
        <Icon
          name="alert-circle"
          size="md"
          className="mt-0.5 shrink-0 text-error"
        />
        <p className="mb-0 text-base leading-relaxed text-textPrimary">
          <strong>{copy.crisis.text}</strong>{" "}
          <Link
            href={localizeHref(locale, "/mental-health")}
            className={linkClass}
          >
            {copy.crisis.linkLabel}
          </Link>
        </p>
      </div>

      {hasPlaceholderConfig() && (
        <Callout variant="info" title={copy.placeholderNotice.title}>
          <p>{copy.placeholderNotice.body}</p>
        </Callout>
      )}

      <AnimateIn>
        <section className="mb-10" aria-labelledby="what-for">
          <h2
            id="what-for"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.whatFor.title}
          </h2>
          <ul className="mb-0 grid gap-3 pl-0 sm:grid-cols-2">
            {copy.whatFor.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-card"
              >
                <h3 className="mb-1 mt-0 font-display text-lg font-semibold text-textPrimary">
                  {item.title}
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="send-request"
        >
          <h2
            id="send-request"
            className="mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.form.title}
          </h2>
          <p className="mb-5 text-base leading-relaxed text-textSecondary">
            {copy.form.body}
          </p>
          <Button href={HELP_FORM_URL} rel={PLACEHOLDER_LINK_REL} external>
            {copy.form.buttonLabel}
          </Button>

          <h3 className="mb-3 mt-8 font-display text-lg font-semibold text-textPrimary">
            {copy.form.asksTitle}
          </h3>
          <ul className="mb-3 grid gap-2 pl-0 sm:grid-cols-2">
            {copy.form.asks.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-textSecondary"
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
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {copy.form.asksNote}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="who-reads">
          <h2
            id="who-reads"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.whoReads.title}
          </h2>
          <p className="mb-5 text-base leading-relaxed text-textSecondary">
            {copy.whoReads.body}
          </p>
          <div className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
            <Icon name="clock" size="md" className="shrink-0 text-primary" />
            <div>
              <h3 className="mb-1 mt-0 text-base font-semibold text-textPrimary">
                {copy.whoReads.responseTitle}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                {copy.whoReads.response}
              </p>
            </div>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="privacy">
          <h2
            id="privacy"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.privacy.title}
          </h2>
          <ul className="mb-4 flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {copy.privacy.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link href={localizeHref(locale, "/privacy")} className={linkClass}>
            {copy.privacy.linkLabel}
          </Link>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-border/60 bg-white p-6 shadow-card"
          aria-labelledby="report"
        >
          <h2
            id="report"
            className="mb-3 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.report.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            {copy.report.body}
          </p>
          <p className="mb-4 text-base">
            <span className="font-medium text-textPrimary">
              {copy.report.emailLabel}:
            </span>{" "}
            <a
              href={`mailto:${REPORT_EMAIL}`}
              rel={PLACEHOLDER_LINK_REL}
              className={linkClass}
            >
              {REPORT_EMAIL}
            </a>
          </p>
          <p className="mb-4 text-sm leading-relaxed text-textSecondary">
            {copy.report.scamNote}
          </p>
          <Link
            href={localizeHref(locale, "/guides/red-flags-and-staying-safe")}
            className={`${linkClass} text-sm`}
          >
            {copy.report.redFlagsLabel}
          </Link>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="contact">
          <h2
            id="contact"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.contact.title}
          </h2>
          <p className="mb-3 text-base leading-relaxed text-textSecondary">
            {copy.contact.body}
          </p>
          <p className="mb-0 text-base">
            <span className="font-medium text-textPrimary">
              {copy.contact.emailLabel}:
            </span>{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              rel={PLACEHOLDER_LINK_REL}
              className={linkClass}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center shadow-card">
          <p className="mb-3 text-sm text-textSecondary">
            {copy.guideLink.prompt}
          </p>
          <Link
            href={localizeHref(locale, "/guides/how-to-ask-for-help")}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary no-underline transition-colors duration-300 hover:bg-primary/20 hover:text-primaryHover"
          >
            {copy.guideLink.label}
            <Icon name="chevron-right" size="sm" />
          </Link>
        </div>
      </AnimateIn>

      {sources.length > 0 && (
        <div className="mt-10">
          <SourcesPanel
            sources={sources}
            title={copy.sourcesTitle}
            note={copy.sourcesNote}
          />
        </div>
      )}
    </div>
  );
}
