#!/usr/bin/env node
// Checks every http(s) URL in the sources, resources and masjids data.
// Node 18+, no dependencies.
//
//   node scripts/check-links.mjs [--report path.json] [--limit N]
//
// Exit code 1 only when a URL fails (network error, 4xx or 5xx).
// Redirects are reported but do not fail the run.

import { readFileSync, writeFileSync } from "node:fs";

const FILES = [
  "locales/en/sources.json",
  "locales/en/resources.json",
  "locales/en/masjids.json",
];
const TIMEOUT_MS = 20_000;
const CONCURRENCY = 8;
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

function arg(name) {
  const i = process.argv.indexOf(name);
  return i === -1 ? undefined : process.argv[i + 1];
}

function collectUrls(value, file, found) {
  if (typeof value === "string") {
    if (/^https?:\/\//i.test(value)) {
      if (!found.has(value)) found.set(value, new Set());
      found.get(value).add(file);
    }
  } else if (Array.isArray(value)) {
    for (const item of value) collectUrls(item, file, found);
  } else if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectUrls(item, file, found);
  }
}

async function request(url, method) {
  return fetch(url, {
    method,
    redirect: "manual",
    headers: { "User-Agent": USER_AGENT, Accept: "*/*" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
}

async function check(url) {
  try {
    let res = await request(url, "HEAD");
    // Many servers reject or mishandle HEAD; retry those with GET.
    if (res.status >= 400) {
      res = await request(url, "GET");
    }
    await res.body?.cancel();
    const location = res.headers.get("location");
    return {
      url,
      status: res.status,
      redirect: location ? new URL(location, url).href : null,
    };
  } catch (error) {
    return { url, status: 0, error: error.cause?.code ?? error.name };
  }
}

async function runPool(items, worker) {
  const results = [];
  let next = 0;
  async function lane() {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(items[i]);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, lane));
  return results;
}

const found = new Map();
for (const file of FILES) {
  collectUrls(JSON.parse(readFileSync(file, "utf8")), file, found);
}

let urls = [...found.keys()];
const limit = Number(arg("--limit"));
if (limit > 0) urls = urls.slice(0, limit);

console.log(`Checking ${urls.length} URLs from ${FILES.join(", ")}`);
const results = await runPool(urls, check);
for (const r of results) r.files = [...found.get(r.url)];

const failures = results.filter((r) => r.status === 0 || r.status >= 400);
const redirects = results.filter(
  (r) => r.status >= 300 && r.status < 400 && r.redirect,
);

if (redirects.length) {
  console.log(`\nRedirects (${redirects.length}):`);
  console.table(
    redirects.map((r) => ({ status: r.status, url: r.url, to: r.redirect })),
  );
}
if (failures.length) {
  console.log(`\nFailures (${failures.length}):`);
  console.table(
    failures.map((r) => ({
      status: r.status,
      error: r.error ?? "",
      url: r.url,
      files: r.files.join(", "),
    })),
  );
}
console.log(
  `\n${results.length} checked, ${failures.length} failed, ${redirects.length} redirected.`,
);

const reportPath = arg("--report");
if (reportPath) {
  writeFileSync(
    reportPath,
    JSON.stringify(
      { checkedAt: new Date().toISOString(), failures, redirects, results },
      null,
      2,
    ),
  );
  console.log(`Report written to ${reportPath}`);
}

process.exitCode = failures.length ? 1 : 0;
