import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata = {
  title: "Accessibility Statement - Revert Guide",
  description:
    "Revert Guide's commitment to digital accessibility, WCAG 2.1 AA compliance, AODA standards, and how to report accessibility issues.",
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
      />

      <AnimateIn>
        <h1 className="mb-10 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          Accessibility
        </h1>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="commitment">
          <h2
            id="commitment"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Our Commitment
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            We are committed to making Revert Guide accessible to all users,
            regardless of ability. This site meets WCAG 2.1 Level AA criteria
            and complies with the Accessibility for Ontarians with Disabilities
            Act (AODA) requirements. We believe that everyone deserves access to
            guidance and support on their spiritual journey.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="standards">
          <h2
            id="standards"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Standards
          </h2>
          <ul className="flex flex-col gap-3 pl-0 text-base text-textSecondary">
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Accessibility for Ontarians with Disabilities Act (AODA)
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Tested with screen readers including NVDA, JAWS, and VoiceOver
              </span>
            </li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="features">
          <h2
            id="features"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Accessibility Features
          </h2>
          <ul className="flex flex-col gap-3 pl-0 text-base text-textSecondary">
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Full keyboard navigation throughout the site — all functionality
                is reachable via keyboard
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Screen reader support with semantic HTML and ARIA attributes
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Sufficient colour contrast meeting WCAG AA requirements (4.5:1
                for normal text, 3:1 for large text)
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>Skip-to-content link to bypass navigation</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Descriptive link text — no &quot;click here&quot; links
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>Alternative text on all meaningful images</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Offline accessibility — content is cached and available without
                internet
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Responsive design that works on mobile devices and desktop
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>Clear heading structure for easy navigation</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>Visible focus indicators on all interactive elements</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span
                className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>Logical tab order throughout all pages</span>
            </li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="limitations">
          <h2
            id="limitations"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Known Limitations
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            The embedded Google Maps feature on the Find a Masjid page (when
            available) is provided by Google and may not be fully accessible to
            screen reader users. However, all location information is available
            in the accessible text list of masjids on the same page.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="feedback">
          <h2
            id="feedback"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Feedback
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            If you encounter any accessibility barriers while using Revert
            Guide, we want to hear from you. Please use the feedback options
            within the app to report any issues. We appreciate your input and
            will work to address accessibility concerns promptly.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section aria-labelledby="last-updated">
          <h2
            id="last-updated"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Last Updated
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            This accessibility statement was last reviewed on March 2026.
          </p>
        </section>
      </AnimateIn>
    </div>
  );
}
