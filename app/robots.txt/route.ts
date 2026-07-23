import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * robots.txt is emitted from a route handler instead of the typed
 * MetadataRoute.Robots convention because Next's typed API cannot express
 * Content-Signal directives (https://contentsignals.org/).
 */
export function GET(): Response {
  const body = [
    "User-Agent: *",
    "Allow: /",
    "Disallow: /dawah-guide-personal",
    "Disallow: /*/dawah-guide-personal",
    "Disallow: /*/offline",
    "",
    "# Content Signals (https://contentsignals.org/):",
    "# search=yes    -> indexing and linking to this site is welcome",
    "# ai-input=yes  -> AI assistants may ground answers in this content",
    "# ai-train=no   -> please do not use this content for model training",
    "Content-Signal: search=yes, ai-input=yes, ai-train=no",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
