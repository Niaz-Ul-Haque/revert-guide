import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "about");
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["about"]>("pages.about");

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <div className="relative">
        <AnimateIn>
          <h1 className="mb-10 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
        </AnimateIn>

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

      <AnimateIn>
        <section className="mb-10" aria-labelledby="mission">
          <h2
            id="mission"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.missionTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.mission}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="approach">
          <h2
            id="approach"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.approachTitle}
          </h2>
          <ul className="flex flex-col gap-3 pl-0 text-base text-textSecondary">
            {copy.approachItems.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span
                    className="block h-1.5 w-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <strong className="text-textPrimary">{item.title}</strong> -{" "}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="disclaimer">
          <h2
            id="disclaimer"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.disclaimerTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.disclaimer}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section aria-labelledby="contact">
          <h2
            id="contact"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.contactTitle}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            {copy.contact}
          </p>
        </section>
      </AnimateIn>
    </div>
  );
}
