##  Brand Guidelines

**Brand Personality:** Revert Guide's personality is welcoming, gentle, and empowering. We act as a calm mentor or friend. Our brand voice is defined by what we _are_ and _are not_:

**We are...**
- _Calm and patient guides_ - We remember how overwhelming the conversion journey can be and we never rush.
- _Encouraging and optimistic_ - We celebrate progress, however small, without being patronizing.
- _Practically helpful, yet spiritually grounded_ - Advice is down-to-earth (actionable tips) and backed by Islamic tradition.
- _Inclusive of all cultures_ - Imagery and examples do not assume one ethnic background.
- _Focused on essentials_ - We stick to core foundational knowledge and avoid deep dives into fringe topics.
- _Honest about challenges_ - We acknowledge where the journey is hard but always offer hope and solutions.

**We are not...**
- _Preachy or judgmental_ - Tone is never scolding. We don't guilt-trip.
- _Overly academic or full of jargon_ - Language stays simple. Arabic terms are explained.
- _Sectarian or political_ - Content is mainstream Sunni-oriented but we do not delve into sect differences.
- _Pressuring or extremist_ - No encouragement to do everything at once. Moderation is key.
- _Unrealistically positive_ - We validate struggles and do not imply the journey will be effortless.
- _Exclusive_ - We don't cater only to one gender or age. Everyone should feel "this is for me."

**Voice & Tone Guidelines:** The primary voice is a warm, knowledgeable friend. Imagine a compassionate mentor who has been through this and speaks one-on-one. Tone shifts by context:

- **Welcome / Onboarding:** Tone is _warm, celebratory, and hopeful_. E.g., "Welcome to the family! Your journey begins here, and we're honored to walk alongside you."
- **Instructional steps:** Tone is _clear, encouraging, and practical_. We give instructions plainly but kindly. Use second person and imperative where appropriate, but soften commands with context.
- **Reassurance (when user might feel overwhelmed):** Tone is _gentle and validating_. E.g., "Feeling overwhelmed? That's completely normal. Every Muslim started exactly where you are."
- **Challenges/Obstacles:** Tone is _empathetic and solution-focused_. E.g., "This step can be tricky - many converts struggle with it. Here's what can help: …"
- **Disclaimers or Sensitive Guidance:** Tone stays _direct but kind_. E.g., "Note: This guide offers general advice. For specific rulings, consult a local imam."
- **Error Messages:** Tone is _helpful, not blaming_. E.g., "Oops, we couldn't load that content. Check your connection or try again shortly."
- **404 or Empty States:** Tone is _friendly and light_, redirecting. E.g., "This page seems to have wandered off. Let's get you back to the roadmap."

**Common Microcopy:**
- **Buttons:** Use action phrases that feel personal. E.g., "Begin Your Journey" instead of "Start".
- **Loading Messages:** Use reassuring language. E.g., "Preparing your next step..." rather than "Loading..."
- **Success Confirmations:** Respond positively. E.g., "Saved! You're making beautiful progress."
- **Empty State Guidance:** Be encouraging. E.g., "No topics here yet. Explore the Roadmap to find what you need."
- **No Judgment:** E.g., "try to avoid" rather than "you must never".

**Visual Identity - Color System:** Our color palette uses calming, natural tones (greens and warm neutrals), adjusted to ensure WCAG AA contrast compliance:

- **Primary Green:** #A5C89E - soft, welcoming green (background accent mostly, not small text).
- **Accent Yellow:** #FFFBB1 - pale yellow, highlights important info (use with dark text for contrast).
- **Secondary Green:** #D8E983 - lighter green-yellow (secondary highlights or illustrations).
- **Olive Accent:** #AEB877 - muted olive tone (subtle separators or less prominent elements).

**Extended UI Color Roles (with darker variants):**
- **Background (page):** #FFFFFF (white)
- **Surface:** #F7FAF6 (very light greenish off-white)
- **Surface Elevated:** #EDF4EB (slightly darker, for modals/highlighted cards)
- **Primary (interactive):** #4A7C59 (dark green, ~4.6:1 contrast on white)
- **Primary Hover:** #3D6649 (darker green for hover/active)
- **Accent (secondary):** #6B7A3D (olive-green, ~5.2:1 contrast)
- **Text Primary:** #1A2E1A (almost black, deep green-tinted charcoal, ~14:1 contrast)
- **Text Secondary:** #4A5D4A (medium gray-green for metadata, ~6.8:1 contrast)
- **Text Muted:** #6B7D6B (lighter gray-green for placeholders, ~4.5:1 contrast)
- **Border:** #C5D4C1 (light greenish-gray for dividers)
- **Border Strong:** #8FA889 (mid-tone for focus outlines)
- **Feedback Success:** #2E7D32 (green for confirmations)
- **Feedback Warning:** #C77700 (orange/amber for cautions)
- **Feedback Error:** #C62828 (red for errors)

**Contrast & Color Usage Rules:**
- All text: minimum 4.5:1 contrast against background (large text >18pt: 3:1 acceptable).
- Don't rely on color alone to convey meaning. Links use color + underline. Required fields use icon/text + color.
- Focus outlines: minimum 3:1 contrast with adjacent colors.
- Test interface in grayscale to ensure everything conveying information remains evident without hue.
- Use bright accent yellow (#FFFBB1) carefully: typically as highlight behind text or in icons, always with dark text (light text fails contrast). Primary green (#A5C89E) is light, used for backgrounds/illustrations. **Primary Dark Green (#4A7C59)** is go-to for interactive elements.

**Typography System:**
- **Primary Font:** Inter (sans-serif) for all English content and UI.
- **Fallbacks:** system-ui, -apple-system, sans-serif.
- **Arabic Font:** Amiri (serif) for Arabic text/Quranic verses.
- **Arabic Fallback:** Traditional Arabic, serif.
- **Font Loading:** Self-host or use reliable CDN. Include fonts in PWA cache.

**Typographic Scale (base 16px = 1rem):**
- **Body Text:** 1rem (16px), weight 400, line-height ~1.75 (airy, readable).
- **Small Text:** 0.875rem (14px) or 0.75rem (12px) for captions. Minimum 12px anywhere.
- **H1 (Page Titles):** ~2.25rem (≈36px), weight 700.
- **H2 (Section Headings):** ~1.5rem (24px), weight 700.
- **H3 (Sub-section/Card Titles):** ~1.25rem (20px), weight 600.
- **H4/H5:** 1.125rem (18px) or 1rem bold if needed.
- Use consistent descending sizes. Avoid ultra-light weights.

**Transliteration Styling:** Italicize transliterations, possibly render slightly smaller (0.9em) to differentiate. E.g., "wudu (وضوء, _wuḍūʾ_)".

**Typography Accessibility:**
- Minimum 14px, base 16px for good legibility.
- Max line length: 65-75 characters (use max-width: 65ch).
- Paragraph spacing: roughly one line (margin-bottom ~1.5em).
- Avoid full justification; use left-align (or right-align for Arabic) for ragged edge (easier to read).
- **Arabic:** Render at ~1.2× English font size for equivalent readability.
- Ensure mixed text handling is correct (dir attributes, lang attributes).

**Iconography & Imagery:**
- Use simple line-based icons (Lucide or Phosphor Icons, regular weight, open-source).
- Icons alongside text for enhancement. Never icon-only as sole indicator without text.
- Icon sizes: 24px standalone, 20px inline with text.
- Stroke width: ~1.5px for optimal visibility.
- All icons get appropriate aria-hidden or accessible labels if interactive.
- **Illustrations:** Flat or subtly textured, nothing highly detailed. Follow color palette (greens, yellow). Simple geometric shapes or abstract plant motifs (convey growth, culturally neutral).
- No illustrations showing specific dress or faces; use silhouettes or minimal line drawings if including people.
- **Decorative images:** Subtle, not distracting from content.

**Logo Usage:**
- Place logo in header on Home and top navigation (desktop).
- Alt text: "Revert Guide logo" if used as &lt;img&gt;. If styled text, wrap in &lt;h1&gt; for Home (for SEO).
- Provide sufficient padding and contrast. White or light variant background.
- Don't stretch, recolor arbitrarily, or resize excessively.
- For PWA icon/favicon: use provided simplified icon or consistent symbol from logo.
- Logo sets friendly tone (if style is handwritten or geometric, echo in UI style).
- Appears on home page hero and nav bars; keep reasonably sized, not dominating screen.

**Layout & Spacing System:**
- **4px baseline grid** for spacing consistency.
- **Spacing Tokens (multipliers of 4px):**
  - space-1: 4px (tight spaces, icon-text gaps)
  - space-2: 8px
  - space-3: 12px (compact padding)
  - space-4: 16px (standard gap)
  - space-5: 20px (card padding)
  - space-6: 24px (section margin on mobile)
  - space-8: 32px (section padding desktop)
  - space-10: 40px
  - space-12: 48px (larger separations)
  - space-16: 64px (major page margins, hero breathing room)

**Consistent Margins:**
- All paragraphs: bottom margin space-4 (16px)
- Lists: space-3 between items
- Cards: space-5 (20px) padding inside, space-4 margin between
- Slightly airy layout (whitespace aids calm feel)

**Progressive Disclosure & Content Density:**
- Start with summary or collapsed view; let user expand for detail.
- Use accordions for obstacles, optional content. "Read more" toggles for long sections.
- Avoid information overload on initial load.
- On Roadmap hub: show stage titles + one-liner initially. Click to expand.
- On Step page: critical info visible by default. Lengthy explanations in collapsible panels.
- Each screen shows digestible amount with clear CTA to see more or proceed.
- No infinite scroll; everything broken into logical pages.

**Comfortable Density:**
- Not too sparse (not a children's book). Not crowded (not a dense spreadsheet).
- Prefer slightly larger touch targets and breathing room for calmness.
- Lists/checklists have sufficient line height and space.

**Component Styles:**

**Cards/Panels:**
- White or Surface background, subtle border (1px solid #C5D4C1), border-radius 12px.
- Padding: space-5 (20px) inside.
- Soft shadow: 0 1px 3px rgba(0,0,0,0.08) - very light, barely noticeable.

**Buttons:**
- Primary: #4A7C59 bg, white text, 8px radius.
- Padding: space-3 vertical (12px), space-4 horizontal (16px).
- Tappable area is nice and large.
- Hover: bg darkens to #3D6649.
- Focus: 2px outline in accent or primary.

**Secondary Buttons:** Outline style in Primary color or filled with Accent olive (#6B7A3D).

**Text Buttons:** Links with underline on focus.

**Links:**
- Color: Primary green (#4A7C59), underlined.
- Hover: darken slightly (maybe remove underline on hover if clearly clickable).
- Ensure contrast (4.6:1 vs white background).

**Inputs (Search, Forms):**
- Border: 1px solid #C5D4C1, 8px radius, padding ~8px.
- Focus: 2px outline in Border Strong (#8FA889) or Primary.
- Maybe slight elevation on focus.
- Search icon inside in gray or Primary.

**Accordions/Disclosure:**
- Collapsible sections (obstacles, "don't worry" lists).
- Header has chevron icon rotating when expanded.
- Header background: light tint (Surface color).
- Hit area: full width of container.
- Expand with gentle 200ms ease-in-out animation.
- Reveals text with padding on expand.

**Badges/Tags:**
- Pill-shaped labels for "Completed", "New", categories.
- White text on Accent olive background (#6B7A3D), 8px radius pill.

**Feedback Messages:**
- Success: very light green background (#D8EAD2) with green left border/icon.
- Error: very light red-pink bg with red text/icon.
- Keep subtle but noticeable.

**Imagery:**
- Slightly rounded corners (8px) matching design language.
- Subtle border if on white background to distinguish edges.

**Layout Patterns:**

**Mobile-First Responsive:**
- Single-column on small screens, stacked sections.
- Larger screens: introduce columns/sidebars where appropriate.
- Padding at edges on mobile (~16px from screen edge).

**Navigation Placement:**
- Mobile: fixed bottom bar with icons + short labels. Always available, doesn't scroll away.
- Desktop: top nav bar. Content has top margin so not overlapped.

**Hierarchical Nav (Breadcrumbs):**
- On content pages: "Roadmap > Week 1 > Step 3" near top.
- Unobtrusive, small text (14px), Secondary color.
- Use chevron separators.
- User sees context and can click to navigate up.

**Sectioning:**
- Content naturally sectioned by headings.
- Consistent heading styling (H3 style for sub-sections).
- Possibly horizontal rules or extra spacing between big sections.

**Progressive Reveal of Journey:**
- Subtle visual progression element (e.g., small icons or simple timeline line).
- Low-key, doesn't clutter or intimidate.

**Accessibility Defaults in Design:**
- **Color:** Chosen for contrast. Test with color-blindness filters.
- **Touch Targets:** All clickable elements ~44px minimum dimension.
- **Fonts:** High-readability fonts. Avoid stylized cursive except decorative.
- **Motion:** Very limited animations. Short transitions. Respect `prefers-reduced-motion`.
- **Icons & Text:** Icons accompanied by text labels unless universally known (even then, often labeled).
- **Error States:** Errors communicated with text + color (not color alone).
- **Focus:** Design doesn't hide outlines. Style focus outlines visibly, in brand colors.
- **Consistent UI:** Same-behaving elements look the same. User recognizes pattern.

**Print Style Guidance:**

Print Stylesheet Approach:
- **Single-column, text-focused layout.**
- **Hide navigation:** Top bar, bottom nav, menus hidden. Use `display: none` in `@media print`.
- **Expand content:** If content was behind accordion, print CSS **forces all accordions open** with `display: block !important`.
- **Show URLs:** Add CSS to **display URLs after link text**. E.g., "New Muslim Academy (https://newmuslimacademy.org)". Use `a[href]:after { content: " (" attr(href) ")"; }`.
- **Font size:** Body ~11pt for readability on paper.
- **Colors:** Override colored text to black. Ensure max contrast (black on white).
- **Page breaks:** Add `page-break-inside: avoid` for important containers (don't cut step card mid-text).
- **Headers/Footers:** Optional—could add via `@page` if desired (e.g., page title at top, page number bottom).
- **Margins:** ~0.75in all sides (standard).
- **Test:** Print on Chrome, Safari. Verify readability, no awkward splits.

In sum, the brand's design system creates a **calm, clear, confidence-inspiring interface**. Visuals are understated, typography easy on the eyes, every element chosen to make the user feel _guided, not judged_. This coherent style meets accessibility and usability standards while emotionally supporting the user's spiritual journey.

---
