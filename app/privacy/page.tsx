import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata = {
  title: "Privacy Policy - Revert Guide",
  description:
    "Privacy Policy for Revert Guide. Learn about our data practices, cookie policy, and commitment to user privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <AnimateIn>
        <h1 className="mb-2 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-textMuted">
          Effective as of January 2026
        </p>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="collection">
          <h2
            id="collection"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            What We Collect
          </h2>
          <p className="mb-2 text-base leading-relaxed text-textSecondary">
            We do not collect personal data or usage analytics in this version
            of Revert Guide. No user data, email addresses, names, or activity
            tracking is gathered.
          </p>
          <p className="text-base leading-relaxed text-textSecondary">
            Future versions may include optional features that collect data. Any
            such changes will be clearly communicated and reflected in an
            updated version of this policy.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="cookies">
          <h2
            id="cookies"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Cookies
          </h2>
          <p className="mb-2 text-base leading-relaxed text-textSecondary">
            Revert Guide uses a service worker for offline caching. This does
            not involve tracking cookies. We do not use analytics cookies (such
            as Google Analytics) or marketing cookies.
          </p>
          <p className="text-base leading-relaxed text-textSecondary">
            The Google Maps feature on the Masjid Finder page may set cookies
            per Google&apos;s own privacy policy. This is beyond our control.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="third-parties">
          <h2
            id="third-parties"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Third Parties
          </h2>
          <p className="mb-2 text-base leading-relaxed text-textSecondary">
            This site uses Google Maps for the Masjid Finder feature. Google may
            collect usage data as described in their privacy policy.
          </p>
          <p className="text-base leading-relaxed text-textSecondary">
            No other third-party trackers or analytics services are used.
            External links are provided for convenience; we are not responsible
            for the privacy practices of external websites.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="children">
          <h2
            id="children"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Children&apos;s Privacy
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            This site is not directed to children under 13. We do not knowingly
            collect information from children under 13.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="changes">
          <h2
            id="changes"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Changes to This Policy
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            If we update this privacy policy, we will post the updated version
            on this page and update the effective date at the top. We encourage
            you to review this policy periodically.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section aria-labelledby="contact">
          <h2
            id="contact"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Contact
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            If you have questions about this privacy policy, please use the
            feedback options within the app.
          </p>
        </section>
      </AnimateIn>
    </div>
  );
}
