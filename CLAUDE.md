# CLAUDE.md - Revert Guide Project Context

This is the authoritative project context document for the **Revert Guide** application. Claude and other AI agents should reference this document for all project decisions.

---

## 0. Project Overview

**Revert Guide** is an offline-first educational web app (Next.js 14 + React) for new Muslim converts in the Toronto area. The app provides step-by-step onboarding without login or user accounts. It's packaged for web and mobile (Capacitor) as a Progressive Web App (PWA).

**Core Principles:**
- **Offline-First:** Users access all content without network after initial load
- **Accessibility First:** WCAG 2.0 AA compliance (AODA standards)
- **No Tracking:** Zero analytics, ads, or trackers
- **No Login (MVP):** No user accounts or cloud sync
- **Content-Driven:** All text is structured data (JSON/MDX), not hard-coded

---

## 1. Instructions

**Project Overview:** This repository contains the **Revert Guide**, an offline-first educational web app (Next.js 14 + React) for new Muslim converts without requiring login. The focus is on a **gradual, guided learning experience** with an empathetic tone. The codebase is structured for static generation and PWA features. This file (CLAUDE.md) serves as a single source of truth for all AI coding assistants and developers, describing project conventions, requirements, and guidelines.

**Non-Negotiables & Goals:**
- **Accessibility First:** The app **must comply with WCAG 2.0 AA** (AODA standards). All interactive elements need accessible labels, sufficient color contrast (4.5:1 for text), and full keyboard navigation support. No UI feature can be approved if it diminishes accessibility.
- **Offline-First PWA:** Users must have a seamless experience offline. The app uses a service worker to precache critical assets and cache content pages. The app shell and recent content must load offline; dynamic features degrade gracefully without network.
- **No User Tracking:** **No analytics scripts, ads, or third-party trackers.** Privacy is paramount. The app does not collect personal data in V1.
- **No Login or Persistence (MVP):** There are **no user accounts or cloud sync.** Do not implement login or store user progress on a server. **No data persists beyond the device**.
- **Content is King:** All educational content is stored as data (MDX/JSON files) and not hard-coded in components. The app should be easy to update by editing content files.
- **Performance:** Use a light, responsive design. Avoid unnecessary heavy libraries. All pages should score 90+ on Lighthouse. This includes efficient image loading and code-splitting.
- **Design Consistency:** Follow brand guidelines for styling. Use the provided color palette, typography, and spacing system. Do not introduce new colors or fonts without design approval.
- **Security:** Follow Next.js security best practices. Use HTTPS for interactions. No eval or dangerous HTML insertion. Sanitize external content. No XSS vectors.
- **AI Assistant Usage:** Always refer to this CLAUDE.md for project context. Ensure any code aligns with these rules.

**System Constraints & Tech Stack:**
- Next.js 14 with **App Router** and React 18. Use **TypeScript** (strict mode) across the project.
- Node.js 18+ required. Deploy as a static site (use next export).
- **Capacitor 5** for native builds. Keep dependencies compatible with Capacitor's WebView.
- PWA implemented via **@serwist/next** (a Next.js PWA service worker solution). Build process generates sw.js.
- **UI Library:** None. Use Next.js/React + Tailwind CSS. Build custom components per design spec.
- **Map:** Google Maps JavaScript API (or static map) for Masjid Finder. Load lazily. Handle offline gracefully.
- **No database or server in V1** - all data lives in static files.

**Repository & Code Conventions:**
- **Structure:** Single Next.js app with potential subdirectories for content and Capacitor config.
- **Branching:** Use feature branches. **Do not commit directly to main.** All merges via Pull Request with approval.
- **Linting & Formatting:** ESLint and Prettier configured. **CI must pass ESLint checks.** Run `npm run lint` and `npm run format` before committing.
- **Code Style:** 2 spaces indent, semicolons, prefer const/let, as per lint config.
- **File Organization:** Follow Next.js conventions for App Router. Pages under `app/`, components under `components/`, content under `content/` or `data/`, feature-based grouping where sensible.
- **Naming:** Meaningful names. UpperCamelCase for components, lowerCamelCase for functions/variables.
- **Git Hooks:** Pre-commit hooks run tests and lint. Do not bypass.

**Accessibility Expectations (Summary):**
- Use semantic HTML elements (headings h1-h2-h3 in logical order, lists, buttons/anchors).
- Every interactive control gets visible focus state (default or custom outline with 3:1 contrast).
- Include a global "skip to content" link as first focusable element on each page.
- All images have alt text (or empty alt if purely decorative).
- Form fields have associated labels. Search inputs include aria-label.
- Components that reveal/hide content use ARIA attributes (aria-expanded) and are operable via keyboard (Space/Enter).
- Target screen reader compatibility (VoiceOver/NVDA). Use aria-live for dynamic feedback.
- Use lang attributes appropriately (Arabic text: lang="ar", base html: lang="en").
- **Testing:** Every new UI feature tested with tab navigation and screen reader. Run automated accessibility tests (axe).

**Testing Expectations:**
- **Unit Tests:** Comprehensive coverage of utility functions and component logic using Jest and React Testing Library.
- **Integration Tests:** Key flows (navigating through steps, using Masjid finder search, offline behavior) tested via Playwright or Cypress.
- **Accessibility Tests:** Incorporate accessibility linters (jsx-a11y) and axe-core automated tests for pages. Accessibility is a first-class test category.
- **Performance Tests:** Before release, run Lighthouse or WebPageTest audits. Verify PWA installability, offline support, and performance timings.
- **Manual Testing:** Test on range of devices: Mobile Safari (iOS), Android Chrome, Desktop Chrome/Firefox. Verify Add to Home Screen, offline usage, resizing, print stylesheet.
- **Continuous Integration:** CI pipeline runs linting and all tests on push/PR. Only merge code that passes all checks. Accessibility violations block merging.

**Content Modeling Rules:**
- All **Stages, Steps, Topics, Glossary terms, Resources, and Masjids** are defined in structured content files (JSON or MDX). Developers should not hard-code content into components; components fetch from content files.
- **Steps**: Each step is stored as .mdx or structured object with required fields: id/slug, title, whyMatters, exactActions (ordered list with optional sub-steps), timeEstimate, obstacles (list with problem/solution), tinyVersion, unlocksNext, and resources (list of Resource IDs).
- **Stages**: Each stage has id/slug, title, summary/mainGoal, success (the "Success looks like" text), notWorry (list of reassurance points), and ordered stepIds.
- **Topics**: Stored as MDX with metadata: id/slug, title, description (short blurb), main content (markdown with headings), relatedStepIds, relatedGlossaryIds.
- **Glossary**: Glossary.json with entries: id (unique key), term, optional arabicText and transliteration, plain language definition, seeAlso (array of related term ids). Sorted alphabetically.
- **Resources**: resources.json with entries: id, title, type (article, video, book, app, community, pdf), url, description, relatedStepIds, relatedTopicIds. Keep descriptions concise.
- **Masjid Data**: masjids.json with entries: id (unique slug), name, address, city, stateProvince, country, postalCode, coordinates (lat/lng), phone, website, notes. Initial dataset: 10 Toronto-area masjids.
- **Default Locale:** English content resides under `content/en/` with potential subfolders.

**i18n (Internationalization) Rules:**
- **Default Language:** English (US) is the default.
- **UI Strings:** Stored in locale JSON (e.g., `locales/en.json`). Do not hard-code English in components; use a lookup like `t('nav.home')`.
- **Translations:** Although initially English-only, the system accommodates future languages. Duplicate content folder for new locales (e.g., `content/fr/`).
- **RTL Support:** Arabic requires right-to-left layout. Use `dir="rtl"` on Arabic text segments and RTL fonts. Use logical CSS properties (margin-inline-start vs margin-left).
- **Proper Nouns:** Do not translate "Allah", "Ramadan", "Shahada", etc.
- **Locale Switching:** (Future) Architecture keeps content separated by locale, enabling simple language switching.

**Offline & Caching Strategy:**
- **Offline-First Approach:** Service worker handles caching via precaching and runtime caching.
- **Precache (on install):** Essential app shell files (core JS/CSS, index page, /roadmap page, fallback page), branding assets (logo, icons), critical JSON (masjids list).
- **Runtime Caching (Stale-While-Revalidate):** Content pages cached on first visit. Subsequent visits use cache. SW fetches updates in background if online.
- **Cache Strategies:**
  - Images/audio: **Cache First** with expiration (reused offline since rarely change)
  - Masjid JSON/static data: **Cache First** (updating occasionally if online)
- **Offline Fallback Page:** Shown if user navigates to uncached page when offline. Provides friendly message suggesting reconnection.
- **Offline Indicator:** Display banner/toast when `navigator.onLine` goes false to inform users.
- **Capacitor (Native):** Bundles entire content on device. Service worker still operates for update caching. Ensure PWA manifest configured and allowNavigation set.
- **iOS PWA Limitations:** No background sync, 50MB cache limit, data eviction after 7 days inactivity. Caching is conservative in size. Provide guidance for manual home screen add.
- **Data Storage:** Rely on Cache API for HTML, JSON, static assets. Consider IndexedDB via wrapper (idb) for structured data if needed. Currently not needed.
- **Testing Offline:** Use Chrome DevTools offline mode or flight mode on devices. Verify cached pages load after viewing once. Test navigation doesn't hang.

**"No Persistence Until Login" Rule:**
- App does not save user-specific data permanently without an account.
- Avoid localStorage entirely. Use sessionStorage or in-memory context only for ephemeral state (remembering last viewed step).
- **Do not implement any backend** or cloud to store progress. No API calls like /api/saveProgress.
- All progress is client-side and resets if user clears cache or uses new device.
- **No registration, no profile info, no analytics** - nothing introducing privacy concerns.
- Exception: Caching for offline (same content for anyone, not user-specific).
- If a contributor suggests adding login, reject it for MVP.

**Definition of Done (MVP):**
- All 6 timeline stages implemented with descriptions and all 10 onboarding steps with full content.
- Topics hub and 2 topic pages (Ramadan, Mental Health) with meaningful content. Glossary with 30+ terms. Resources page with ~20 curated resources. Masjid Finder with 10+ masjids.
- Static info pages: "About", "Accessibility Statement", "Privacy Policy", "Terms of Use".
- Mobile bottom nav (4-5 icons) working. Desktop top nav with dropdowns keyboard accessible. Breadcrumbs on all content pages.
- Skip link functional on all pages.
- Responsive design tested at common breakpoints (375px, 768px, 1024px, 1200px+).
- Accessibility audit: 0 critical violations. Manual SR verification for key flows.
- Offline functionality: PWA installable. Cached pages load offline. Manifest configured.
- Performance: Lighthouse >90. LCP within 2-3s on 3G. No oversized images. Bundle optimized.
- Print styles: Content page prints reader-friendly. Nav hidden. Interactive elements expanded.
- SEO & Metadata: Meta tags set. Titles and descriptions. OG tags. Sitemap.xml generated.
- 404 page exists with helpful message.
- No console errors. No React warnings.
- No deprecated Next.js patterns.
- No localStorage or cookies for persistent data (except possibly dismissed banner).
- Deployment ready: build succeeds. Production build tested locally/staging.
- Capacitor builds prepared (app id, name, icons configured).

**Mistakes to Avoid:**
- Over-complicating Onboarding: No heavy tutorials or pop-ups beyond docs. User onboarding is the content itself.
- Straying from Tone: All microcopy must remain encouraging and non-judgmental.
- Neglecting Mobile Layout: Always check components on narrow viewport. Avoid fixed-width elements.
- Long Blocks of Text: Break up with headings, lists, accordions. Use progressive disclosure.
- Not Accounting for Slow Network: Design for perceived performance. Use skeleton loaders/spinners.
- Ignoring Search/Filter UX: Glossary and masjid search should be fast and user-friendly.
- Large Data on Main Thread: Masjid list could be large. Use virtualization if hundreds of items. Offload heavy computations to Web Workers.
- Memory Leaks: Clean up event listeners and timers. App may run for long sessions.
- Breaking Backwards Compatibility: Don't rename CLAUDE.md or break expected formats.
- PWA Pitfalls: Cache version updates when content changes. Don't assume push notifications work on iOS.
- Not Testing on iOS Safari: Test PWA on iPhone manually. Avoid features unsupported there.
- Console Logging Sensitive Data: Strip console.log before production or use sparingly.
- Ignoring Build Warnings: Fix hydration mismatches, missing keys, etc. These indicate potential bugs.

**Checklist Before Commit/PR:**
1. Run tests and lint: `npm run lint && npm run test`
2. Run build: `npm run build && next export`
3. Manual smoke test in dev mode: Navigate through app, check for runtime errors.
4. Verify content linking: Click cross-links to confirm they go to correct places.
5. Check offline (dev mode): Simulate offline, verify cached pages load.
6. Peer review done: At least one team member reviewed and approved.
7. Update documentation if needed: Keep this file and relevant docs current.
8. Ensure CLAUDE.md symlink exists (for compatibility).
9. Final commit message: Use Conventional Commits style.

---

## 2. Implementation Notes

**Information Architecture & Cross-Linking:**
- Content structured around **Roadmap** (sequential steps) and supplemental **Topics/Resources** sections.
- Consistent hierarchy: **Stages** contain **Steps** referencing **Topics**, **Glossary**, **Resources**.
- Cross-linking thoroughly implemented:
  - Within step content: if another step mentioned, convert to internal link with anchor ID.
  - Glossary terms: underlined tooltip triggers or links on first occurrence.
  - Topic pages: cross-reference related steps and topics.
  - Breadcrumb trail on content pages (Roadmap > Stage > Step).
  - Main nav and footer provide site-wide links.
- Consistent URL scheme (/roadmap/[stage]/[step], /topics/[topic], etc.) aids linking.
- Stable URLs use semantic slugs (not sequence numbers) to withstand content updates.
- User can navigate linearly (Next/Previous) or via cross-links. No isolated content.

**Data Modeling & Storage:**
- All content in structured data files (JSON/MDX). Components don't hard-code content.
- **Stages:** JSON with id, title, description, success, notWorry list, stepIds array.
- **Steps:** MDX with front-matter. Fields: id/slug, title, stageId, whyMatters, exactActions (array with optional sub-steps), timeEstimate, obstacles (array of {problem, solution}), tinyVersion, unlocksNext, resources (array of Resource IDs), relatedGlossary.
- **Topics:** MDX with front-matter. Fields: id, title, description, content (markdown with headings), relatedStepIds, relatedGlossaryIds.
- **Glossary:** glossary.json array. Entries: id (for anchoring), term, arabicText, transliteration, definition, seeAlso array.
- **Resources:** resources.json array. Entries: id, title, type (article, video, book, app, community, pdf), url, description, relatedStepIds, relatedTopicIds.
- **Masjids:** masjids.json array. Entries: id, name, address, city, province, postalCode, country, lat, lng, phone, website, notes.
- **Default Locale:** content/en/ (with potential content/fr/ etc. for translations).
- During build: transform content into HTML and data objects for rendering. Structured approach ensures consistency (all Steps have whyMatters section). Updating content means editing files, not code.

**Masjid Finder Implementation:**
- Static JSON dataset ~10 mosques (expandable to 100+ in future).
- Use **Google Maps JavaScript API** (or Leaflet + OSM) for interactive map.
- Map initialized in Finder page component on load. Markers created from data coordinates.
- Map centered on Toronto by default, zoom appropriate to show all points.
- **Filtering:** Client-side. When user types, filter list whose name/city/postalCode contain query (case-insensitive). Simple string matching—fast for our data size.
- If dataset grows large (hundreds/thousands): plan to use **virtualization** (only render visible list items to keep DOM lightweight) and **Web Worker** for filtering (if dataset very large, filter on separate thread to avoid UI blocking).
- For MVP (10 items): optimizations not needed (filter instant).
- Code structured so swapping in worker would be straightforward later.
- Map updates with filtering: clear and redraw markers on filter event (low count makes this fine).
- **Offline Fallback:** Detect navigator.onLine. If offline or map API fails: display friendly message in place of map. List and search still function (data is local).
- Clicking marker: open info window with name/maybe link to details. Or highlight list item.
- Clicking list item: pan/zoom map, maybe bounce marker.
- **No geolocation in MVP** (user can visually locate nearest). Code structured to allow adding later.
- Masjids.json ~10 entries now. Tested filtering scales smoothly to ~few hundred on mid-range devices. If thousands: would need more robust solution (indexing, server-side queries). Beyond MVP scope.

**Internationalization (i18n):**
- Built with future translation in mind.
- All UI labels/static text in locale JSON (e.g., locales/en.json). Components use lookup like t('nav.home').
- Currently English-only. System accommodates future languages.
- Content files organized by locale (content/en/, content/fr/, etc.). Default is English.
- **RTL Support:** Arabic requires right-to-left layout. Use dir="rtl" on Arabic text spans. RTL fonts (Amiri for Arabic).
- **Logical CSS:** Use logical properties (margin-inline-start vs margin-left) where possible.
- **Proper Nouns:** Don't translate "Allah", "Ramadan", "Shahada", etc.
- **Locale Switching:** (Future) Architecture separates content per locale, enabling simple language switching without refactoring.
- **No Mixed Languages:** If user switches language, get all UI and content in that language (except necessary original terms).
- Testing: pseudo-translation (doubling strings) verifies layout doesn't break with longer or RTL text. Also test fonts (Amiri for Arabic).

**Offline-First & Caching Strategy:**
- Leverage Next.js PWA capabilities via **@serwist/next** plugin.
- On production build: generates sw.js; app registers it.
- Configuration for precaching and runtime caching:
  - **Precached (always offline):** App shell (HTML/JS/CSS), Home, Roadmap, all Step/Topic pages, JSON datasets (glossary, resources, masjids), critical images (logo). After first load, user can access all guidance offline. Content volume small enough to precache all.
  - **Runtime Caching (Stale-While-Revalidate):** Pages cached on first visit. Serve from cache on subsequent visits. Fetch update in background if online. Next time opened, fresh content available. E.g., if content updated, SW fetches newer version behind scenes; user gets it on next visit.
  - **Strategy per content type:**
    - Images/audio: **Cache First** with expiration (rarely change)
    - Masjid JSON/static data: **Cache First** (update occasionally if online)
- **Offline Fallback Page:** Custom page shown if navigation fails for uncached page (for any reason). Friendly message "You're offline. Reconnect or use available content." Includes basic nav links (mostly hitting cache).
- **Offline Indicator:** Visual badge or alert bar when navigator.onLine goes false. Informs users they're offline.
- **iOS Limitations:** No auto install prompt (manual "Add to Home Screen"). 50MB storage limit (we're under). Data might evict after ~7 days non-use (can't prevent easily). Mark storage persistent if possible. Caching conservative in size. Instruct iOS users on manual home screen add.
- **No Server Calls:** All data is local. SW mainly caches pages, not managing network requests for data. This isolates from offline concerns.
- **Background Sync:** Not active in MVP (no form data to sync). Included Workbox setup in case future adds progress/notes to server.
- **Testing:** Use DevTools offline or flight mode on devices. Ensure main flows work offline (reading steps, searching glossary, viewing topics). Verify all pages cached after viewing. Test navigation doesn't hang.

**Testing & Quality Assurance:**
- **Automated Unit/Integration Tests:** Unit tests for critical content rendering (e.g., glossary.json populates page correctly, Step component renders sections given sample step object). Test utility functions like filtering (masjid filter returns correct subset). Use Jest and React Testing Library for components.
- **Accessibility Testing:** Run each page through axe-core automated checks. Fix violations. Manually test with VoiceOver/NVDA on key flows.
  - Verify heading hierarchy logical (adjust mislabeled headings).
  - Navigate app keyboard-only (all interactive elements focusable in sensible order; no focus traps).
  - Test high-contrast mode, zoom to 200% (layout usable).
  - Prepare **Accessibility Statement** page (WCAG 2.1 AA conformance, known gaps for AODA).
- **Performance Testing:** Run Lighthouse. PWA score high. Largest contentful paint ~1s on mobile (static cached content). Images optimized (few small ones; use Next &lt;Image&gt;). Code-split pages. Aim Lighthouse PWA score 100, Performance 90+. Test mid-range phones.
- **Cross-Browser:** Test latest Chrome, Firefox, Safari, Edge. Verify PWA install on Chrome Android and Safari iOS. Check map on WebKit. Verify print CSS on Chrome and Safari.
- **Printing Tests:** Print Step page and Glossary. Confirm nav gone, text readable black-on-white, links show URLs. No page-break issues. Known thing: checkboxes don't print "checked" (we don't store state). Acceptable.
- **Load Testing (Data):** Simulate many glossary terms/masjids by duplicating. UI remains snappy. Filter fast. For scaling: noted solutions (worker, virtualization).
- **Security:** Set HTTP headers (CSP, X-Frame-Options). External links: rel="noopener noreferrer". No sensitive data stored/transmitted. No user permissions except optional geolocation (future, user-initiated).
- **User Testing:** Beta with few new converts. Validate tone and content meet needs. Address any confusion on terminology/navigation before release.

---

## Maintenance & Updates

This CLAUDE.md document should be updated whenever:
- Project scope changes or new features added
- Major architectural decisions made
- New tech stack choices
- Content modeling changes
- Accessibility or compliance requirements updated
- Testing strategy evolves
- Deployment or build process changes

**Update Process:**
1. Make changes to this file
2. Commit with message: `docs: update CLAUDE.md - [brief reason]`
3. Share updated version with team
4. Reference updated sections in relevant code PRs

---

## Related Documents

This CLAUDE.md refers to and complements these resources:

| Document | Purpose | Location/Notes |
|----------|---------|----------------|
| **CLAUDE.md/AGENTS.md** | Extended version of this file (symlink or separate copy) | Maintain single source; CLAUDE.md can symlink to AGENTS.md |
| **Brand Guidelines** | Visual design, color system, typography, tone | brand-guidelines.md |
---

**Document Version:** 1.0 (MVP Specification)  
**Last Updated:** January 26, 2026  
**Maintained By:** Revert Guide Development Team