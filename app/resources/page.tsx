"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ResourceCard } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import type { Resource, ResourceType } from "@/lib/types";

import resourcesData from "@/content/en/resources.json";

const categories: { label: string; value: ResourceType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Articles", value: "article" },
  { label: "Videos", value: "video" },
  { label: "Apps", value: "app" },
  { label: "Books", value: "book" },
  { label: "Community", value: "community" },
  { label: "PDF", value: "pdf" },
];

export default function ResourcesPage() {
  const allResources = resourcesData as Resource[];
  const [activeCategory, setActiveCategory] = useState<ResourceType | "all">(
    "all",
  );

  const filtered = useMemo(() => {
    if (activeCategory === "all") return allResources;
    return allResources.filter((r) => r.type === activeCategory);
  }, [allResources, activeCategory]);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      {/* Header */}
      <header className="mb-8">
        <AnimateIn>
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Resources
          </h1>
          <p className="text-lg text-textSecondary">
            Curated books, videos, apps, and communities to support your
            journey.
          </p>
        </AnimateIn>
      </header>

      {/* Featured Masjid Finder Banner */}
      <AnimateIn delay={0.1}>
        <Link
          href="/resources/find-masjid"
          className="group mb-10 flex items-center gap-5 rounded-2xl border border-primary/20 bg-gradient-to-r from-surfaceElevated to-white p-6 no-underline shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-elevated hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primaryHover text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
            <Icon name="map-pin" size="lg" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="mb-0.5 text-lg font-bold text-textPrimary">
              Find a Masjid
            </p>
            <p className="mb-0 text-sm text-textSecondary">
              Search for mosques in the Toronto area and connect with your local
              community.
            </p>
          </div>
          <Icon
            name="chevron-right"
            size="md"
            className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </AnimateIn>

      {/* Category Filter */}
      <AnimateIn delay={0.15}>
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter resources by category"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              aria-pressed={activeCategory === cat.value}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${
                activeCategory === cat.value
                  ? "bg-primary text-white shadow-soft"
                  : "border border-border/60 bg-white text-textSecondary hover:border-primaryGreen/50 hover:bg-surfaceElevated hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </AnimateIn>

      {/* Live Region */}
      <div aria-live="polite" className="sr-only">
        {`${filtered.length} resource${filtered.length !== 1 ? "s" : ""} shown`}
      </div>

      {/* Resource Cards */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center">
          <p className="mb-2 font-display text-lg font-semibold text-textPrimary">
            No resources in this category
          </p>
          <p className="mb-0 text-sm text-textSecondary">
            Try selecting a different category or{" "}
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="font-medium text-primary underline hover:text-primaryHover"
            >
              view all resources
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
            />
          ))}
        </div>
      )}
    </div>
  );
}
