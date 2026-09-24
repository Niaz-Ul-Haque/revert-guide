#!/usr/bin/env node
/**
 * Translation coverage check.
 *
 * For every locale it reports, against locales/en:
 *   uiMissing     ui.json leaf keys that do not exist in the locale
 *   fileMissing   steps, topics and whole-file content with no locale file
 *   idMissing     ids in a merged collection with no locale record
 *   fieldMissing  text fields present in English but absent in the locale
 *   identical     text equal to the English where a translation is expected
 *   placeholder   {tokens} that differ from the English string
 *   drift         non-translatable fields (ids, urls, phones...) that differ
 *   metaLength    metadata titles over 60 or descriptions outside 70..155
 * Info only: uiExtra and idExtra (stale keys and ids the locale still has).
 *
 * Usage: node scripts/check-translations.mjs [--locale fr] [--details 20] [--json report.json]
 * Exits 1 when any locale has an error-level finding.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "locales");
const ALL_LOCALES = [
  "fr",
  "es",
  "hi",
  "ur",
  "zh",
  "tl",
  "pa",
  "pt",
  "ko",
  "fa",
  "ru",
  "bn",
];

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
};
const localeFilter = opt("--locale", null);
const details = Number(opt("--details", "15"));
const jsonOut = opt("--json", null);

// Keys whose values are never translated. Compared for drift instead.
const NEVER_TRANSLATE = new Set([
  "id",
  "slug",
  "stageId",
  "href",
  "src",
  "icon",
  "videoId",
  "channel",
  "sourceIds",
  "resourceIds",
  "resourceId",
  "relatedGlossaryIds",
  "relatedStepIds",
  "relatedTopicIds",
  "relatedResourceIds",
  "stepIds",
  "seeAlso",
  "reviewStatus",
  "url",
  "website",
  "email",
  "phone",
  "arabic",
  "arabicText",
  "transliteration",
  "referenceId",
  "referenceIds",
  "fatihahSourceIds",
  "cannotReciteSourceIds",
  "wuduBreaksSourceIds",
]);

// Per-file additions to NEVER_TRANSLATE (keys that are enums or names there).
const FILE_NEVER = {
  "masjids.json": [
    "name",
    "address",
    "postalCode",
    "city",
    "stateProvince",
    "country",
    "coordinates",
    "coordinatesPrecision",
    "serviceIds",
    "womenFriendly",
    "convertSupport",
    "parking",
    "accessibility",
  ],
  "sources.json": ["category", "organization", "accessed"],
  "resources.json": ["type", "organization"],
  "faq.json": ["category", "askTeacher"],
  "events.json": ["lastUpdated", "date", "province"],
  "dawah-guides/personal.json": [
    "kind",
    "occasion",
    "nodeOrder",
    "nextNodeId",
    "relatedNodeIds",
    "startNodeId",
    "duaId",
    "priority",
    "sourceName",
    "version",
  ],
};

// Paths (file:path prefix) where an identical value is fine.
const IDENTICAL_OK_PREFIX = [
  "ui.json:languageSwitcher.locales.",
  "ui.json:brand.name",
  "steps/shahada.json:exactActions.1.subSteps.0", // transliterated Shahada
];
// Fields where the English value may stay (official names, terms).
const IDENTICAL_OK_FIELD = {
  "sources.json": new Set(["title"]),
  "resources.json": new Set(["title"]),
  "glossary.json": new Set(["term"]),
  "events.json": new Set(["title", "venue", "organiser", "time"]),
};

// Words that may stay untranslated in any language (proper nouns and terms).
const PROPER = new Set(
  `allah ramadan shahada salah salat zakat hajj umrah eid quran sunnah hadith
   dua dhikr wudu ghusl tayammum jumuah jumu'ah taraweeh tarawih iftar suhoor
   fajr dhuhr asr maghrib isha witr sujud ruku tashahhud salam fatihah al-fatihah
   bismillah alhamdulillah subhanallah muharram ashura rajab shaban sha'ban
   dhul-hijjah rabi al-awwal laylat al-qadr fitr adha hijri islam muslim muslims
   canada canadian ontario quebec québec alberta manitoba saskatchewan yukon
   nunavut toronto montreal montréal ottawa calgary edmonton vancouver winnipeg
   halifax regina saskatoon whatsapp youtube google pdf faq ok id rss sms
   revert guide quran.com sunnah.com bukhari muslim tirmidhi nasa'i abu dawud
   ibn majah malik ahmad hanafi maliki shafi'i hanbali amja isna nccm iqra
   yaqeen seekersguidance bayyinah ppt png svg mp3 mp4 https http www
   al ibn bin bint abu umm de la le du des of and the e y da do dos das ul un
   for a an to in on at or vs`.split(/\s+/),
);

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function exists(file) {
  return fs.existsSync(file);
}

function stripPlaceholders(s) {
  return s.replace(/\{[a-zA-Z0-9_]+\}/g, "");
}

function placeholders(s) {
  return (s.match(/\{[a-zA-Z0-9_]+\}/g) || []).sort().join(" ");
}

function identicalAllowed(value) {
  const bare = stripPlaceholders(value).trim();
  if (!bare) return true;
  if ((bare.match(/[A-Za-z]/g) || []).length < 3) return true; // Arabic, numbers, "⌘K"
  if (/^(https?:\/\/|mailto:|tel:|\/)/.test(bare)) return true;
  if (/^[\w.+-]+@[\w.-]+$/.test(bare)) return true;
  if (/^[+\d][\d\s().-]*$/.test(bare)) return true;
  const words = bare
    .replace(/[“”"'‘’(),.:;!?/]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length > 6) return false;
  return words.every(
    (w) =>
      /^\d/.test(w) ||
      /^[A-Z]/.test(w) ||
      PROPER.has(w.toLowerCase()) ||
      /^[A-Z]/.test(w.replace(/^al-/, "A")),
  );
}

/**
 * Walk an English value and its locale counterpart side by side.
 * `report(kind, path, extra)` collects findings.
 */
function compare(en, loc, ctx, p, report) {
  const key = p.length ? p[p.length - 1] : "";
  const pathStr = p.join(".");
  const neverKey =
    typeof key === "string" &&
    (NEVER_TRANSLATE.has(key) || ctx.never.has(key));

  if (typeof en === "string") {
    if (neverKey) {
      if (loc !== undefined && loc !== en) report("drift", pathStr);
      return;
    }
    if (!en.trim()) return;
    if (loc === undefined) {
      report("fieldMissing", pathStr);
      return;
    }
    if (typeof loc !== "string") {
      report("fieldMissing", pathStr, "not a string");
      return;
    }
    if (placeholders(loc) !== placeholders(en)) report("placeholder", pathStr);
    if (loc === en) {
      const okField = ctx.identicalOkField.has(key);
      const okPrefix = IDENTICAL_OK_PREFIX.some((pre) =>
        `${ctx.file}:${pathStr}`.startsWith(pre),
      );
      if (!okField && !okPrefix && !identicalAllowed(en)) {
        report("identical", pathStr, en.slice(0, 60));
      }
    }
    return;
  }

  if (typeof en === "number" || typeof en === "boolean" || en === null) {
    // A translation never changes a number or a flag.
    if (loc !== undefined && loc !== en) report("drift", pathStr);
    return;
  }

  if (Array.isArray(en)) {
    if (neverKey) {
      if (loc !== undefined && JSON.stringify(loc) !== JSON.stringify(en)) {
        report("drift", pathStr);
      }
      return;
    }
    if (loc === undefined) {
      if (en.length) report("fieldMissing", pathStr);
      return;
    }
    if (!Array.isArray(loc)) {
      report("fieldMissing", pathStr, "not an array");
      return;
    }
    if (loc.length < en.length) {
      report("fieldMissing", `${pathStr}[${loc.length}..${en.length - 1}]`);
    }
    en.forEach((item, i) => {
      if (i < loc.length) compare(item, loc[i], ctx, [...p, i], report);
    });
    return;
  }

  if (typeof en === "object") {
    if (neverKey) {
      if (loc !== undefined && JSON.stringify(loc) !== JSON.stringify(en)) {
        report("drift", pathStr);
      }
      return;
    }
    if (loc === undefined || typeof loc !== "object" || Array.isArray(loc)) {
      report("fieldMissing", pathStr);
      return;
    }
    for (const [k, v] of Object.entries(en)) {
      compare(v, loc[k], ctx, [...p, k], report);
    }
  }
}

function makeCtx(file) {
  return {
    file,
    never: new Set(FILE_NEVER[file] || []),
    identicalOkField: IDENTICAL_OK_FIELD[file] || new Set(),
  };
}

function listDir(dir) {
  return exists(dir)
    ? fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".json"))
        .sort()
    : [];
}

function leafKeys(obj, prefix = "") {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const kk = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      out.push(...leafKeys(v, kk));
    } else {
      out.push(kk);
    }
  }
  return out;
}

const COLLECTIONS = [
  "sources.json",
  "resources.json",
  "glossary.json",
  "stages.json",
  "masjids.json",
  "faq.json",
  "life-guides.json",
  "seasonal-guides.json",
];
const WHOLE_FILES = [
  "tools/dua-dhikr.json",
  "tools/quran-starter.json",
  "tools/salah-companion.json",
  "tools/wudu-ghusl.json",
  "pages/ramadan-planning.json",
  "dawah-guides/personal.json",
  "events.json",
  "source-categories.json",
  "resource-collections.json",
];
const ERROR_KINDS = [
  "uiMissing",
  "fileMissing",
  "idMissing",
  "fieldMissing",
  "identical",
  "placeholder",
  "drift",
  "metaLength",
];
const INFO_KINDS = ["uiExtra", "idExtra"];

function checkLocale(locale) {
  const findings = {};
  for (const k of [...ERROR_KINDS, ...INFO_KINDS]) findings[k] = [];
  const add = (file) => (kind, p, extra) => {
    findings[kind].push(extra ? `${file}:${p} (${extra})` : `${file}:${p}`);
  };
  const enDir = path.join(ROOT, "en");
  const locDir = path.join(ROOT, locale);

  // ui.json
  const enUi = readJson(path.join(enDir, "ui.json"));
  const locUiPath = path.join(locDir, "ui.json");
  if (!exists(locUiPath)) {
    findings.fileMissing.push("ui.json");
  } else {
    const locUi = readJson(locUiPath);
    const enKeys = new Set(leafKeys(enUi));
    const locKeys = new Set(leafKeys(locUi));
    for (const k of enKeys) if (!locKeys.has(k)) findings.uiMissing.push(k);
    for (const k of locKeys) if (!enKeys.has(k)) findings.uiExtra.push(k);
    const report = (kind, p, extra) => {
      if (kind === "fieldMissing") return; // already in uiMissing
      add("ui.json")(kind, p, extra);
    };
    compare(enUi, locUi, makeCtx("ui.json"), [], report);
    for (const [page, meta] of Object.entries(locUi.metadata || {})) {
      if (page === "dynamic" || !meta || typeof meta !== "object") continue;
      if (typeof meta.title === "string" && meta.title.length > 60) {
        findings.metaLength.push(
          `ui.json:metadata.${page}.title (${meta.title.length} chars)`,
        );
      }
      if (
        typeof meta.description === "string" &&
        (meta.description.length < 70 || meta.description.length > 155)
      ) {
        findings.metaLength.push(
          `ui.json:metadata.${page}.description (${meta.description.length} chars)`,
        );
      }
    }
  }

  // Collections merged by id
  for (const file of COLLECTIONS) {
    const en = readJson(path.join(enDir, file));
    const locPath = path.join(locDir, file);
    if (!exists(locPath)) {
      findings.fileMissing.push(file);
      continue;
    }
    const loc = readJson(locPath);
    const byId = new Map(loc.map((r) => [r.id, r]));
    const enIds = new Set(en.map((r) => r.id));
    for (const r of loc) if (!enIds.has(r.id)) findings.idExtra.push(`${file}:${r.id}`);
    const ctx = makeCtx(file);
    for (const record of en) {
      const lr = byId.get(record.id);
      if (!lr) {
        findings.idMissing.push(`${file}:${record.id}`);
        continue;
      }
      compare(record, lr, ctx, [], (kind, p, extra) =>
        add(`${file}#${record.id}`)(kind, p, extra),
      );
    }
  }

  // Steps and topics: one file per English file, merged field by field
  for (const dir of ["steps", "topics"]) {
    for (const name of listDir(path.join(enDir, dir))) {
      const rel = `${dir}/${name}`;
      const en = readJson(path.join(enDir, rel));
      const locPath = path.join(locDir, rel);
      if (!exists(locPath)) {
        findings.fileMissing.push(rel);
        continue;
      }
      compare(en, readJson(locPath), makeCtx(rel), [], add(rel));
    }
  }

  // Whole-file fallbacks
  for (const rel of WHOLE_FILES) {
    const en = readJson(path.join(enDir, rel));
    const locPath = path.join(locDir, rel);
    if (!exists(locPath)) {
      findings.fileMissing.push(rel);
      continue;
    }
    compare(en, readJson(locPath), makeCtx(rel), [], add(rel));
  }

  return findings;
}

const locales = localeFilter ? [localeFilter] : ALL_LOCALES;
const report = {};
let failed = false;
for (const locale of locales) {
  const f = checkLocale(locale);
  report[locale] = f;
  const errors = ERROR_KINDS.reduce((n, k) => n + f[k].length, 0);
  if (errors) failed = true;
  const summary = [...ERROR_KINDS, ...INFO_KINDS]
    .filter((k) => f[k].length)
    .map((k) => `${k} ${f[k].length}`)
    .join(", ");
  console.log(`${locale}: ${errors ? summary : "clean"}`);
  if (details > 0) {
    for (const k of ERROR_KINDS) {
      if (!f[k].length) continue;
      console.log(`  ${k}:`);
      for (const item of f[k].slice(0, details)) console.log(`    ${item}`);
      if (f[k].length > details) {
        console.log(`    ... ${f[k].length - details} more`);
      }
    }
  }
}
if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(report, null, 2));
process.exit(failed ? 1 : 0);
