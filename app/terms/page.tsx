import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata = {
  title: "Terms of Use - Revert Guide",
  description:
    "Terms of Use for Revert Guide. Understand the conditions for using this educational resource.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <AnimateIn>
        <h1 className="mb-2 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          Terms of Use
        </h1>
        <p className="mb-10 text-sm text-textMuted">
          Effective as of January 2026
        </p>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="acceptance">
          <h2
            id="acceptance"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Acceptance of Terms
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            By accessing and using Revert Guide, you agree to be bound by these
            terms. If you do not agree with any part of these terms, please do
            not use the site.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="content-disclaimer">
          <h2
            id="content-disclaimer"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Content Disclaimer
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            The content provided on Revert Guide is for educational purposes
            about Islam and does not constitute formal religious rulings
            (fatawa) or legal advice. For personal religious decisions, please
            consult a qualified local scholar or imam. While we aim for
            accuracy, we do not guarantee that all information is error-free.
            Use the content at your own discretion.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="medical-disclaimer">
          <h2
            id="medical-disclaimer"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Medical &amp; Health Disclaimer
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            Content about mental health or health-related topics on this site is
            not professional medical or mental health advice. If you are
            experiencing mental health issues or medical concerns, please
            consult a licensed professional. Do not use this guide as a
            substitute for professional medical care.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="ip">
          <h2
            id="ip"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Intellectual Property
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            All content, including text, design, logos, and site structure, is
            the intellectual property of Revert Guide or its contributors. Users
            may view and share links to the site but may not republish, copy,
            modify, or distribute content without permission. Personal,
            non-commercial use is permitted — for example, reading content for
            yourself or sharing a link with a friend.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="liability">
          <h2
            id="liability"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Limitation of Liability
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            Revert Guide is provided &quot;as is&quot; without warranties,
            express or implied. We are not liable for any indirect, incidental,
            or consequential damages arising from your use of the site. Your use
            of this site is at your own risk.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="governing-law">
          <h2
            id="governing-law"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Governing Law
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            These terms are governed by the laws of the Province of Ontario,
            Canada. Any disputes arising from the use of this site are subject
            to the jurisdiction of the courts of Ontario.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="changes">
          <h2
            id="changes"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Changes to These Terms
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            We may update these terms at any time by posting revised terms on
            this page. Continued use of Revert Guide after changes are posted
            constitutes acceptance of the updated terms.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section aria-labelledby="external-links">
          <h2
            id="external-links"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            External Links
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            This site contains links to external websites. We are not
            responsible for the content or practices of those sites. External
            links are provided for convenience and do not imply endorsement.
          </p>
        </section>
      </AnimateIn>
    </div>
  );
}
