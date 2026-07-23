import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dawah-guide-personal",
          "/*/dawah-guide-personal",
          "/*/offline",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
