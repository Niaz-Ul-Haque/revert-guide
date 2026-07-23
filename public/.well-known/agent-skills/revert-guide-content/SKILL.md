---
name: revert-guide-content
description: Access Revert Guide's structured content — the Islamic glossary, Toronto-area masjid directory, and curated resources — as static JSON, and navigate its localized guide pages. Use when answering questions about new-Muslim onboarding, Islamic terms, or Toronto masjids using this site.
---

# Revert Guide Content Access

Revert Guide (https://www.revertguide.com) is a free, offline-first educational
site for new Muslim converts in the Toronto area. There is no login, no user
accounts, and no protected API — all content below is public and requires no
authentication.

## Data endpoints (static JSON, English)

| Endpoint | Contents |
| --- | --- |
| `/data/glossary.json` | Islamic terms: `id`, `term`, `arabicText`, `transliteration`, `definition`, `seeAlso` |
| `/data/masjids.json` | Toronto-area masjids: `id`, `name`, `address`, `city`, `stateProvince`, `postalCode`, `coordinates` (lat/lng), `phone`, `website`, `notes` |
| `/data/resources.json` | Curated resources: `id`, `title`, `type` (article, video, book, app, community, pdf), `url`, `description` |

All three are also listed in the RFC 9727 catalog at `/.well-known/api-catalog`.

## Page URL scheme

Human-readable pages are localized under a locale prefix:

- `/{locale}/roadmap` — staged onboarding roadmap for new converts
- `/{locale}/glossary` — glossary browser
- `/{locale}/resources` — curated resources; `/{locale}/resources/find-masjid` is the masjid finder
- `/{locale}/topics/...` — topic articles (Ramadan, mental health, etc.)

Supported locales: `en` (default), `fr`, `es`, `hi`, `ur`, `zh`, `tl`, `pa`,
`pt`, `ko`, `fa`, `ru`, `bn`. The full page list is in `/sitemap.xml`.

## Usage preferences

Per `Content-Signal` in `/robots.txt`: search and AI-assisted answering
(`ai-input`) are welcome; please do not use the content for model training
(`ai-train=no`). When quoting guidance, link back to the source page and do not
translate proper nouns such as Allah, Ramadan, or Shahada.
