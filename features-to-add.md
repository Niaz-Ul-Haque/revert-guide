# Features To Add

This list is based on the current app structure: content-driven pages, roadmap stages/steps, glossary, resources, Toronto masjid listings, offline support, and an early `locales/` setup that is not yet wired through the app.

## 1. Implement proper i18n infrastructure

Priority: High

Why this should be first:
- The repo already has `locales/en.json`, but the main content loader and most pages are still hardcoded to English.
- Adding French now will force the right architecture before more languages make the app harder to maintain.

Scope:
- Support `en` and `fr` first.
- Move UI strings, metadata, and content loading to a locale-aware system.
- Make it easy to add future languages without touching core page logic.

Implementation notes:
- Introduce locale-aware routing or locale context.
- Refactor `lib/content.ts` so it loads from `content/{locale}/...` instead of always `content/en/...`.
- Split all page copy and component labels out of hardcoded TSX where practical.
- Add a language switcher in the navbar or settings area.
- Keep English as fallback when a translation is missing.
- Document the translation workflow so new languages can be added with low effort.

## 2. Add a global search across roadmap, topics, glossary, and resources

Priority: High

Why:
- Search exists only on glossary and masjid pages.
- The content library is already structured enough to support a single cross-site search experience.

Scope:
- One search entry point.
- Search results grouped by content type.
- Highlight matched terms.
- Support searching titles, descriptions, glossary definitions, and step text.

## 3. Build the masjid map and location-based discovery

Priority: High

Why:
- The current page explicitly says "Map coming soon."
- Masjid entries already include coordinates, so the data model is ready.

Scope:
- Interactive map view.
- I dont use browser geolocation, but what the suer searches/fileters with.
- Open directions in Google Maps/Apple Maps.
- Filter by city, services, women-friendly spaces, convert support, parking, and accessibility where data exists.



## 4. Add prayer-learning support with audio and guided practice

Priority: Medium

Why:
- New Muslims often need repeated help with pronunciation and sequence, especially for prayer.
- The app already covers prayer content, but it is mostly text-based.

Scope:
- Audio for key Arabic phrases.
- Step-by-step prayer mode.
- Transliteration toggle.
- Slow-repeat mode for memorization.


## 5. Add regional content packs beyond Toronto

Priority: Medium

Why:
- The app is currently very Toronto-specific in metadata and masjid discovery.
- The overall product can scale much further if regional data is modular.

Scope:
- Introduce location packs for masjids, community resources, helplines, and local notes.
- Let users choose city/region.
- Preserve offline use by downloading only the selected region's data.




## 6. Add printable/shareable summaries for key pages

Priority: Low

Why:
- Some users will want a simple one-page guide for prayer, ghusl, Ramadan basics, or first-week steps.
- This is useful for mosque mentors and offline distribution.

Scope:
- Print-friendly page layouts.
- Shareable summary cards or PDFs.
- Compact "tiny version" exports for essential actions.

