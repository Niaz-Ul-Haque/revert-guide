"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Callout } from "@/components/Callout";
import { Icon } from "@/components/Icon";
import { MasjidMap, type MasjidSearchLocation } from "@/components/MasjidMap";
import { SearchBar } from "@/components/SearchBar";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import type { Masjid, MasjidServiceId } from "@/lib/types";
import { useTranslations } from "./LocaleProvider";

interface FindMasjidPageClientProps {
  locale: Locale;
  masjids: Masjid[];
}

interface MasjidResult {
  masjid: Masjid;
  distanceKm: number | null;
}

interface NominatimResult {
  lat: string;
  lon: string;
  display_name: string;
}

type AmenityFilterKey =
  | "womenFriendly"
  | "convertSupport"
  | "parking"
  | "accessibility";

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

function toSearchableText(
  masjid: Masjid,
  serviceLabels: Record<string, string>,
) {
  const services =
    masjid.serviceIds?.map(
      (serviceId) => serviceLabels[serviceId] ?? serviceId,
    ) ?? [];

  return [
    masjid.name,
    masjid.address,
    masjid.city,
    masjid.stateProvince,
    masjid.postalCode,
    masjid.notes ?? "",
    masjid.phone ?? "",
    ...services,
  ]
    .join(" ")
    .toLowerCase();
}

function calculateDistanceKm(
  from: MasjidSearchLocation,
  to: Masjid["coordinates"],
) {
  const earthRadiusKm = 6371;
  const dLat = degreesToRadians(to.lat - from.lat);
  const dLng = degreesToRadians(to.lng - from.lng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(degreesToRadians(from.lat)) *
      Math.cos(degreesToRadians(to.lat)) *
      Math.sin(dLng / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function degreesToRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getGoogleMapsDirectionsUrl(masjid: Masjid) {
  return `https://www.google.com/maps/dir/?api=1&destination=${masjid.coordinates.lat},${masjid.coordinates.lng}`;
}

function getAppleMapsDirectionsUrl(masjid: Masjid) {
  return `https://maps.apple.com/?daddr=${masjid.coordinates.lat},${masjid.coordinates.lng}&q=${encodeURIComponent(masjid.name)}`;
}

function formatDistance(locale: Locale, distanceKm: number) {
  const formatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: distanceKm < 10 ? 1 : 0,
  });

  return `${formatter.format(distanceKm)} km`;
}

export function FindMasjidPageClient({
  locale,
  masjids,
}: FindMasjidPageClientProps) {
  const t = useTranslations();
  const copy = t<Messages["pages"]["findMasjid"]>("pages.findMasjid");
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [selectedServiceIds, setSelectedServiceIds] = useState<
    MasjidServiceId[]
  >([]);
  const [amenityFilters, setAmenityFilters] = useState<
    Record<AmenityFilterKey, boolean>
  >({
    womenFriendly: false,
    convertSupport: false,
    parking: false,
    accessibility: false,
  });
  const [locationQuery, setLocationQuery] = useState("");
  const [searchLocation, setSearchLocation] =
    useState<MasjidSearchLocation | null>(null);
  const [locationError, setLocationError] = useState("");
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const [selectedMasjidId, setSelectedMasjidId] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setIsOffline(!navigator.onLine);

    function handleOnline() {
      setIsOffline(false);
    }

    function handleOffline() {
      setIsOffline(true);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const cityOptions = useMemo(() => {
    const collator = new Intl.Collator(locale);
    return Array.from(new Set(masjids.map((masjid) => masjid.city))).sort(
      collator.compare,
    );
  }, [locale, masjids]);

  const availableServiceIds = useMemo(() => {
    const uniqueIds = new Set<MasjidServiceId>();
    for (const masjid of masjids) {
      for (const serviceId of masjid.serviceIds ?? []) {
        uniqueIds.add(serviceId);
      }
    }

    return Array.from(uniqueIds).sort((left, right) =>
      copy.serviceLabels[left].localeCompare(copy.serviceLabels[right]),
    );
  }, [copy.serviceLabels, masjids]);

  const serviceLabels: Record<MasjidServiceId, string> = copy.serviceLabels;

  const filteredMasjids = useMemo<MasjidResult[]>(() => {
    const normalizedQuery = normalizeQuery(query);
    const activeAmenities = Object.entries(amenityFilters).filter(
      ([, value]) => value,
    ) as [AmenityFilterKey, true][];
    const collator = new Intl.Collator(locale);

    return masjids
      .filter((masjid) => {
        if (
          normalizedQuery &&
          !toSearchableText(masjid, serviceLabels).includes(normalizedQuery)
        ) {
          return false;
        }

        if (cityFilter !== "all" && masjid.city !== cityFilter) {
          return false;
        }

        if (
          selectedServiceIds.length > 0 &&
          !selectedServiceIds.some((serviceId) =>
            masjid.serviceIds?.includes(serviceId),
          )
        ) {
          return false;
        }

        if (activeAmenities.some(([key]) => !masjid[key])) {
          return false;
        }

        return true;
      })
      .map((masjid) => ({
        masjid,
        distanceKm: searchLocation
          ? calculateDistanceKm(searchLocation, masjid.coordinates)
          : null,
      }))
      .sort((left, right) => {
        if (
          left.distanceKm !== null &&
          right.distanceKm !== null &&
          left.distanceKm !== right.distanceKm
        ) {
          return left.distanceKm - right.distanceKm;
        }

        if (left.masjid.city !== right.masjid.city) {
          return collator.compare(left.masjid.city, right.masjid.city);
        }

        return collator.compare(left.masjid.name, right.masjid.name);
      });
  }, [
    amenityFilters,
    cityFilter,
    locale,
    masjids,
    query,
    searchLocation,
    selectedServiceIds,
    serviceLabels,
  ]);

  useEffect(() => {
    if (
      selectedMasjidId &&
      !filteredMasjids.some(({ masjid }) => masjid.id === selectedMasjidId)
    ) {
      setSelectedMasjidId(null);
    }
  }, [filteredMasjids, selectedMasjidId]);

  async function handleLocationSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextQuery = locationQuery.trim();
    if (!nextQuery) {
      setLocationError("");
      setSearchLocation(null);
      return;
    }

    if (!navigator.onLine) {
      setLocationError(copy.locationOffline);
      return;
    }

    setIsSearchingLocation(true);
    setLocationError("");

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=ca&q=${encodeURIComponent(
          nextQuery,
        )}`,
        {
          headers: {
            "Accept-Language": locale,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to geocode");
      }

      const results = (await response.json()) as NominatimResult[];
      const firstResult = results[0];

      if (!firstResult) {
        setLocationError(copy.locationError);
        setSearchLocation(null);
        return;
      }

      setSearchLocation({
        label: firstResult.display_name,
        lat: Number(firstResult.lat),
        lng: Number(firstResult.lon),
      });
      setSelectedMasjidId(null);
    } catch {
      setLocationError(copy.locationError);
      setSearchLocation(null);
    } finally {
      setIsSearchingLocation(false);
    }
  }

  function toggleService(serviceId: MasjidServiceId) {
    setSelectedServiceIds((current) =>
      current.includes(serviceId)
        ? current.filter((item) => item !== serviceId)
        : [...current, serviceId],
    );
  }

  function toggleAmenity(key: AmenityFilterKey) {
    setAmenityFilters((current) => ({
      ...current,
      [key]: !current[key],
    }));
  }

  function clearLocationSearch() {
    setLocationQuery("");
    setLocationError("");
    setSearchLocation(null);
    setSelectedMasjidId(null);
  }

  function clearAllFilters() {
    setQuery("");
    setCityFilter("all");
    setSelectedServiceIds([]);
    setAmenityFilters({
      womenFriendly: false,
      convertSupport: false,
      parking: false,
      accessibility: false,
    });
    clearLocationSearch();
    setFiltersOpen(false);
  }

  const hasActiveFilters =
    query.trim().length > 0 ||
    cityFilter !== "all" ||
    selectedServiceIds.length > 0 ||
    Object.values(amenityFilters).some(Boolean) ||
    Boolean(searchLocation) ||
    locationQuery.trim().length > 0;

  const activeFilterCount =
    (query.trim().length > 0 ? 1 : 0) +
    (cityFilter !== "all" ? 1 : 0) +
    selectedServiceIds.length +
    Object.values(amenityFilters).filter(Boolean).length +
    (searchLocation ? 1 : 0);

  const amenityButtons: { key: AmenityFilterKey; label: string }[] = [
    { key: "womenFriendly", label: copy.womenFriendly },
    { key: "convertSupport", label: copy.convertSupport },
    { key: "parking", label: copy.parking },
    { key: "accessibility", label: copy.accessibility },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          {
            label: t("nav.resources"),
            href: localizeHref(locale, "/resources"),
          },
          { label: t("nav.findMasjid") },
        ]}
      />

      {/* ── Header ── */}
      <header className="mb-6">
        <AnimateIn>
          <h1 className="mb-2 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {t("nav.findMasjid")}
          </h1>
          <p className="max-w-2xl text-base text-textSecondary">
            {copy.description}
          </p>
        </AnimateIn>
      </header>

      {isOffline && (
        <Callout variant="warning" title={copy.offlineTitle}>
          <p>{copy.offlineBody}</p>
        </Callout>
      )}

      {/* ── Map + Search hero section ── */}
      <AnimateIn delay={0.06}>
        <section className="mb-6 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-elevated">
          {/* Search toolbar row — sits above the map */}
          <div className="border-b border-border/40 bg-surface/80 p-4">
            <div className="grid gap-3 lg:grid-cols-2">
              {/* Text search */}
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder={copy.searchPlaceholder}
                label={copy.searchLabel}
                hideLabel
              />

              {/* Location search */}
              <form onSubmit={handleLocationSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <svg
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-textMuted"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <label htmlFor="masjid-location-search" className="sr-only">
                    {copy.locationLabel}
                  </label>
                  <input
                    id="masjid-location-search"
                    type="search"
                    value={locationQuery}
                    onChange={(event) => setLocationQuery(event.target.value)}
                    placeholder={copy.locationPlaceholder}
                    className="w-full rounded-xl border border-border/60 bg-white py-3 pl-10 pr-4 text-base text-textPrimary shadow-inner-glow placeholder:text-textMuted/60 transition-all duration-200 focus:border-primaryGreen focus:shadow-soft focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearchingLocation}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primaryHover disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSearchingLocation
                    ? copy.locationSearching
                    : copy.locationAction}
                </button>
                {(searchLocation || locationQuery.trim()) && (
                  <button
                    type="button"
                    onClick={clearLocationSearch}
                    className="inline-flex items-center justify-center rounded-xl border border-border/60 bg-white px-3 py-3 text-sm text-textMuted transition-colors hover:border-primary/40 hover:text-primary"
                    aria-label={copy.locationClear}
                  >
                    <Icon name="x" size="sm" />
                  </button>
                )}
              </form>
            </div>

            {/* Location feedback */}
            {locationError && (
              <p
                className="mb-0 mt-2 text-sm font-medium text-error"
                role="alert"
              >
                {locationError}
              </p>
            )}
            {searchLocation && !locationError && (
              <p className="mb-0 mt-2 text-sm text-textSecondary">
                {copy.locationResults}{" "}
                <span className="font-medium text-textPrimary">
                  {searchLocation.label}
                </span>
              </p>
            )}
          </div>

          {/* Map */}
          <div className="h-[340px] md:h-[420px]">
            <MasjidMap
              masjids={filteredMasjids.map((result) => result.masjid)}
              selectedMasjidId={selectedMasjidId}
              searchLocation={searchLocation}
              isOffline={isOffline}
              copy={copy}
              onSelectMasjid={setSelectedMasjidId}
            />
          </div>

          {/* Map legend + count bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 bg-surface/60 px-4 py-2.5">
            <div className="flex flex-wrap gap-3 text-xs text-textMuted">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-white" />
                {copy.mapLegendMasjid}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                {copy.mapLegendSelected}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border-2 border-accent bg-accentYellow" />
                {copy.mapLegendSearch}
              </span>
            </div>
            <span className="text-xs font-medium text-textSecondary">
              {filteredMasjids.length}{" "}
              {filteredMasjids.length === 1
                ? copy.liveRegion.one
                : copy.liveRegion.other}
            </span>
          </div>
        </section>
      </AnimateIn>

      {/* ── Collapsible filters ── */}
      <AnimateIn delay={0.1}>
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
            className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-white px-4 py-2.5 text-sm font-medium text-textSecondary shadow-card transition-all duration-200 hover:border-primary/40 hover:text-primary"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            {copy.filtersTitle}
            {activeFilterCount > 0 && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-bold text-white">
                {activeFilterCount}
              </span>
            )}
            <Icon
              name="chevron-down"
              size="sm"
              className={`transition-transform duration-200 ${filtersOpen ? "rotate-180" : ""}`}
            />
          </button>

          {hasActiveFilters && !filtersOpen && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="ml-2 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primaryHover hover:decoration-primary"
            >
              {copy.clearFilters}
            </button>
          )}

          {filtersOpen && (
            <div className="mt-3 rounded-2xl border border-border/60 bg-white p-5 shadow-card animate-slide-down">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h2 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
                  {copy.filtersTitle}
                </h2>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="text-sm font-medium text-primary transition-colors hover:text-primaryHover"
                  >
                    {copy.clearFilters}
                  </button>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* City */}
                <div>
                  <label
                    htmlFor="masjid-city-filter"
                    className="mb-1.5 block text-sm font-medium text-textPrimary"
                  >
                    {copy.cityLabel}
                  </label>
                  <select
                    id="masjid-city-filter"
                    value={cityFilter}
                    onChange={(event) => setCityFilter(event.target.value)}
                    className="w-full rounded-xl border border-border/60 bg-white px-3.5 py-2.5 text-sm text-textPrimary focus:border-primaryGreen focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong"
                  >
                    <option value="all">{copy.cityAll}</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Services */}
                <div>
                  <p className="mb-1.5 text-sm font-medium text-textPrimary">
                    {copy.servicesLabel}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {availableServiceIds.map((serviceId) => {
                      const isActive = selectedServiceIds.includes(serviceId);
                      return (
                        <button
                          key={serviceId}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => toggleService(serviceId)}
                          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-primary text-white shadow-soft"
                              : "border border-border/60 bg-surface text-textSecondary hover:border-primaryGreen/50 hover:text-primary"
                          }`}
                        >
                          {copy.serviceLabels[serviceId]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <p className="mb-1.5 text-sm font-medium text-textPrimary">
                    {copy.amenitiesLabel}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {amenityButtons.map(({ key, label }) => {
                      const isActive = amenityFilters[key];
                      return (
                        <button
                          key={key}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => toggleAmenity(key)}
                          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-accent text-white shadow-soft"
                              : "border border-border/60 bg-surface text-textSecondary hover:border-primaryGreen/50 hover:text-primary"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <p className="mb-0 mt-4 text-xs text-textMuted">
                {copy.locationHelper}
              </p>
            </div>
          )}
        </div>
      </AnimateIn>

      {/* ── Live region for screen readers ── */}
      <div aria-live="polite" className="sr-only">
        {`${filteredMasjids.length} ${
          filteredMasjids.length === 1
            ? copy.liveRegion.one
            : copy.liveRegion.other
        }`}
      </div>

      {/* ── Results list ── */}
      <section>
        {filteredMasjids.length === 0 ? (
          <AnimateIn>
            <div className="rounded-2xl border border-dashed border-border bg-surfaceElevated/50 px-6 py-16 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Icon name="search" size="lg" className="text-primary/60" />
              </div>
              <p className="mb-2 font-display text-lg font-semibold text-textPrimary">
                {copy.emptyTitle}
              </p>
              <p className="mb-0 text-sm text-textSecondary">
                {copy.emptyPrefix}{" "}
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary hover:text-primaryHover"
                >
                  {copy.emptyAction}
                </button>
                .
              </p>
            </div>
          </AnimateIn>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filteredMasjids.map(({ masjid, distanceKm }, index) => {
              const isSelected = masjid.id === selectedMasjidId;
              const supportBadges = [
                masjid.womenFriendly ? copy.womenFriendly : null,
                masjid.convertSupport ? copy.convertSupport : null,
                masjid.parking ? copy.parking : null,
                masjid.accessibility ? copy.accessibility : null,
              ].filter(Boolean);

              return (
                <AnimateIn key={masjid.id} delay={0.04 + index * 0.02}>
                  <article
                    className={`group flex h-full flex-col rounded-2xl border bg-white p-5 transition-all duration-300 ${
                      isSelected
                        ? "border-primary/50 shadow-elevated ring-1 ring-primary/15"
                        : "border-border/60 shadow-card hover:border-primary/25 hover:shadow-soft"
                    }`}
                  >
                    {/* Name + distance */}
                    <div className="mb-3">
                      <div className="flex items-start justify-between gap-2">
                        <h2 className="mb-0 mt-0 text-base font-bold leading-snug text-textPrimary">
                          {masjid.name}
                        </h2>
                        {distanceKm !== null && (
                          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                            {formatDistance(locale, distanceKm)}
                          </span>
                        )}
                      </div>
                      <p className="mb-0 mt-0.5 text-xs text-textMuted">
                        {masjid.city}, {masjid.stateProvince}
                      </p>
                    </div>

                    {/* Address */}
                    <p className="mb-0 flex items-start gap-2 text-sm text-textSecondary">
                      <Icon
                        name="map-pin"
                        size="sm"
                        className="mt-0.5 shrink-0 text-primary/50"
                      />
                      <span>
                        {masjid.address}, {masjid.postalCode}
                      </span>
                    </p>

                    {/* Phone */}
                    {masjid.phone && (
                      <p className="mb-0 mt-1.5 flex items-center gap-2 text-sm">
                        <svg
                          className="h-4 w-4 shrink-0 text-primary/50"
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
                          className="text-sm text-primary no-underline hover:underline"
                        >
                          {masjid.phone}
                        </a>
                      </p>
                    )}

                    {/* Notes */}
                    {masjid.notes && (
                      <p className="mb-0 mt-3 rounded-lg bg-surfaceElevated/60 px-3 py-2 text-xs text-textSecondary">
                        {masjid.notes}
                      </p>
                    )}

                    {/* Badges row */}
                    {(supportBadges.length > 0 ||
                      (masjid.serviceIds && masjid.serviceIds.length > 0)) && (
                      <div className="mb-0 mt-3 flex flex-wrap gap-1.5">
                        {supportBadges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full bg-surfaceElevated px-2.5 py-1 text-[11px] font-medium text-textMuted"
                          >
                            {badge}
                          </span>
                        ))}
                        {masjid.serviceIds?.map((serviceId) => (
                          <span
                            key={serviceId}
                            className="rounded-full bg-primary/8 px-2.5 py-1 text-[11px] font-medium text-primary/80"
                          >
                            {copy.serviceLabels[serviceId]}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions — pushed to bottom */}
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedMasjidId(masjid.id)}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-surfaceElevated text-primary hover:bg-primary/10"
                        }`}
                      >
                        <Icon name="map-pin" size="sm" />
                        {isSelected ? copy.selectedLabel : copy.showOnMap}
                      </button>
                      <a
                        href={getGoogleMapsDirectionsUrl(masjid)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-white px-3 py-2 text-xs font-semibold text-textSecondary no-underline transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {copy.googleMaps}
                        <Icon name="external-link" size="sm" />
                      </a>
                      <a
                        href={getAppleMapsDirectionsUrl(masjid)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-white px-3 py-2 text-xs font-semibold text-textSecondary no-underline transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {copy.appleMaps}
                        <Icon name="external-link" size="sm" />
                      </a>
                      {masjid.website && (
                        <a
                          href={masjid.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-white px-3 py-2 text-xs font-semibold text-textSecondary no-underline transition-colors hover:border-primary/40 hover:text-primary"
                        >
                          {copy.visitWebsite}
                          <span className="sr-only">
                            {copy.visitWebsiteSuffix}
                            {masjid.name}
                          </span>
                          <Icon name="external-link" size="sm" />
                        </a>
                      )}
                    </div>
                  </article>
                </AnimateIn>
              );
            })}
          </div>
        )}
      </section>

      {/* ── Cross-link footer ── */}
      <AnimateIn className="mt-10">
        <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-5 text-center">
          <p className="mb-2 text-sm text-textSecondary">
            {copy.crossLinkPrompt}
          </p>
          <Link
            href={localizeHref(locale, "/topics/community")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/20 hover:text-primaryHover"
          >
            {copy.crossLinkLabel}
            <Icon name="chevron-right" size="sm" />
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}
