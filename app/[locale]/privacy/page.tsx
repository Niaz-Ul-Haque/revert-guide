import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "privacy", "/privacy");
}

export default function PrivacyPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["privacy"]>("pages.privacy");

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <AnimateIn>
        <h1 className="mb-2 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          {copy.title}
        </h1>
        <p className="mb-10 text-sm text-textMuted">{copy.effective}</p>
      </AnimateIn>

      {copy.policySections.map((section) => (
        <AnimateIn key={section.id}>
          <section className="mb-10" aria-labelledby={section.id}>
            <h2
              id={section.id}
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-2 text-base leading-relaxed text-textSecondary last:mb-0"
              >
                {paragraph}
              </p>
            ))}
            {section.id === "contact" ? (
              <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-base">
                <Link
                  href={localizeHref(locale, "/get-help")}
                  className="inline-flex min-h-[44px] items-center font-medium text-primary hover:text-primaryHover"
                >
                  {copy.contactLinks.getHelpLabel}
                </Link>
                <span className="inline-flex min-h-[44px] items-center gap-1 text-textSecondary">
                  {copy.contactLinks.emailLabel}{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-primary hover:text-primaryHover"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </p>
            ) : null}
            {"items" in section && section.items ? (
              <ul className="mt-4 flex flex-col gap-3 pl-0">
                {section.items.map((item) => (
                  <li
                    key={item.label}
                    className="list-none rounded-xl bg-surfaceElevated/50 p-4 text-base leading-relaxed text-textSecondary"
                  >
                    <strong className="text-textPrimary">{item.label}</strong>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        </AnimateIn>
      ))}
    </div>
  );
}
