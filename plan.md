# Dawah Guide Hidden Page Implementation Plan

## 1. Feature Summary

Add a hidden, direct-URL dawah guide experience for da'ees using the supplied flowchart as the source workflow. The page should convert the static flowchart into a step-by-step interactive guide with clear branching decisions, respectful exit paths, deeper explanations, Qur'an and hadith references, and practical field guidance.

This task is planning-only. No user-facing page, route, component, content file, navigation item, or search entry should be implemented until the plan is approved.

The intended result after implementation is a hidden page such as:

- `/en/dawah-guide-personal`
- Optional direct English/saved-locale alias: `/dawah-guide-personal`

Important distinction: on a static public site, a hidden page is not private. It can be kept out of navigation, search, sitemap, and indexing, but anyone with the URL can access it. True access control would require authentication or a non-public distribution path, which is outside the current app architecture.

## 2. Relevant Files and Folders Discovered

- `app/layout.tsx`: root layout, Google fonts, global metadata, manifest, body shell.
- `app/page.tsx`: root client redirect to the saved/default locale.
- `app/[locale]/layout.tsx`: validates locale, provides `LocaleProvider`, `GlobalSearchProvider`, `Navbar`, `Footer`, `OfflineIndicator`, and `GlobalSearch`.
- `app/[locale]/page.tsx`: localized homepage; should not receive links to hidden dawah pages.
- `app/[locale]/roadmap/**`: established localized, static page routing and `generateStaticParams` pattern.
- `app/[locale]/topics/**`: topic hub/detail page patterns and structured content rendering.
- `components/Button.tsx`, `Card.tsx`, `Callout.tsx`, `Accordion.tsx`, `Breadcrumb.tsx`, `Icon.tsx`, `AnimateIn.tsx`: reusable UI patterns.
- `components/Navbar.tsx` and `components/Footer.tsx`: public navigation surfaces that must not link to the hidden page.
- `components/GlobalSearch.tsx`: search indexes stages, steps, topics, glossary, and resources only; dawah guide content should not be added to those global collections.
- `lib/i18n.ts`: supported locales, translation helpers, `localizeHref`.
- `lib/content.ts` and `lib/types.ts`: static JSON content loading and types for the public guide.
- `lib/metadata.ts`: simple metadata helper for normal public pages.
- `locales/<locale>/ui.json`: shared UI strings and metadata. Hidden route copy can use a dedicated data file instead of public navigation strings.
- `locales/en/topics/beliefs.json`, `locales/en/steps/shahada.json`, `locales/en/topics/quran.json`: existing Islamic content that overlaps with tawhid, Shahada, Surah Al-Ikhlas, and beginner explanations.
- `locales/en/glossary.json`: already includes terms such as `dawah`, `allah`, `ayah`, `quran`, `shahada`, `tawhid`, `surah`, and `hadith`.
- `locales/en/resources.json`: includes Qur'an and new Muslim resources such as The Clear Quran and Quran.com.
- `brand-guidelines.md`: tone, color, typography, spacing, component, print, and accessibility guidance.
- `tailwind.config.ts`: brand colors, fonts, shadows, spacing, animations.
- `app/globals.css`: global typography, focus styles, animation utilities, print styles, reduced-motion behavior.
- `next.config.mjs`: static export (`output: "export"`) and Serwist PWA integration.
- `app/sw.ts`: service worker/offline fallback behavior.

No `app/sitemap.ts` or `app/robots.ts` file currently exists in the repo.

## 3. Current Architecture Observations

- The app is a Next.js 14 App Router project using static export.
- Public pages are locale-prefixed under `app/[locale]`.
- The root `/` route redirects users to `/<locale>` using local storage and the default locale.
- Most content is stored in locale JSON files and loaded at build time through `lib/content.ts`.
- Existing localized content falls back to English when a localized file is missing.
- Shared layout automatically wraps locale pages with navigation, footer, offline indicator, and global search.
- Interactive experiences are implemented as focused client components under `components/*Client.tsx`.
- Styling uses Tailwind classes and existing tokens rather than a component library.
- Animation is lightweight: `AnimateIn`, Tailwind keyframes, CSS transitions, and global reduced-motion handling.
- Accessibility conventions are already present: skip link, semantic page structure, focus outlines, ARIA for accordions/dialogs/search, keyboard-friendly navigation.
- The app has no backend, no authentication, no analytics, and no user accounts.

## 4. Recommended Route and Page Structure

Use a route group to make the hidden nature clear in the filesystem without adding a URL segment:

```text
app/[locale]/(hidden)/dawah-guide-personal/page.tsx
components/DawahGuideClient.tsx
lib/dawah-content.ts
lib/dawah-types.ts
locales/en/dawah-guides/personal.json
```

Recommended public URL:

```text
/en/dawah-guide-personal
```

Optional alias to match the requested example:

```text
app/dawah-guide-personal/page.tsx
components/HiddenLocaleRedirect.tsx
```

The alias can mirror `app/page.tsx`: read the saved locale from `localStorage`, fall back to English, and client-redirect to `/<locale>/dawah-guide-personal`. Because the project is statically exported, avoid middleware or server redirects.

Keep the localized route as the canonical implementation. The alias should be only a thin hidden entry point.

## 5. Keeping the Page Hidden

Do not add the route to:

- `Navbar` desktop `navItems`
- `Navbar` mobile `mobileLinks`
- `Footer` quick links or legal links
- Homepage paths, quick links, or CTA sections
- Topics, roadmap, resources, glossary, masjid data, or any public collection
- `GlobalSearch` inputs or result categories
- Manifest shortcuts
- Any future `app/sitemap.ts`
- Any public "Sources" page links unless the user explicitly wants a citation page to expose it

Add noindex metadata on both the localized route and optional alias:

```ts
export const metadata = {
  title: "Dawah Guide - Revert Guide",
  description: "A private direct-link guide for dawah conversations.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
```

Because `app/[locale]/layout.tsx` always includes global nav and footer, the hidden page can still display normal site chrome. That does not make it discoverable from the chrome, as long as no links point to the hidden route. If the user wants a more private-feeling field tool later, create a nested layout under `app/[locale]/(hidden)/dawah-guide-personal/layout.tsx` that keeps `LocaleProvider` but omits public nav/footer; this would be a design decision because it diverges from the rest of the app.

## 6. Component Breakdown

Recommended components:

- `DawahGuideClient`: client state machine for the current node, history, decisions, restart, and focus management.
- `DawahStepPanel`: renders the current node title, summary, deeper explanation, references, prompts, and action buttons.
- `DawahDecisionControls`: renders yes/no/continue/pause choices as native buttons with clear labels.
- `DawahProgressRail`: compact step progress and branch history; desktop sidebar, collapsible mobile region.
- `DawahGorapPanel`: GORAP logical progression reference.
- `DawahSuggestionsPanel`: outside-the-field and on-the-field suggestions.
- `DawahReferenceBlock`: Qur'an/hadith/reference display with citation, translation label, and review status if useful.
- `DawahExitPanel`: respectful exit paths such as "keep the door open" and "best of luck" without pressure.
- `DawahCommunityConnectPanel`: final guidance/community handoff checklist.
- `DawahQuickReference`: optional mobile-friendly summary mode after the core flow is implemented.

Reuse existing shared components where they fit:

- `Button` for standard CTAs.
- `Callout` for reminders and cautions.
- `Accordion` for deeper explanation, common questions, and optional references.
- `Icon` for existing available icons. Extend `IconName` only if needed.
- `AnimateIn` for entrance animations.

Avoid adding new dependencies such as Framer Motion unless an approved design requires animation that cannot be done cleanly with existing CSS.

## 7. Data and Content Structure

Keep hidden dawah guide data outside the public content collections so it is not indexed by `GlobalSearch`.

Recommended file:

```text
locales/en/dawah-guides/personal.json
```

If translated later, use:

```text
locales/<locale>/dawah-guides/personal.json
```

Recommended top-level JSON shape:

```ts
interface DawahGuide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  audienceNote: string;
  tonePrinciples: string[];
  startNodeId: string;
  nodeOrder: string[];
  nodes: Record<string, DawahNode>;
  gorap: GorapItem[];
  suggestions: {
    outsideTheField: SuggestionItem[];
    onTheField: SuggestionItem[];
  };
  references: IslamicReference[];
  communityConnect: CommunityConnectContent;
  quickReference?: QuickReferenceContent;
}
```

Keep the actual page component content-light. The component should render this data rather than hard-code explanatory paragraphs.

## 8. Suggested TypeScript Data Model

```ts
export type DawahNodeKind =
  | "intro"
  | "teaching"
  | "decision"
  | "encouragement"
  | "exit"
  | "completion";

export interface DawahNode {
  id: string;
  kind: DawahNodeKind;
  title: string;
  eyebrow?: string;
  summary: string;
  explanation?: string[];
  conversationTips?: string[];
  avoid?: string[];
  referenceIds?: string[];
  options?: DawahDecisionOption[];
  nextNodeId?: string;
}

export interface DawahDecisionOption {
  id: "yes" | "no" | "continue" | "pause" | "restart";
  label: string;
  helperText?: string;
  nextNodeId: string;
  ariaLabel?: string;
}

export interface IslamicReference {
  id: string;
  type: "quran" | "hadith" | "scholarly-note";
  citation: string;
  label: string;
  arabic?: string;
  translation?: string;
  translator?: string;
  sourceName: string;
  sourceUrl?: string;
  reviewStatus: "draft" | "verified";
  reviewNote?: string;
}

export interface GorapItem {
  letter: "G" | "O" | "R" | "A" | "P";
  title: string;
  shortLabel: string;
  explanation: string;
  relatedNodeIds: string[];
}

export interface SuggestionItem {
  id: string;
  title: string;
  body: string;
  priority?: "core" | "helpful";
}
```

Add a graph validation helper in `lib/dawah-content.ts` that checks:

- `startNodeId` exists.
- Every `nextNodeId` exists.
- Every decision option points to an existing node.
- Every `referenceId` exists.
- There are no duplicate node IDs.
- Required terminal nodes exist for respectful exit and community connection.

This validation can run during page rendering/build and throw a clear error in development.

## 9. Step-by-Step Interaction Logic

Convert the flowchart to this graph:

1. `start`
   - Islam / Muslim conversation starter.
   - Continue to `believe-in-god-initial`.

2. `believe-in-god-initial`
   - Decision: "Does the person believe in God?"
   - Yes: `tawheed-surah-ikhlas`
   - No: `signs-creation-infinite-regress`

3. `signs-creation-infinite-regress`
   - Teaching: ayat, design, creation, infinite regress.
   - Continue to `believe-in-god-after-signs`.

4. `believe-in-god-after-signs`
   - Decision: "After discussing signs of creation, do they believe in God?"
   - Yes: `tawheed-surah-ikhlas`
   - No: `respectful-exit-best-of-luck`

5. `tawheed-surah-ikhlas`
   - Teaching: tawhid, Allah, Surah Al-Ikhlas.
   - Continue to `one-god-initial`.

6. `one-god-initial`
   - Decision: "Do they believe God is one?"
   - Yes: `justice-day-judgment-test-revelation`
   - No: `ayat-ikhtilaf`.

7. `ayat-ikhtilaf`
   - Teaching: conflict/ikhtilaf in multiple deities, without making the tone combative.
   - Continue to `one-god-after-ikhtilaf`.

8. `one-god-after-ikhtilaf`
   - Decision: "Does one God make sense to them now?"
   - Yes: `justice-day-judgment-test-revelation`
   - No: `respectful-exit-best-of-luck`

9. `justice-day-judgment-test-revelation`
   - Teaching: justice, Day of Judgment, life as a test, and revelation.
   - Continue to `angels`.

10. `angels`
    - Teaching: belief in angels.
    - Continue to `messengers-prophets`.

11. `messengers-prophets`
    - Teaching: prophets and messengers brought one core message.
    - Continue to `jesus-peace-be-upon-him`.

12. `jesus-peace-be-upon-him`
    - Teaching: Jesus, peace be upon him, in Islam.
    - Continue to `shahada-readiness-initial`.

13. `shahada-readiness-initial`
    - Decision: "Are they ready for Shahada?"
    - Yes: `connect-guidance-community`
    - No: `encourage-keep-door-open`.

14. `encourage-keep-door-open`
    - Encouragement: invite gently, keep the door open, offer resources, do not pressure.
    - Continue to `shahada-readiness-after-encouragement`.

15. `shahada-readiness-after-encouragement`
    - Decision: "After encouragement, are they ready for Shahada?"
    - Yes: `connect-guidance-community`
    - No: `respectful-exit-best-of-luck`.

16. `connect-guidance-community`
    - Completion: connect with guidance and Muslim community.
    - Include checklist: local imam/mentor, new Muslim support, masjid contact, follow-up plan, beginner resources.

17. `respectful-exit-best-of-luck`
    - Exit: thank them, leave the door open, avoid debate, make dua privately, offer a future conversation.

State behavior:

- Use in-memory React state only; do not persist progress.
- Keep a history stack for "Back" and "Restart".
- Focus the new step heading after each decision.
- Announce step changes politely for screen readers.
- Keep branch history visible enough that the da'ee knows where they are.
- Use a "Pause conversation" option on every major step that routes to a respectful exit or practical follow-up, because real dawah conversations do not always follow a perfect script.

## 10. Animation Plan

Use existing animation tools:

- `AnimateIn` for initial page sections.
- `animate-fade-up`, `animate-fade-in`, `animate-scale-in`, and `animate-slide-in-right` for step transitions.
- CSS transitions for panel changes, progress rail updates, and accordion expansion.
- No distracting looping animation in the core decision flow.
- Respect `prefers-reduced-motion` through the existing global CSS.

Suggested behavior:

- On decision, fade/scale the next node in.
- Progress indicator updates with a short color/position transition.
- Optional branch path line on desktop can animate subtly, but must not be required to understand the state.
- On mobile, avoid large movement that can cause content jumps; use opacity and small vertical shifts only.

## 11. Accessibility Plan

Requirements:

- Use one `h1` for the page title and logical `h2`/`h3` headings inside the guide.
- Render decisions as native `<button>` elements, not clickable divs.
- Maintain a visible focus state using existing `focus-visible:outline-borderStrong` conventions.
- After each decision, move focus to the new node heading with `ref.current?.focus()` and `tabIndex={-1}`.
- Add a polite `aria-live` region for step changes, e.g. "Step changed to Tawheed and Surah Al-Ikhlas."
- Do not rely on green/red alone for yes/no; labels and button text must carry meaning.
- Make all touch targets at least 44px high.
- Use `aria-current="step"` or equivalent on the active progress item.
- Ensure accordions use `aria-expanded` and `aria-controls`; reuse existing `Accordion` where possible.
- Use `lang="ar"` and `dir="rtl"` on Arabic text.
- Keep Qur'an translations clearly labeled as translations.
- Do not use autoplay audio/video.
- Ensure the branch history and final path are understandable by screen reader without needing visual connector lines.

Manual accessibility checks:

- Tab through the whole flow without a mouse.
- Test Enter/Space on all decision controls.
- Test Escape only if a modal/drawer is added.
- Verify focus order after every branch.
- Use browser/OS reduced motion setting.
- Check color contrast for all badges, buttons, and reference blocks.
- Test at 320px width to confirm no horizontal scrolling.

## 12. Responsive Design Plan

Mobile:

- Single-column layout.
- Current step first, support content below.
- Sticky bottom decision bar only if it does not obscure content; otherwise keep buttons inline.
- GORAP and suggestions as accordions or tabs below the active step.
- Compact progress label, e.g. "Step 4 of 12", with expandable history.

Tablet:

- Main step panel with secondary panels below or in a two-column wrap.
- Larger touch targets and clear spacing.

Desktop:

- Two-column layout:
  - Main column: current step, explanation, decisions.
  - Sidebar: progress rail, GORAP reference, field suggestions, quick restart.
- Keep content width readable, using the existing `max-w-4xl`/`max-w-6xl` page rhythm.

Print:

- Optional later enhancement: print mode should show the GORAP summary, full flow, suggestions, and citations in a clean single-column format.
- Existing print CSS hides nav and buttons globally; implementation may need print-specific classes so interactive content expands and remains readable.

## 13. Content Strategy for Qur'an, Hadith, and Explanations

Use the attached flowchart as workflow source of truth, but write fuller content in the Revert Guide tone:

- Gentle, clear, and non-judgmental.
- No pressure around Shahada.
- No mocking of other beliefs.
- No sectarian or political arguments.
- Avoid overconfident philosophical claims.
- Encourage wisdom, sincerity, good manners, and leaving results to Allah.

Content sources and review process:

1. Draft all citations as structured `IslamicReference` entries with source name, citation, translation, and review status.
2. Verify exact Qur'an wording before implementation using reliable sources such as Quran.com, The Clear Quran by Dr. Mustafa Khattab, or another consistent approved translation already represented in the app resources.
3. For Arabic Qur'an text, use a reliable Uthmani source such as Tanzil or Quran.com and preserve Arabic with `lang="ar"` and `dir="rtl"`.
4. Label English Qur'an text as translation, not the Qur'an itself.
5. For hadith, use primary hadith collections where possible and include collection, book/chapter if available, hadith number, and grading when available. Prefer sahih/hasan narrations for guidance content.
6. Have a qualified local imam, scholar, or trusted student of knowledge review the dawah-specific explanations before publishing.
7. Mark references as `draft` until verified and reviewed.
8. Avoid adding a reference if the team cannot verify wording, context, or authenticity.

References likely relevant to verify during implementation:

- Qur'an 16:125: inviting with wisdom and good instruction.
- Qur'an 51:55: reminders benefit believers.
- Qur'an 112:1-4: Surah Al-Ikhlas for tawhid.
- Qur'an 52:35-36 or similar verses about creation, if used for the "created from nothing?" reasoning.
- Qur'an 21:22 or similar verses about multiple deities, if used for the "one God" discussion.
- Reliable references about belief in angels, messengers, revelation, Day of Judgment, and Jesus, peace be upon him.

Use existing app content as internal consistency references, especially `beliefs.json`, `quran.json`, `shahada.json`, and glossary terms.

## 14. Fallback, Error, and Empty-State Handling

Data-level fallback:

- If the localized dawah guide data file is missing, fall back to English.
- If an unsupported guide slug is requested in future, use `notFound()`.
- If graph validation fails in development/build, throw a clear error naming the broken node or reference.

Runtime fallback:

- If the current node is missing, show a friendly error panel with "Restart guide" and "Return home" actions.
- If a reference is missing, render the step without that reference and log/build-fail in development depending on validation strictness.
- If the user reaches an exit node, provide respectful closure and optional restart.
- Since the content is local JSON, the core flow should work offline after the page has been cached.

External links:

- External reference links open in a new tab with `rel="noopener noreferrer"`.
- The page should remain usable if external reference sites cannot load.

## 15. Testing Plan

Automated checks available now:

- `npm run lint`
- `npm run build`
- `npm run format:check`
- `npm run test` currently only prints "No tests yet", but still documents the current project state.

Recommended implementation tests:

- Add a small graph validation unit or build-time script for `dawah-guides/personal.json`.
- Add component-level tests later if a React test setup is introduced.
- Consider Playwright only if the project adds browser testing infrastructure; otherwise do manual flow checks first.

Manual checks:

- Visit `/en/dawah-guide-personal` directly.
- Visit `/dawah-guide-personal` if the alias is implemented.
- Confirm the page is not linked from homepage, nav, footer, resources, roadmap, topics, glossary, or search.
- Use `rg "dawah-guide-personal"` to verify only intentional files mention the route.
- Run every decision branch:
  - initial God yes path
  - initial God no, then yes path
  - initial God no, then no exit
  - one God no, then yes path
  - one God no, then no exit
  - Shahada yes path
  - Shahada no, then yes path
  - Shahada no, then no exit
- Keyboard-only run through the full guide.
- Mobile viewport checks at 320px, 375px, 768px, 1024px, and desktop.
- Reduced-motion check.
- Print preview if print mode is included.
- Offline check after first page visit.

## 16. SEO and Noindex Considerations

- Add route-level `robots.index = false` and `robots.follow = false`.
- Do not include the route in any sitemap if a sitemap is added later.
- Do not add canonical/alternate links that promote the page.
- Do not add Open Graph/Twitter share metadata beyond minimal safe metadata.
- Do not link the page from the public "Sources" page unless explicitly requested.
- Remember that `noindex` depends on crawler behavior; it is not access control.

## 17. Potential Risks and Sensitivities

- Hidden is not private on a static public site.
- Dawah content can easily become too forceful; Shahada language must remain gentle and sincere.
- Philosophical arguments should be framed humbly and not as debate scripts.
- Interfaith content, especially Jesus, peace be upon him, should be respectful and accurate.
- Qur'an and hadith wording must be verified before publication.
- Translations differ; choose one translation policy and label it clearly.
- The flowchart is useful as a field guide, but real conversations are not linear. Include "pause", "return later", and "keep the door open" paths.
- Avoid adding user notes/progress persistence unless privacy implications are reviewed.
- Avoid broad public search indexing because this is intended as a direct-link resource for da'ees, not a public marketing page.

## 18. Implementation Phases

Phase 1: Data and route shell

- Add `lib/dawah-types.ts`.
- Add `lib/dawah-content.ts` with locale fallback and graph validation.
- Add `locales/en/dawah-guides/personal.json` with draft content.
- Add hidden localized route under `app/[locale]/(hidden)/dawah-guide-personal/page.tsx`.
- Add noindex metadata.

Phase 2: Core interactive flow

- Build `DawahGuideClient`.
- Implement node rendering, decision controls, history, restart, and focus management.
- Implement the full graph from the flowchart.
- Keep content step-by-step rather than showing all nodes at once.

Phase 3: Support panels

- Add GORAP panel.
- Add general suggestions panels.
- Add references panel.
- Add community connection ending path.
- Add respectful exit panel.

Phase 4: Polish and accessibility

- Tune responsive layout.
- Add reduced-motion-safe transitions.
- Test keyboard and screen reader behavior.
- Confirm contrast and focus states.
- Confirm no public links/search entries.

Phase 5: Content verification

- Verify exact Qur'an wording and hadith references.
- Review content with a qualified reviewer.
- Update `reviewStatus` fields.
- Adjust tone for gentleness, accuracy, and non-pressure.

Phase 6: Optional enhancements

- Add `/dawah-guide-personal` alias.
- Add printable summary mode.
- Add quick reference mode.
- Add scenario-based guidance and misconception handling.

## 19. Questions or Assumptions Before Implementation

- Should the direct URL be only `/en/dawah-guide-personal`, or should the root alias `/dawah-guide-personal` also exist?
- Should the hidden page include the normal Revert Guide navbar/footer, or should it use a quieter field-tool layout with less public chrome?
- Should the first version be English-only with locale fallback, or should translated files be prepared later?
- Who will review and approve the Islamic references before publication?
- Should "Contacts / Muslim Guide" point to existing masjid finder data, a generic checklist, or specific da'ee/community contacts supplied later?
- Should any notes or progress tracker exist? My recommendation is no persistent notes in the first version because the app currently has a no-login/no-persistence privacy model.

## 20. Additional Ideas for Da'ees

- Conversation tips by stage, such as "listen first", "ask one question at a time", and "summarize before moving on".
- Common questions and answers for God, tawhid, Jesus, revelation, and Shahada.
- Misconception handling with calm, non-debate responses.
- Scenario-based guidance, such as atheist, Christian, agnostic, culturally Muslim, or "not ready yet".
- Short dua reminders before and after conversations.
- "What to avoid" section: pressure, arguments for ego, overwhelming details, sectarian debates, and public embarrassment.
- Contact/referral checklist for connecting someone to a local imam, mentor, class, or new Muslim support group.
- Printable summary mode for training sessions.
- Offline-friendly quick reference mode for field use.
- Progress tracker within the current session only.
- Private notes area only if designed as session-only and clearly non-persistent.
- Mobile quick actions: "pause conversation", "return to GORAP", "show gentle exit", "community handoff".
- Reviewer mode showing source status for every citation before launch.
