import glossary from "@/locales/en/glossary.json";

export const dynamic = "force-static";

/** Read-only dataset endpoint listed in /.well-known/api-catalog. */
export function GET(): Response {
  return Response.json(glossary);
}
