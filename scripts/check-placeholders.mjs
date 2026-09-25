#!/usr/bin/env node
// Fails when a built page links to a placeholder from lib/site.ts, for
// example mailto:hello@PLACEHOLDER.example or https://forms.gle/PLACEHOLDER.
// Run after `npm run build`. Node 18+, no dependencies.
//
//   node scripts/check-placeholders.mjs [outDir]
//
// Exit code 1 when any href in out/**/*.html contains "PLACEHOLDER".

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.argv[2] ?? "out";
const HREF = /href="([^"]*PLACEHOLDER[^"]*)"/g;

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* htmlFiles(full);
    else if (name.endsWith(".html")) yield full;
  }
}

let files = 0;
const hits = [];
for (const file of htmlFiles(outDir)) {
  files += 1;
  for (const match of readFileSync(file, "utf8").matchAll(HREF)) {
    hits.push(`${file}: ${match[1]}`);
  }
}

if (files === 0) {
  console.error(`No HTML files in ${outDir}. Run npm run build first.`);
  process.exit(1);
}
if (hits.length > 0) {
  console.error(`${hits.length} placeholder link(s) in ${outDir}:`);
  for (const hit of hits.slice(0, 50)) console.error(`  ${hit}`);
  process.exit(1);
}
console.log(`clean: ${files} HTML files, no placeholder links`);
