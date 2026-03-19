"use client";

import { useState } from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { Callout } from "@/components/Callout";

interface QiblaData {
  latitude: number;
  longitude: number;
  direction: number;
}

export function QiblaClient() {
  const t = useTranslations();
  const copy = t<Record<string, unknown>>("pages.qibla");

  const [data, setData] = useState<QiblaData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [manualLat, setManualLat] = useState("");
  const [manualLng, setManualLng] = useState("");

  async function fetchQibla(lat: number, lng: number) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.aladhan.com/v1/qibla/${lat}/${lng}`);
      if (!res.ok) throw new Error("API error");
      const json = await res.json();
      if (json.code !== 200) throw new Error("Bad response");
      setData(json.data);
    } catch {
      setError(copy.error as string);
    } finally {
      setLoading(false);
    }
  }

  function handleUseLocation() {
    if (!navigator.geolocation) {
      setError(copy.permissionDenied as string);
      return;
    }
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchQibla(position.coords.latitude, position.coords.longitude);
      },
      () => {
        setLoading(false);
        setError(copy.permissionDenied as string);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  function handleManualSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);
    if (
      isNaN(lat) ||
      isNaN(lng) ||
      lat < -90 ||
      lat > 90 ||
      lng < -180 ||
      lng > 180
    ) {
      setError(copy.error as string);
      return;
    }
    fetchQibla(lat, lng);
  }

  const directionRounded = data ? Math.round(data.direction * 10) / 10 : 0;

  return (
    <div>
      {/* Location buttons */}
      <div className="mb-8 space-y-4">
        <button
          type="button"
          onClick={handleUseLocation}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primaryHover disabled:opacity-50"
        >
          <svg
            className="h-5 w-5"
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
          {copy.useMyLocation as string}
        </button>

        {/* Manual entry */}
        <div>
          <p className="mb-2 text-sm text-textMuted">
            {copy.manualEntry as string}
          </p>
          <form onSubmit={handleManualSubmit} className="flex flex-wrap gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={manualLat}
              onChange={(e) => setManualLat(e.target.value)}
              placeholder={copy.latitudePlaceholder as string}
              className="w-40 rounded-xl border border-border/60 bg-white px-4 py-2.5 text-sm text-textPrimary shadow-inner-glow placeholder:text-textMuted/60 focus:border-primaryGreen focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong"
              aria-label="Latitude"
            />
            <input
              type="text"
              inputMode="decimal"
              value={manualLng}
              onChange={(e) => setManualLng(e.target.value)}
              placeholder={copy.longitudePlaceholder as string}
              className="w-40 rounded-xl border border-border/60 bg-white px-4 py-2.5 text-sm text-textPrimary shadow-inner-glow placeholder:text-textMuted/60 focus:border-primaryGreen focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong"
              aria-label="Longitude"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primaryHover disabled:opacity-50"
            >
              {copy.calculate as string}
            </button>
          </form>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center gap-3 py-12 text-textMuted">
          <svg
            className="h-5 w-5 animate-spin-slow"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"
            />
          </svg>
          <span className="text-sm">{copy.loading as string}</span>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <Callout variant="warning" title="Error">
          <p>{error}</p>
        </Callout>
      )}

      {/* Qibla result */}
      {data && !loading && (
        <div className="space-y-6">
          {/* Compass display */}
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-2 border-border/40 bg-surface">
              {/* North marker */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-textPrimary px-2 py-0.5 text-[10px] font-bold text-white">
                N
              </span>
              {/* East */}
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 text-xs font-medium text-textMuted">
                E
              </span>
              {/* South */}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs font-medium text-textMuted">
                S
              </span>
              {/* West */}
              <span className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 text-xs font-medium text-textMuted">
                W
              </span>

              {/* Qibla arrow */}
              <div
                className="absolute inset-4 flex items-center justify-center"
                style={{
                  transform: `rotate(${data.direction}deg)`,
                }}
              >
                <div className="flex h-full flex-col items-center">
                  <svg
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l4 8H8l4-8z" />
                  </svg>
                  <div className="h-16 w-0.5 bg-primary" />
                </div>
              </div>

              {/* Center label */}
              <div className="relative z-10 rounded-xl bg-white px-3 py-2 text-center shadow-soft">
                <p className="font-display text-2xl font-bold text-primary">
                  {directionRounded}°
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-textSecondary">
              {copy.directionLabel as string}:{" "}
              <strong className="text-textPrimary">{directionRounded}°</strong>{" "}
              {copy.degrees as string}
            </p>
          </div>

          {/* Compass tip */}
          <Callout variant="tip">
            <p>{copy.compassTip as string}</p>
          </Callout>

          {/* Disclaimer */}
          <p className="text-xs leading-relaxed text-textMuted">
            {copy.disclaimer as string}
          </p>

          {/* Learn more */}
          <div className="rounded-xl bg-surfaceElevated/50 p-4">
            <p className="mb-1 text-sm font-medium text-textPrimary">
              {copy.learnMore as string}
            </p>
            <p className="text-sm text-textSecondary">
              {copy.learnMoreBody as string}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
