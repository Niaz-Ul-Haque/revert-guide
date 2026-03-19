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
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      mapRef.current = map;
      layerRef.current = L.layerGroup().addTo(map);
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
            radius: isSelected ? 9 : 7,
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
              `${masjid.address}, ${masjid.city}, ${masjid.stateProvince} ${masjid.postalCode}`,
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
            radius: 8,
            weight: 3,
            color: "#6B7A3D",
            fillColor: "#FFFBB1",
            fillOpacity: 0.95,
            dashArray: "3 3",
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
          padding: [28, 28],
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

  if (isOffline) {
    return (
      <div className="flex h-[26rem] items-center justify-center rounded-[1.5rem] border border-dashed border-border/70 bg-surfaceElevated/60 p-6 text-center">
        <div className="max-w-sm">
          <p className="mb-2 font-display text-xl font-semibold text-textPrimary">
            {copy.mapOfflineTitle}
          </p>
          <p className="mb-0 text-sm text-textSecondary">
            {copy.mapOfflineBody}
          </p>
        </div>
      </div>
    );
  }

  if (!isLoading && masjids.length === 0 && !searchLocation) {
    return (
      <div className="flex h-[26rem] items-center justify-center rounded-[1.5rem] border border-dashed border-border/70 bg-surfaceElevated/60 p-6 text-center">
        <p className="mb-0 max-w-sm text-sm text-textSecondary">
          {copy.mapEmptyTitle}
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[1.5rem] bg-surface/85 backdrop-blur-sm">
          <p className="mb-0 text-sm font-medium text-textSecondary">
            {copy.mapLoading}
          </p>
        </div>
      )}
      <div
        ref={containerRef}
        className="h-[26rem] overflow-hidden rounded-[1.5rem] border border-border/60"
        aria-label={copy.mapTitle}
      />
    </div>
  );
}
