import Image from "next/image";
import { getAllTopics } from "@/lib/content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TopicCard } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import type { IconName } from "@/components/Icon";
import Link from "next/link";

export const metadata = { title: "Topics - Revert Guide" };

const topicIcons: Record<string, IconName> = {
  prayer: "star",
  purification: "check",
  quran: "book",
  beliefs: "lightbulb",
  fasting: "clock",
  character: "users",
  community: "globe",
};

export default function TopicsPage() {
  const topics = getAllTopics();

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Topics" }]} />

      {/* Header */}
      <header className="relative mb-14 text-center">
        <AnimateIn>
          <h1 className="mb-4 font-display text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl">
            Topics
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-textSecondary">
            Explore guides on specific subjects to deepen your understanding.
            Each topic is self-contained — start with whatever interests you
            most.
          </p>
        </AnimateIn>

        <div
          className="pointer-events-none absolute -left-10 top-0 hidden h-36 w-28 opacity-10 lg:block"
          aria-hidden="true"
        >
          <Image
            src="/Adult male Character Standing.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </header>

      {/* Topic Cards Grid */}
      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="Topic guides"
      >
        {topics.map((topic, index) => (
          <AnimateIn key={topic.id} delay={index * 0.07} className="h-full">
            <div role="listitem" className="h-full">
              <TopicCard
                title={topic.title}
                description={topic.description}
                href={`/topics/${topic.id}`}
                icon={
                  topicIcons[topic.id] ? (
                    <Icon name={topicIcons[topic.id]} size="md" />
                  ) : undefined
                }
              />
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Secondary Note */}
      <AnimateIn className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-sm text-textSecondary">
          Looking for a step-by-step path?{" "}
          <Link href="/roadmap" className="font-medium text-primary">
            Follow the Roadmap
          </Link>
          . Need a quick term lookup?{" "}
          <Link href="/glossary" className="font-medium text-primary">
            Check the Glossary
          </Link>
          .
        </p>
      </AnimateIn>
    </div>
  );
}
