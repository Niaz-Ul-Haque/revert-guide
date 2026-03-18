"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useTranslations } from "@/components/LocaleProvider";
import { ResourceCard } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import type { Resource, ResourceType } from "@/lib/types";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";

interface ResourcesPageClientProps {
  locale: Locale;
  resources: Resource[];
}

export function ResourcesPageClient({
  locale,
  resources,
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
            />
          ))}
        </div>
      )}
    </div>
  );
}
