import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-dots opacity-[0.02]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-5 pb-8 pt-16 text-center md:pb-12 md:pt-24">
          {/* Logo mark */}
          <AnimateIn animation="fade-in">
            <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center md:h-48 md:w-48">
              <Image
                src="/revert-guide-logo.png"
                alt="Revert Guide logo"
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
                className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft"
                aria-hidden="true"
              />
              Free &amp; Offline-First
            </span>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={0.15}>
            <h1 className="mb-5 font-display text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl lg:text-6xl">
              Welcome to <span className="text-gradient">the Family</span>
            </h1>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={0.25}>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-textSecondary">
              Your journey begins here, and we are honored to walk alongside
              you. This guide will help you take your first steps with clarity,
              warmth, and practical advice.
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={0.35}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/roadmap" className="px-8 py-4 text-lg">
                Begin Your Journey
              </Button>
              <Button href="/topics" variant="outline" className="px-6">
                Explore Topics
              </Button>
            </div>
          </AnimateIn>
        </div>

        {/* Character procession band */}
        <AnimateIn animation="fade-in" delay={0.5}>
          <div className="relative mx-auto mt-8 max-w-3xl px-5 md:mt-12">
            <div
              className="flex items-end justify-center gap-2 sm:gap-4 md:gap-8"
              aria-hidden="true"
            >
              <div
                className="h-[100px] w-[60px] animate-float sm:h-[140px] sm:w-[80px] md:h-[200px] md:w-[110px]"
                style={{ animationDelay: "0.5s" }}
              >
                <Image
                  src="/Grandmother female Character Standing.png"
                  alt=""
                  fill
                  className="!relative object-contain object-bottom drop-shadow-md"
                  aria-hidden="true"
                />
              </div>
              <div
                className="h-[120px] w-[70px] animate-float sm:h-[160px] sm:w-[90px] md:h-[240px] md:w-[130px]"
                style={{ animationDelay: "1s" }}
              >
                <Image
                  src="/Adult female Character Standing.png"
                  alt=""
                  fill
                  className="!relative object-contain object-bottom drop-shadow-md"
                  aria-hidden="true"
                  priority
                />
              </div>
              <div
                className="h-[80px] w-[50px] animate-float sm:h-[110px] sm:w-[70px] md:h-[160px] md:w-[95px]"
                style={{ animationDelay: "2.5s" }}
              >
                <Image
                  src="/Kid standing with right hand up.png"
                  alt=""
                  fill
                  className="!relative object-contain object-bottom drop-shadow-md"
                  aria-hidden="true"
                />
              </div>
              <div
                className="h-[130px] w-[75px] animate-float sm:h-[170px] sm:w-[95px] md:h-[250px] md:w-[135px]"
                style={{ animationDelay: "1.8s" }}
              >
                <Image
                  src="/Adult male Character Standing.png"
                  alt=""
                  fill
                  className="!relative object-contain object-bottom drop-shadow-md"
                  aria-hidden="true"
                  priority
                />
              </div>
              <div
                className="h-[110px] w-[65px] animate-float sm:h-[150px] sm:w-[85px] md:h-[210px] md:w-[115px]"
                style={{ animationDelay: "3.2s" }}
              >
                <Image
                  src="/Grandfather male Character Standing.png"
                  alt=""
                  fill
                  className="!relative object-contain object-bottom drop-shadow-md"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Thin decorative line */}
      <div className="border-t border-border/30" aria-hidden="true" />

      {/* ── Entry Path Cards (horizontal navigation bars) ── */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <AnimateIn className="text-center">
          <h2 className="mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl">
            Where Are You on Your Journey?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-textSecondary">
            Everyone starts somewhere different. Pick the path that feels right
            for you.
          </p>
        </AnimateIn>

        <div className="flex flex-col gap-4">
          <AnimateIn delay={0.1}>
            <Link
              href="/roadmap/day-0-1"
              className="group flex items-center gap-5 rounded-xl border border-border/60 border-l-4 border-l-accentYellow bg-white px-5 py-5 no-underline shadow-card transition-all duration-300 ease-out-expo hover:shadow-card-hover hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong sm:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accentYellow/40 to-secondaryGreen/30 text-primary">
                <Icon name="star" size="lg" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 mt-0 text-lg font-semibold text-textPrimary">
                  Just Took Shahada?
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  Congratulations! Start here for your very first steps — from
                  understanding what you just declared to performing Ghusl and
                  embracing your fresh start.
                </p>
              </div>
              <span className="shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                <Icon name="chevron-right" size="lg" />
              </span>
            </Link>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <Link
              href="/roadmap/week-1"
              className="group flex items-center gap-5 rounded-xl border border-border/60 border-l-4 border-l-primaryGreen bg-white px-5 py-5 no-underline shadow-card transition-all duration-300 ease-out-expo hover:shadow-card-hover hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong sm:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primaryGreen/30 to-surfaceElevated text-primary">
                <Icon name="book" size="lg" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 mt-0 text-lg font-semibold text-textPrimary">
                  Been Muslim a Few Weeks?
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  You have taken the leap and now want to build strong
                  foundations. Jump into learning prayer, connecting with
                  community, and building daily habits.
                </p>
              </div>
              <span className="shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                <Icon name="chevron-right" size="lg" />
              </span>
            </Link>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <Link
              href="/topics"
              className="group flex items-center gap-5 rounded-xl border border-border/60 border-l-4 border-l-primary bg-white px-5 py-5 no-underline shadow-card transition-all duration-300 ease-out-expo hover:shadow-card-hover hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong sm:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-surfaceElevated to-primaryGreen/20 text-primary">
                <Icon name="search" size="lg" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 mt-0 text-lg font-semibold text-textPrimary">
                  Looking for Specific Topics?
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  Explore topics like prayer, fasting, beliefs, and community at
                  your own pace. Browse the glossary or dive into what interests
                  you most right now.
                </p>
              </div>
              <span className="shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                <Icon name="chevron-right" size="lg" />
              </span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Thin decorative line */}
      <div className="border-t border-border/30" aria-hidden="true" />

      {/* ── Brief Introduction (pull-quote editorial style) ── */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <AnimateIn>
          {/* Decorative quotation mark */}
          <div
            className="mx-auto mb-6 font-display text-6xl leading-none text-primaryGreen/40 md:text-7xl"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <p className="mb-0 font-display text-xl italic leading-relaxed text-textPrimary md:text-2xl">
            <strong className="not-italic">Revert Guide</strong> is a free,
            step-by-step companion for anyone who has recently embraced Islam.
            Whether you are just learning to pray or preparing for your first
            Ramadan, this guide meets you where you are — with practical
            actions, gentle encouragement, and zero judgment.
          </p>
        </AnimateIn>
      </section>

      {/* Thin decorative line */}
      <div className="border-t border-border/30" aria-hidden="true" />

      {/* ── Trust Signal (full-width thin banner) ── */}
      <section className="mx-auto max-w-4xl px-5 py-10">
        <AnimateIn>
          <div className="flex items-center justify-center gap-3 border border-dashed border-primaryGreen/40 bg-white px-6 py-4 text-center">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Icon name="check" size="md" className="text-primary" />
            </span>
            <p className="mb-0 text-sm font-medium text-textSecondary">
              No ads, no tracking, no accounts required — just support for your
              journey.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* Thin decorative line */}
      <div className="border-t border-border/30" aria-hidden="true" />

      {/* ── Quick Access (3-column grid with top accent bar) ── */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <AnimateIn>
          <h2 className="mb-10 mt-0 text-center font-display text-2xl font-semibold tracking-tight text-textPrimary">
            Quick Access
          </h2>
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-3">
          <AnimateIn delay={0.1}>
            <Link
              href="/ramadan"
              className="group block overflow-hidden rounded-2xl border border-border/60 bg-white no-underline shadow-card transition-all duration-300 ease-out-expo hover:border-primaryGreen/50 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
            >
              {/* Top accent gradient bar */}
              <div
                className="h-1 w-full bg-gradient-to-r from-accentYellow via-secondaryGreen to-primaryGreen"
                aria-hidden="true"
              />
              <div className="p-5">
                <span className="block text-base font-semibold text-textPrimary">
                  Ramadan Guide
                </span>
                <span className="mt-1 block text-sm text-textSecondary">
                  Prepare for your first fast
                </span>
              </div>
            </Link>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <Link
              href="/mental-health"
              className="group block overflow-hidden rounded-2xl border border-border/60 bg-white no-underline shadow-card transition-all duration-300 ease-out-expo hover:border-primaryGreen/50 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
            >
              {/* Top accent gradient bar */}
              <div
                className="h-1 w-full bg-gradient-to-r from-primaryGreen via-primary to-primaryHover"
                aria-hidden="true"
              />
              <div className="p-5">
                <span className="block text-base font-semibold text-textPrimary">
                  Mental Health Tips
                </span>
                <span className="mt-1 block text-sm text-textSecondary">
                  Support for the inner journey
                </span>
              </div>
            </Link>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <Link
              href="/resources/find-masjid"
              className="group block overflow-hidden rounded-2xl border border-border/60 bg-white no-underline shadow-card transition-all duration-300 ease-out-expo hover:border-primaryGreen/50 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
            >
              {/* Top accent gradient bar */}
              <div
                className="h-1 w-full bg-gradient-to-r from-primary via-primaryGreen to-secondaryGreen"
                aria-hidden="true"
              />
              <div className="p-5">
                <span className="block text-base font-semibold text-textPrimary">
                  Find a Masjid
                </span>
                <span className="mt-1 block text-sm text-textSecondary">
                  Mosques near Toronto
                </span>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
