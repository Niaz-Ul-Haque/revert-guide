import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import { languageAlternates, localeUrl } from "@/lib/site";
import { getAllStages, getAllTopics, getStepsByStageId } from "@/lib/content";
import { getLifeGuides } from "@/lib/life-guides";
import { getSeasonalGuides } from "@/lib/seasonal-guides";

interface RouteEntry {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

function collectRoutes(): RouteEntry[] {
  const routes: RouteEntry[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/roadmap", priority: 0.9, changeFrequency: "weekly" },
    { path: "/topics", priority: 0.8, changeFrequency: "weekly" },
    { path: "/guides", priority: 0.8, changeFrequency: "weekly" },
    { path: "/seasonal", priority: 0.8, changeFrequency: "weekly" },
    { path: "/glossary", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.7, changeFrequency: "monthly" },
    {
      path: "/resources/find-masjid",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    { path: "/prayer-times", priority: 0.7, changeFrequency: "monthly" },
    { path: "/qibla", priority: 0.6, changeFrequency: "monthly" },
    { path: "/quran-starter", priority: 0.7, changeFrequency: "monthly" },
    { path: "/dua-dhikr", priority: 0.7, changeFrequency: "monthly" },
    { path: "/asma-al-husna", priority: 0.6, changeFrequency: "monthly" },
    {
      path: "/tools/salah-companion",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    { path: "/tools/wudu-ghusl", priority: 0.7, changeFrequency: "monthly" },
    { path: "/ramadan", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mental-health", priority: 0.7, changeFrequency: "monthly" },
    { path: "/sources", priority: 0.4, changeFrequency: "monthly" },
    { path: "/about", priority: 0.4, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  // Content slugs are shared across locales (localized files override text
  // by id), so enumerating the default locale covers every language.
  for (const stage of getAllStages()) {
    routes.push({
      path: `/roadmap/${stage.id}`,
      priority: 0.8,
      changeFrequency: "monthly",
    });

    for (const step of getStepsByStageId(stage.id)) {
      routes.push({
        path: `/roadmap/${stage.id}/${step.slug}`,
        priority: 0.8,
        changeFrequency: "monthly",
      });
    }
  }

  for (const topic of getAllTopics()) {
    routes.push({
      path: `/topics/${topic.slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    });
  }

  for (const guide of getLifeGuides()) {
    routes.push({
      path: `/guides/${guide.slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    });
  }

  for (const guide of getSeasonalGuides()) {
    routes.push({
      path: `/seasonal/${guide.slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    });
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of collectRoutes()) {
    const languages = languageAlternates(route.path);

    for (const locale of SUPPORTED_LOCALES) {
      entries.push({
        url: localeUrl(locale, route.path),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
