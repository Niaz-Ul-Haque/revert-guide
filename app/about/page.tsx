import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata = {
  title: "About - Revert Guide",
  description:
    "Learn about the Revert Guide project, our mission to support new Muslim converts, and our approach to creating compassionate, accessible guidance.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <div className="relative">
        <AnimateIn>
          <h1 className="mb-10 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            About Revert Guide
          </h1>
        </AnimateIn>

        {/* Decorative illustration */}
        <div
          className="pointer-events-none absolute -right-6 top-0 hidden h-48 w-36 opacity-10 lg:block"
          aria-hidden="true"
        >
          <Image
            src="/Grandfather male Character Standing.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Mission */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="mission">
          <h2
            id="mission"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Our Mission
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            Revert Guide exists to support newly converted Muslims with
            compassionate, accessible guidance during their first year of Islam.
            We believe every revert deserves a supportive, non-judgmental space
            to learn and grow at their own pace. Our goal is to provide the
            information, encouragement, and practical tools that new Muslims
            need — all in one place, available offline, and completely free.
          </p>
        </section>
      </AnimateIn>

      {/* Approach */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="approach">
          <h2
            id="approach"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Our Approach
          </h2>
          <ul className="flex flex-col gap-3 pl-0 text-base text-textSecondary">
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <span
                  className="block h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
              </span>
              <span>
                <strong className="text-textPrimary">
                  Educational and beginner-focused
                </strong>{" "}
                — We explain concepts from scratch, assuming no prior knowledge
                of Islam.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <span
                  className="block h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
              </span>
              <span>
                <strong className="text-textPrimary">
                  Mainstream Sunni perspective
                </strong>{" "}
                — Our content follows widely accepted Islamic scholarship
                without sectarian bias.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <span
                  className="block h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
              </span>
              <span>
                <strong className="text-textPrimary">
                  Non-political and inclusive
                </strong>{" "}
                — We focus on faith and practice, welcoming Muslims of all
                cultural backgrounds.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <span
                  className="block h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
              </span>
              <span>
                <strong className="text-textPrimary">
                  Essentials over advanced topics
                </strong>{" "}
                — We prioritise the fundamentals that new Muslims need most,
                leaving advanced jurisprudence to scholars.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <span
                  className="block h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
              </span>
              <span>
                <strong className="text-textPrimary">
                  Ad-free and non-commercial
                </strong>{" "}
                — No ads, no trackers, no monetisation. This is a service, not a
                business.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <span
                  className="block h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
              </span>
              <span>
                <strong className="text-textPrimary">
                  Complementary to local guidance
                </strong>{" "}
                — We encourage connecting with a local mosque and mentor. This
                guide supplements, but does not replace, personal relationships.
              </span>
            </li>
          </ul>
        </section>
      </AnimateIn>

      {/* Disclaimer */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="disclaimer">
          <h2
            id="disclaimer"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Disclaimer
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            This guide provides general educational information about Islam and
            is not a substitute for personal religious rulings (fatawa). For
            specific religious questions about your situation, please consult a
            knowledgeable local scholar or imam. We aim for accuracy, and any
            errors are unintentional.
          </p>
        </section>
      </AnimateIn>

      {/* Contact */}
      <AnimateIn>
        <section aria-labelledby="contact">
          <h2
            id="contact"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Contact
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            If you have questions about Islam, we encourage you to approach a
            local mosque or mentor for personalised guidance. For feedback on
            the guide itself, please use the feedback options within the app.
          </p>
        </section>
      </AnimateIn>
    </div>
  );
}
