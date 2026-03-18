# Revert Guide - Project Tickets

## Ticket 001: Foundation Epic

**Issue Type:** Epic  
**Summary:** Foundation  
**Description/Context:**  
This epic covers the initial project setup and configuration for the Revert Guide app, establishing the tech stack and base architecture as defined in the specifications. The project will use Next.js 14 (App Router) with React 18 and TypeScript in strict mode, deployed as a static site export. It also includes integrating Capacitor for mobile packaging and the PWA service worker setup.

**Scope:**
- In scope: Initial Next.js app creation (Next 14 with TypeScript), project structure setup (App Router with app/ directory), static export configuration (next export), integration of Capacitor for iOS/Android packaging, and basic tooling (linting, formatting, CI pipeline)
- Out of scope: Implementation of actual features or UI components, content authoring, backend services or database, user authentication and analytics

**Acceptance Criteria:**
- Next.js 14 project is initialized with TypeScript (strict mode) and runs without errors
- The app can be built and exported statically (npm run build & next export)
- The base project reflects required tech stack: React 18, TypeScript config is strict, Node 18+ compatibility confirmed
- Capacitor 5 is set up with npx cap init linking the web app to iOS/Android projects
- No analytics or tracking scripts included by default
- No login functionality or user data storage present
- App adheres to base accessibility and offline-first principles

---

## Ticket 002: Initialize Next.js 14 Project (React + TS) for Revert Guide

**Issue Type:** Story  
**Summary:** Initialize Next.js 14 Project (React + TS) for Revert Guide

**Description/Context:**  
Set up a new Next.js 14 application as the foundation of the Revert Guide, configured with React 18 and TypeScript. This includes creating the base project structure and verifying that static export works.

**Scope:**
- In scope: Creating the Next.js 14 project with TypeScript enabled (strict mode), configuring Next.js for static output, verifying that a simple page can be exported and served statically, removing any boilerplate that violates project requirements
- Out of scope: Adding styling or design system, implementing actual guide content or navigation, integration of PWA or Capacitor, test or CI setup

**Acceptance Criteria:**
- Next.js app is created and runs without errors (npm run dev shows a starter page or blank page)
- TypeScript is configured in tsconfig.json with "strict": true
- Running next build && next export produces a static site (HTML files for pages)
- The app uses React 18 and is on Next.js v14.x (check package.json versions)
- No default Next.js artifacts that aren't needed: API routes directory removed, example home page text replaced
- No analytics or tracking scripts included
- No login or user account code exists

**Implementation Notes:**
- Use the latest Next 14 App Router setup
- If using Create Next App, select TypeScript template
- Remove any boilerplate not relevant
- Set output: "export" in next config to enable static export
- Ensure typescript-eslint and other base dev dependencies are installed
- Commit the initial setup to version control

**Dependencies/Blockers:**
- Node.js 18+ must be installed locally
- No other dependencies; can start immediately

**QA/Verification Checklist:**
- [ ] Run the dev server and confirm the app is reachable at the local URL
- [ ] Verify TypeScript compilation passes (npm run build produces no TS errors)
- [ ] Check the output of next export: ensure an out/ directory is created
- [ ] Open the index.html in a browser (without a dev server) and confirm it shows the page content
- [ ] Inspect the rendered HTML for any unwanted tags or scripts
- [ ] Confirm that the project has no login page or references to authentication
- [ ] Confirm the Next.js version via npm list next (should show 14.x) and React 18 in package.json

---

## Ticket 003: Establish Project Architecture & Routing Structure

**Issue Type:** Story  
**Summary:** Establish Project Architecture & Routing Structure

**Description/Context:**  
Organize the base file structure and routing for the app according to Next.js App Router conventions and the Revert Guide's content structure. This task sets up the skeleton of pages (Home, Roadmap, placeholder pages for major sections).

**Scope:**
- In scope: Creating placeholder pages in the Next.js App Router for all top-level routes (Home, Roadmap, Topics, Resources, Glossary, About, Privacy, etc.), establishing directory hierarchy, including temporary content as placeholders, defining a basic layout with header/nav, main, footer structure
- Out of scope: Designing actual UI pages, implementing page content or data, sub-routes for specific dynamic content, full implementation of dynamic segments

**Acceptance Criteria:**
- The app/ directory contains Next.js route files for all main pages
- Navigating to each route in a dev build does not result in a 404
- The base layout (App shell) is established with semantic landmarks
- The routing matches the expected URL structure in the specs
- No runtime errors when navigating between pages
- Links between pages function for all created routes

**Implementation Notes:**
- Follow the structure outlined in docs: put global layout in app/layout.tsx
- Use Next's File-system routing to create pages
- For dynamic routes (e.g., stage pages under roadmap, step pages under a stage), create dummy dynamic route files
- Use semantic HTML in placeholders
- All content is static placeholder text for now

**Dependencies/Blockers:**
- Ticket 002 (project init) must be completed
- No other external dependencies

**QA/Verification Checklist:**
- [ ] Start the dev server and manually visit every main route
- [ ] Click through the placeholder navigation to ensure no client-side routing errors
- [ ] Inspect the HTML output for layout structure
- [ ] Check console for any 404 errors for missing routes
- [ ] Verify that dynamic route placeholders are working
- [ ] Ensure that there are no broken links in the placeholder nav

---

## Ticket 004: Integrate Capacitor for Mobile (iOS/Android) Packaging

**Issue Type:** Story  
**Summary:** Integrate Capacitor for Mobile (iOS/Android) Packaging

**Description/Context:**  
Incorporate Capacitor 5 into the project to enable wrapping the web app as a native mobile app. This follows the requirement to package the Revert Guide for mobile via Capacitor.

**Scope:**
- In scope: Installing Capacitor (Core and CLI), initializing it with app metadata, generating Android and iOS projects, updating Capacitor config, ensuring the WebView can load static content, basic verification on an emulator
- Out of scope: Publishing to App Stores, using native plugins or device features beyond the WebView, push notifications or background modes

**Acceptance Criteria:**
- Capacitor is added to the project with appropriate packages
- A capacitor.config file is created with the appropriate app ID and app name
- Running npx cap sync after a Next export copies the web assets into the Android/iOS project successfully
- The Android app builds and launches in an emulator showing the placeholder home page
- The iOS app builds and runs in Simulator
- The WebView displays the content properly with no broken links or files
- No platform-specific errors or crashes occur on startup
- The app runs fully offline with the bundled content

**Implementation Notes:**
- Use Capacitor CLI to initialize (e.g., npx cap init "Revert Guide" "com.revertguide.app")
- Configure capacitor.config to use webDir: "out"
- After building the web app, use npx cap copy to copy assets
- Implement handling for external links using target="_blank"
- Consider the Android hardware back button: add a small script or Capacitor App plugin listener
- Use the default splash screen and icons for now

**Dependencies/Blockers:**
- Ticket 002 (base project) must be done
- A successful next export output is needed to test integration
- Android Studio and Xcode environments must be available

**QA/Verification Checklist:**
- [ ] Run npx cap sync and then open the Android project in Android Studio
- [ ] Build and deploy on an emulator (or device)
- [ ] Verify the app loads the Revert Guide's home page
- [ ] Repeat for iOS: open in Xcode, run on Simulator
- [ ] Test navigation within the app on a device
- [ ] Turn off network connectivity and launch the app: confirm content still loads
- [ ] Test an external link: clicking it should open the system browser
- [ ] Check that the app's displayed name and app icon are set to default or placeholders
- [ ] Verify that the Android hardware back button does not accidentally exit the app

---

## Ticket 005: Configure Code Quality Tools and CI Pipeline

**Issue Type:** Task  
**Summary:** Configure Code Quality Tools and CI Pipeline

**Description/Context:**  
Set up ESLint, Prettier, and continuous integration hooks to maintain code quality and consistency. The specification emphasizes clean code and strict lint rules.

**Scope:**
- In scope: Installing and configuring ESLint (with TypeScript and React plugins) and Prettier, setting up pre-commit hooks with Husky or similar, configuring a CI workflow (e.g., GitHub Actions) to run npm install, build, and run lint/test on pull requests
- Out of scope: Writing actual tests, deploying in CI, enforcing commit message conventions

**Acceptance Criteria:**
- ESLint is configured with appropriate extends and custom rules
- Running npm run lint on the project scans all relevant files and reports no errors
- Prettier is set up and integrated with ESLint
- Running npm run format formats the codebase
- A Husky git hook is in place: on commit, it runs npm run lint and npm run test
- A CI pipeline (e.g., a GitHub Actions YAML file) is added
- The CI is configured to run on pull requests to main

**Implementation Notes:**
- Use Airbnb or Next.js recommended ESLint config as a base
- Tailor rules to ensure accessibility lint rules are active
- Align Prettier config with spec (2-space indent, semicolons, etc.)
- Add a Husky hook by installing Husky and adding a pre-commit script in package.json
- For CI, use a simple GitHub Action YAML: run on pull_request, use Node 18, do npm ci, npm run build, npm run lint, npm run test

**Dependencies/Blockers:**
- Base project (Ticket 002/003) should be in place
- No external blockers

**QA/Verification Checklist:**
- [ ] Run npm run lint and verify it returns zero errors
- [ ] Introduce a known lint issue and verify the linter catches it
- [ ] Run npm run format and confirm code files are formatted
- [ ] Test the pre-commit hook locally
- [ ] Check the CI workflow by pushing a dummy commit or opening a test PR
- [ ] Review ESLint and Prettier config
- [ ] Verify that no extraneous warnings are output during build or lint

---

## Ticket 006: Design System Epic

**Issue Type:** Epic  
**Summary:** Design System

**Description/Context:**  
This epic encompasses establishing the Revert Guide's visual design foundations: the brand color palette, typography (font faces and scales), and spacing/layout system. We will integrate a utility-first CSS framework (Tailwind CSS) to implement these styles.

**Scope:**
- In scope: Setting up the styling framework (Tailwind CSS) and configuring it with the project's design tokens, brand color palette, typographic scale, spacing scale (4px baseline grid)
- Out of scope: Building individual UI components, creating a style guide documentation, theming beyond what's specified

**Acceptance Criteria:**
- Tailwind CSS is integrated into the project
- The brand color palette is configured in the Tailwind theme
- The primary font "Inter" and secondary font "Amiri" are loaded and applied globally
- The typography scale is defined
- The 4px spacing system is implemented
- Global styles include essential resets
- All design tokens are documented in the code
- The design system choices align with accessibility

**Dependencies/Blockers:**
- Base project setup (Tickets 002/003) should be done
- No blockers

**QA/Verification Checklist:**
- [ ] Confirm Tailwind is working: add a test class and verify styling
- [ ] Inspect Tailwind's generated CSS to ensure custom colors and sizes appear
- [ ] Verify the Inter font is being applied to body text and Amiri is used for Arabic text
- [ ] Use a color contrast analyzer to ensure all combinations pass AA contrast
- [ ] Check that the smallest text is at least 14px
- [ ] Print out or log the spacing scale configured
- [ ] Run npm run build and inspect Tailwind output
- [ ] Open a page and visually confirm the base styling looks right

---

## Ticket 007: Install and Configure Tailwind CSS Framework

**Issue Type:** Task  
**Summary:** Install and Configure Tailwind CSS Framework

**Description/Context:**  
Add Tailwind CSS to the project to enable utility-first styling, as aligned with our design approach.

**Scope:**
- In scope: Installing tailwindcss and required build plugins (PostCSS), creating the Tailwind config file, integrating Tailwind into Next.js
- Out of scope: Customizing the Tailwind theme, creating specific component styles, enabling optional Tailwind plugins

**Acceptance Criteria:**
- Tailwind CSS is installed and listed in package.json
- A tailwind.config.js file exists with proper content paths
- A global CSS file includes the Tailwind directives
- The Next.js build successfully processes Tailwind
- Verify by applying a simple Tailwind class to an element on a page
- The development build loads Tailwind's styles and the production build outputs a purged CSS file

**Implementation Notes:**
- Use the Tailwind installation guide for Next.js
- Run npx tailwindcss init -p to create tailwind.config.js and postcss.config.js
- In tailwind.config.js, set the content array to include all source files
- Import the globals.css in our app/layout.tsx

**Dependencies/Blockers:**
- The Next.js base should be working (Ticket 002/003)
- No other blockers

**QA/Verification Checklist:**
- [ ] Run the dev server and verify no PostCSS build errors
- [ ] Check in the browser's devtools that a known Tailwind class applies correct style
- [ ] In devtools, search for a Tailwind base style
- [ ] Run npm run build and ensure the build completes successfully
- [ ] Confirm that adding Tailwind hasn't broken any existing styling
- [ ] Document in the project README that Tailwind is now set up

---

## Ticket 008: Implement Brand Color Palette in Tailwind Theme

**Issue Type:** Task  
**Summary:** Implement Brand Color Palette in Tailwind Theme

**Description/Context:**  
Configure the design system's color palette in the Tailwind theme so that all UI components use the specified brand colors.

**Scope:**
- In scope: Updating tailwind.config.js to include custom colors reflecting all defined brand colors, removing or overriding default Tailwind colors to prevent accidental use of non-brand colors
- Out of scope: The actual application of these colors to UI, handling dark mode

**Acceptance Criteria:**
- Tailwind's theme configuration includes custom color entries matching the spec names and values
- All defined colors meet contrast guidelines
- The default Tailwind color palette is overridden or removed where appropriate
- Developers should use our named colors

**Implementation Notes:**
- In tailwind.config.js, under theme.extend.colors, define keys for each color
- Ensure naming reflects usage to avoid confusion
- After updating config, rebuild the CSS
- Document color usage guidelines

**Dependencies/Blockers:**
- Ticket 007 (Tailwind integration) must be complete
- No blockers beyond that

**QA/Verification Checklist:**
- [ ] For each custom color, verify the rendered color in the browser or via devtools
- [ ] Check contrast: Use DevTools or an accessibility extension
- [ ] Confirm no usage of default Tailwind colors in the output CSS
- [ ] Run npm run build and inspect that Tailwind includes classes for our colors
- [ ] Try a couple of UI elements with these classes
- [ ] Verify that interactive states can be styled using these classes

---

## Ticket 009: Integrate Brand Fonts and Typography Styles

**Issue Type:** Task  
**Summary:** Integrate Brand Fonts and Typography Styles

**Description/Context:**  
Apply the Revert Guide's typography guidelines by integrating the brand fonts (Inter for English text and Amiri for Arabic) and setting up the typographic scale.

**Scope:**
- In scope: Adding the Inter and Amiri font files, defining Tailwind fontFamily settings, setting base line-height and max line length for readability, adjusting heading levels to spec sizes
- Out of scope: Content authoring, implementing responsiveness for font sizes explicitly, fancy font-loading strategies beyond caching

**Acceptance Criteria:**
- The Inter font is applied as the default font for all English text
- The Amiri font is set for any Arabic text segments
- Font files are included and loaded
- The typographic scale is reflected in Tailwind's theme
- Minimum font size is at least 14px throughout
- Max text width ensures comfortable reading

**Implementation Notes:**
- Use Next.js built-in font optimization or self-host fonts for offline support
- Self-hosted fonts should be listed in the service worker precache manifest
- Extend Tailwind config with fontFamily settings
- Define font sizes with custom values if needed
- Check that we handle mixing Arabic in English

**Dependencies/Blockers:**
- Ticket 007 (Tailwind) done
- Access to font files or reliable source needed

**QA/Verification Checklist:**
- [ ] Verify font loading: fonts are requested and succeed (and cached if offline)
- [ ] Put sample Arabic text and confirm it appears in Amiri font
- [ ] Inspect heading elements to ensure sizes match spec
- [ ] Check a paragraph's line length to ensure not too long
- [ ] Use Chrome Lighthouse or axe to verify no text contrast or tiny font issues
- [ ] Verify the base text and heading styles in different contexts
- [ ] Ensure that italic text is still readable and sized appropriately
- [ ] Confirm no element has font-size < 14px

---

## Ticket 010: Define Global Spacing & Layout Scale (4px Grid)

**Issue Type:** Task  
**Summary:** Define Global Spacing & Layout Scale (4px Grid)

**Description/Context:**  
Configure spacing utilities (margins, padding, gaps) to follow a 4px baseline grid as specified.

**Scope:**
- In scope: Extending the spacing scale in Tailwind to include all specified values, ensuring that classes correspond to correct pixel values, verifying vertical rhythm
- Out of scope: Explicitly designing page layouts, enforcing layout grid (like CSS grid)

**Acceptance Criteria:**
- The Tailwind config has entries for 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px spacing
- A developer can use classes like mt-3 for 12px margin-top
- Each specified token is present and correctly mapped
- Consistent use is encouraged throughout development

**Implementation Notes:**
- Tailwind default spacing scale covers many but not all values
- Extend it with custom keys like 12 (3rem), 14 (3.5rem), 16 (4rem) if needed
- Ensure vertical spacing conventions match spec
- Possibly adjust default element margins via global CSS

**Dependencies/Blockers:**
- Tailwind base (Ticket 007) done

**QA/Verification Checklist:**
- [ ] Confirm Tailwind classes for each key produce correct pixel values
- [ ] Test a layout scenario with spacing classes
- [ ] Examine if default spacing is conflicting
- [ ] Ensure no unusually large or non-multiple-of-4 spacing is needed
- [ ] Check Lighthouse for "Size tap targets" on mobile
- [ ] Confirm that our spacing scale changes didn't break Tailwind's build
- [ ] Ensure consistency: Use only these classes in future tasks

---

## Ticket 011: Core Components Epic

**Issue Type:** Epic  
**Summary:** Core Components

**Description/Context:**  
This epic includes the development of the reusable core UI components that will be used across the Revert Guide application. Based on the specification, these include navigation elements, interactive UI pieces, and utility components.

**Scope:**
- In scope: Developing all generic and multi-use components identified in the specs including:
  - Site navigation bar and footer
  - Button component for CTAs
  - Card components for various uses
  - Accordion (collapsible panel) component
  - Breadcrumb navigation component
  - Glossary Tooltip component
  - Search bar component
  - Callout/Tip component
  - Iconography integration
- Out of scope: Page-specific components, writing content, implementing data integration

**Acceptance Criteria:**
- All core UI components are implemented in isolation
- They match the styling guidelines using our design system
- Each component is accessible (WCAG AA)
- Components are documented
- All components meet WCAG AA: keyboard operable, visible focus, screen reader accessible

**Dependencies/Blockers:**
- Design System (colors, fonts, spacing from Epic Foundation/Design System) must be in place
- No external data needed for components themselves

**QA/Verification Checklist:**
- [ ] Visual review: Compare each component against the specification
- [ ] Accessibility review: Using keyboard only, navigate components
- [ ] Interaction testing: Simulate user actions
- [ ] Responsive testing: Shrink viewport to mobile width
- [ ] Offline testing: Simulate offline
- [ ] Integration readiness: Mount each component within a test page context
- [ ] Performance check: Ensure components are not overly heavy
- [ ] Consistency check: All components use theme values
- [ ] Documentation: Ensure component usage is clear

---

## Ticket 012: Build Responsive Navbar (Header Navigation)

**Issue Type:** Story  
**Summary:** Build Responsive Navbar (Header Navigation)

**Description/Context:**  
Implement the site's main navigation bar that appears at the top of pages. The Navbar provides links to all primary sections and must be fully responsive and accessible.

**Scope:**
- In scope: Creating the Navbar component with Revert Guide branding, navigation links, responsive design for mobile (hamburger menu or bottom nav), skip-link for accessibility
- Out of scope: Final placement of every nav link, login/profile implementation

**Acceptance Criteria:**
- On a wide screen, the header shows the Revert Guide name/logo and a set of links
- On a small screen, the navigation is accessible via hamburger menu or bottom nav
- The Skip to Content link becomes visible when focused
- The Navbar is keyboard accessible
- On all screen sizes, the nav is identifiable and links text is clear
- The Nav includes an entry for "Find a Masjid" prominently
- Works offline with no issues

**Implementation Notes:**
- Desktop nav: a simple header with flex layout
- Mobile nav: either bottom nav (fixed to bottom with icons) or hamburger menu
- Use the skip-link pattern for accessibility
- Test both in Chrome and Safari mobile emulator

**Dependencies/Blockers:**
- Core design tokens must be ready
- No major blockers

**QA/Verification Checklist:**
- [ ] Desktop view: Open the site on a large screen and verify all expected links
- [ ] Mobile view: Use responsive devtools to simulate narrow screen
- [ ] Skip link test: Press Tab right after loading
- [ ] Accessibility: Use screen reader or accessibility tree
- [ ] Visual design: Check styling matches brand
- [ ] Current page indication: Navigate to different pages
- [ ] Responsive layout stability: Test on mid-size (tablet)
- [ ] No overlap: Check nav doesn't cover important content
- [ ] Offline: Test tapping nav links to cached pages
- [ ] General QA: Test on mobile device or emulator
- [ ] Verify "Find a Masjid" link goes to correct route
- [ ] Confirm nav meets spec expectations

---

## Ticket 013: Build Footer with Info Links

**Issue Type:** Story  
**Summary:** Build Footer with Info Links

**Description/Context:**  
Implement the site's footer that appears at the bottom of pages, containing secondary navigation and information.

**Scope:**
- In scope: Creating a footer element with links to About, Accessibility, Privacy, Terms, Sources, possibly a copyright or brief note
- Out of scope: Complex UI or forms, social media links

**Acceptance Criteria:**
- The footer is present at the bottom of each page's content
- It contains at least: "About", "Accessibility", "Privacy", "Terms", and "Sources" links
- Accessibility: the footer is marked as a footer landmark
- The links have descriptive text and are easily clickable
- The footer remains at the bottom of content
- Color contrast for footer text is >= 4.5:1
- Offline: these static page links will be cached

**Implementation Notes:**
- Use a simple layout with flex for links
- Could do something like an inline list separated by pipes
- Include copyright or tagline if needed
- Ensure spacing matches design

**Dependencies/Blockers:**
- Static pages (About, Privacy, etc.) should exist to link to
- Main layout should incorporate the footer

**QA/Verification Checklist:**
- [ ] Check that all expected links are present
- [ ] Click each footer link and verify navigation
- [ ] Inspect styling: footer should be visually separate
- [ ] On narrow screens, ensure footer links wrap nicely
- [ ] Accessibility: footer is marked as a landmark
- [ ] Check that year or other dynamic content is correct
- [ ] Try accessing footer-linked pages offline
- [ ] Overall consistency: footer appears on every page
- [ ] Verify alignment of link text and target page title
- [ ] If trust note included, ensure proper styling

---

## Ticket 014: Implement Primary Button Component (CTA)

**Issue Type:** Story  
**Summary:** Implement Primary Button Component (CTA)

**Description/Context:**  
Create a reusable Button component to be used for primary calls-to-action throughout the app. This button should follow the design system with proper hover/focus states and be fully accessible.

**Scope:**
- In scope: Developing a styled button component that can render either as button or anchor, including primary style with variants if needed
- Out of scope: Complex button states like loading spinners, toggle buttons

**Acceptance Criteria:**
- The Button component can be used as `<Button onClick={...}>Label</Button>`
- Default styling: background-color = primary dark green, text-color = white
- On hover, background darkens to hover shade
- On focus, shows visible outline or glow
- Component is accessible with proper keyboard handling
- Component has flexible width
- Button text uses our font (Inter) ideally semi-bold or bold
- Contrast is adequate (white text on #4A7C59 yields ~4.6:1)
- Component doesn't rely on external resources

**Implementation Notes:**
- Use Tailwind classes for styling
- Provide a prop for rendering as an anchor
- Could create also a secondary style for less important actions
- Test with both button tag and anchor scenario

**Dependencies/Blockers:**
- Design tokens (colors) available
- No content dependency

**QA/Verification Checklist:**
- [ ] Render the Button with text "Begin Journey"
- [ ] Use keyboard to focus and activate
- [ ] Hover with mouse and ensure background color changes
- [ ] Check responsive behavior
- [ ] Verify contrast and color check
- [ ] If icon added, verify spacing
- [ ] Check HTML semantics
- [ ] Confirm anchor variant applies all classes
- [ ] Ensure no extraneous console warnings

---

## Ticket 015: Develop Card Components (StageCard, StepCard, TopicCard, ResourceCard)

**Issue Type:** Story  
**Summary:** Develop Card Components

**Description/Context:**  
Create the card UI components used to display previews of stages, steps, topics, and resources. While content differs, we can implement a generic Card container and specific layout for each type.

**Scope:**
- In scope: Building a base Card component style and specific components for Stage, Step, Topic, Resource types, handling click by linking to appropriate page
- Out of scope: Content within cards, filtering of resources, dynamic resorting

**Acceptance Criteria:**
- Visual uniformity: All card components share a cohesive style
- StageCard shows stage title and duration
- StepCard shows step number, title, maybe time estimate
- TopicCard shows topic name, icon, description
- ResourceCard shows resource title, type badge, description, external link icon
- Accessibility: All cards can be tabbed to
- Responsive: Cards stack full-width on mobile
- Implementation: Components accept data via props

**Implementation Notes:**
- Use our extended colors (bg-surface #F7FAF6)
- Add a border or shadow for definition
- Rounding with rounded or rounded-lg
- Include padding inside for content
- Use flex or block layout as needed
- Include icon elements if needed
- Focus states with visible outline

**Dependencies/Blockers:**
- Content model for steps, topics, etc., decided
- Real content integration done in pages

**QA/Verification Checklist:**
- [ ] Render sample cards for each type
- [ ] Check mobile behavior
- [ ] Verify accessibility
- [ ] Confirm focus test
- [ ] Check code review
- [ ] Integration readiness

---

## Ticket 016: Implement Accordion Component (Collapsible Sections)

**Issue Type:** Story  
**Summary:** Implement Accordion Component (Collapsible Sections)

**Description/Context:**  
Develop an accessible Accordion component to show and hide content in collapsible sections. Used for obstacles on step pages and Q&A sections.

**Scope:**
- In scope: Building a component with trigger and collapsible content area, ensuring ARIA attributes, managing open/closed state, supporting multiple independent accordions
- Out of scope: Complex animation, arrow key navigation across multiple accordions

**Acceptance Criteria:**
- Component can wrap any children content
- Takes a prop for title and children
- Optionally a defaultExpanded prop
- Initially, content region is not visible
- When toggled, content becomes visible
- Trigger button has appropriate aria attributes
- Keyboard: Tab focuses, Enter/Space toggles
- Visual indicator for open/close
- Multiple accordions can be open independently
- Content doesn't get lost on repeated toggling
- Accessibility: screen reader announces properly

**Implementation Notes:**
- Use React useState for open/closed
- Use React's useId() for unique ids
- Toggle icon (plus/minus or arrow)
- Provide margin/background for expanded content
- Test with varying content heights

**Dependencies/Blockers:**
- None beyond basic environment
- Should come after design tokens

**QA/Verification Checklist:**
- [ ] Place multiple Accordion components on a page
- [ ] Use keyboard to navigate
- [ ] Check screen reader announcement
- [ ] Mouse: Click different accordions
- [ ] Visual: indicator changes correctly
- [ ] Styling: triggers look clickable
- [ ] Content area styling inherits properly
- [ ] Focusable elements inside: Tab behavior
- [ ] Edge: open multiple accordions
- [ ] Mobile/touch: tap the trigger
- [ ] Specific usage: Common Obstacles, etc.
- [ ] Animation: if included, appears smooth

---

## Ticket 017: Implement Breadcrumb Navigation Component

**Issue Type:** Story  
**Summary:** Implement Breadcrumb Navigation Component

**Description/Context:**  
Create a Breadcrumb component that displays the page's hierarchy to help users understand location and provide quick navigation upward.

**Scope:**
- In scope: Building a component that takes an array of links and renders them separated by chevron or ">", with the last item as current page (not clickable)
- Out of scope: Deciding breadcrumb content in each case, handling extremely long labels

**Acceptance Criteria:**
- Component displays each ancestor page as a link
- Current page displayed as plain text
- Accessible: Markup uses nav with aria-label, each link properly named
- Last crumb has aria-current="page"
- Style: small, subtle text
- Behavior: if crumb link is clicked, it navigates
- Adapts if no crumb or only one crumb (handle gracefully)
- On mobile, wraps nicely if long

**Implementation Notes:**
- Use Tailwind classes for small text
- Put each crumb in an `<li class="inline">`
- Manually put separator character between links
- Ensure to use appropriate global style

**Dependencies/Blockers:**
- None beyond basic environment
- Should follow after page hierarchy is defined

**QA/Verification Checklist:**
- [ ] Test in a Step page context
- [ ] Click each link and verify navigation
- [ ] Use screen reader or voiceover rotor
- [ ] Check styling: muted but visible
- [ ] Check responsiveness: long path wrapping
- [ ] If icon for home, ensure visibility
- [ ] Integration: verify usage on specific pages
- [ ] Confirm it meets spec expectations

---

## Ticket 018: Implement Glossary Tooltip Component

**Issue Type:** Story  
**Summary:** Implement Glossary Tooltip Component

**Description/Context:**  
Create a component to display quick definitions for glossary terms inline within content. Uncommon terms should have glossary tooltips using the `<abbr>` element with a title attribute.

**Scope:**
- In scope: Building a component or pattern for marking up a term with its definition using abbr element, ensuring appropriate styling and accessibility
- Out of scope: Complex custom tooltip popup with JS positioning

**Acceptance Criteria:**
- Using GlossaryTooltip yields an inline element (abbr) that on desktop shows a browser tooltip on hover
- On focus, the screen reader can get the definition
- Styled term is distinguishable to sighted users (e.g., dotted underline)
- Component is easy to use in MDX content
- Degrades gracefully offline (all internal, no external needed)

**Implementation Notes:**
- Use an `<abbr>` tag
- Add CSS styling: underline, decoration-dotted, cursor-help
- For accessibility: add aria-label identical to title
- Or include definition in text for screen readers
- Hook into Glossary data if possible (component looks up definition from glossary JSON)

**Dependencies/Blockers:**
- Glossary data (if implementing auto lookup)
- Otherwise no blockers, component is simple

**QA/Verification Checklist:**
- [ ] Render GlossaryTooltip for a known term
- [ ] Verify in DOM it becomes appropriate abbr tag
- [ ] Hover on it: browser tooltip appears
- [ ] Use screen reader to check reading
- [ ] Check styling: dotted underline and cursor help
- [ ] Check multiple usage: no conflicts
- [ ] Offline: nothing external needed

---

## Ticket 019: Implement Search Bar/Filter Component

**Issue Type:** Story  
**Summary:** Implement Search Bar/Filter Component

**Description/Context:**  
Create a SearchBar component to be used on the Glossary page (to filter terms) and the Masjid Finder page (to search by name/location).

**Scope:**
- In scope: Developing a controlled text input component with props for value, onChange, placeholder, label, icon, optional clear button
- Out of scope: Actual filtering logic, entire form with submission, typeahead suggestions

**Acceptance Criteria:**
- Renders as `<input type="text">` with appropriate styling
- Has a label element (visible or hidden)
- Typing triggers onChange callback with latest text
- Supports being controlled (parent passes value and onChange)
- Style: look like a search box with border, padding, icon at left
- Clear button at far right (optional but helpful)
- Accessible: input has id connected to label or uses aria-label
- Focusable with visible highlight on focus
- Works properly on all devices
- If clear button: clearing text refocuses input

**Implementation Notes:**
- Pretty straightforward with input element
- Use state in parent for test
- For icon, use SVG or heroicons
- Support styling variations
- Consider using type="search" for semantics and mobile UX
- Could add optional debounce

**Dependencies/Blockers:**
- None major
- The design if any

**QA/Verification Checklist:**
- [ ] Render the SearchBar in example with filtering logic
- [ ] Type text and ensure onChange fires
- [ ] Interact with input as a user
- [ ] Check focus outline is visible
- [ ] Check icon alignment
- [ ] Clear button: click and verify
- [ ] Try on mobile
- [ ] Check filtering logic in usage context
- [ ] Performance: on large list filtering

---

## Ticket 020: Implement Callout (Tip/Note) Component

**Issue Type:** Story  
**Summary:** Implement Callout (Tip/Note) Component

**Description/Context:**  
Create a Callout component to highlight special notes, tips, or warnings in the content.

**Scope:**
- In scope: Building a styled container that can wrap any children content with special style (background, border, padding, maybe icon)
- Out of scope: Creating multiple variants unless needed (but consider warning variant for disclaimers)

**Acceptance Criteria:**
- Component can be used in MDX wrapping content to appear emphasized
- Has padding so it stands apart
- Icon usage: aria-hidden if decorative
- Container background/border meets contrast guidelines
- Screen reader reads content normally
- Component doesn't break layout on narrow screens

**Implementation Notes:**
- Use a `<div>` with classes: bg-accentYellow p-4 rounded
- Could add colored left border stripe
- Support optional variant "warning" or "important" for disclaimers
- Ensure accessible by not hiding content
- If using role="note", ensure it doesn't trap

**Dependencies/Blockers:**
- None beyond design tokens

**QA/Verification Checklist:**
- [ ] Render an "info" callout with sample content
- [ ] Render a "warn" callout if implemented
- [ ] View on mobile
- [ ] Check that it doesn't break out of container
- [ ] Accessibility: role="note" if set
- [ ] Make sure styling is consistent
- [ ] If type=warn, consider role="alert"
- [ ] Check interaction with tailwind typography plugin
- [ ] Test with mental health disclaimer content
- [ ] Check if region navigable

---

## Ticket 021: Integrate Icon Library and Accessible Icons

**Issue Type:** Task  
**Summary:** Integrate Icon Library and Accessible Icons

**Description/Context:**  
Set up a method to use icons throughout the app and ensure they are accessible.

**Scope:**
- In scope: Choosing an icon set (Heroicons), including necessary SVGs as React components, integrating them where needed, ensuring proper ARIA attributes
- Out of scope: Designing custom complex icons

**Acceptance Criteria:**
- Icon system is in place for straightforward icon addition
- All icons used in UI have appropriate ARIA (decorative ones have aria-hidden="true")
- Icons render correctly across browsers
- Icons match design styling (appropriate sizes and colors)
- Icon assets are either inline or bundled
- No external network calls needed

**Implementation Notes:**
- Install @heroicons/react or copy raw SVGs
- Add aria-hidden="true" focusable="false" on inline SVGs by default
- Apply CSS: fill currentColor for color inheritance
- List of likely icons: Home, Book, Search, Mosque, MapPin, Menu, X, ExternalLink
- Could also create Icon component mapping names to SVGs

**Dependencies/Blockers:**
- Possibly the heroicons package
- Otherwise no blockers

**QA/Verification Checklist:**
- [ ] Confirm all icons appear as expected
- [ ] Right-click/inspect an icon: ensure aria-hidden="true"
- [ ] Use screen reader through navigation
- [ ] Check icons sizing and alignment
- [ ] Ensure no icon looks out of style
- [ ] If any icon should have specific color, ensure it does
- [ ] Check building process
- [ ] Confirm offline readiness
- [ ] Are we covering all icons in design?
- [ ] Spot check performance
- [ ] Check DOM and network

---

## Ticket 022: Content Model & Data Epic

**Issue Type:** Epic  
**Summary:** Content Model & Data

**Description/Context:**  
This epic covers defining and populating the content structure for the Revert Guide. All educational content should be stored in structured files (MDX/JSON) rather than hard-coded.

**Scope:**
- In scope: Designing content schemas for each type, setting up content directory structure, populating initial content with all guide content from spec
- Out of scope: Writing new educational content from scratch, multi-language content, dynamic content from a CMS

**Acceptance Criteria:**
- Project has structured content directory (e.g., /content/)
- Content schema covers all needed fields
- All guide content from spec is captured
- Content is entirely decoupled from presentation
- No content that should be ephemeral or user-specific
- Content files included in build process
- All sensitive content or disclaimers present
- Documentation for content editors provided

**Implementation Notes:**
- Use MDX for rich content pages (steps, topics)
- Use JSON for simpler lists (glossary, resources, masjids)
- Configure Next.js to load MDX from content folder
- Merge spec attachments into final files
- Include IDs/anchors where needed
- Validate content data

**Dependencies/Blockers:**
- Writing content depends on spec documents (we have those)
- MDX loader must be configured
- Core components should be ready for MDX to use

**QA/Verification Checklist:**
- [ ] Open app and navigate through content-heavy pages
- [ ] Verify all expected text from spec is present
- [ ] Check cross-links and internal references
- [ ] Open Glossary page and try filtering
- [ ] Check performance of content-heavy pages
- [ ] Check offline availability
- [ ] Validate data consistency
- [ ] Spot-check some critical teachings placement
- [ ] Review static info pages content
- [ ] Developer sanity check
- [ ] Documentation exists

---

## Ticket 023: Page Implementation Epic

**Issue Type:** Epic
**Summary:** Implement All Page UIs with Real Content & Data

**Description/Context:**
All 17 pages currently exist as route files but 15 of them are single-paragraph placeholders. The content data layer (Ticket 022) is complete — stages, steps, topics, glossary, resources, and masjids JSON files all exist with full content. Reusable components (Card, Accordion, Button, Breadcrumb, SearchBar, Callout, Icon, GlossaryTooltip) are all built. This epic covers wiring pages to their data and building out the full UI sections specified in the pagelist-detailed-specification.

**Scope:**
- In scope: Implementing all page UIs per the pagelist spec, consuming content data via lib/content.ts, using existing components, updating generateStaticParams to use real data, building interactive features (glossary search/filter, resource category filter, masjid search)
- Out of scope: Google Maps integration (stub with placeholder), PWA service worker setup, Capacitor native builds, new component creation (use existing), backend or API

**Acceptance Criteria:**
- All 17 pages render full content per pagelist spec
- Pages consume structured data from content/en/ via lib/content.ts
- Interactive features (search, filter) work client-side
- All pages are accessible (keyboard nav, screen reader, WCAG AA)
- All pages build successfully with static export
- Cross-linking between pages works (steps → topics, glossary refs, etc.)
- Breadcrumbs present on all content pages
- Previous/Next navigation on step pages

---

## Ticket 024: Implement Home Page (/)

**Issue Type:** Story
**Summary:** Build Full Home Page with Hero, Entry Paths, Quick Links

**Description/Context:**
The Home page currently has a basic hero with a CTA button. Per the pagelist spec, it needs: hero section, 3 entry path cards, brief introduction, trust signal note, and quick links to Ramadan/Mental Health/Masjid Finder.

**Scope:**
- In scope: Hero with welcome heading + tagline + "Begin Journey" CTA, 3 entry path cards ("Just Took Shahada?", "Been Muslim a Few Weeks?", "Looking for Specific Topics?"), brief intro blurb, trust signal ("No ads, no tracking"), quick-link cards (Ramadan, Mental Health, Find a Masjid)
- Out of scope: Dynamic content, user-specific state

**Acceptance Criteria:**
- Hero section with H1, tagline, primary CTA linking to /roadmap
- 3 entry path cards with descriptions linking to appropriate stages/sections
- Trust signal note visible
- Quick-link cards for Ramadan, Mental Health, Masjid Finder
- Fully responsive (mobile-first)
- Accessible: H1, keyboard-focusable cards, descriptive link text
- Passes lint and build

**Dependencies/Blockers:**
- Ticket 022 (content data) complete
- Core components (Button, Card) available

---

## Ticket 025: Implement Roadmap Hub Page (/roadmap)

**Issue Type:** Story
**Summary:** Build Roadmap Hub with Stage Cards Grid

**Description/Context:**
The Roadmap Hub should display all 6 stages as a responsive card grid, loaded from stages.json. Each StageCard shows title, description, duration, and links to the stage detail page.

**Scope:**
- In scope: Page title "Your Roadmap" (H1), intro text explaining the roadmap, 6 StageCard components in responsive grid (1 col mobile, 2-3 cols desktop), encouragement note below grid, breadcrumb (Home > Roadmap)
- Out of scope: Progress tracking, dynamic content

**Acceptance Criteria:**
- Loads all 6 stages from content data
- StageCards display title, description, duration, stage number
- Cards link to /roadmap/[stageSlug]
- Responsive grid layout
- Encouragement note below grid
- Breadcrumb navigation
- Accessible: H1, semantic list, focusable cards

**Dependencies/Blockers:**
- Ticket 022 (stages.json) complete
- StageCard component available

---

## Ticket 026: Implement Stage Detail Pages (/roadmap/[stageSlug])

**Issue Type:** Story
**Summary:** Build Stage Pages with Steps List, Don't Worry Section, Next Stage

**Description/Context:**
Each stage page should load its data from stages.json and display the stage header, overview, list of steps (as StepCards), a collapsible "Don't Worry Yet" section, and a "What's Next" teaser linking to the next stage.

**Scope:**
- In scope: Breadcrumb (Home > Roadmap > Stage Name), stage header with title/subtitle/duration badge, overview paragraphs (description, mainGoal, success), StepCard list for all steps in stage, Accordion for "Don't Worry Yet" (dontWorry array), "What's Next" teaser with link to next stage, generateStaticParams from real stage data
- Out of scope: Progress tracking

**Acceptance Criteria:**
- Loads stage and its steps from content data
- Breadcrumb shows correct hierarchy
- Stage header with title, subtitle, duration
- Overview section with description and goals
- Steps displayed as ordered StepCards with number, title, time estimate
- "Don't Worry Yet" collapsible accordion with items
- "What's Next" links to next stage (or conclusion text for final stage)
- generateStaticParams uses real stage IDs
- Accessible: heading hierarchy, keyboard nav, aria-expanded on accordion

**Dependencies/Blockers:**
- Ticket 022 (stages.json, step files) complete
- StepCard, Accordion, Breadcrumb components available

---

## Ticket 027: Implement Step Detail Pages (/roadmap/[stageSlug]/[stepSlug])

**Issue Type:** Story
**Summary:** Build Step Pages with Full Content Template (Why, Actions, Obstacles, Tips, Nav)

**Description/Context:**
Step pages are the core instructional content. Each must render all sections from the step JSON: why it matters, exact actions, common obstacles (collapsible), tiny version tip, what unlocks next, recommended resources, and prev/next step navigation.

**Scope:**
- In scope: Breadcrumb (Home > Roadmap > Stage > Step), stage indicator badge, step header (title, step number, time estimate), "Why This Step Matters" section, numbered "Exact Actions" with sub-steps, collapsible "Common Obstacles" accordion, "Tiny Version" callout (tip variant), "What Unlocks Next" section, recommended resources (ResourceCards), previous/next step navigation, related topics links, generateStaticParams from real data
- Out of scope: MDX rendering (use JSON sections), progress checkboxes

**Acceptance Criteria:**
- Loads step data and renders all content sections
- Breadcrumb shows full hierarchy
- Step number and time estimate badge displayed
- Exact actions as ordered list with sub-steps
- Obstacles in collapsible accordion
- Tiny version as Callout component (tip variant)
- Resource cards link to external resources
- Prev/Next navigation with step names
- generateStaticParams uses real step/stage mappings
- Accessible: heading hierarchy, semantic lists, aria patterns

**Dependencies/Blockers:**
- Ticket 022 (step JSON files, resources.json) complete
- Accordion, Callout, Breadcrumb, ResourceCard, Button components available

---

## Ticket 028: Implement Topics Hub Page (/topics)

**Issue Type:** Story
**Summary:** Build Topics Hub with Topic Cards Grid

**Description/Context:**
The Topics Hub displays all 7 topic areas as a responsive card grid. Each TopicCard shows the topic title, description, and an icon, linking to the topic detail page.

**Scope:**
- In scope: Page title "Topics" (H1), intro text, 7 TopicCard components in responsive grid, secondary note linking to Roadmap and Glossary, breadcrumb
- Out of scope: Topic content rendering (that's Ticket 029)

**Acceptance Criteria:**
- Loads all 7 topics from content data
- TopicCards display title, description, icon
- Cards link to /topics/[topicSlug]
- Responsive grid (1 col mobile, 2-3 cols desktop)
- Secondary note with cross-links
- Accessible: semantic structure, focusable cards

**Dependencies/Blockers:**
- Ticket 022 (topic JSON files) complete
- TopicCard component available

---

## Ticket 029: Implement Topic Detail Pages (/topics/[topicSlug])

**Issue Type:** Story
**Summary:** Build Topic Pages with Sections, Related Steps, Glossary, Resources

**Description/Context:**
Each topic page renders its full content sections, related steps, glossary terms, and resources. The 7 topics (prayer, purification, quran, beliefs, fasting, character, community) each have 4-6 content sections.

**Scope:**
- In scope: Breadcrumb (Topics > Topic Name), topic header with title, intro from description, content sections rendered with H2 headings and markdown content, related steps as StepCard links, related glossary terms list, related resources as ResourceCards, generateStaticParams from real topic data
- Out of scope: Inline GlossaryTooltip integration (future enhancement)

**Acceptance Criteria:**
- Loads topic data and renders all sections
- Breadcrumb navigation
- Content sections with proper heading hierarchy
- Related steps displayed as links
- Glossary terms listed with definitions
- Resources displayed
- generateStaticParams uses real topic IDs
- Also update /ramadan and /mental-health pages to render fasting and community topics (or redirect)
- Accessible: heading hierarchy, semantic HTML

**Dependencies/Blockers:**
- Ticket 022 (topic files, glossary, resources) complete
- Breadcrumb, Card components available

---

## Ticket 030: Implement Glossary Page (/glossary)

**Issue Type:** Story
**Summary:** Build Glossary with Search/Filter, Alphabetical Grouping, See Also Links

**Description/Context:**
The Glossary page needs to be a fully interactive, searchable A-Z reference of 42+ Islamic terms. It should load from glossary.json and provide real-time client-side filtering.

**Scope:**
- In scope: Page title with subtitle, SearchBar for real-time filtering, alphabetical grouping with letter headings (H2), term entries showing term name, Arabic text, transliteration, definition, and "see also" links, "No terms found" empty state, client-side filtering (mark as "use client"), aria-live for filter result announcements
- Out of scope: Alphabetical index jump links (V2), pagination

**Acceptance Criteria:**
- Loads all 42+ glossary terms from content data
- SearchBar filters terms in real-time as user types
- Terms grouped alphabetically with letter headings
- Each term shows: name (bold), Arabic script, transliteration, definition, see also links
- See also links scroll to or highlight related terms
- "No terms found" message when filter yields no results
- aria-live announces result count on filter
- Accessible: definition list semantics, keyboard nav, screen reader friendly

**Dependencies/Blockers:**
- Ticket 022 (glossary.json) complete
- SearchBar component available

---

## Ticket 031: Implement Resources Hub Page (/resources)

**Issue Type:** Story
**Summary:** Build Resources Page with Category Filter, Featured Masjid Finder, Resource Cards

**Description/Context:**
The Resources Hub displays 25+ curated resources with category filtering (All, Articles, Videos, Apps, Books, Community, PDF). Features a prominent "Find a Masjid" banner at top.

**Scope:**
- In scope: Page title with description, featured "Find a Masjid" banner/card linking to /resources/find-masjid, category filter tabs/pills (All | Articles | Videos | Apps | Books | Community | PDF), ResourceCard grid filtered by selected category, instant client-side filtering
- Out of scope: Pagination, server-side filtering

**Acceptance Criteria:**
- Loads all 25+ resources from content data
- Featured Masjid Finder banner at top
- Category filter with all resource types
- Filtering is instant, client-side
- ResourceCards show title, type badge, description, external link
- "No resources in this category" empty state
- Filter uses accessible tab/button pattern (aria-pressed or role="tab")
- Responsive layout
- Accessible: keyboard nav for filters, descriptive link text

**Dependencies/Blockers:**
- Ticket 022 (resources.json) complete
- ResourceCard component available

---

## Ticket 032: Implement Masjid Finder Page (/resources/find-masjid)

**Issue Type:** Story
**Summary:** Build Masjid Finder with Search, List, Offline Notice (Map Placeholder)

**Description/Context:**
The Masjid Finder provides a searchable list of 12+ Toronto-area mosques. Includes search by name/city/postal code, a list of masjid cards with contact details, and a map placeholder area.

**Scope:**
- In scope: Page title with subtitle, SearchBar for filtering by name/city/postal code, masjid list with name, address, city/province, phone (tel: link), website (external link), notes, map placeholder area with message "Map coming soon" (actual Google Maps integration is separate), offline notice (conditional), "What to expect" link to community topic/step, aria-live for search results count
- Out of scope: Google Maps JavaScript API integration (future ticket), geolocation

**Acceptance Criteria:**
- Loads all 12+ masjids from content data
- SearchBar filters masjids in real-time
- Each masjid shows: name, address, city/province/postal code, phone as tel: link, website as external link, notes
- "No masjids found" empty state for search
- Map placeholder area styled with message
- Offline notice conditionally shown
- Link to community step/topic
- Accessible: list semantics, tel: links, descriptive text

**Dependencies/Blockers:**
- Ticket 022 (masjids.json) complete
- SearchBar component available

---

## Ticket 033: Implement Ramadan Guide Page (/ramadan)

**Issue Type:** Story
**Summary:** Build Dedicated Ramadan Guide with Full Content Sections

**Description/Context:**
The Ramadan Guide is a standalone page with extensive content covering fasting basics, preparation, daily life during Ramadan, Tarawih, Eid al-Fitr, and resources. Per the pagelist spec, this is a comprehensive guide, not just a redirect to the fasting topic.

**Scope:**
- In scope: Page title "Ramadan Guide" (H1) with tagline, intro explaining Ramadan, "For New Muslims" reassurance section, fasting basics (suhoor, iftar, rules, exemptions), preparing for Ramadan (tips list), during Ramadan (spiritual practices, survival tips), Tarawih and community section, Laylat al-Qadr brief mention, Eid al-Fitr section, Ramadan-specific resources, callout boxes for tips, cross-link to fasting step/topic
- Out of scope: Dynamic prayer time calculation

**Acceptance Criteria:**
- All 10 content sections from pagelist spec present
- Content is warm, beginner-friendly, encouraging
- Uses Callout components for tips and emphasis
- Bullet lists for actionable advice
- Resources section with relevant ResourceCards
- Cross-links to fasting step and topic
- Accessible: clear heading hierarchy, semantic lists
- Fully static, cacheable for offline

**Dependencies/Blockers:**
- Ticket 022 (content data) complete
- Callout component available

---

## Ticket 034: Implement Mental Health Guide Page (/mental-health)

**Issue Type:** Story
**Summary:** Build Mental Health Guide with Validation, Coping Strategies, Crisis Resources

**Description/Context:**
The Mental Health Guide validates emotional challenges for new Muslims and provides coping strategies and support resources. This is a sensitive page requiring careful, empathetic content with crisis helpline numbers.

**Scope:**
- In scope: Page title "Taking Care of Your Mind" (H1), emotional validation section, Islamic framing section (faith + professional help), common experiences (loneliness, family conflict, identity, doubts) with advice, practical self-care strategies list, "When to Seek Help" section with warning signs, disclaimer (not medical advice), crisis resources with tel: links (hotlines), support directories and educational resources
- Out of scope: Chat functionality, professional referral system

**Acceptance Criteria:**
- All 8 content sections from pagelist spec present
- Empathetic, non-judgmental tone throughout
- Crisis helpline numbers as clickable tel: links
- Warning signs clearly listed
- Disclaimer present
- Uses Callout for emphasis ("You are not alone")
- Accessible: clear headings, high contrast, plain language
- Phone numbers readable as text AND clickable

**Dependencies/Blockers:**
- No data dependency (content is hardcoded for this sensitive page)
- Callout component available

---

## Ticket 035: Implement Static Info Pages (About, Accessibility, Privacy, Terms, Sources)

**Issue Type:** Story
**Summary:** Build Full Content for 5 Static Info/Legal Pages

**Description/Context:**
Five static pages need full content per the pagelist spec: About (mission, approach, disclaimer), Accessibility Statement (WCAG compliance, features, feedback), Privacy Policy (data practices, cookies, third parties), Terms of Use (disclaimers, IP, liability), and Sources (citations, bibliography).

**Scope:**
- In scope: About page with mission, approach (bullet points), disclaimer, contact info; Accessibility page with commitment, standards, features list, known limitations, feedback mechanism, last updated date; Privacy page with effective date, data collection statement, cookies, third parties, children's privacy, changes, contact; Terms page with effective date, acceptance, content disclaimer, medical disclaimer, IP, liability, governing law, changes, external links; Sources page with intro, citation categories (Quran, Hadith, Articles, Books), closing note
- Out of scope: Dynamic date generation, contact forms

**Acceptance Criteria:**
- Each page has all sections from pagelist spec
- Proper heading hierarchy (H1 for title, H2 for sections)
- Legal pages use formal tone
- About page uses warm, mission-driven tone
- Sources page organized by citation type
- All pages fully static and cacheable
- Accessible: semantic HTML, clear headings
- Passes lint and build

**Dependencies/Blockers:**
- None (static content)

---

## Ticket 036: Implement 404 Page and Offline Fallback Page

**Issue Type:** Story
**Summary:** Enhance 404 Page and Create Offline Fallback Page

**Description/Context:**
The 404 page exists but needs enhancement per spec (add "Return Home" link alongside roadmap link). An offline fallback page needs to be created for when users navigate to uncached pages while offline.

**Scope:**
- In scope: Enhance 404 with both "Return Home" and "Go to Roadmap" links, friendly messaging per spec, create offline fallback page with offline message, suggestions, retry button, link to home
- Out of scope: Service worker registration (separate PWA ticket)

**Acceptance Criteria:**
- 404 page has friendly message, "Return Home" and "Go to Roadmap" links
- Offline fallback page exists with appropriate messaging
- Both pages are accessible and styled consistently
- Decorative icon or illustration (optional)

**Dependencies/Blockers:**
- Button component available

---

## Ticket 037: Update generateStaticParams for All Dynamic Routes

**Issue Type:** Story
**Summary:** Wire generateStaticParams to Real Content Data for All Dynamic Routes

**Description/Context:**
Dynamic route pages currently use hardcoded slug arrays in generateStaticParams. These need to be updated to read from actual content data files so new content is automatically included in static builds.

**Scope:**
- In scope: Update /roadmap/[stageSlug] to generate params from stages.json, update /roadmap/[stageSlug]/[stepSlug] to generate params from steps + stages data, update /topics/[topicSlug] to generate params from topic files, ensure all generated paths match content file IDs/slugs
- Out of scope: New dynamic routes, ISR

**Acceptance Criteria:**
- All dynamic routes generate params from content data
- No hardcoded slug arrays remain
- Build succeeds with all pages generated
- Adding a new content file automatically creates a new page on build

**Dependencies/Blockers:**
- Ticket 022 (content data) complete
- lib/content.ts utility available

---

## Ticket 038: PWA & Service Worker Setup

**Issue Type:** Story
**Summary:** Configure PWA with Service Worker, Manifest, Offline Caching

**Description/Context:**
Set up the Progressive Web App infrastructure: service worker via @serwist/next, web app manifest, precaching strategy, runtime caching, and offline indicator.

**Scope:**
- In scope: Install and configure @serwist/next, create web app manifest (manifest.json) with app name, icons, theme color, configure precaching for app shell and content pages, configure runtime caching (stale-while-revalidate for pages, cache-first for images/data), offline indicator component (banner when navigator.onLine is false), app icons (multiple sizes for PWA)
- Out of scope: Push notifications, background sync, Capacitor-specific builds

**Acceptance Criteria:**
- Service worker generated on build
- App installable as PWA (passes Lighthouse PWA audit)
- Precached pages load offline after first visit
- Offline indicator shows when connection lost
- Manifest properly configured with app metadata
- Cache versioning in place

**Dependencies/Blockers:**
- All page implementations should be complete (so pages can be precached)
- Static export must still work

---

## Ticket 039: SEO, Metadata & Performance Optimization

**Issue Type:** Story
**Summary:** Add Page-Level Metadata, OG Tags, Sitemap, and Performance Tuning

**Description/Context:**
Each page needs proper title, description, and Open Graph metadata for SEO. A sitemap.xml should be generated. Performance optimizations (code splitting, image optimization, bundle analysis) should be verified.

**Scope:**
- In scope: Page-level metadata (title, description) for all 17+ pages, Open Graph tags (og:title, og:description, og:type), generate sitemap.xml, verify code splitting and bundle sizes, Lighthouse audit and fixes (target 90+), print stylesheet verification
- Out of scope: Server-side rendering, dynamic OG images

**Acceptance Criteria:**
- Every page has unique, descriptive title and meta description
- OG tags present for social sharing
- sitemap.xml generated and accessible
- Lighthouse Performance score 90+
- Lighthouse Accessibility score 95+
- Print styles work (nav hidden, content readable)
- No console errors or React warnings

**Dependencies/Blockers:**
- All pages implemented
- PWA setup complete