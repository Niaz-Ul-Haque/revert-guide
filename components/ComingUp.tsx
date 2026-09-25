import fs from "fs";
import path from "path";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { DEFAULT_LOCALE, localizeHref, type Locale } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";

interface Season {
  id: string;
  name: string;
  /** ISO dates, approximate (see the file's note). */
  start: string;
  end: string;
  href: string;
}

interface SeasonalCalendar {
  note: string;
  sourceIds: string[];
  seasons: Season[];
}

const WINDOW_DAYS = 60;
const DAY_MS = 86_400_000;

function readCalendar(locale: Locale): SeasonalCalendar {
  const file = (l: Locale) =>
    path.join(process.cwd(), "locales", l, "seasonal-calendar.json");
  const filePath = fs.existsSync(file(locale))
    ? file(locale)
    : file(DEFAULT_LOCALE);
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as SeasonalCalendar;
}

/** The season under way, or the next one starting within 60 days. */
export function findComingSeason(seasons: Season[], today: Date) {
  const now = today.getTime();
  return seasons.find((season) => {
    const start = Date.parse(season.start);
    const end = Date.parse(season.end) + DAY_MS;
    return end > now && start - now <= WINDOW_DAYS * DAY_MS;
  });
}

/**
 * "Coming up" pointer for the home and roadmap pages. Rendered on the server,
 * so the date is the build date.
 * ponytail: frozen at build time in the static export; redeploy at least
 * monthly, or move the date check to the client if deploys become rare.
 */
export function ComingUp({ locale }: { locale: Locale }) {
  const calendar = readCalendar(locale);
  const season = findComingSeason(calendar.seasons, new Date());
  if (!season) return null;

  const t = getTranslator(locale);
  const format = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale, {
      timeZone: "UTC",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  const started = Date.parse(season.start) <= Date.now();
  const text = t<string>(
    started ? "common.comingUp.now" : "common.comingUp.soon",
  )
    .replace("{name}", season.name)
    .replace("{start}", format(season.start))
    .replace("{end}", format(season.end));

  return (
    <section
      className="mx-auto mb-10 max-w-3xl px-5"
      aria-labelledby="coming-up-heading"
    >
      <div className="rounded-2xl border border-primaryGreen/40 bg-surfaceElevated/60 p-5 text-left">
        <h2
          id="coming-up-heading"
          className="mb-2 mt-0 flex items-center gap-2 text-lg font-semibold text-textPrimary"
        >
          <Icon name="clock" size="sm" className="text-primary" />
          {t("common.comingUp.title")}
        </h2>
        <p className="mb-2 text-base leading-relaxed text-textSecondary">
          {text}
        </p>
        <p className="mb-3 text-sm leading-relaxed text-textMuted">
          {calendar.note}
        </p>
        <Link
          href={localizeHref(locale, season.href)}
          prefetch={false}
          className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary hover:text-primaryHover"
        >
          {t("common.comingUp.link")}
          <Icon name="chevron-right" size="sm" />
        </Link>
      </div>
    </section>
  );
}
