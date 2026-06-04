import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { seasonalGuides } from "@/lib/seasonal-guides";
import {
  DEFAULT_LOCALE,
  getTranslator,
  localizeHref,
  type Locale,
} from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  return {
    title: `Seasonal Guides - ${t("brand.name")}`,
    description:
      "Beginner-friendly English guides for Islamic calendar basics, Ramadan, Eid, Muharram, Ashura, Dhul Hijjah, Hajj, Umrah, zakat, and charity.",
  };
}

export default function SeasonalGuidesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  if (locale !== DEFAULT_LOCALE) notFound();

  const t = getTranslator(locale);
  const href = (path: string) => localizeHref(locale, path);

  const guideCards = [
    {
      title: "Ramadan Guide",
      description:
        "Fasting basics, first-fast help, Taraweeh, Laylat al-Qadr, and Eid preparation.",
      href: "/ramadan",
      badge: "Expanded guide",
    },
    ...seasonalGuides.map((guide) => ({
      title: guide.title,
      description: guide.description,
      href: `/seasonal/${guide.slug}`,
      badge: guide.badge,
    })),
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: href("/") },
          { label: "Seasonal Guides" },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="star" size="sm" />
            Seasonal worship and giving
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Seasonal Guides
          </h1>
          <p className="mb-0 text-lg leading-relaxed text-textSecondary">
            Simple, source-backed guides for the Islamic seasons that often
            raise practical questions for new Muslims.
          </p>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="seasonal-start-heading">
          <h2
            id="seasonal-start-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Start With What Is Current
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {guideCards.map((guide) => (
              <Link
                key={guide.href}
                href={href(guide.href)}
                className="group rounded-2xl border border-border/60 bg-white p-5 no-underline shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primaryGreen/60 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="mb-0 mt-0 text-lg font-semibold text-textPrimary">
                    {guide.title}
                  </h3>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {guide.badge}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-textSecondary">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Open guide
                  <Icon
                    name="chevron-right"
                    size="sm"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-warning/20 bg-accentYellow/20 p-5"
          aria-labelledby="seasonal-disclaimer-heading"
        >
          <h2
            id="seasonal-disclaimer-heading"
            className="mb-2 mt-0 text-lg font-semibold text-textPrimary"
          >
            Personal Cases Need Qualified Review
          </h2>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            Local calendar announcements, voluntary fasts, fasting exemptions,
            fidyah, missed fasts, qurbani, Hajj travel, Umrah visas, zakat
            calculations, and sensitive family or health situations can depend
            on your exact context. Use these guides for orientation, then ask a
            qualified local scholar, imam, trusted organization, clinician, or
            official travel source as appropriate.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <div className="flex flex-wrap gap-3">
          <Button href={href("/resources")} variant="primary">
            Browse resources
          </Button>
          <Button
            href={href("/roadmap/month-6-plus/zakat-hajj")}
            variant="outline"
          >
            Zakat and Hajj roadmap step
            <Icon name="chevron-right" size="sm" />
          </Button>
        </div>
      </AnimateIn>
    </div>
  );
}
