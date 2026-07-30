"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useTranslations } from "@/components/LocaleProvider";
import { ResourceCard } from "@/components/Card";
import { Icon, type IconName } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import type { Resource, ResourceType, SourceEntry } from "@/lib/types";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import resourceCollectionsContent from "@/locales/en/resource-collections.json";

interface ResourcesPageClientProps {
  locale: Locale;
  resources: Resource[];
  sources: SourceEntry[];
}

interface CollectionDefinition {
  title: string;
  body: string;
  icon: IconName;
  resourceIds: string[];
}

interface FeatureCard {
  title: string;
  body: string;
  href: string;
  icon: IconName;
}

const collectionDefinitions =
  resourceCollectionsContent.collections as CollectionDefinition[];
const featureCards = resourceCollectionsContent.featureCards as FeatureCard[];
const chooseChecklist = resourceCollectionsContent.chooseChecklist;
const resourceWarnings = resourceCollectionsContent.warnings;

export function ResourcesPageClient({
  locale,
  resources,
  sources,
}: ResourcesPageClientProps) {
  const t = useTranslations();
  const copy = t<Messages["pages"]["resourcesPage"]>("pages.resourcesPage");
  const [activeCategory, setActiveCategory] = useState<ResourceType | "all">(
    "all",
  );
  const categories: { label: string; value: ResourceType | "all" }[] = [
    { label: copy.categories.all, value: "all" },
    { label: copy.categories.article, value: "article" },
    { label: copy.categories.video, value: "video" },
    { label: copy.categories.app, value: "app" },
    { label: copy.categories.book, value: "book" },
    { label: copy.categories.community, value: "community" },
    { label: copy.categories.pdf, value: "pdf" },
  ];

  const filtered = useMemo(() => {
    if (activeCategory === "all") return resources;
    return resources.filter((resource) => resource.type === activeCategory);
  }, [activeCategory, resources]);

  const sourceMap = useMemo(
    () => new Map(sources.map((source) => [source.id, source] as const)),
    [sources],
  );
  const resourceMap = useMemo(
    () =>
      new Map(resources.map((resource) => [resource.id, resource] as const)),
    [resources],
  );
  const curatedCollections = useMemo(() => {
    if (locale !== "en") return [];

    return collectionDefinitions.map((collection) => ({
      ...collection,
      resources: collection.resourceIds
        .map((id) => resourceMap.get(id))
        .filter((resource): resource is Resource => resource !== undefined),
    }));
  }, [locale, resourceMap]);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.resources") },
        ]}
      />

      <header className="mb-8">
        <AnimateIn>
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {t("nav.resources")}
          </h1>
          <p className="text-lg text-textSecondary">{copy.description}</p>
        </AnimateIn>
      </header>

      <AnimateIn delay={0.1}>
        <Link
          href={localizeHref(locale, "/resources/find-masjid")}
          className="group mb-10 flex items-center gap-5 rounded-2xl border border-primary/20 bg-gradient-to-r from-surfaceElevated to-white p-6 no-underline shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primaryHover text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
            <Icon name="map-pin" size="lg" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="mb-0.5 text-lg font-bold text-textPrimary">
              {copy.findMasjidTitle}
            </p>
            <p className="mb-0 text-sm text-textSecondary">
              {copy.findMasjidBody}
            </p>
          </div>
          <Icon
            name="chevron-right"
            size="md"
            className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </AnimateIn>

      {locale === "en" && (
        <AnimateIn delay={0.12}>
          <div className="mb-10 grid gap-4 md:grid-cols-2">
            {featureCards.map((item) => (
              <Link
                key={item.href}
                href={localizeHref(locale, item.href)}
                className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-white p-5 no-underline shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primaryGreen/60 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surfaceElevated text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon name={item.icon} size="md" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold text-textPrimary">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-textSecondary">
                    {item.body}
                  </span>
                </span>
                <Icon
                  name="chevron-right"
                  size="md"
                  className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </AnimateIn>
      )}

      {locale === "en" && curatedCollections.length > 0 && (
        <AnimateIn delay={0.14}>
          <section className="mb-10" aria-labelledby="curated-collections">
            <div className="mb-5">
              <h2
                id="curated-collections"
                className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
              >
                Curated collections
              </h2>
              <p className="mb-0 max-w-2xl text-sm leading-relaxed text-textSecondary">
                Pick the one collection that matches where you are right now.
                You do not have to work through all of them.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {curatedCollections.map((collection) => (
                <article
                  key={collection.title}
                  className="rounded-2xl border border-border/60 bg-white p-5 shadow-card"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon name={collection.icon} size="sm" />
                    </span>
                    <div>
                      <h3 className="mb-1 mt-0 text-base font-semibold text-textPrimary">
                        {collection.title}
                      </h3>
                      <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                        {collection.body}
                      </p>
                    </div>
                  </div>
                  <ul className="mb-0 flex flex-col gap-2 pl-0">
                    {collection.resources.map((resource) => (
                      <li key={resource.id}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary no-underline hover:text-primaryHover hover:underline"
                        >
                          {resource.title}
                          <Icon name="external-link" size="sm" />
                        </a>
                        {resource.bestFor ? (
                          <p className="mb-0 mt-0.5 text-xs text-textMuted">
                            Best for: {resource.bestFor}
                          </p>
                        ) : null}
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
        <AnimateIn delay={0.145}>
          <section className="mb-10" aria-labelledby="choose-resource-heading">
            <h2
              id="choose-resource-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              How to choose a resource
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {chooseChecklist.map((item) => (
                <p
                  key={item}
                  className="mb-0 flex items-start gap-2 rounded-xl bg-white p-3 text-sm leading-relaxed text-textSecondary"
                >
                  <Icon
                    name="check"
                    size="sm"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </section>
        </AnimateIn>
      )}

      {locale === "en" && (
        <AnimateIn delay={0.148}>
          <section
            className="mb-10"
            aria-labelledby="resource-warnings-heading"
          >
            <div className="rounded-2xl border border-warning/20 bg-accentYellow/20 p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-warning">
                  <Icon name="alert-triangle" size="sm" />
                </span>
                <h2
                  id="resource-warnings-heading"
                  className="mb-0 mt-0 text-lg font-semibold text-textPrimary"
                >
                  Resource warnings
                </h2>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {resourceWarnings.map((item) => (
                  <p
                    key={item}
                    className="mb-0 rounded-xl bg-white/80 p-3 text-sm leading-relaxed text-textSecondary"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </AnimateIn>
      )}

      <AnimateIn delay={0.15}>
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label={copy.filterAriaLabel}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              aria-pressed={activeCategory === category.value}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${
                activeCategory === category.value
                  ? "bg-primary text-white shadow-soft"
                  : "border border-border/60 bg-white text-textSecondary hover:border-primaryGreen/50 hover:bg-surfaceElevated hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </AnimateIn>

      <div aria-live="polite" className="sr-only">
        {`${filtered.length} ${filtered.length === 1 ? copy.liveRegion.one : copy.liveRegion.other}`}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center">
          <p className="mb-2 font-display text-lg font-semibold text-textPrimary">
            {copy.emptyTitle}
          </p>
          <p className="mb-0 text-sm text-textSecondary">
            {copy.emptyPrefix}{" "}
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="font-medium text-primary underline hover:text-primaryHover"
            >
              {copy.emptyAction}
            </button>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {filtered.map((resource) => (
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
              sources={(resource.sourceIds ?? [])
                .map((id) => sourceMap.get(id))
                .filter(
                  (source): source is SourceEntry => source !== undefined,
                )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
