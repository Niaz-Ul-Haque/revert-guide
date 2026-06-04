import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { getLifeGuides } from "@/lib/life-guides";
import { getTranslator, localizeHref, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  const copy = t<{
    metadataTitle: string;
    metadataDescription: string;
  }>("pages.guides.index");
  return {
    title: `${copy.metadataTitle} - ${t("brand.name")}`,
    description: copy.metadataDescription,
  };
}

export default function GuidesPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<{
    title: string;
    eyebrow: string;
    subtitle: string;
    openGuide: string;
    noteTitle: string;
    noteBody: string;
    roadmapButton: string;
  }>("pages.guides.index");
  const guides = getLifeGuides(locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="users" size="sm" />
            {copy.eyebrow}
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="mb-0 text-lg leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
        </header>
      </AnimateIn>

      <div className="grid gap-5 md:grid-cols-2" role="list">
        {guides.map((guide, index) => (
          <AnimateIn key={guide.id} delay={index * 0.06}>
            <Link
              href={localizeHref(locale, `/guides/${guide.slug}`)}
              className="group flex h-full flex-col rounded-2xl border border-border/60 bg-white p-6 no-underline shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primaryGreen/60 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
              role="listitem"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surfaceElevated text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon
                    name={
                      guide.id === "first-masjid-visit" ? "map-pin" : "users"
                    }
                    size="md"
                  />
                </span>
                <div className="min-w-0">
                  <h2 className="mb-1 mt-0 text-lg font-semibold text-textPrimary">
                    {guide.title}
                  </h2>
                  <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {guide.description}
                  </p>
                </div>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {copy.openGuide}
                <Icon
                  name="chevron-right"
                  size="sm"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn>
        <section className="mt-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6">
          <h2 className="mb-2 mt-0 text-lg font-semibold text-textPrimary">
            {copy.noteTitle}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-textSecondary">
            {copy.noteBody}
          </p>
          <Button href={localizeHref(locale, "/roadmap")} variant="outline">
            {copy.roadmapButton}
          </Button>
        </section>
      </AnimateIn>
    </div>
  );
}
