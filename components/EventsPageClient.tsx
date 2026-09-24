"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useTranslations } from "@/components/LocaleProvider";
import { Icon } from "@/components/Icon";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import type { EventEntry } from "@/lib/types";

export interface EventWithDateLabel extends EventEntry {
  /** Date formatted on the server so the client renders the same text. */
  dateLabel: string;
}

interface EventsPageClientProps {
  locale: Locale;
  events: EventWithDateLabel[];
}

const selectClass =
  "min-h-[44px] w-full rounded-xl border border-border bg-white px-3 py-2 text-base text-textPrimary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong";

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export function EventsPageClient({ locale, events }: EventsPageClientProps) {
  const t = useTranslations();
  const copy = t<Messages["pages"]["events"]>("pages.events");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const provinces = useMemo(
    () => uniqueSorted(events.map((event) => event.province)),
    [events],
  );
  // Cities narrow to the chosen province so the two filters never conflict.
  const cities = useMemo(
    () =>
      uniqueSorted(
        events
          .filter((event) => !province || event.province === province)
          .map((event) => event.city),
      ),
    [events, province],
  );
  const filtered = events.filter(
    (event) =>
      (!province || event.province === province) &&
      (!city || event.city === city),
  );

  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-card">
        <h2 className="mb-2 mt-0 font-display text-xl font-semibold text-textPrimary">
          {copy.empty.title}
        </h2>
        <p className="mb-4 text-base leading-relaxed text-textSecondary">
          {copy.empty.body}
        </p>
        <Link
          href={localizeHref(locale, "/resources/find-masjid")}
          className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
        >
          {copy.empty.masjidLink}
          <Icon name="chevron-right" size="sm" />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <fieldset className="mb-6 grid gap-4 rounded-2xl bg-surfaceElevated/50 p-5 sm:grid-cols-2">
        <legend className="sr-only">{copy.filters.legend}</legend>
        <div>
          <label
            htmlFor="event-province"
            className="mb-1.5 block text-sm font-medium text-textPrimary"
          >
            {copy.filters.provinceLabel}
          </label>
          <select
            id="event-province"
            className={selectClass}
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
              setCity("");
            }}
          >
            <option value="">{copy.filters.all}</option>
            {provinces.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="event-city"
            className="mb-1.5 block text-sm font-medium text-textPrimary"
          >
            {copy.filters.cityLabel}
          </label>
          <select
            id="event-city"
            className={selectClass}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">{copy.filters.all}</option>
            {cities.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <p className="sr-only" role="status" aria-live="polite">
        {copy.filters.resultsCount.replace("{count}", String(filtered.length))}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-surfaceElevated/50 p-5">
          <p className="mb-3 text-base text-textSecondary">
            {copy.filters.noMatches}
          </p>
          <button
            type="button"
            onClick={() => {
              setProvince("");
              setCity("");
            }}
            className="min-h-[44px] rounded-xl border-2 border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
          >
            {copy.filters.reset}
          </button>
        </div>
      ) : (
        <ul className="mb-0 flex flex-col gap-4 pl-0">
          {filtered.map((event) => (
            <li
              key={event.id}
              className="rounded-2xl border border-border/60 bg-white p-5 shadow-card"
            >
              <h2 className="mb-3 mt-0 font-display text-lg font-semibold text-textPrimary">
                {event.title}
              </h2>
              <dl className="mb-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-medium text-textMuted">
                    {copy.card.dateLabel}
                  </dt>
                  <dd className="mb-0 ml-0 text-textPrimary">
                    <time dateTime={event.date}>{event.dateLabel}</time>
                  </dd>
                </div>
                {event.time && (
                  <div>
                    <dt className="font-medium text-textMuted">
                      {copy.card.timeLabel}
                    </dt>
                    <dd className="mb-0 ml-0 text-textPrimary">{event.time}</dd>
                  </div>
                )}
                {event.venue && (
                  <div>
                    <dt className="font-medium text-textMuted">
                      {copy.card.venueLabel}
                    </dt>
                    <dd className="mb-0 ml-0 text-textPrimary">
                      {event.venue}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="font-medium text-textMuted">
                    {copy.card.whereLabel}
                  </dt>
                  <dd className="mb-0 ml-0 text-textPrimary">
                    {event.city}, {event.province}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-textMuted">
                    {copy.card.organiserLabel}
                  </dt>
                  <dd className="mb-0 ml-0 text-textPrimary">
                    {event.organiser}
                  </dd>
                </div>
              </dl>
              {event.description && (
                <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                  {event.description}
                </p>
              )}
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
              >
                {copy.card.linkLabel}
                <Icon name="external-link" size="sm" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
