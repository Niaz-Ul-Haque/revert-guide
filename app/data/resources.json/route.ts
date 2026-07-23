import resources from "@/locales/en/resources.json";

export const dynamic = "force-static";

/** Read-only dataset endpoint listed in /.well-known/api-catalog. */
export function GET(): Response {
  return Response.json(resources);
}
