"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale, useTranslations } from "@/components/LocaleProvider";
import { localizeHref } from "@/lib/i18n";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const linkClass = `flex min-h-[44px] items-center rounded-md text-sm font-medium text-textSecondary no-underline hover:text-primary hover:underline lg:min-h-[36px] ${focusRing}`;

const helpLinkClass = `flex min-h-[44px] items-center rounded-md text-sm font-medium text-textPrimary no-underline hover:underline lg:min-h-[36px] ${focusRing}`;

const telLinkClass = `inline-flex whitespace-nowrap min-h-[44px] items-center rounded-md font-semibold text-textPrimary underline decoration-textPrimary/40 underline-offset-2 hover:text-textPrimary hover:decoration-textPrimary ${focusRing}`;

const groupLabelClass = "mb-2 text-base font-semibold text-textPrimary";

export function Footer() {
  const locale = useLocale();
  const t = useTranslations();

  const link = (path: string, key: string) => ({
    href: localizeHref(locale, path),
    label: t(key),
  });

  const groups = [
    {
      id: "footer-start-here",
      label: t("footer.startHere"),
      className: "col-span-2 md:col-span-1",
      links: [
        link("/roadmap", "nav.roadmap"),
        link("/tools/salah-companion", "nav.salahCompanion"),
        link("/tools/wudu-ghusl", "nav.wuduGhusl"),
        link("/topics/five-pillars", "nav.fivePillars"),
        link("/faq", "nav.faq"),
      ],
    },
    {
      id: "footer-help",
      label: t("footer.help"),
      className: "col-span-2 md:col-span-1",
      links: [
        link("/mental-health", "nav.mentalHealth"),
        link("/ramadan", "nav.ramadan"),
        link("/seasonal", "nav.seasonal"),
      ],
    },
    {
      id: "footer-explore",
      label: t("footer.explore"),
      className: "",
      links: [
        link("/topics", "nav.topics"),
        link("/guides", "nav.guides"),
        link("/glossary", "nav.glossary"),
        link("/resources", "nav.resources"),
        link("/resources/find-masjid", "nav.findMasjid"),
        link("/events", "nav.events"),
        link("/community-groups", "nav.communityGroups"),
      ],
    },
    {
      id: "footer-about",
      label: t("footer.about"),
      className: "",
      links: [
        link("/about", "nav.aboutUs"),
        link("/accessibility", "nav.accessibility"),
        link("/privacy", "nav.privacy"),
        link("/terms", "nav.terms"),
        link("/sources", "nav.sources"),
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface print:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-5 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3 xl:col-span-4">
            <Link
              prefetch={false}
              href={localizeHref(locale, "/")}
              className={`inline-flex min-h-[44px] items-center gap-3 rounded-lg text-textPrimary no-underline hover:text-primary ${focusRing}`}
            >
              <Image
                src="/revert-guide-logo.webp"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-lg"
              />
              <span className="font-display text-xl font-semibold tracking-tight">
                {t("brand.name")}
              </span>
            </Link>
            <p className="mb-0 mt-3 max-w-xs text-sm leading-relaxed text-textSecondary">
              {t("footer.description")}
            </p>
          </div>

          <nav
            aria-label={t("footer.navigationAriaLabel")}
            className="lg:col-span-9 xl:col-span-8"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[1fr_1.2fr_1fr_1fr] lg:gap-x-6">
              {groups.map((group) => {
                const isHelp = group.id === "footer-help";
                const list = (
                  <>
                    <p id={group.id} className={groupLabelClass}>
                      {group.label}
                    </p>
                    <ul
                      aria-labelledby={group.id}
                      className="mb-0 list-none pl-0"
                    >
                      {isHelp && (
                        <li className="mb-2">
                          <Link
                            prefetch={false}
                            href={localizeHref(locale, "/get-help")}
                            className={`flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-4 text-base font-semibold text-white no-underline shadow-soft hover:bg-primaryHover hover:text-white ${focusRing}`}
                          >
                            {t("nav.getHelp")}
                          </Link>
                        </li>
                      )}
                      {group.links.map((item) => (
                        <li key={item.href} className="mb-0">
                          <Link
                            prefetch={false}
                            href={item.href}
                            className={isHelp ? helpLinkClass : linkClass}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                );

                if (!isHelp) {
                  return (
                    <div key={group.id} className={group.className}>
                      {list}
                    </div>
                  );
                }

                return (
                  <div
                    key={group.id}
                    className={`${group.className} self-start rounded-2xl border border-oliveAccent/60 bg-accentYellow p-5 lg:p-4`}
                  >
                    {list}
                    <p className="mb-0 mt-3 border-t border-oliveAccent/60 pt-2 text-sm text-textPrimary">
                      <span className="flex flex-wrap items-center gap-x-1">
                        {t("footer.crisisDanger")}
                        <a href="tel:911" className={telLinkClass}>
                          {t("footer.crisisCall911")}
                        </a>
                      </span>
                      <span className="flex flex-wrap items-center gap-x-1">
                        {t("footer.crisisMentalHealth")}
                        <a href="tel:988" className={telLinkClass}>
                          {t("footer.crisisCall988")}
                        </a>
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="text-sm text-textSecondary">
            <p className="mb-1 text-sm">
              &copy; {new Date().getFullYear()} {t("footer.copyright")}
            </p>
            <p className="mb-0 text-sm">{t("footer.orientation")}</p>
          </div>
          <div className="shrink-0 [&>label:focus-within]:outline [&>label:focus-within]:outline-2 [&>label:focus-within]:outline-offset-2 [&>label:focus-within]:outline-primary [&>label]:min-h-[44px] [&>label]:w-full md:[&>label]:w-auto [&>label]:py-0 [&_select]:min-h-[44px] [&_select]:flex-1 [&_span]:text-textSecondary">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
