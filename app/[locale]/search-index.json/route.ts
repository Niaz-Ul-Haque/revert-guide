import { NextResponse } from "next/server";
import { SUPPORTED_LOCALES, isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { buildSearchIndex } from "@/lib/search-index";

// Exported as a static JSON file per locale at build time.
export const dynamic = "force-static";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export function GET(
  _request: Request,
  { params }: { params: { locale: string } },
) {
  const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  return NextResponse.json(buildSearchIndex(locale));
}
