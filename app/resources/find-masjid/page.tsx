"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchBar } from "@/components/SearchBar";
import { Icon } from "@/components/Icon";
import { Callout } from "@/components/Callout";
import { AnimateIn } from "@/components/AnimateIn";
import type { Masjid } from "@/lib/types";

import masjidsData from "@/content/en/masjids.json";

export default function FindMasjidPage() {
  const allMasjids = masjidsData as Masjid[];
  const [query, setQuery] = useState("");
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(!navigator.onLine);
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return allMasjids;
    const q = query.toLowerCase();
    return allMasjids.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.city.toLowerCase().includes(q) ||
        m.postalCode.toLowerCase().includes(q) ||
        m.address.toLowerCase().includes(q),
    );
  }, [allMasjids, query]);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Find a Masjid" },
        ]}
      />

      {/* Header */}
      <header className="mb-8">
        <AnimateIn>
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Find a Masjid
          </h1>
          <p className="text-lg text-textSecondary">
            Search for mosques in the Toronto area. Connect with your local
            community.
          </p>
        </AnimateIn>
      </header>

      {/* Offline Notice */}
      {isOffline && (
        <Callout variant="warning" title="You are offline">
          <p>
            The masjid list and search are available offline. Map features
            require an internet connection.
          </p>
        </Callout>
      )}

      {/* Map Placeholder */}
      <AnimateIn delay={0.1}>
        <div className="mb-8 flex h-52 items-center justify-center rounded-2xl border-2 border-dashed border-border/60 bg-surfaceElevated/30 text-center sm:h-64">
          <div>
            <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Icon name="map-pin" size="lg" className="text-primary" />
            </span>
            <p className="mb-1 text-base font-semibold text-textMuted">
              Map coming soon
            </p>
            <p className="mb-0 text-sm text-textMuted">
              An interactive map will be available in a future update.
            </p>
          </div>
        </div>
      </AnimateIn>

      {/* Search */}
      <AnimateIn delay={0.15}>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by name, city, or postal code..."
          label="Search masjids"
          hideLabel
          className="mb-8"
        />
      </AnimateIn>

      {/* Live Region */}
      <div aria-live="polite" className="sr-only">
        {query.trim()
          ? `${filtered.length} masjid${filtered.length !== 1 ? "s" : ""} found`
          : ""}
      </div>

      {/* Masjid List */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center">
          <p className="mb-2 font-display text-lg font-semibold text-textPrimary">
            No masjids found
          </p>
          <p className="mb-0 text-sm text-textSecondary">
            Try a different search term or{" "}
            <button
              type="button"
              onClick={() => setQuery("")}
              className="font-medium text-primary underline hover:text-primaryHover"
            >
              clear the search
            </button>
            .
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-4 pl-0">
          {filtered.map((masjid) => (
            <li
              key={masjid.id}
              className="rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-soft"
            >
              <h2 className="mb-3 mt-0 font-display text-lg font-bold text-textPrimary">
                {masjid.name}
              </h2>
              <div className="flex flex-col gap-2 text-sm text-textSecondary">
                <p className="mb-0 flex items-start gap-2.5">
                  <Icon
                    name="map-pin"
                    size="sm"
                    className="mt-0.5 shrink-0 text-primary/60"
                  />
                  <span>
                    {masjid.address}, {masjid.city}, {masjid.stateProvince}{" "}
                    {masjid.postalCode}
                  </span>
                </p>
                {masjid.phone && (
                  <p className="mb-0 flex items-center gap-2.5">
                    <svg
                      className="h-4 w-4 shrink-0 text-primary/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    <a
                      href={`tel:${masjid.phone.replace(/[^\d+]/g, "")}`}
                      className="text-primary no-underline hover:underline"
                    >
                      {masjid.phone}
                    </a>
                  </p>
                )}
                {masjid.website && (
                  <p className="mb-0 flex items-center gap-2.5">
                    <Icon
                      name="globe"
                      size="sm"
                      className="shrink-0 text-primary/60"
                    />
                    <a
                      href={masjid.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary no-underline hover:underline"
                    >
                      Visit website
                      <span className="sr-only"> for {masjid.name}</span>
                    </a>
                  </p>
                )}
                {masjid.notes && (
                  <p className="mb-0 mt-1 rounded-lg bg-surfaceElevated/50 px-3 py-1.5 text-xs text-textMuted">
                    {masjid.notes}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Cross-link */}
      <AnimateIn className="mt-10">
        <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center">
          <p className="mb-3 text-sm text-textSecondary">
            New to visiting a mosque? Learn what to expect.
          </p>
          <Link
            href="/topics/community"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/20 hover:text-primaryHover"
          >
            Read: Building Your Muslim Community
            <Icon name="chevron-right" size="sm" />
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}
