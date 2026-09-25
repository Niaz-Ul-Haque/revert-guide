#!/usr/bin/env node
// Runs axe-core over key pages of the static export in out/.
// Run after `npm run build`.
//
//   node scripts/axe-check.mjs [--skip-missing]
//
// jsdom has no layout engine, so rules that need rendered boxes or colours
// are disabled here; check those by hand or with Lighthouse.
// Exit code 1 on any serious or critical violation, or a missing page.

import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import { JSDOM, VirtualConsole } from "jsdom";

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const OUT_DIR = "out";
const PAGES = [
  "/en",
  "/en/get-help",
  "/en/faq",
  "/en/topics/five-pillars",
  "/en/resources/find-masjid",
  "/en/tools/salah-companion",
  "/en/tools/wudu-ghusl",
  "/en/mental-health",
  "/en/privacy",
  "/en/about",
  "/en/events",
  "/en/community-groups",
  "/en/guides/how-mentoring-works",
  "/en/guides",
  "/en/topics",
  "/en/guides/when-someone-dies",
  "/en/guides/how-muslims-marry",
  "/en/guides/children-and-family-life",
  "/en/guides/young-converts",
  "/en/guides/facing-hate-and-harassment",
  "/en/guides/coming-back",
  "/en/guides/having-a-baby",
  "/en/guides/travelling-as-a-muslim",
  "/en/topics/thinking-about-islam",
  "/en/topics/why-muslims-differ",
  "/en/topics/wills-and-inheritance",
  "/en/topics/grief-and-loss",
  "/en/topics/end-of-life-decisions",
  "/en/topics/prayer",
  "/en/topics/modesty",
  "/en/topics/fasting",
  "/en/glossary",
  "/en/dua-dhikr",
  "/en/quran-starter",
  "/en/roadmap",
  "/en/roadmap/week-1/prayer",
  "/en/seasonal",
  "/en/seasonal/eid-al-fitr",
  "/en/ramadan",
];
const LAYOUT_RULES = ["color-contrast", "link-in-text-block", "target-size"];
const FAILING_IMPACTS = new Set(["serious", "critical"]);
const skipMissing = process.argv.includes("--skip-missing");

function pageFile(route) {
  const candidates = [
    join(OUT_DIR, `${route}.html`),
    join(OUT_DIR, route, "index.html"),
  ];
  return candidates.find((file) => existsSync(file));
}

async function audit(route, file) {
  const dom = new JSDOM(readFileSync(file, "utf8"), {
    url: `http://localhost${route}`,
    runScripts: "outside-only",
    pretendToBeVisual: true,
    virtualConsole: new VirtualConsole(),
  });
  try {
    dom.window.eval(axeSource);
    const rules = Object.fromEntries(
      LAYOUT_RULES.map((id) => [id, { enabled: false }]),
    );
    const results = await dom.window.axe.run(dom.window.document, {
      rules,
      resultTypes: ["violations"],
    });
    return results.violations;
  } finally {
    dom.window.close();
  }
}

let failed = 0;
for (const route of PAGES) {
  const file = pageFile(route);
  if (!file) {
    console.log(
      `${skipMissing ? "SKIP" : "FAIL"} ${route}: no page in ${OUT_DIR}/`,
    );
    if (!skipMissing) failed++;
    continue;
  }
  const violations = await audit(route, file);
  const blocking = violations.filter((v) => FAILING_IMPACTS.has(v.impact));
  console.log(
    `${blocking.length ? "FAIL" : "ok  "} ${route}: ${violations.length} violation(s), ${blocking.length} serious or critical`,
  );
  for (const v of violations) {
    console.log(`     [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length})`);
    for (const node of v.nodes.slice(0, 3)) {
      console.log(`       ${node.target.join(" ")}`);
    }
  }
  if (blocking.length) failed++;
}

console.log(
  failed
    ? `\n${failed} page(s) failed the accessibility check.`
    : "\nAll pages passed.",
);
process.exitCode = failed ? 1 : 0;
