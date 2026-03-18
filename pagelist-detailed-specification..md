# Revert Guide – Complete Page Specification

## Home (/)

**Purpose:** Welcomes new users and offers clear starting points based on their situation as a new Muslim. Orients "reverts" and directs them to the roadmap or other relevant sections of the guide.

**Primary Actions:** 
- A prominent primary CTA button (e.g., "Begin Journey") that links to the roadmap
- Quick-link buttons/cards that cater to specific user needs (e.g., "Just took Shahada" → Day 0–1 stage, "Been Muslim weeks" → later stage, "Looking for topics" → Topics Hub)

**UI Sections (in order):**

1. **Hero**: A warm welcome heading with a brief tagline and the primary CTA front and center. Sets a positive, celebratory tone.

2. **Entry Path Cards**: A set of three feature cards providing tailored entry points:
   - "Just Took Shahada?" (links to Day 0–1 stage)
   - "Been Muslim a Few Weeks?" (links to Week 1 or Weeks 2–4)
   - "Looking for Specific Topics?" (links to Topics or Glossary)
   - Each card has a brief description and action link

3. **Brief Introduction**: 1–2 sentence blurb explaining what Revert Guide offers and how it supports the user. Encouraging and succinct, avoiding overwhelming tone.

4. **Trust Signal Note**: A reassurance about the site's ethos. For example: "No ads, no tracking – just support for your journey." Emphasizes that the focus is purely on support (no commercial intent).

5. **Quick Links**: Shortcut cards/links to high-interest pages:
   - Link to Ramadan Guide
   - Link to Mental Health Tips
   - Link to Find a Masjid
   - These are presented as prominent cards or buttons for quick access

**UI Components:** 
- Hero section with large text
- PrimaryButton for main CTA
- Card components for entry paths (clickable links)
- Text blocks for intro and trust note (possibly with icon)
- Quick-link cards or button list
- Global Header/Nav and Footer

**Loading/Empty/Error States:**
- Instant load (static content)
- Loading spinner/skeleton only if needed: "Loading welcome..."
- No empty state (content always present)
- Error state: Friendly error message if assets fail to load offline (e.g., "Cannot load welcome content. Check your connection.")

**Accessibility:**
- Main welcome content in `<main>` landmark with H1 as title
- Skip-to-content link at top to bypass navigation
- All interactive elements (CTA, cards) keyboard-focusable with visible focus indicators
- Entry path cards have descriptive labels (e.g., "Begin Day 0–1 Stage" not just "Go")
- Images/icons have alt text; decorative imagery marked with empty alt
- Trust message in plain text (easy reading)
- Headings: H1 for title, H2/H3 for subsections as needed
- WCAG AA color contrast on hero background
- Logical heading hierarchy

**Offline Availability:** Yes, fully cached by PWA service worker. All welcome text and navigation links work offline. External links (Ramadan, Masjid Finder) only require connectivity if those pages weren't cached or include dynamic content.

---

## Roadmap Hub (/roadmap)

**Purpose:** Provides an overview of the entire conversion journey broken into stages. Shows users the big picture and allows them to choose a stage to explore or start from the beginning.

**Primary Actions:** 
- Select a stage to dive into its details
- Browse and get motivated by seeing the entire path
- Optionally choose a "Start at Day 0–1" button for absolute newcomers

**UI Sections:**

1. **Page Title**: "Your Roadmap" displayed prominently at the content area (H1). Makes it clear the user is viewing the structured journey.

2. **Intro Text**: Brief explanation of how the roadmap works (e.g., "This is a timeline-based curriculum from day one as a Muslim, spanning your first six months and beyond.") Orients the user on what they're looking at.

3. **Stage Cards Grid**: Six cards in chronological order, arranged in responsive grid (2–3 columns on desktop, 1 on mobile):
   - Day 0–1: Embrace Faith & Fresh Start
   - Week 1: Building Foundations
   - Weeks 2–4: Strengthening Practice
   - Months 2–3: Broadening Practice
   - Months 4–6: Deepening Faith
   - Beyond 6 Months: Lifelong Growth
   
   Each StageCard shows:
   - Stage name and timeframe (e.g., "Day 0–1")
   - Short description of that stage's focus
   - Number of steps in the stage
   - Small representative icon or color identity for quick visual recognition
   - Entire card is clickable to navigate to detailed stage page

4. **Encouragement Note**: A gentle note below the grid, e.g., "There's no wrong place to begin – start where you are and progress at your own pace." Alleviates pressure and encourages exploration.

**UI Components:** 
- StageCard components (visually consistent, responsive grid layout)
- Navbar (top navigation)
- Breadcrumb (Home > Roadmap) or just Home link
- Footer

**Loading/Empty/Error States:**
- Static, pre-built page loads instantly
- No loading state needed (or brief "Loading stages..." if dynamic)
- Empty state not applicable (six stages always defined)
- Error state: "Unable to load roadmap. Please check your connection." with retry option (unlikely if cached)

**Accessibility:**
- Stage cards arranged in logical order (top to bottom matches timeline)
- Each StageCard title marked as H2 or H3 for quick heading navigation
- Cards implemented as accessible links with descriptive stage names
- Entire card is focusable, or clear "View Stage" link inside
- Sufficient color contrast on text and stage indicators
- Color not the only way to convey stage (text labels stage clearly)
- Encouragement note in plain text, placed after stage list in DOM
- Keyboard users can tab through stage links easily with visible focus
- Global skip-link and navigation landmarks present
- Page title H1, stage names H2/H3

**Offline Availability:** Fully functional offline after caching. All stage information is static. User can open roadmap and decide which stage to read. Clicking a stage loads that Stage page from cache.

---

## Stage Pages Pattern (/roadmap/[stage-slug])

**Applies to all 6 stages:**
- Day 0–1: Embrace Faith & Fresh Start
- Week 1: Building Foundations
- Weeks 2–4: Strengthening Practice
- Months 2–3: Broadening Practice
- Months 4–6: Deepening Faith
- Beyond 6 Months: Lifelong Growth

**Purpose:** Introduces each stage, explains its goals and context, and lists the steps within it. Provides motivation and sets expectations for the stage.

**Primary Actions:** 
- Begin the first step of the stage (via "Start Step 1" button)
- Select any step card to view that step's details
- Navigate back to Roadmap Hub or to adjacent stages

**UI Sections:**

1. **Breadcrumb**: "Roadmap > [Stage Name]" (e.g., "Roadmap > Day 0–1"). Allows easy navigation back; structured as nav with aria-label="Breadcrumb".

2. **Stage Header**: 
   - Stage title (H1 or H2 depending on context) e.g., "Day 0–1: Embrace Faith & Fresh Start"
   - Subtitle or short tagline reinforcing the theme (e.g., "Your first day as a Muslim")
   - Timeline marker (badge/icon/colored line indicating this is the first/second/etc. stage)
   - Optional visual element (icon or color band)

3. **Overview**: 1–3 short paragraphs describing:
   - What this stage is about
   - Main goal for this timeframe
   - Affirming tone and context (e.g., Day 0–1 overview might say "This stage celebrates your decision to embrace Islam and guides you through the very first steps")

4. **Steps List**: A list of steps in this stage, each represented as a card or structured list item:
   - Step number (e.g., "Step 1", "Step 2")
   - Step title (e.g., "Embrace the Shahada")
   - Time estimate badge if available (e.g., "~10 min")
   - One-line description of the step
   - Card or list item is clickable to navigate to Step page
   - Steps are numbered/ordered to show sequence

5. **"Don't Worry Yet" Collapsible**: 
   - Initially collapsed section labeled "What you don't need to worry about yet"
   - When expanded, shows bulleted list of topics/tasks intentionally deferred
   - Example for Day 0–1: "Don't worry about memorizing long prayers now" or "Don't worry about changing your name"
   - Helps manage expectations and reduces overwhelm

6. **"What's Next" Teaser**: 
   - Brief teaser for the next stage
   - Short encouraging sentence (e.g., "Next: Week 1 – Building Foundations")
   - Clickable link to next stage page
   - For final stage (Beyond 6 Months), replaces with conclusion and suggestions for continuing growth (e.g., "From here, keep practicing and explore the Topics section for deeper learning")

**UI Components:**
- Breadcrumbs (nav with list semantics)
- StageHeader with title and badge
- StepCard or list item components (showing step info)
- Accordion/Disclosure for "Don't Worry Yet" (uses aria-expanded, keyboard accessible)
- Callout or card-style for "What's Next" teaser
- Nav/Footer

**Loading/Empty/Error States:**
- Static content loads instantly
- Empty state not applicable (steps always present)
- Error state: "Stage not found" or 404 if URL invalid

**Accessibility:**
- Breadcrumb marked as nav with aria-label and list semantics
- Stage title H1, step titles H2/H3 for logical hierarchy
- Steps list as `<ol>` or `<ul>` for semantic order
- Collapsible "Don't Worry Yet" uses accessible accordion pattern:
  - Trigger is keyboard-focusable (Enter/Space to expand)
  - aria-expanded toggles and announces state
  - aria-controls points to collapsible content
  - Inside content is a list of deferred items
- "What's Next" link has descriptive text (e.g., "Next Stage: Week 1 – Building Foundations")
- Color not only convey info (text labels stages)
- Focus order: Breadcrumb → Stage header → Overview → Step list → "Don't Worry" toggle → Next stage link
- Sufficient contrast, semantic HTML

**Offline Availability:** Yes, fully cached. User can navigate to stage page offline if previously opened or pre-cached. All text content displays. Step pages work offline if cached.

---

## Step Pages Pattern (/roadmap/[stage-slug]/[step-slug])

**Applies to all 10 steps across stages:**

Day 0–1: Shahada, Ghusl
Week 1: Prayer, Community
Weeks 2–4: Quran
Months 2–3: Halal & Haram, Fasting
Months 4–6: Character, Knowledge
Beyond 6 Months: Zakat & Hajj

**Purpose:** Delivers complete step-by-step guidance for a specific learning objective. Provides the user with all they need to understand and complete that step.

**Primary Actions:**
- Read through step content and complete the step (action in real life, not UI form)
- Optionally mark as done if tracking feature exists (V1 is read-only)
- Navigate to next step or previous step
- Access recommended resources

**UI Sections (consistent template):**

1. **Breadcrumb**: "Roadmap > [Stage] > [Step Name]" (e.g., "Roadmap > Day 0–1 > Shahada"). Provides navigation context.

2. **Stage Indicator**: Small badge/label showing stage context (e.g., "Day 0–1"). Reminds user which stage they're in while reading this step.

3. **Step Header**:
   - Step title as prominent heading (H1 or H2) e.g., "Embrace the Shahada and Your New Identity"
   - Step number within stage (e.g., "Step 1 of 2")
   - Time estimate badge (e.g., "~5 minutes", "~30 minutes", or "Varies")
   - Possibly an icon related to the step

4. **Why This Step Matters**: 
   - Section (bolded or H3) explaining significance and motivation
   - 1–2 paragraph motivational introduction
   - Example: For Shahada – "Taking the Shahada is your formal entry into Islam. It wipes away past sins and marks a spiritual fresh start."
   - Expanded by default (crucial content)

5. **Exact Actions**: 
   - Numbered list of step-by-step instructions (user must follow sequentially)
   - For Shahada: 1) Understand meaning, 2) Say in Arabic with transliteration provided, 3) Reflect on meaning
   - For Ghusl: Steps including intention, washing hands, performing wudu, pouring water over body
   - Sub-bullets for clarification if needed
   - Expanded by default
   - May include transliterations or special formatting for Arabic phrases

6. **Common Obstacles**: 
   - Collapsible section (accordion) initially collapsed, labeled "Common Obstacles" or "What if...?"
   - Contains FAQ-style pairs: obstacle/concern + solution
   - Examples:
     - "I'm nervous about pronunciation" → "Pronunciation doesn't have to be perfect; God knows your intention"
     - "What if I can't do this right now?" → "Any step is progress; you can retry later"
   - User expands if they need help
   - Keeps main content from getting cluttered

7. **Tiny Version Tip**: 
   - Highlighted callout box offering minimal action if overwhelmed
   - Example: "If overwhelmed with all the steps, simply say the Shahada in your own words now – you can learn the formal declaration in Arabic later"
   - Styled distinctly (shaded background, possibly light bulb icon)
   - Visible by default (short and important for those struggling)
   - Ensures user does *something* rather than freezing up

8. **What Unlocks Next**: 
   - Short paragraph (1–2 sentences) explaining what completing this step enables
   - Example: "By declaring your faith, you're ready to learn the purification bath, which is Step 2, and begin your new life as a Muslim"
   - Connects step to next step and broader journey
   - Often italicized or prefaced with an icon

9. **Recommended Resources**: 
   - List of 2–5 curated external resources relevant to step
   - Each resource card shows:
     - Title
     - Type (Video, Article, App, etc.)
     - Brief 1-line description
     - External link icon
   - Examples for Shahada: video of someone taking Shahada, article on spiritual meaning, du'a to say after
   - Allow users to deepen learning or feel connected

10. **Step Navigation**: 
    - Previous/Next buttons or links at bottom
    - Format: "← Previous: [Step Name]" and "Next: [Step Name] →"
    - First step has only Next button
    - Last step of stage may link to next stage's first step
    - Buttons clearly labeled with step names for context

11. **Related Topics** (optional): 
    - Sidebar or footer section listing related Topic pages
    - Example: Prayer step might link to Prayer topic for deeper dive
    - Helps cross-reference between step-by-step and topic-based content

**UI Components:**
- Breadcrumbs
- Badge for time estimate
- Custom MDX components for structured content:
  - `<Why>` for "Why This Matters"
  - `<Actions>` for numbered actions
  - `<Obstacles>` for FAQ accordion
  - `<TinyTip>` or `<Callout>` for minimum version
  - `<ResourceCard>` for each resource
  - `<StepNav>` for prev/next buttons
- `<ArabicText>` component for Arabic phrases (with proper font/display)
- `<GlossaryTooltip>` for inline term definitions
- Layout: typically single scrollable column, possibly sticky sidebar on wide screens

**Loading/Empty/Error States:**
- Static text loads immediately
- Brief loading state possible: "Preparing your next step..." (appears for ~1-2 seconds)
- No empty state (content always present)
- Error if step slug is invalid → 404 page
- Error if content file missing (unlikely): "Content unavailable. Please try again later."

**Accessibility:**
- Logical heading hierarchy: Step title H1/H2, subsections (Why, Actions, etc.) H2/H3, no skipped levels
- Numbered actions list uses `<ol>` for semantic order
- Screen readers announce step count and position
- Arabic text has `lang="ar"` attribute with transliteration immediately after
- English meaning in parentheses if needed
- Obstacles accordion:
  - Toggle is keyboard accessible (Space/Enter to expand)
  - aria-expanded toggles (true/false)
  - Content immediately readable when expanded
- Tiny version callout:
  - Styled distinct region (possibly `<aside>` with role="note")
  - Text is self-contained
- Resource links have descriptive text (not "Click here")
- External link icon aria-hidden or with "(external link)" text
- Previous/Next buttons have clear labels including step names
- "Next: Ghusl (Step 2)" not just "Next"
- Focus management: when navigating to new step, focus moves to step title or top of page
- All landmarks, headings, and focus order follow consistent pattern across steps

**Offline Availability:** Yes, fully cached after first visit. All textual guidance, instructions, and resource list available offline. External resources (videos, articles, apps) require internet to open. User can complete step offline by reading instructions on their device.

---

## Topics Hub (/topics)

**Purpose:** Allows users to browse content by subject rather than by timeline. Serves as an index of thematic guides so a user with a specific question can find that subject directly. Complements the roadmap by organizing knowledge areas.

**Primary Actions:** 
- Select a topic card to read its detailed guide
- Browse available topics to see what subjects are covered
- Optionally jump to Glossary if topic not found

**UI Sections:**

1. **Page Title**: "Topics" (H1). Immediately tells users this is a library of topic-based guides.

2. **Intro Text**: Brief instruction, e.g., "Explore subjects in depth, or find answers on specific aspects of your journey." Clarifies the purpose. May include note: "If you prefer a step-by-step journey, see the Roadmap."

3. **Topic Cards Grid**: Responsive grid (2–3 columns on desktop, 1 on mobile) with 7 topic cards:
   - Prayer (Salah)
   - Purification (Taharah)
   - Qur'an
   - Beliefs (Aqidah)
   - Fasting (Sawm)
   - Character (Akhlaq)
   - Community
   
   Each TopicCard includes:
   - Topic name
   - Illustrative icon (e.g., prayer hands for Prayer, Qur'an icon for Qur'an)
   - One-line description (e.g., "Learn how to perform the five daily prayers and build consistency")
   - Entire card is clickable link to topic page

4. **Secondary Note**: After grid, text note: "Looking for step-by-step guidance? Visit the Roadmap." with link to Roadmap Hub. Optionally: "Searching for a term? Try the Glossary."

**UI Components:**
- TopicCard components (uniform styling)
- Responsive grid layout
- Header/Nav and Footer

**Loading/Empty/Error States:**
- Instant load (static list, baked into app or short JSON)
- No empty state (topics always present)
- No loading spinner needed
- Error unlikely (static content)

**Accessibility:**
- H1 for title
- Topics list structured semantically (cards in list context or just grid of links)
- Each TopicCard title is H2 or H3, or at minimum an accessible link with descriptive text
- Card entire area clickable with visible focus outline
- Color not only way to distinguish topics (text labels them)
- Icons decorative (empty alt) since topic name provides info
- Keyboard navigation: tab through topic links
- Focus order logical
- Sufficient contrast

**Offline Availability:** Yes, fully cached. User can open Topics without internet and see all topics listed. Clicking a topic loads that topic page from cache (if cached).

---

## Topic Pages Pattern (/topics/[topic-slug])

**Applies to all 7 topics:**
- Prayer (Salah)
- Purification (Taharah)
- Qur'an
- Beliefs (Aqidah)
- Fasting (Sawm)
- Character (Akhlaq)
- Community

**Purpose:** In-depth guide on a single topic, standalone from the roadmap. Serves as comprehensive reference for those with specific questions or who want all info on a subject in one place.

**Primary Actions:**
- Read and learn from the topic guide
- Follow links to related steps or resources
- Use as reference material anytime

**UI Sections:**

1. **Breadcrumb**: "Topics > [Topic Name]" (e.g., "Topics > Prayer"). Provides navigation context.

2. **Topic Header**:
   - Topic title (H1 or H2) e.g., "Prayer (Ṣalāh)"
   - Optional subtitle/tagline (e.g., "Your daily connection with Allah through the five prayers")
   - Possibly an icon related to topic
   - Brief note on what's covered in this topic

3. **Intro**: Short introduction explaining topic's importance and relevance to new Muslims. Encourages learning at their own pace.

4. **Main Content**: Bulk of the page, divided into logical subsections with H2/H3 headings. Content varies by topic but typically includes:
   
   **For Prayer topic:**
   - Why Prayer is Important
   - The Five Daily Prayers (names, times)
   - Prerequisites (Wudu, cleanliness, clothing)
   - How to Perform Prayer (movements, words, transliteration)
   - Learning the Essential Words (Al-Fatiha, etc.)
   - Tips for Building Consistency
   - Common Questions/Challenges (FAQ or Q&A style)
   - Women-Specific Considerations (if applicable)
   
   **For Purification topic:**
   - Why Purification Matters
   - How to Perform Wudu (step-by-step)
   - How to Perform Ghusl (full bath)
   - Tayammum (dry ablution, if no water)
   - What Breaks Wudu
   - Women-Specific Guidance (menstruation, etc.)
   
   **For Qur'an topic:**
   - What is the Qur'an
   - How to Approach Reading It
   - Etiquettes of Handling the Qur'an
   - Basic Structure (chapters, verses, etc.)
   - Memorization Tips
   - Tajweed and Recitation Guidance
   - Famous Passages for Beginners
   
   **For Beliefs topic:**
   - Six Articles of Faith (belief in Allah, angels, books, prophets, Day of Judgment, divine decree)
   - Concept of Tawhid (oneness of God)
   - Understanding Faith and Actions
   - Addressing Common Questions (Trinity vs Tawhid, etc.)
   
   **For Fasting topic:**
   - Why Muslims Fast
   - Rules of Fasting (obligatory, exempt, what breaks fast)
   - Suhoor and Iftar (pre-dawn meal, breaking fast)
   - Tips for First-Time Fasters
   - Spiritual Aspect
   - Voluntary Fasts Outside Ramadan (optional, may be advanced)
   
   **For Character topic:**
   - Key Virtues (truthfulness, patience, humility, forgiveness, kindness, generosity)
   - Islamic Etiquette (greetings, eating, manners)
   - Avoiding Vices (gossip, lying, showing off)
   - Prophet as Model of Character
   - Practical Strategies for Improvement (journaling, dua, etc.)
   
   **For Community topic:**
   - Importance of Community in Islam
   - Getting Involved with Local Mosque
   - Finding a Mentor
   - Making Muslim Friends
   - Dealing with Non-Muslim Family/Friends
   - Online Communities
   - Seeking Help (if struggling)

   Content is written in plain language, beginner-friendly. May include:
   - Numbered or bulleted lists for clarity
   - Callout boxes with important tips
   - Quotes or hadith with citations
   - Tables (e.g., for Fasting: what breaks fast vs. doesn't)
   - Subsections clearly labeled for easy navigation

5. **Related Steps**: Section listing roadmap steps tied to this topic:
   - Example: Prayer topic links to "Week 1 – Step 3: Establish the 5 Daily Prayers"
   - Presented as small cards or styled links
   - Allows user to see step-by-step version if they want structured learning

6. **Glossary Terms**: List of key Islamic terms used on this page with definitions:
   - Either inline tooltips (GlossaryTooltip on first use)
   - Or a section at bottom: "Key Terms: Wudu – ritual ablation before prayer; Raka'ah – one unit of prayer"
   - Helps reinforce vocabulary

7. **Resources**: 3–5 curated external resources specific to this topic:
   - Example for Prayer: video tutorial, PDF transliterations, prayer app recommendation, article on focus in prayer
   - Presented as ResourceCard list with external links
   - Allows user to deepen learning beyond guide

**UI Components:**
- Breadcrumbs
- Topic header with title and icon
- Content sections with H2 headings for major areas, H3 for subsections
- Bullet/numbered lists for clarity
- Callout components for tips/insights
- Blockquotes for hadith/quotes with source citations
- Tables (if applicable, with proper headers and semantics)
- GlossaryTooltip components on terms
- StepLink cards for related steps
- ResourceCard list for external links
- Possibly images/diagrams (with alt text) though not explicitly required

**Loading/Empty/Error States:**
- Static, substantial content loads as one piece
- Possible brief loading spinner: "Loading topic..." if large
- No empty state (content predefined)
- No loading needed for external resources (just links)

**Accessibility:**
- Clear heading structure: H1 for topic title, H2 for major sections (e.g., "How to Perform Prayer"), H3 for subsections
- Screen reader users can jump to sections by heading
- Lists (steps, tips) use `<ol>` or `<ul>` for semantic structure
- Arabic terms/transliterations marked with lang="ar" or parenthetical translations
- Example: "Ṣalāh (formal prayer)" or "Wudu (woo-doo)" for pronunciation
- Images have descriptive alt text (e.g., "Diagram of a person in prostration (sujood)")
- Tables have header cells and proper labeling
- Quotes/hadith styled clearly (blockquote) with attribution/source
- All links (to steps, external resources) have descriptive text
- GlossaryTooltip accessible via hover/focus showing definition
- Sufficient color contrast throughout
- Logical reading order matches visual order

**Offline Availability:** Yes, fully cached. All text and images stored locally. Topic pages fully accessible offline. External resource links require internet to open, but page content stands alone well. User can reference topic content anytime without connectivity.

---

## Glossary (/glossary)

**Purpose:** Provides A–Z reference of Islamic terms and their definitions. Acts as a quick-lookup dictionary for new Muslims to clarify unfamiliar Arabic or Islamic jargon encountered in the guide or elsewhere.

**Primary Actions:**
- Search for term using filter bar
- Browse alphabetically scrolling through terms
- Read definition and explore related terms
- Click "see also" links to explore related terms

**UI Sections:**

1. **Page Title**: "Glossary" (H1). Possibly with subtitle "Common Islamic Terms Defined".

2. **Search/Filter Bar**: 
   - Text input with placeholder "Search terms..."
   - Icon (magnifying glass) for clarity
   - Clear button (✕) to reset filter
   - Filters list in real-time as user types (client-side, instant)
   - Accessible with proper label (visible or aria-label="Filter terms")

3. **Alphabetical Index** (optional): 
   - Horizontal list of letter links (A, B, C, etc.)
   - Allows quick jumping to letter sections
   - May be omitted in V1 for simplicity
   - If present, each letter is a clickable anchor

4. **Term List**: All terms sorted alphabetically, grouped by first letter:
   - Heading for each letter (H2): "A", "B", "C", etc.
   - Only letters with terms are shown
   - Each term entry includes:
     - **Term name** (in English or common transliteration) in bold
     - **Arabic script** next to it in parentheses if applicable (e.g., "(صلاة)" for Salah)
     - **Transliteration** if the term is primarily known in Arabic
     - **Definition**: 1–2 sentence concise explanation in plain language
     - **"See also" links**: Related terms (e.g., "Zakat – annual charity. See also: Sadaqah (voluntary charity)")
   
   Example entries:
   - "Wudu (وضوء) – A ritual ablation performed by washing certain parts of the body before prayer."
   - "Salah/Salat (صلاة) – The five daily ritual prayers performed at specific times. See also: Wudu, Adhan."
   - "Quran (القرآن) – The holy book of Islam, believed to be God's word revealed to Prophet Muhammad."
   
   - Terms are separated visually (line break, distinct background, or spacing)
   - Structured as definition list (<dl>) with <dt> for term and <dd> for definition, or styled list with term bolded

5. **No Terms Found** (Filter state): 
   - If user searches and no results: "No terms found. Try a different spelling."
   - Only shown when filter is active and yields nothing

**UI Components:**
- SearchInput with label and clear button
- Alphabetical grouping (H2 headings for each letter, or optional letter index)
- Definition list structure (<dl>, <dt>, <dd>)
- "See also" links (possibly internal anchors to jump to related term)
- No pagination needed (30+ terms manageable in one list)

**Loading/Empty/Error States:**
- Terms preloaded (static or fetched as part of build)
- No loading spinner needed
- Empty state for search (as described above)
- No error state expected (all data present)

**Accessibility:**
- SearchInput has accessible label (visible or aria-label)
- Aria-live region (optional): announces "X results found" or "No terms found" to screen readers as filter updates
- Definition list semantic structure: screen readers announce term-definition pairs
- Letter groupings (H2) allow quick navigation by heading
- "See also" links are actual anchors or links with descriptive text
- If anchors used (e.g., #sadaqah), they allow jumping to related term
- Term not individually focusable (except links within definitions)
- Tabbing from search box jumps to any links in definitions (see also links)
- Keyboard users can scroll list normally or use search to narrow down
- High contrast for text on background
- Short, clear definitions avoid jargon
- Terms and definitions are text, no images requiring alt text

**Offline Availability:** Yes, fully cached. Glossary is essential offline resource. All 30+ terms and definitions available without internet. Search/filter works entirely client-side offline. User can look up terms anytime.

---

## Resources Hub (/resources)

**Purpose:** Curated collection of external resources (articles, videos, apps, books, community links) to supplement the guide. Acts as a library or toolbox of recommended materials beyond the guide's own content, organized by category.

**Primary Actions:**
- Browse resources by category or type filter
- Click on "Find a Masjid" featured resource to locate a mosque
- Filter resources to focus on specific type
- Click resource links to open external content in new tab

**UI Sections:**

1. **Page Title**: "Resources" (H1). Optional short description: "Hand-picked articles, apps, and more to help you on your journey."

2. **Featured Resource**: 
   - Prominent card or banner at top for "Find a Masjid"
   - Content: "Find a Masjid Near You – Locate your nearest mosque for community and prayer"
   - Large button: "Find a Masjid" linking to /resources/find-masjid
   - Visually stands out (maybe with mosque icon or distinct background)
   - High visibility because finding local community is critical

3. **Category Filter**: 
   - Interactive filter (tabs, pills, or buttons) to show/hide resources by type
   - Categories: "All | Articles | Videos | Apps | Books | Community"
   - One category selected at a time (radio-button style behavior)
   - Clicking a category instantly filters list (no page reload)
   - On mobile, possibly a dropdown select instead of horizontal tabs
   - Default view: "All" resources shown

4. **Resource List**: 
   - Grid or vertical list of resource cards/items
   - When "All" selected, may show category headings (e.g., "Articles", "Videos") or just mixed cards
   - When specific category selected, shows only that type
   - Each ResourceCard includes:
     - **Title** of resource (e.g., "Beginner's Guide to Prayer")
     - **Type badge** (colored label: "Article", "Video", "App", "Book", "Community")
     - **Short description** (1–2 lines explaining what it is or why recommended)
     - **External link icon** (indicating opens in new tab/external site)
     - **Whole card or title is clickable** to open resource (target="_blank", rel="noopener")
   
   Examples:
   - "How to Pray – Video Series (YouTube)" – "A beginner-friendly YouTube series covering prayer movements step-by-step"
   - "Muslim Pro App – Prayer Times & Quran" – "Popular app with prayer reminders, Quran, Qibla direction, and community features"
   - "WhyIslam – Live Chat Support" – "Ask questions about Islam via chat with informed guides"
   - "New Muslims Online – Support Forum" – "Connect with other reverts to share experiences and advice"
   
   - Estimated 20+ resources spread across categories
   - If some categories have none (unlikely given spec mentions 20+), they might only show populated categories

**UI Components:**
- Category filter: Tabs/toggle buttons (radio-button group semantics), or segmented control
- ResourceCard components with consistent layout
- Each card has type badge, title, description, link
- Header/Nav and Footer

**Loading/Empty/Error States:**
- All data pre-baked (static list)
- Instant load, no spinner needed
- Filter switching is instant (no loading between filters)
- Empty state if category has zero items: "No resources in this category yet"
- No error state expected

**Accessibility:**
- Category filter accessible:
  - If tabs: role="tablist" on container, role="tab" on each tab, aria-selected on active tab
  - If buttons: aria-pressed state, properly grouped with aria-label
  - Keyboard navigation: arrow keys to move between tabs/buttons, Space/Enter to activate
  - Active category visually distinct
- ResourceCard:
  - Entire card or at least title is a clickable link
  - Link text is descriptive (e.g., "How to Pray – Video Series")
  - External link icon aria-hidden (or has invisible text "(external link)" appended to link)
  - If whole card is a link (via JavaScript), ensure it's focusable and has role="link", or better: just make title/a link
- Focus order: Filter area first, then resource list
- If filtering hides/shows items dynamically, that's fine (items added to/removed from DOM)
- Resource list might be large (20+ items); no pagination needed but users can filter to reduce
- All links have descriptive text (not "Click here")
- Sufficient contrast on cards and text
- Clean, readable layout

**Offline Availability:** Partial. 
- Resources list is cached and available offline (static list of titles/descriptions)
- User can browse recommendations without internet
- Clicking resource links offline: external sites won't load (requires internet)
- Page itself is offline-readable as reference catalog
- So user can plan what to look at and remember names/descriptions, but must go online to actually access external resources

---

## Find a Masjid (/resources/find-masjid)

**Purpose:** Interactive tool to help new Muslims locate nearby mosques (masjids). Enables search by location/name and displays list of masjids with contact info. Also shows map visualization (when online). Answers "How can I find a mosque near me?"

**Primary Actions:**
- Search for masjid by city, postal code, or mosque name
- View list of matching masjids with details
- Click address or "Directions" to open Google Maps for navigation
- (Optional) View masjid locations on embedded map
- Click phone number to call (tel: link)
- Click website to visit masjid's site

**UI Sections:**

1. **Page Title**: "Find a Masjid" (H1). Optional subtitle: "Enter your city or postal code to find nearby mosques."

2. **Search Bar**:
   - Text input with placeholder: "Search by city, postal code, or name"
   - Search icon (🔍)
   - Filters list in real-time as user types (client-side filtering)
   - Matching is likely: partial match on city name, mosque name, postal code
   - All text-based, no geolocation needed (though could have optional "Use my location" button if implemented)

3. **Map Area** (online only):
   - Embedded Google Maps iframe (lazy-loaded, only loads when needed or on demand)
   - Shows masjid locations as markers (if using Google Maps JS API with data)
   - Or shows generic map area with simple embed (static or interactive)
   - Initial view: centered on a default region or user's area
   - When user searches, map could center on search results (if fully integrated)
   - **Offline**: Map remains blank or shows static placeholder image
   - Height is fixed (e.g., 400px), responsive on mobile
   - May be on right side (desktop) or above/below list (mobile)

4. **List Area** (works offline):
   - Scrollable list of masjid entries (virtualized for performance with potentially 500+ entries)
   - Each entry contains:
     - **Mosque Name** (bold, larger text)
     - **Address** (street address)
     - **City, Province** (e.g., "Toronto, ON")
     - **Phone number** (if available, as clickable tel: link)
     - **Website** (if available, as clickable external link)
     - Optional icon for phone/website for visual clarity
   
   Layout: likely card-style or simple list items with divider lines between entries
   
   Interaction:
   - User searches (e.g., types "Toronto"), list filters to matching entries in real-time
   - "No results found for '[search term]'" message if no matches
   - If user clicks name or address, possibly opens Google Maps in new tab for directions
   - (Optional) Clicking entry might highlight on map if map is integrated

5. **Offline Notice** (conditional):
   - Visible only when user is offline (navigator.onLine === false)
   - Banner or overlay on map area: "Map requires internet. List available offline."
   - Icon (Wi-Fi off symbol) + text
   - List remains fully functional; only map unavailable

6. **"What to Expect" Link** (optional):
   - Small tip link: "First time visiting a mosque? Here's what to expect"
   - Links to Community topic page or relevant step (Step 5: Community)
   - Positioned near search or below list
   - Styled as aside with info icon
   - Encourages user to read tips before visiting

**UI Components:**
- SearchInput (with clear button)
- MapEmbed (`<iframe>` for Google Maps or map container if using JS API)
- MasjidList (virtualized scrollable list):
  - Uses virtualization library if 500+ entries to handle performance
  - Only items in viewport rendered in DOM
  - Each item: name, address, city, phone (tel: link), website (external link)
- Alert banner for offline notice (conditionally visible)
- "What to expect" link or small info card

**Loading/Empty/Error States:**
- Initial load: may show "Loading masjid database..." spinner if data is fetched (though likely pre-cached)
- If search yields no results: "No masjids found. Try a different city or spelling."
- Error state: "Unable to load masjid list. Check connection and try again." (if data failed to load)
- Map loading: may show "Loading map..." or blank area if iframe is slow

**Accessibility:**
- SearchInput has accessible label: "Search for city or mosque name" (visible or aria-label)
- As user types, filter updates; ideally aria-live="polite" announces "X results found"
- Map is challenging for accessibility:
  - If iframe: Google Maps controls inside are somewhat accessible but not perfect
  - Can mark iframe with title="Map showing masjid locations" and possibly aria-hidden="true" since list provides text alternative
  - Consider tabindex="-1" on iframe to prevent keyboard-trapping in map controls (since list has all info anyway)
  - Screen reader users still have full list of text masjids available
- Masjid list in semantic list structure (ul or div with role="list"):
  - Each entry is list item (li or role="listitem")
  - If virtualized, list is still traversable via keyboard and SR (virtualization is transparent to users)
  - Each entry's info (address, phone, website) is textual and readable
- Phone links: `<a href="tel:+1-234-567-8900">📞 (234) 567-8900</a>` or text-only
  - Phone number visible as text so user can dial manually if needed
  - If icon used, include text "(Call)" or similar in link name
- Website links: descriptive text (e.g., "Website" or mosque name as link)
  - Not just icon; text clarifies what the link is
  - External link icon aria-hidden or with visible "(external link)" indicator
- Offline notice: visible text block (not just visual styling), appears when offline
- "What to expect" link is plain text link with descriptive text
- Keyboard navigation:
  - Tab to search field
  - Type to filter (no need to press Enter)
  - Tab from search to list area (if list is focusable)
  - Arrow keys to scroll list (if list container has tabindex="0" and keyboard handler)
  - Tab through any links in list items (phone, website)
  - Focus outline visible on all interactive elements
- High contrast for text

**Offline Availability:** Partial (list yes, map no).
- Masjid list data is cached (likely as JSON or bundled in app)
- User can search the offline list of masjids (name, address, phone, website)
- All filtering and search works offline (client-side, no server calls)
- Phone numbers and addresses available offline – user can write them down or call from their device
- Website links won't load offline; map won't display
- Map overlay shows "Map requires internet. List available offline."
- This is a very useful offline feature: user can find a mosque's phone number or address without internet, then call or visit once they have connectivity
- Phone links (tel:) work offline if user has cellular service (not data)

---

## Ramadan Guide (/ramadan)

**Purpose:** Dedicated guide for the month of Ramadan, tailored to new Muslims. Covers what Ramadan is, how to prepare before it starts, daily practices during fasting, and what to expect at Eid. Acknowledges that Ramadan can be challenging for converts and offers focused support.

**Primary Actions:**
- Read guidance and tips for preparation
- Follow practical advice during the month
- Find resources (timetables, recipes, du'as)
- Understand expectations for Eid

**UI Sections:**

1. **Page Title**: "Ramadan Guide" (H1). Possibly with crescent icon or Islamic motif. Brief tagline: "Your first Ramadan as a Muslim."

2. **Intro**: Short explanation of what Ramadan is:
   - "Ramadan is the holy month of fasting – a time of spiritual reflection, self-improvement, and community. Muslims fast from dawn to sunset each day of this month."
   - Emphasizes its importance and beneficial nature

3. **For New Muslims**: 
   - Directly addresses reader with reassurance
   - Example: "If this is your first Ramadan, don't worry – you're not alone. It's normal to feel anxious about fasting. Remember that any fasting you can do is valuable, and you can build gradually."
   - Advises not to be hard on oneself
   - Encourages seeking community support or mentor during month
   - Gentle, encouraging tone to reduce intimidation

4. **Fasting Basics**:
   - Essential rules and practices
   - Suhoor (pre-dawn meal): when and why important
   - Iftar (breaking fast): at sunset, typical foods (dates, water)
   - What's not allowed while fasting: no food, drink, intimate relations during daylight
   - Who is exempt: sick, traveling, women on certain days, elderly
   - Intention (niyyah): importance of making intention
   - Possibly: "If you break fast unintentionally or must stop fasting, you can make it up later"
   - High-level overview; may reference Step 8: Fasting for detailed rules

5. **Preparing for Ramadan** (Before it starts):
   - Gradually adjust sleep schedule (waking up for suhoor means early wake-up)
   - Reduce caffeine now to avoid withdrawal headaches during fasting
   - Plan simple suhoor and iftar meals (sustaining foods, easy recipes)
   - Notify employer/school if possible (request flexible hours or lighter workload)
   - Learn key du'as: intention, breaking-fast supplication
   - Set personal goals for the month (e.g., read Qur'an daily, give charity, be kind)
   - Possibly: "Make a personal plan or journal your goals for Ramadan"
   - Bulleted or paragraph format for clarity

6. **During Ramadan (Daily Life)**:
   - Spiritual practices:
     - Read Qur'an every day (Ramadan is the month of Qur'an)
     - Increase prayer, especially attend Tarawih (night prayers)
     - Make du'a frequently
     - Give charity if able (sadaqah)
   - Practical survival tips:
     - Stay hydrated during non-fasting hours (drink lots at suhoor and iftar)
     - Don't skip suhoor (helps sustain you through day)
     - Take a short nap if possible (nights may be shorter)
     - Expect energy dip; schedule heavy tasks in morning
     - Break fast with water and dates (quick energy boost and Sunnah)
   - Tarawih explanation:
     - Special longer evening congregational prayers in Ramadan
     - Occurs after Isha prayer, typically at mosque
     - Quite lengthy but you can pray as much as you can
     - Optional but highly encouraged for spiritual benefit and community experience
   - Possible subsections or clear bullet lists

7. **Tarawih and Community**:
   - Tarawih details (already mentioned but can expand):
     - When: after Isha (evening prayer), during Ramadan nights
     - Where: at mosque
     - Encouragement: attend at least once to experience community feel
     - "Don't worry if you can't pray the whole time – even partial participation is rewarding"
   - Iftar gatherings:
     - Encourage attending community iftars at mosques or Islamic centers
     - "Breaking fast in community is a beautiful experience and great way to meet people"
     - "Try breaking fast at the mosque – you'll find generous meals and new friends"
     - Brief etiquette: use greeting "Assalamu alaikum", be respectful
   - Community support:
     - Finding a fasting buddy or mentor for accountability
     - Sharing the experience with others eases the journey

8. **Laylat al-Qadr** (optional):
   - Mention "Night of Power" in last 10 nights of Ramadan
   - "One of them is Laylat al-Qadr (Night of Destiny), considered better than 1000 months"
   - Encouragement to increase worship during last 10 nights if able
   - Probably brief to not overwhelm; advanced concept

9. **Eid al-Fitr** (end of Ramadan):
   - Explanation of Eid:
     - "At the end of Ramadan, Muslims celebrate Eid al-Fitr, a joyful festival"
   - What to expect:
     - Eid prayer in early morning (usually in large gathering at mosque or prayer ground)
     - Celebratory atmosphere, festive clothing, greetings ("Eid Mubarak")
     - Family meals, possibly gifts or money for children
     - Cultural festivities may vary by region
   - Zakat al-Fitr (Fitrana):
     - Special charity given at end of Ramadan
     - "If you are able, contribute a small charity at Ramadan's end (ask your mosque about Zakat al-Fitr)"
     - Keep it simple; don't overwhelm with details
   - Encouragement:
     - "Wear your nice clothes, go to the Eid prayer, enjoy the day – you earned it!"
     - Reassure that it's okay to feel emotional (especially if family far away or unsupportive)
     - Emphasize: "You have a new community to celebrate with"
     - Join community events/meals for togetherness

10. **Resources**:
    - Ramadan-specific resources (3–5 items):
      - "Complete Beginner's Guide to Ramadan" (article or e-book)
      - "Healthy Fasting Tips" (health/nutrition focused)
      - "Ramadan Duas (Supplications)" (PDF or page with Arabic and translation)
      - "Local Prayer Times/Ramadan Timetable" (find timetable for user's area)
      - "Naseeha Helpline" (if feeling anxious or struggling)
      - Possibly "Ramadan Meal Recipes" (easy suhoor/iftar ideas)
    - Each resource has title, brief descriptor, external link
    - May also reference link to Step 8: Fasting or Fasting topic for more detail

**UI Components:**
- Headings (H2) for each major section (What is Ramadan, For New Muslims, Fasting Basics, Preparing, During, Tarawih, Eid, Resources)
- Subsection headings (H3) if needed for sub-topics
- Bullet lists for preparation tips, survival tips, resource list
- Callout boxes for emphasis (e.g., "Stay hydrated!" or spiritual reminders)
- Possibly blockquote for hadith/verse about Ramadan if included
- Optional decorative image at top (dates and water for iftar) with alt text
- ResourceCard style for external resources

**Loading/Empty/Error**: Instant, static content

**Accessibility:**
- Clear section headings for navigation
- Plain language, short paragraphs for readability
- Bullet lists for tips (easy to scan)
- Arabic terms (Tarawih, Eid, Laylat al-Qadr) explained or translated in parentheses
- Inclusive language: acknowledges those who cannot fast, emphasizes flexibility
- Callouts are visually distinct but text still makes sense on its own
- Any images have descriptive alt text
- Links to external resources have descriptive text
- Phone numbers (if listed) presented clearly and as clickable tel: links
- Encouraging, warm tone supports emotional accessibility

**Offline Availability:** Yes, fully cached.
- All textual guidance available offline
- User can read tips, understand fasting rules, plan for Ramadan without internet
- External resources (links to articles, videos, apps) require internet to open
- But the core guidance and inspiration are offline-ready
- Very useful: can reference tips at any time during Ramadan even if connectivity is spotty

---

## Mental Health Guide (/mental-health)

**Purpose:** Validates emotional challenges for new Muslims and provides coping strategies and support resources. Acknowledges that conversion is a big life change and emotional struggles are normal. Integrates faith-based reassurance with encouragement to seek professional help when needed.

**Primary Actions:**
- Read for understanding and reassurance
- Identify signs that professional help is needed
- Access support resource links (hotlines, directories, counselors)
- Learn practical coping strategies

**UI Sections:**

1. **Page Title**: "Taking Care of Your Mind" (H1). This gentler phrasing avoids stigma sometimes associated with "Mental Health."

2. **Validation (Emotional Acknowledgment)**:
   - Opening section immediately validates user's feelings
   - Explicitly names common emotions: loneliness, doubt, identity questions, family conflict, anxiety
   - Example: "It's normal to feel overwhelmed, lonely, conflicted, or doubting during this transition. You are not alone – many new Muslims experience ups and downs."
   - Affirms that these feelings don't mean they're a bad Muslim
   - Emphasizes conversion is a big life change requiring emotional adjustment

3. **Islamic Framing**:
   - Balances faith with professional help
   - Message: "Islam teaches compassion and that taking care of your mind is important. Trust in Allah can bring comfort, but our faith also teaches us to seek cures and help for our difficulties."
   - Clarifies faith is not the only solution: "Just as we see a doctor for physical illness (while praying for healing), it's okay to see a counselor for emotional distress (while praying for ease)."
   - Example hadith/concept: "Tie your camel and trust in Allah" – illustrates using practical means + spiritual trust
   - Mentions Prophet Muhammad and companions felt sadness/stress: being Muslim doesn't mean being happy 24/7
   - Normalizes seeking therapy as part of trusting Allah's mercy

4. **Common Experiences** (with advice for each):
   - Structured as subsections or bullet items addressing specific challenges
   
   **Loneliness:**
   - Acknowledgment: "You might feel isolated if you don't have Muslim friends yet or if your family distanced themselves."
   - Advice: "Consider joining new Muslim classes, community events (even online). Online communities can supplement in-person contact and help you build a support network. Check local mosques for convert groups."
   
   **Family Conflict:**
   - Acknowledgment: "Family may not understand your conversion or may be hostile."
   - Advice: "Maintain loving communication if possible. Give them time to adjust – you don't have to debate every detail. Set gentle boundaries to protect your peace. Many converts before you went through this – you can seek their advice. Remember the patience of early Muslims with their families."
   
   **Identity Questions:**
   - Acknowledgment: "You may feel torn between your old identity/culture and new Muslim identity."
   - Advice: "You do not have to abandon your culture or personality to be Muslim. It's normal to feel 'in-between'. Over time, you will integrate your identities. Being Muslim simply adds to who you are. Embrace the good from your upbringing and blend it with Islamic values."
   - Also: If feeling "not Muslim enough" or like an imposter, reassure them everyone grows at their own pace.
   
   **Doubts in Faith:**
   - Acknowledgment: "You might be experiencing doubts about Islam or second-guessing your decision."
   - Advice: "Faith can fluctuate and questions are normal. Islam encourages seeking knowledge – consider talking to a knowledgeable mentor or reading reliable books to address your doubts. Don't bottle them up. Every scholar was asked tough questions too. Make du'a for guidance – knowledge increases faith over time."
   
   Can be formatted as bold headers with paragraph explanations following, or as Q&A style ("I feel very alone" → "Consider...").

5. **Practical Advice (Self-Care & Coping Strategies)**:
   - Bulleted or paragraph list of actionable strategies:
   
   - "Maintain basic self-care: adequate sleep, nutrition (especially if fasting in Ramadan), exercise – physical well-being strongly affects mental well-being."
   - "Stay connected: reach out to a friend or mentor regularly (maybe schedule a weekly call)."
   - "Engage in halal activities that bring you joy and calm: nature walks, reading, creative hobbies. It's not un-Islamic to destress with healthy activities."
   - "Use remembrance of Allah (dhikr) and prayer to ease anxiety: simple phrases like 'Allah is with me' or reciting Al-Fatihah can bring comfort in panic moments."
   - "Journal your feelings or make du'a (supplication) about them – expressing feelings can relieve emotional pressure and asking Allah for help brings comfort."
   - "Set healthy boundaries with people or situations that drain you emotionally."
   - "Practice breathing exercises or mindfulness with Islamic flavor: dhikr (remembrance) can be meditative."
   - "Find a supportive community or mentor who understands the conversion journey."
   - Possibly reference Prophet Muhammad's advice: if angry, sit down or perform wudu (calming actions)
   - Mention concept of sabr (patience): doesn't mean ignoring feelings but going through hardship with hope in Allah

6. **When to Seek Help (Signs of Serious Struggles)**:
   - Critical section with clear indicators of when professional help is needed
   - Example signs (bulleted or numbered):
     - "Persistent sadness, hopelessness, or emptiness that doesn't improve"
     - "Inability to perform daily functions (eating, working, self-care) due to emotional state"
     - "Frequent panic attacks or intense anxiety interfering with life"
     - "Thoughts of self-harm or wishing you weren't alive"
     - "Feeling completely overwhelmed or unable to cope"
     - "Substance use as a way to cope"
   - Clear message: "If you experience any of these, please reach out to a mental health professional or crisis line immediately. This is not a sign of weak faith – getting help is a step toward healing that Islam fully supports."
   - Reassurance: "Allah does not want you to suffer in silence."

7. **Disclaimer**:
   - Small, italicized note: "Note: This guide is for general support and is not a substitute for professional therapy or medical advice."
   - Clarifies the page is educational, not a medical tool

8. **Resources**:
   - List of support resources (4–6 items minimum):
   
   **Hotlines/Crisis Support:**
   - "National Suicide Prevention Lifeline (24/7): 1-800-XXXX" (clickable tel: link)
   - "Crisis Text Line: Text HOME to 741741" (description with how to use)
   - "Naseeha Helpline (for Muslim youth/adults): [number]" (if available)
   
   **Mental Health Directories:**
   - "Find a Therapist: [Link to Psychology Today, TherapyDen, or Islamic-specific like EmpoweredMuslim]"
   - "Muslim Mental Health Professionals Directory" (if such resource exists)
   
   **Support Groups:**
   - "Online Support Community for Reverts: [Link to forum or group]"
   - "Local Convert Support Groups: Check with your mosque"
   
   **Educational Content:**
   - "Mindfulness for Muslims – Article on managing anxiety"
   - "Understanding Depression from Islamic Perspective – [Book or article]"
   
   **In-Person Support:**
   - "Your Local Imam or Muslim Chaplain – Seek spiritual and emotional guidance"
   - Encourage finding an empathetic imam or counselor
   
   Each resource has:
   - Name/title
   - Type (Hotline, Directory, Support Group, Article, etc.)
   - Contact info (phone number as tel: link, website link, or how to access)
   - Brief descriptor if not obvious
   
   Important: Include at least one immediate help option (hotline) because if someone reading this is in crisis, they need a number they can call now.

**UI Components:**
- Headings (H2) for major sections: Validation, Islamic Framing, Common Experiences, Practical Advice, When to Seek Help, Resources
- Subsection headings (H3) for each "Common Experience" (Loneliness, Family Conflict, etc.)
- Bullet lists for practical strategies and warning signs
- Bold text for headers within text (e.g., "Loneliness:" followed by advice)
- Callout box or distinct styling for disclaimer
- Possibly callout or emphasis box for key phrases like "You are not alone" or "Getting help is okay"
- ResourceCard or text list for resources (especially hotlines with phone numbers formatted clearly)
- Optional: quote or hadith styled as blockquote with attribution
- No images necessary (text is sufficient and more appropriate for this sensitive topic)

**Loading/Empty/Error**: Instant, static content

**Accessibility:**
- Empathetic, clear, non-judgmental language throughout
- Section headings allow easy navigation to specific concerns
- Short paragraphs and bullet lists for easy scanning
- Plain language avoiding clinical jargon (except where explained)
- Inclusive phrasing: acknowledges different family situations, backgrounds, beliefs
- Phone numbers presented as both text (for reading) and tel: links (for calling on mobile)
- External links have descriptive text
- No reliance on color alone to convey information
- High contrast text
- Content written thoughtfully to support emotional accessibility:
  - Validates feelings
  - Affirms this is normal
  - Encourages help-seeking
  - No blame or shame language
- Possibly mention: if having thoughts of self-harm, it's a medical emergency; call 911 or go to ER
- Overall tone is warm, supportive, non-judgmental

**Offline Availability:** Yes, partial.
- All textual content (validation, advice, coping strategies) fully cached and accessible offline
- This is excellent for someone who needs reassurance anytime
- Phone numbers listed as digits (e.g., "1-800-273-8255") remain readable offline; tel: links work offline if user has cellular service (not data)
- External resource links (like therapist directories or articles online) require internet to open
- The core guidance and moral support are entirely offline-accessible
- Critical for mental health: someone in distress can access this page and the main message (you're not alone, it's okay to seek help) without needing internet

---

## Sources & Citations (/sources)

**Purpose:** Lists all sources and references used throughout the Revert Guide. Ensures transparency, allows fact-checking, and encourages users to explore original materials for deeper understanding. Builds credibility.

**Primary Actions:**
- Look up a specific citation by reference number
- Browse sources for further reading/verification
- Click external source links to access original material

**UI Sections:**

1. **Page Title**: "Sources & Citations" (H1)

2. **Intro**: Commitment statement, e.g.:
   - "We're committed to accuracy and grounding our content in authentic sources. Every specific claim and quote in this guide is referenced below. We encourage you to read these sources yourself for deeper knowledge."

3. **Citation List**: Organized by source type (grouped with headings). Each group lists all citations of that type:

   **Quranic References** (H2):
   - [Q1] Quran 2:185 – "Ramadan is the month in which was sent down the Quran..." (Translation/Summary)
   - [Q2] Quran 1:1 – Opening verse (Al-Fatihah)
   - etc.
   - Each entry: reference ID, surah:verse, possibly brief translation or context, and where used (e.g., "Referenced in Ramadan Guide")

   **Hadith References** (H2):
   - [H1] Hadith (Sahih Bukhari, Vol. 1, Book 2, Hadith 7) – "The Prophet said: 'Actions are judged by intentions...'" – Used in Step 7: Character
   - [H2] Hadith (Sahih Muslim, Book 7) – About fasting – Used in Step 8: Fasting
   - etc.
   - Each entry: reference ID, collection name/volume/hadith number, hadith text or summary, where used

   **Articles** (H2):
   - [A1] "How to Perform Ghusl" – Islamic Finder (https://www.islamicfinder.org/...)
   - [A2] "Understanding the Five Pillars" – Author Name, MyIslam.org
   - etc.
   - Each entry: reference ID, title, author (if known), source name/website, URL (clickable link), and where used

   **Books** (H2):
   - [B1] "The Complete Idiot's Guide to Islam" by Sohaib Sultan (Alpha Books, 2004) – Used in Step 3 resources
   - [B2] "Qur'an: A Thematic Reading" by Abdullah Saeed – Referenced in Topics: Qur'an
   - etc.
   - Each entry: reference ID, title (italicized), author, publisher/year (if relevant), and where used

   **Possibly other categories:**
   - Videos, Lectures
   - Websites or Reports
   - Or any specific type of source used

   Format for "where used": 
   - Could be a step name: "Step 3: Prayer"
   - Topic name: "Topics: Prayer"
   - Page name: "Ramadan Guide"
   - Or note like "Referenced throughout multiple steps"

4. **Closing Note** (optional): Something like "If you have questions about any of these references or would like to suggest additional sources, please contact us."

**UI Components:**
- Headings (H2) for each source type (Quran, Hadith, Articles, Books, etc.)
- List structure for citations (could be `<ol>` with restarting numbers per category, or one big `<ol>` with category headings interspersed)
- Each citation could be:
  - A `<li>` in a list with ID in brackets + citation details
  - Or definition list (<dl>) with ID as term, citation as definition
- Links to external sources (articles, books online) are actual anchors with descriptive link text
- Possibly internal links: if "where used" references a step/topic page, could link to that page

**Loading/Empty/Error States**: Instant, static content

**Accessibility:**
- Headings (H2 per source type) allow navigation by category
- List structure (if used) is semantic
- Citation IDs in brackets are readable ("left bracket 1 right bracket")
- External links have descriptive text (e.g., "Islamic Finder" as link, not "Click here")
- If internal links are used (to step/topic pages), they're labeled with page name
- Text is dense but well-organized; users can skim by heading or use browser find (Ctrl+F) to search for a reference number
- All links keyboard-accessible and focusable
- High contrast text

**Offline Availability:** Yes, fully cached.
- User can read all citation details without internet
- External source links require internet to open (clicking won't work offline)
- But the reference information itself is available offline
- Useful for verifying sources later or sharing citations in offline contexts
- Lists sources transparently so user knows all claims are grounded in something (even if they can't access the source immediately)

---

## About (/about)

**Purpose:** Explains the Revert Guide project's mission, approach, and philosophy. Builds trust through transparency about who created it and what values guide it.

**Primary Actions**: Read to understand the guide's intent, values, and approach. No interactive tasks.

**UI Sections:**

1. **Page Title**: "About Revert Guide" (H1)

2. **Mission**: Why the guide exists and what need it addresses:
   - Example: "Revert Guide exists to support newly converted Muslims with compassionate, accessible guidance during their first year of Islam. We believe every revert deserves a supportive, non-judgmental space to learn and grow."

3. **Approach**: Philosophy and stance:
   - Educational and beginner-focused
   - Mainstream Sunni Islamic perspective (no sectarian agendas)
   - Non-political and inclusive of cultural diversity
   - Emphasizes essentials over advanced fiqh
   - Ad-free, non-commercial (just support)
   - Complements but doesn't replace local mosque learning
   - Possibly enumerate key principles as bullet points

4. **Disclaimer**: 
   - Clear statement: "This guide provides general educational information and is not a substitute for personal religious rulings. For specific religious questions about your situation, please consult a knowledgeable local scholar or imam."
   - Also: "We aim for accuracy and any errors are unintentional."
   - Covers liability and sets expectations

5. **Contact** (V1: No contact form):
   - Text: "If you have questions about Islam, we encourage you to approach a local mosque or mentor for personalized guidance."
   - No direct email or contact form listed (they choose not to provide in V1)
   - May mention: "Feedback can be shared via the thumbs up/down buttons in the app"
   - Or refer to accessibility/privacy pages for concerns

6. **Acknowledgments** (optional):
   - If any: "Special thanks to [Islamic scholars/educators] for reviewing content" or "This project was made possible by..."
   - If no contributors to credit, this section can be omitted
   - If logo/open-source credits needed, mention here
   - Keep brief

**UI Components:**
- Headings (H2) for each section: Mission, Approach, Disclaimer, Contact, Acknowledgments
- Text paragraphs for each
- Possibly bullet points for approach principles if numerous
- Simple, straightforward layout

**Loading/Empty/Error**: Instant, static content

**Accessibility:**
- Clear headings for navigation
- Plain language explanation
- All text easily readable
- If any names or organizations mentioned, clearly written
- Links (if present) have descriptive text

**Offline Availability:** Yes, fully cached.

---

## Accessibility Statement (/accessibility)

**Purpose:** Officially declares commitment to accessibility standards (WCAG 2.1 AA, AODA if in Ontario). Outlines features implemented for accessibility and provides feedback mechanism. Both legal transparency and guide for disabled users.

**Primary Actions**: Understand accessibility features. Report issues via contact method.

**UI Sections:**

1. **Page Title**: "Accessibility" (H1)

2. **Commitment**: Statement of accessibility dedication:
   - Example: "We are committed to making Revert Guide accessible to all users, regardless of ability. This site meets WCAG 2.1 Level AA criteria and complies with Accessibility for Ontarians with Disabilities Act (AODA) requirements."

3. **Standards**: Explicit listing of standards/regulations:
   - "This website follows Web Content Accessibility Guidelines (WCAG) 2.1 Level AA"
   - "Complies with the Accessibility for Ontarians with Disabilities Act (AODA)"
   - "Tested with multiple screen readers (NVDA, JAWS, VoiceOver)"
   - If applicable, mention any other standards (ADA, EN 301 549, etc.)

4. **Features**: Key accessibility features implemented:
   - Keyboard navigation throughout site (all functionality reachable via keyboard)
   - Screen reader support with semantic HTML
   - Sufficient color contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large text)
   - Captions or transcripts for any multimedia (if any present)
   - Skip-to-content link to bypass navigation
   - Descriptive link text (not "Click here")
   - Alt text on all images
   - Offline accessibility (content cached and accessible without internet)
   - Responsive design for mobile and desktop
   - Clear heading structure
   - Accessible forms with proper labels (if any forms present)
   - ARIA attributes where needed for dynamic content
   - Focus indicators on all interactive elements
   - Logical tab order

5. **Known Limitations** (if any):
   - Example: "The embedded Google Maps on Find a Masjid page is provided by Google and may not be fully accessible to screen reader users; however, all location information is available in the accessible text list of masjids."
   - Or: "None known at this time" if no major issues
   - Or mention if something is in progress to fix

6. **Feedback**: How users report accessibility issues:
   - Email address: "accessibility@revertguide.org" (if they have one; example)
   - Or: "If you encounter any accessibility barriers, please email us at [support email]"
   - Or: "Use the feedback button in the app to report issues"
   - Assure: "We appreciate your feedback and will work to address issues promptly"

7. **Last Updated**: Date when accessibility statement was last reviewed:
   - Example: "Last updated: January 2024"
   - Shows they actively maintain accessibility

**UI Components:**
- Headings (H2) for each section
- Bullet list for features (easy to scan)
- Text paragraphs for others
- Email link if providing contact address (mailto: link)

**Tone**: Formal, legal but still clear and friendly

**Loading/Empty/Error**: Instant, static content

**Accessibility**: The page itself must be accessible (ironic if not!):
- Proper contrast
- Semantic HTML
- Headings structure
- Any lists use list semantics
- Links have descriptive text
- If any icons, alt text or aria-label

**Offline Availability:** Yes, fully cached.

---

## Privacy Policy (/privacy)

**Purpose:** Outlines data practices and privacy commitments. Informs users what data (if any) is collected and how it's used/protected.

**Primary Actions**: Read to understand privacy practices.

**UI Sections:**

1. **Page Title**: "Privacy Policy" (H1)

2. **Effective Date**: "Effective as of [Month Year]" (e.g., "Effective as of January 2024")

3. **What We Collect**:
   - Clear statement: "We do not collect personal data or usage analytics in this version of Revert Guide."
   - Possibly: "No user data, emails, names, or activity tracking is gathered."
   - Mention if that changes in future versions: "Future versions may include optional features that collect data; any changes will be announced."

4. **Cookies**:
   - "Essential cookies only (if any)"
   - May mention: "The app uses a service worker for offline caching; this does not involve tracking cookies."
   - Note on third-party services: "Google Maps embed may set cookies per Google's privacy policy (beyond our control)"
   - Clarify: "We do not use analytics cookies (Google Analytics, etc.) or marketing cookies"

5. **Third Parties**:
   - "This site uses Google Maps for the Masjid Finder feature. Google may collect usage data; please see Google's Privacy Policy for their practices."
   - "No other third-party trackers or analytics services are used"
   - If any external links on pages: "External links are provided for convenience; we are not responsible for their privacy practices"

6. **Children's Privacy**:
   - "This site is not directed to children under 13. We do not knowingly collect information from children under 13."
   - Boilerplate but important for compliance (COPPA in US, similar laws elsewhere)

7. **Changes to This Policy**:
   - "If we update this privacy policy, we will post the updated version on this page and update the 'Effective Date' at the top."
   - "We encourage you to review this policy periodically"
   - Or: "We will notify users of significant changes" (if they wanted to be more proactive)

8. **Contact**:
   - Email for privacy questions: "If you have questions about privacy, contact [email]"
   - Or: "Privacy concerns can be directed to [email] or via the feedback mechanism in the app"

**UI Components:**
- Headings (H2) for major sections
- Bullet lists or paragraphs for clarity
- Email link (mailto:) if contact address provided

**Tone**: Formal, legal

**Loading/Empty/Error**: Instant, static content

**Offline Availability:** Yes, fully cached.

---

## Terms of Use (/terms)

**Purpose:** Outlines legal terms and conditions for using the site. Protects creators, sets expectations.

**Primary Actions**: Read to understand rules and disclaimers.

**UI Sections:**

1. **Page Title**: "Terms of Use" (H1)

2. **Effective Date**: "Effective as of [Month Year]"

3. **Acceptance**:
   - "By accessing and using Revert Guide, you agree to be bound by these terms. If you do not agree, please do not use the site."

4. **Content Disclaimer** (Educational use only):
   - "The content is provided for educational purposes about Islam and is not formal religious rulings (fatawa) or legal advice."
   - "For personal religious decisions, consult a qualified local scholar or imam."
   - "While we aim for accuracy, we do not guarantee all information is error-free. Use at your own discretion."

5. **Medical/Health Disclaimer**:
   - "Content about mental health or health-related topics is not professional medical or mental health advice."
   - "If experiencing mental health issues or medical concerns, consult a licensed professional."
   - "Do not use this guide as a substitute for professional medical care."

6. **Intellectual Property**:
   - "All content (text, design, logos, structure) is intellectual property of Revert Guide or its contributors."
   - "Users may view and share links to the site but may not republish, copy, modify, or distribute content without permission."
   - "Personal, non-commercial use is allowed (e.g., reading for yourself, sharing a link with a friend)"

7. **Limitation of Liability**:
   - "Provided as-is without warranties, express or implied."
   - "We are not liable for indirect, incidental, or consequential damages arising from use of the site."
   - "Your use is at your own risk."

8. **Governing Law**:
   - "These terms are governed by laws of Ontario, Canada."
   - Or: "Any disputes are subject to jurisdiction of Ontario courts"
   - (May not be strictly necessary for a non-commercial educational site, but often included)

9. **Changes**:
   - "We may update terms at any time by posting revised terms on this page."
   - "Continued use after updates means acceptance of new terms"
   - Or: "Significant changes will be announced"

10. **External Links**:
    - "This site contains links to external websites. We are not responsible for content or practices of external sites."
    - "External links are for convenience and do not imply endorsement"

**UI Components:**
- Numbered or H2-labeled sections
- Text paragraphs (formal tone)
- Possibly bold keywords for emphasis

**Tone**: Formal, legal

**Loading/Empty/Error**: Instant, static content

**Offline Availability:** Yes, fully cached.

---

## 404 Not Found

**Purpose:** Informs user a requested page doesn't exist. Provides friendly redirection to get back on track.

**UI:**

1. **Error Message**:
   - "404 - Page Not Found"
   - Friendly text: "This page seems to have wandered off. Let's get you back on track!"
   - Or similar approachable wording

2. **Navigation**:
   - Link/button to "Go to Roadmap"
   - Link/button to "Return Home"
   - One or both options

**UI Components**: Text message, navigation buttons/links, possibly decorative icon

**Tone**: Friendly, light (consistent with brand voice)

**Accessibility**: Clear heading, descriptive links, visible focus states

**Offline Availability:** If pre-built and cached, yes. Otherwise, service worker may handle with offline fallback.

---

## Offline Fallback Page

**Purpose:** Displayed when user is offline and requests a page that isn't cached. Provides graceful degradation.

**UI:**

1. **Message**:
   - "You are currently offline. Some content isn't available without internet."
   - Or: "It looks like you don't have an internet connection right now."

2. **Suggestions**:
   - "Check your connection and try again"
   - Or: "You can still view content you've already visited" (if applicable)
   - Link to Home or cached pages
   - Possibly: "Retry" button to attempt reconnection

3. **Content**:
   - Friendly, reassuring tone
   - Offers alternatives (go home, view cached pages)
   - Doesn't leave user stranded

**UI Components**: Text message, retry button, home link

**Offline Availability:** Yes, pre-cached by service worker.

---

**End of Specification**
