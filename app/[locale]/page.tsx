import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "home");
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["home"]>("pages.home");
  const paths = [
    {
      ...copy.paths[0],
      href: "/roadmap/day-0-1",
      icon: "star" as const,
      accent:
        "border-l-4 border-l-accentYellow bg-gradient-to-br from-accentYellow/40 to-secondaryGreen/30",
    },
    {
      ...copy.paths[1],
      href: "/roadmap/week-1",
      icon: "book" as const,
      accent:
        "border-l-4 border-l-primaryGreen bg-gradient-to-br from-primaryGreen/30 to-surfaceElevated",
    },
    {
      ...copy.paths[2],
      href: "/topics",
      icon: "search" as const,
      accent:
        "border-l-4 border-l-primary bg-gradient-to-br from-surfaceElevated to-primaryGreen/20",
    },
  ];
  const quickLinks = [
    {
      ...copy.quickLinks[0],
      href: "/ramadan",
      bar: "bg-gradient-to-r from-accentYellow via-secondaryGreen to-primaryGreen",
    },
    {
      ...copy.quickLinks[1],
      href: "/mental-health",
      bar: "bg-gradient-to-r from-primaryGreen via-primary to-primaryHover",
    },
    {
      ...copy.quickLinks[2],
      href: "/resources/find-masjid",
      bar: "bg-gradient-to-r from-primary via-primaryGreen to-secondaryGreen",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-dots opacity-[0.02]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-5 pb-8 pt-16 text-center md:pb-12 md:pt-24">
          <AnimateIn animation="fade-in">
            <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center md:h-48 md:w-48">
              <Image
                src="/revert-guide-logo.png"
                alt={copy.logoAlt}
                width={192}
                height={192}
                className="h-full w-full"
                priority
              />
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={0.05}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span
                className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary"
                aria-hidden="true"
              />
              {copy.badge}
            </span>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={0.15}>
            <h1 className="mb-5 font-display text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl lg:text-6xl">
              {copy.title}{" "}
              <span className="text-gradient">{copy.titleHighlight}</span>
            </h1>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={0.25}>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-textSecondary">
              {copy.subtitle}
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={0.35}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={localizeHref(locale, "/roadmap")}
                className="px-8 py-4 text-lg"
              >
                {t("common.beginJourney")}
              </Button>
              <Button
                href={localizeHref(locale, "/topics")}
                variant="outline"
                className="px-6"
              >
                {copy.exploreTopics}
              </Button>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn animation="fade-in" delay={0.5}>
          <div className="relative mx-auto mt-8 max-w-3xl px-5 md:mt-12">
            <div
              className="flex items-end justify-center gap-2 sm:gap-4 md:gap-8"
              aria-hidden="true"
            >
              {[
                {
                  src: "/Grandmother female Character Standing.png",
                  className:
                    "h-[100px] w-[60px] sm:h-[140px] sm:w-[80px] md:h-[200px] md:w-[110px]",
                  delay: "0.5s",
                },
                {
                  src: "/Adult female Character Standing.png",
                  className:
                    "h-[120px] w-[70px] sm:h-[160px] sm:w-[90px] md:h-[240px] md:w-[130px]",
                  delay: "1s",
                },
                {
                  src: "/Kid standing with right hand up.png",
                  className:
                    "h-[80px] w-[50px] sm:h-[110px] sm:w-[70px] md:h-[160px] md:w-[95px]",
                  delay: "2.5s",
                },
                {
                  src: "/Adult male Character Standing.png",
                  className:
                    "h-[130px] w-[75px] sm:h-[170px] sm:w-[95px] md:h-[250px] md:w-[135px]",
                  delay: "1.8s",
                },
                {
                  src: "/Grandfather male Character Standing.png",
                  className:
                    "h-[110px] w-[65px] sm:h-[150px] sm:w-[85px] md:h-[210px] md:w-[115px]",
                  delay: "3.2s",
                },
              ].map((item, index) => (
                <div
                  key={item.src}
                  className={`${item.className} animate-float`}
                  style={{ animationDelay: item.delay }}
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="!relative object-contain object-bottom drop-shadow-md"
                    aria-hidden="true"
                    priority={index === 1 || index === 3}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      <div className="border-t border-border/30" aria-hidden="true" />

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <AnimateIn className="text-center">
          <h2 className="mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl">
            {copy.pathsTitle}
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-textSecondary">
            {copy.pathsSubtitle}
          </p>
        </AnimateIn>

        <div className="flex flex-col gap-4">
          {paths.map((path, index) => (
            <AnimateIn key={path.href} delay={0.1 + index * 0.1}>
              <Link
                href={localizeHref(locale, path.href)}
                className={`group flex items-center gap-5 rounded-xl border border-border/60 bg-white px-5 py-5 no-underline shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong sm:px-6 ${path.accent.split(" ")[0]} ${path.accent.split(" ")[1]}`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary ${path.accent.slice(path.accent.indexOf("bg-"))}`}
                >
                  <Icon name={path.icon} size="lg" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 mt-0 text-lg font-semibold text-textPrimary">
                    {path.title}
                  </h3>
                  <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {path.body}
                  </p>
                </div>
                <span className="shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                  <Icon name="chevron-right" size="lg" />
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      <div className="border-t border-border/30" aria-hidden="true" />

      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <AnimateIn>
          <div
            className="mx-auto mb-6 font-display text-6xl leading-none text-primaryGreen/40 md:text-7xl"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <p className="mb-0 font-display text-xl italic leading-relaxed text-textPrimary md:text-2xl">
            {copy.intro}
          </p>
        </AnimateIn>
      </section>

      <div className="border-t border-border/30" aria-hidden="true" />

      <section className="mx-auto max-w-4xl px-5 py-10">
        <AnimateIn>
          <div className="flex items-center justify-center gap-3 border border-dashed border-primaryGreen/40 bg-white px-6 py-4 text-center">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Icon name="check" size="md" className="text-primary" />
            </span>
            <p className="mb-0 text-sm font-medium text-textSecondary">
              {copy.trust}
            </p>
          </div>
        </AnimateIn>
      </section>

      <div className="border-t border-border/30" aria-hidden="true" />

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <AnimateIn>
          <h2 className="mb-10 mt-0 text-center font-display text-2xl font-semibold tracking-tight text-textPrimary">
            {copy.quickAccess}
          </h2>
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-3">
          {quickLinks.map((link, index) => (
            <AnimateIn key={link.href} delay={0.1 + index * 0.1}>
              <Link
                href={localizeHref(locale, link.href)}
                className="group block overflow-hidden rounded-2xl border border-border/60 bg-white no-underline shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-primaryGreen/50 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
              >
                <div className={`h-1 w-full ${link.bar}`} aria-hidden="true" />
                <div className="p-5">
                  <span className="block text-base font-semibold text-textPrimary">
                    {link.title}
                  </span>
                  <span className="mt-1 block text-sm text-textSecondary">
                    {link.body}
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
