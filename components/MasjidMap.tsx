"use client";

import { useEffect, useRef, useState } from "react";
import type { CircleMarker, LayerGroup, Map as LeafletMap } from "leaflet";
import type { Messages } from "@/lib/i18n";
import type { Masjid } from "@/lib/types";

export interface MasjidSearchLocation {
  label: string;
  lat: number;
  lng: number;
}

interface MasjidMapProps {
  masjids: Masjid[];
  selectedMasjidId: string | null;
  searchLocation: MasjidSearchLocation | null;
  isOffline: boolean;
  copy: Messages["pages"]["findMasjid"];
  onSelectMasjid: (id: string) => void;
}

const TORONTO_CENTER: [number, number] = [43.6532, -79.3832];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getGoogleMapsDirectionsUrl(masjid: Masjid) {
  return `https://www.google.com/maps/dir/?api=1&destination=${masjid.coordinates.lat},${masjid.coordinates.lng}`;
}

export function MasjidMap({
  masjids,
  selectedMasjidId,
  searchLocation,
  isOffline,
  copy,
  onSelectMasjid,
}: MasjidMapProps) {
  const mapRef = useRef<LeafletMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOffline || !containerRef.current || mapRef.current) {
      if (isOffline) {
        setIsLoading(false);
      }
      return;
    }

    let ignore = false;

    async function createMap() {
      const L = await import("leaflet");
      if (ignore || !containerRef.current) {
        return;
      }

      const map = L.map(containerRef.current, {
        center: TORONTO_CENTER,
        zoom: 10,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      mapRef.current = map;
      layerRef.current = L.layerGroup().addTo(map);

      /* Fix for Leaflet rendering in dynamically-sized containers */
      requestAnimationFrame(() => {
        map.invalidateSize();
      });

      setIsLoading(false);
    }

    createMap();

    return () => {
      ignore = true;
      layerRef.current?.clearLayers();
      layerRef.current = null;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [isOffline]);

  useEffect(() => {
    if (isOffline || !mapRef.current || !layerRef.current) {
      return;
    }

    let ignore = false;

    async function renderMarkers() {
      const L = await import("leaflet");
      if (ignore || !mapRef.current || !layerRef.current) {
        return;
      }

      const map = mapRef.current;
      const layer = layerRef.current;
      const bounds = L.latLngBounds([]);
      const markersById = new Map<string, CircleMarker>();

      layer.clearLayers();

      for (const masjid of masjids) {
        const isSelected = masjid.id === selectedMasjidId;
        const marker = L.circleMarker(
          [masjid.coordinates.lat, masjid.coordinates.lng],
          {
            radius: isSelected ? 10 : 7,
            weight: isSelected ? 3 : 2,
            color: isSelected ? "#3D6649" : "#4A7C59",
            fillColor: isSelected ? "#4A7C59" : "#FFFFFF",
            fillOpacity: 1,
          },
        );

        marker.bindPopup(
          `<div class="masjid-map-popup">
            <p class="masjid-map-popup__title">${escapeHtml(masjid.name)}</p>
            <p class="masjid-map-popup__body">${escapeHtml(
              `${masjid.address}, ${masjid.city}`,
            )}</p>
            <a class="masjid-map-popup__link" href="${getGoogleMapsDirectionsUrl(
              masjid,
            )}" target="_blank" rel="noopener noreferrer">${escapeHtml(
              copy.googleMaps,
            )}</a>
          </div>`,
        );

        marker.on("click", () => onSelectMasjid(masjid.id));
        marker.addTo(layer);
        markersById.set(masjid.id, marker);
        bounds.extend(marker.getLatLng());
      }

      if (searchLocation) {
        const marker = L.circleMarker(
          [searchLocation.lat, searchLocation.lng],
          {
            radius: 9,
            weight: 3,
            color: "#6B7A3D",
            fillColor: "#FFFBB1",
            fillOpacity: 0.95,
            dashArray: "4 4",
          },
        );

        marker.bindPopup(
          `<div class="masjid-map-popup">
            <p class="masjid-map-popup__title">${escapeHtml(
              copy.mapLegendSearch,
            )}</p>
            <p class="masjid-map-popup__body">${escapeHtml(
              searchLocation.label,
            )}</p>
          </div>`,
        );

        marker.addTo(layer);
        bounds.extend(marker.getLatLng());
      }

      if (selectedMasjidId) {
        const selectedMarker = markersById.get(selectedMasjidId);
        if (selectedMarker) {
          map.setView(selectedMarker.getLatLng(), Math.max(map.getZoom(), 13), {
            animate: true,
          });
          selectedMarker.openPopup();
          return;
        }
      }

      if (bounds.isValid()) {
        map.fitBounds(bounds, {
          padding: [32, 32],
          maxZoom: searchLocation && masjids.length <= 1 ? 14 : 12,
        });
        return;
      }

      map.setView(TORONTO_CENTER, 10);
    }

    renderMarkers();

    return () => {
      ignore = true;
    };
  }, [
    copy.googleMaps,
    copy.mapLegendSearch,
    isOffline,
    masjids,
    onSelectMasjid,
    searchLocation,
    selectedMasjidId,
  ]);

  /* Re-invalidate when container may have resized (e.g. filter panel toggled) */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const timer = setTimeout(() => map.invalidateSize(), 150);
    return () => clearTimeout(timer);
  });

  if (isOffline) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-border bg-surfaceElevated/60 p-6 text-center">
        <div className="max-w-xs">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
          <p className="mb-1 text-sm font-semibold text-textPrimary">
            {copy.mapOfflineTitle}
          </p>
          <p className="mb-0 text-xs text-textSecondary">
            {copy.mapOfflineBody}
          </p>
        </div>
      </div>
    );
  }

  if (!isLoading && masjids.length === 0 && !searchLocation) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-border bg-surfaceElevated/60 p-6 text-center">
        <p className="mb-0 max-w-xs text-sm text-textSecondary">
          {copy.mapEmptyTitle}
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[280px]">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-surfaceElevated/90 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <div className="h-4 w-4 animate-pulse-soft rounded-full bg-primary/40" />
            <p className="mb-0 text-sm font-medium text-textSecondary">
              {copy.mapLoading}
            </p>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className="h-full w-full overflow-hidden rounded-2xl"
        style={{ minHeight: "280px" }}
        aria-label={copy.mapTitle}
      />
    </div>
  );
}
