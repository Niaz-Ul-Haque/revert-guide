# AlAdhan Asma Al Husna API Integration Guide

## Table of Contents

1. [API Overview](#1-api-overview)
2. [Relevant Endpoints](#2-relevant-endpoints)
3. [Data We Can Retrieve](#3-data-we-can-retrieve)
4. [Useful Product Opportunities](#4-useful-product-opportunities)
5. [Recommended Implementation Scope](#5-recommended-implementation-scope)
6. [Implementation Ideas](#6-implementation-ideas)
7. [Caveats and Limitations](#7-caveats-and-limitations)
8. [Sources Reviewed](#8-sources-reviewed)

---

## 1. API Overview

The AlAdhan Asma Al Husna API provides the 99 Names of Allah as a small structured dataset. It is better understood as a content dataset API than as a dynamic service.

### Core capabilities

- Return all 99 names in one request.
- Return one specific name.
- Return multiple specific names in one request by number.
- Provide Arabic name text, transliteration, numeric ordering, and an English meaning.

### Base URLs

The OpenAPI spec lists three servers:

- `https://api.aladhan.com/v1`
- `https://aladhan.api.islamic.network/v1/`
- `https://aladhan.api.alislam.ru/v1/`

Recommendation: use `https://api.aladhan.com/v1` as the primary base URL and treat the others as mirrors unless we intentionally support failover.

### Transport and operational characteristics

- Auth: none.
- Response format: JSON.
- CORS: enabled (`Access-Control-Allow-Origin: *` observed).
- Cache headers: `Cache-Control: public,max-age=7200` observed.
- ETag: present on live responses.
- Compression: OpenAPI spec documents `Accept-Encoding` support for `gzip` and `zstd`.
- Rate limiting: not documented in the spec, but live responses exposed per-second rate-limit headers with observed limit `12`.

### What this API does well

- It gives us the core 99-name dataset quickly.
- The dataset is tiny, easy to cache, and easy to index locally.
- The `number` field gives us a stable canonical key from 1 to 99.
- The Arabic text includes diacritics, which is valuable for display.

### What this API does not do

- It does not provide multiple translation languages.
- It does not provide long explanations, commentary, or references.
- It does not provide categories, themes, or tags.
- It does not provide audio, pronunciation files, or recitation.
- It does not provide search or filtering endpoints.
- It does not provide slugs, aliases, SEO metadata, or editorial context.

For product planning, that means the API is good for seed data but not sufficient by itself for a rich educational experience.

---

## 2. Relevant Endpoints

## 2.1 `GET /asmaAlHusna`

Returns the full set of 99 names.

### Parameters

| Parameter | Location | Type | Required | Notes |
|---|---|---|---|---|
| `Accept-Encoding` | header | string | No | `gzip` or `zstd` per spec |

### Example request

```text
GET https://api.aladhan.com/v1/asmaAlHusna
```

### Example response shape

```json
{
  "code": 200,
  "status": "OK",
  "data": [
    {
      "name": "\\u0627\\u0644\\u0631\\u064e\\u0651\\u062d\\u0652\\u0645\\u064e\\u0646\\u064f",
      "transliteration": "Ar Rahmaan",
      "number": 1,
      "en": {
        "meaning": "The Beneficent"
      }
    }
  ]
}
```

### Recommendation

This should be our default endpoint for almost all product uses. The entire dataset is only 99 records, so there is little value in making piecemeal runtime requests.

## 2.2 `GET /asmaAlHusna/{number}`

Returns one or more names by number.

### Parameters

| Parameter | Location | Type | Required | Notes |
|---|---|---|---|---|
| `number` | path | string | Yes | A single number like `7` or a comma-separated list like `7,8,9` |
| `Accept-Encoding` | header | string | No | `gzip` or `zstd` per spec |

### Valid examples

```text
GET https://api.aladhan.com/v1/asmaAlHusna/77
GET https://api.aladhan.com/v1/asmaAlHusna/7,8,9
```

### Observed behavior

- Valid numbers return `200 OK`.
- Out-of-range numeric values such as `0` or `100` return `404` with a helpful error message.
- The API preserves request order for valid lists. A request for `3,1,2` returned results in that same order.
- Mixed valid/invalid text input such as `1,2,abc` returned `500 SERVER_ERROR` in live testing instead of a clean validation error.

### Recommendation

Use this endpoint only when we have a specific reason, such as:

- deep-linking to a single name detail page
- fetching a hand-picked list by number
- internal data refresh scripts

For general app browsing, `GET /asmaAlHusna` is simpler and safer.

---

## 3. Data We Can Retrieve

## 3.1 Field-level data

Each item in the dataset contains these fields:

| Field | Type | Meaning |
|---|---|---|
| `name` | string | Arabic name text |
| `transliteration` | string | Latin-script transliteration |
| `number` | integer | Canonical number from 1 to 99 |
| `en.meaning` | string | Short English meaning |

### Observed dataset characteristics

- Total records: `99`
- First item: `1 - Ar Rahmaan - The Beneficent`
- Last item: `99 - As Saboor - The Patient One`
- Top-level payload shape: `code`, `status`, `data`

### Example records

```json
[
  {
    "name": "\\u0627\\u0644\\u0631\\u064e\\u0651\\u062d\\u0652\\u0645\\u064e\\u0646\\u064f",
    "transliteration": "Ar Rahmaan",
    "number": 1,
    "en": { "meaning": "The Beneficent" }
  },
  {
    "name": "\\u0627\\u0644\\u0652\\u0645\\u064e\\u0644\\u0650\\u0643\\u064f",
    "transliteration": "Al Malik",
    "number": 3,
    "en": { "meaning": "The King / Eternal Lord" }
  }
]
```

## 3.2 Metadata we effectively have

Even though the API is sparse, the following fields are useful product metadata:

- `number` gives us ordering and a canonical ID
- `transliteration` gives us a default searchable Latin representation
- `en.meaning` gives us a compact English label
- Arabic text with diacritics gives us good presentation value for learners

## 3.3 What the API does not provide

Important missing data:

- no multilingual translations beyond English meaning
- no long-form meaning or commentary
- no Quranic references
- no hadith references
- no thematic categories
- no audio pronunciation
- no "daily reflection" copy
- no search endpoint
- no alternate transliteration variants

If we want a richer feature set, we will need to add our own content layer.

---

## 4. Useful Product Opportunities

The dataset is small, stable, and well suited to educational and devotional product surfaces.

### Strong feature candidates

- browsable list of all 99 names
- detail page for each name
- "Name of the day" card
- favorites or saved names
- reflection/journaling prompts tied to selected names
- flashcards or memorization mode
- quiz mode using number, Arabic, transliteration, and meaning

### Additional useful product layers we can add ourselves

- localized translations in app-supported languages
- short editorial explanations for each name
- pronunciation guidance
- thematic groupings such as mercy, provision, power, forgiveness, patience
- beginner-friendly "how to reflect on this name" prompts

### Best use of the API data in the product

The API is best used as a canonical seed dataset:

- Arabic display text
- transliteration
- numeric order
- concise English meaning

Then we enrich it locally with the product's own educational, editorial, and localization layers.

---

## 5. Recommended Implementation Scope

## 5.1 What we should implement

Recommended:

1. Use `GET /asmaAlHusna` as the primary ingestion endpoint.
2. Store the dataset locally for offline-first use.
3. Use `number` as the stable key across UI, routing, bookmarking, and localization files.
4. Add our own translated labels and richer supporting content in the app.
5. Use `GET /asmaAlHusna/{number}` only for special cases, not as the core loading pattern.

## 5.2 Why this scope makes sense

- The dataset is static enough that repeated runtime fetching adds little value.
- The app is already localized, and the API only gives us English meanings.
- A local copy improves performance, resilience, and offline behavior.
- Rich product experiences will need content beyond what the API returns.

## 5.3 Product recommendation

For this product, the strongest path is:

- phase 1: ingest all 99 names and ship a browsable list + detail view + featured daily name
- phase 2: add favorites, learning mode, and journaling/reflection prompts
- phase 3: add multilingual editorial enrichments and optional quiz/memorization experiences

---

## 6. Implementation Ideas

## 6.1 Fetch and cache the full dataset

```ts
async function fetchAsmaAlHusna() {
  const response = await fetch("https://api.aladhan.com/v1/asmaAlHusna");

  if (!response.ok) {
    throw new Error(`Asma Al Husna request failed: ${response.status}`);
  }

  const payload = await response.json();
  return payload.data as Array<{
    name: string;
    transliteration: string;
    number: number;
    en: { meaning: string };
  }>;
}
```

### Best storage model for this app

Because this project is offline-first and localized, the best implementation is likely one of these:

- fetch once in a build-time or content-sync step and store a local JSON snapshot
- fetch once on first run and persist to local storage or IndexedDB
- keep the API as a refresh source, not as a dependency for every render

Recommendation: prefer a local snapshot plus occasional refresh.

## 6.2 Build a daily name feature

Since the dataset is small and ordered, a "daily name" feature is simple:

- pick by day-of-year modulo 99
- or rotate through a curated sequence
- or let users pin a favorite and resume where they left off

## 6.3 Client-side search

The API has no search endpoint, but that is not a problem.

We can search locally across:

- Arabic `name`
- `transliteration`
- `en.meaning`
- our own localized fields

Because there are only 99 records, client-side filtering will be instant.

## 6.4 Deep-linking

The `number` field is stable and ideal for routes:

- `/asma-al-husna/1`
- `/asma-al-husna/55`

This also makes bookmarks, analytics, and localized content lookups straightforward.

---

## 7. Caveats and Limitations

## 7.1 The API is content-light

The API gives us just enough data to build a useful feature, but not enough to build a rich educational experience without our own content layer.

Most notably, it does not include:

- extended meanings
- scholarly commentary
- references
- pronunciation audio
- multilingual translations

## 7.2 English meanings should be treated as concise labels, not final definitions

The `en.meaning` values are short and useful, but they should not be treated as exhaustive or universally preferred renderings. Meanings and transliterations can vary across scholarly and editorial traditions.

Recommendation: present them as concise English renderings and review any high-visibility copy with editorial oversight.

## 7.3 Validate `number` inputs ourselves

Live testing showed inconsistent server-side validation:

- `0` and `100` returned clean `404` responses
- `1,2,abc` returned a `500 SERVER_ERROR` with an internal error message

Implication: never pass unsanitized user input directly into the `number` endpoint. Parse and validate numbers on our side first.

## 7.4 Runtime dependency is optional

Unlike a prayer-times API, this dataset does not meaningfully change from request to request. That means runtime API dependence is not necessary for the product.

In practice, the best production setup may be:

- use the API once to seed the dataset
- store the result locally
- add our own localized and editorial enrichment

## 7.5 Observed rate limiting still matters

Even though the dataset is tiny, the API exposed rate-limit headers with an observed limit of about 12 requests per second. This is not a problem for normal use, but it reinforces the case for one-shot fetching and local caching.

---

## 8. Sources Reviewed

Official docs and specs:

- `https://aladhan.com/asma-al-husna-api#overview`
- `https://api.aladhan.com/v1/documentation/openapi/asma-al-husna/yaml`

Live endpoints tested during review:

- `https://api.aladhan.com/v1/asmaAlHusna`
- `https://api.aladhan.com/v1/asmaAlHusna/1,2,3`
- `https://api.aladhan.com/v1/asmaAlHusna/3,1,2`
- `https://api.aladhan.com/v1/asmaAlHusna/0`
- `https://api.aladhan.com/v1/asmaAlHusna/100`
- `https://api.aladhan.com/v1/asmaAlHusna/1,2,abc`

The recommendations above combine the documented contract with observed live-response behavior.
