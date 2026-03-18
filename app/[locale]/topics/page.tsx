import Image from "next/image";
import Link from "next/link";
import { getAllTopics } from "@/lib/content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TopicCard } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import type { IconName } from "@/components/Icon";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const topicIcons: Record<string, IconName> = {
  prayer: "star",
  purification: "check",
  quran: "book",
  beliefs: "lightbulb",
  fasting: "clock",
  character: "users",
  community: "globe",
};

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "topics");
}

export default function TopicsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const topics = getAllTopics(locale);
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["topics"]>("pages.topics");

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.topics") },
        ]}
      />

      <header className="relative mb-14 text-center">
        <AnimateIn>
          <h1 className="mb-4 font-display text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl">
            {t("nav.topics")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-textSecondary">
            {copy.description}
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

      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label={copy.gridLabel}
      >
        {topics.map((topic, index) => (
          <AnimateIn key={topic.id} delay={index * 0.07} className="h-full">
            <div role="listitem" className="h-full">
              <TopicCard
                title={topic.title}
                description={topic.description}
                href={localizeHref(locale, `/topics/${topic.id}`)}
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

      <AnimateIn className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-sm text-textSecondary">
          {copy.footerPrefix}{" "}
          <Link
            href={localizeHref(locale, "/roadmap")}
            className="font-medium text-primary"
          >
            {copy.footerRoadmap}
          </Link>
          . {copy.footerGlossaryPrefix}{" "}
          <Link
            href={localizeHref(locale, "/glossary")}
            className="font-medium text-primary"
          >
            {copy.footerGlossary}
          </Link>
          .
        </p>
      </AnimateIn>
    </div>
  );
}
