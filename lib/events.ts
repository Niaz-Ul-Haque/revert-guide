import * as fs from "fs";
import * as path from "path";
import { DEFAULT_LOCALE, type Locale } from "./i18n";
import type { EventsContent } from "./types";

/** Team-edited events list. Uses the locale's file when it exists, else English. */
export function getEvents(locale: Locale = DEFAULT_LOCALE): EventsContent {
  const localized = path.join(process.cwd(), "locales", locale, "events.json");
  const file = fs.existsSync(localized)
    ? localized
    : path.join(process.cwd(), "locales", DEFAULT_LOCALE, "events.json");
  return JSON.parse(fs.readFileSync(file, "utf-8")) as EventsContent;
}
