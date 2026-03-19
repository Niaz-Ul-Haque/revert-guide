# Features To Add

This list is based on the current app structure: content-driven pages, roadmap stages/steps, glossary, resources, Toronto masjid listings, offline support, and an early `locales/` setup that is not yet wired through the app.


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
- I dont use browser geolocation, but the user should be able to search adreses/fileters with. So will just use the googlemaps iframe and pinpoint there via the address taken from the Masjid json.
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



## 6. Add printable/shareable summaries for key pages

Priority: Low

Why:
- Some users will want a simple one-page guide for prayer, ghusl, Ramadan basics, or first-week steps.
- This is useful for mosque mentors and offline distribution.

Scope:
- Print-friendly page layouts.
- Shareable summary cards or PDFs.
- Compact "tiny version" exports for essential actions.
