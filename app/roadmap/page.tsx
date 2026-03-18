import Image from "next/image";
import { getAllStages } from "@/lib/content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import Link from "next/link";

export const metadata = { title: "Your Roadmap - Revert Guide" };

export default function RoadmapPage() {
  const stages = getAllStages();

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Roadmap" }]}
      />

      {/* Header */}
      <header className="mb-16 text-center">
        <AnimateIn>
          <div className="mb-5 flex justify-center" aria-hidden="true">
            <Image
              src="/revert-guide-logo.png"
              alt=""
              width={48}
              height={48}
              className="animate-float"
              aria-hidden="true"
            />
          </div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Icon name="star" size="sm" />
            Your Path Forward
          </span>
          <h1 className="mb-4 font-display text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl">
            Your Roadmap
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-textSecondary">
            A timeline-based guide from your first day as a Muslim through the
            first six months and beyond. Each stage builds on the last — follow
            them in order or jump to wherever feels right.
          </p>
        </AnimateIn>
      </header>

      {/* Vertical Journey Timeline */}
      <div className="relative" role="list" aria-label="Journey stages">
        {/* Vertical connecting line */}
        <div
          className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-primary/40 via-primaryGreen/50 to-secondaryGreen/40 md:left-1/2 md:-translate-x-px"
          aria-hidden="true"
        />

        {stages.map((stage, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={stage.id}
              role="listitem"
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline node circle */}
              <div
                className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-elevated md:left-1/2"
                aria-hidden="true"
              >
                {index + 1}
              </div>

              {/* Card — alternates sides on desktop */}
              <AnimateIn
                delay={index * 0.1}
                animation={isEven ? "fade-up" : "slide-in-right"}
                className={`pl-16 md:w-[calc(50%-2rem)] ${
                  isEven
                    ? "md:mr-auto md:pl-0 md:pr-10"
                    : "md:ml-auto md:pl-10 md:pr-0"
                }`}
              >
                <Link
                  href={`/roadmap/${stage.id}`}
                  className="group block rounded-2xl border border-border/60 bg-white p-6 shadow-card no-underline transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primaryGreen/60 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
                >
                  <div className="relative overflow-hidden">
                    {/* Decorative gradient blob */}
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primaryGreen/15 transition-transform duration-500 group-hover:scale-150"
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <h3 className="mb-2 mt-0 font-display text-xl font-semibold text-textPrimary transition-colors duration-200 group-hover:text-primary">
                        {stage.title}
                      </h3>
                      <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                        {stage.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-surfaceElevated px-3 py-1 text-xs font-medium text-textMuted">
                          <Icon name="clock" size="sm" />
                          {stage.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          Explore
                          <Icon name="chevron-right" size="sm" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            </div>
          );
        })}

        {/* Final encouragement node */}
        <div className="relative pb-2">
          {/* Star circle at end of timeline */}
          <div
            className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-accentYellow/80 to-secondaryGreen shadow-elevated md:left-1/2"
            aria-hidden="true"
          >
            <Icon name="star" size="md" className="text-primary" />
          </div>

          <AnimateIn
            delay={stages.length * 0.1}
            className="pl-16 md:mx-auto md:max-w-md md:pl-0 md:pt-2 md:text-center"
          >
            <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 px-6 py-5 shadow-soft backdrop-blur-sm md:mt-8">
              <p className="mb-0 text-sm text-textSecondary">
                <strong className="text-textPrimary">
                  There is no wrong place to begin.
                </strong>{" "}
                Start where you are and progress at your own pace. Every journey
                is unique, and yours is no exception.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
