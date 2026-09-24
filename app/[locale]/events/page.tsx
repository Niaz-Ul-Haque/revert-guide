import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { EventsPageClient } from "@/components/EventsPageClient";
import { getEvents } from "@/lib/events";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import { getPageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { localeUrl } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "events", "/events");
}

export default function EventsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["events"]>("pages.events");
  const { lastUpdated, events } = getEvents(locale);
  const formatDate = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  });
  const eventsWithLabels = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((event) => ({
      ...event,
      dateLabel: formatDate.format(new Date(event.date)),
    }));

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t("nav.home"), url: localeUrl(locale, "/") },
          { name: copy.title, url: localeUrl(locale, "/events") },
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
          <p className="mb-4 max-w-2xl text-xl leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
          <p className="mb-2 max-w-2xl text-base leading-relaxed text-textSecondary">
            {copy.intro}
          </p>
          <p className="mb-0 flex max-w-2xl items-start gap-2 text-base leading-relaxed text-textPrimary">
            <Icon
              name="info"
              size="sm"
              className="mt-1 shrink-0 text-primary"
            />
            <span>{copy.noRegistration}</span>
          </p>
        </AnimateIn>
      </header>

      <EventsPageClient locale={locale} events={eventsWithLabels} />

      <p className="mb-10 mt-6 text-sm text-textMuted">
        {copy.lastUpdatedLabel}{" "}
        <time dateTime={lastUpdated}>
          {formatDate.format(new Date(lastUpdated))}
        </time>
      </p>

      <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center shadow-card">
        <p className="mb-3 text-sm text-textSecondary">{copy.tellUs.prompt}</p>
        <Link
          href={localizeHref(locale, "/get-help")}
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary no-underline transition-colors duration-300 hover:bg-primary/20 hover:text-primaryHover"
        >
          {copy.tellUs.label}
          <Icon name="chevron-right" size="sm" />
        </Link>
      </div>
    </div>
  );
}
