import type { MetadataRoute } from "next";
import en from "@/locales/en/ui.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: en.brand.name,
    short_name: en.brand.name,
    description: en.metadata.site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7FAF6",
    theme_color: "#4A7C59",
    orientation: "portrait-primary",
    categories: ["education", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192x192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512x512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
