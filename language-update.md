# Language Update

## Summary

This update fixes the newer guide pages that were still behaving like English-only pages. The practical guide and seasonal guide routes now load for every supported locale instead of returning `notFound()` outside English.

The visible page chrome for those routes now reads from `locales/en/ui.json`, which means other locale files can override those labels later through the existing `deepMerge` fallback behavior in `lib/i18n.ts`.

## Pages Affected

### Practical Life Guides

- `app/[locale]/guides/page.tsx`
- `app/[locale]/guides/[guideSlug]/page.tsx`

Changes:

- Removed the English-only locale guard.
- Replaced hardcoded page labels, breadcrumbs, metadata copy, section headings, source notes, and back links with `pages.guides.*` translation keys.
- Switched guide loading from direct `lifeGuides` usage to locale-aware helpers.
- The pages now generate static params for all locales.

Current behavior:

- If no locale-specific guide content exists, the page falls back to the English guide content.
- If a future file like `locales/fr/life-guides.json` is added, matching guide entries can override title, description, intro, summary, sections, scripts, scenarios, and related links by `id`.

### Seasonal Guides

- `app/[locale]/seasonal/page.tsx`
- `app/[locale]/seasonal/[guideSlug]/page.tsx`

Changes:

- Removed the English-only locale guard.
- Replaced hardcoded page labels, breadcrumbs, metadata copy, section headings, disclaimer copy, source notes, and back links with `pages.seasonal.*` translation keys.
- Switched seasonal guide loading from direct `seasonalGuides` usage to locale-aware helpers.
- The pages now generate static params for all locales.

Current behavior:

- If no locale-specific seasonal guide content exists, the page falls back to the English seasonal guide content.
- If a future file like `locales/es/seasonal-guides.json` is added, matching guide entries can override title, description, badge, intro, summary, focus lists, sections, scripts, and related links by `id`.

## Files Changed

- `lib/life-guides.ts`
- `lib/seasonal-guides.ts`
- `app/[locale]/guides/page.tsx`
- `app/[locale]/guides/[guideSlug]/page.tsx`
- `app/[locale]/seasonal/page.tsx`
- `app/[locale]/seasonal/[guideSlug]/page.tsx`
- `locales/en/ui.json`

## New Translation Keys

Added under `locales/en/ui.json`:

- `pages.guides.index`
- `pages.guides.detail`
- `pages.seasonal.index`
- `pages.seasonal.detail`

These are English fallback keys. Other locale `ui.json` files can add the same keys later and the pages will switch automatically.

## Future Content Translation Format

For practical guides, add a file like:

```json
[
  {
    "id": "family-and-friends",
    "title": "Translated title",
    "description": "Translated description",
    "intro": "Translated intro"
  }
]
```

Path example:

```text
locales/fr/life-guides.json
```

For seasonal guides, add a file like:

```json
[
  {
    "id": "eid-al-fitr",
    "title": "Translated title",
    "description": "Translated description",
    "badge": "Translated badge"
  }
]
```

Path example:

```text
locales/fr/seasonal-guides.json
```

## Notes

- The guide content still falls back to English until translated guide JSON files are added.
- Existing routes such as `dua-dhikr`, `quran-starter`, `tools/wudu-ghusl`, and `tools/salah-companion` still contain large English content arrays in their page files. They were not converted in this pass because they require a larger content-file migration, but the build currently generates them for every locale.
- `npm run build` passed after this update.
