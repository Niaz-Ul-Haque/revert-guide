import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllTopics,
  getTopicBySlug,
  getStepById,
  getStageById,
  getGlossaryEntryById,
  getResourcesByTopicId,
} from "@/lib/content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ResourceCard } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import type { Metadata } from "next";

interface TopicPageProps {
  params: { topicSlug: string };
}

export function generateStaticParams() {
  const topics = getAllTopics();
  return topics.map((topic) => ({ topicSlug: topic.slug ?? topic.id }));
}

export function generateMetadata({ params }: TopicPageProps): Metadata {
  const topic = getTopicBySlug(params.topicSlug);
  if (!topic) return { title: "Topic Not Found - Revert Guide" };
  return { title: `${topic.title} - Revert Guide` };
}

function renderContent(content: string) {
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-textPrimary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicBySlug(params.topicSlug);
  if (!topic) notFound();

  const relatedSteps = (topic.relatedStepIds ?? [])
    .map((id) => {
      const step = getStepById(id);
      if (!step) return null;
      const stage = getStageById(step.stageId);
      return step && stage ? { step, stage } : null;
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);

  const glossaryTerms = (topic.relatedGlossaryIds ?? [])
    .map((id) => getGlossaryEntryById(id))
    .filter((g): g is NonNullable<typeof g> => g !== undefined);

  const resources = getResourcesByTopicId(topic.id);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Topics", href: "/topics" },
          { label: topic.title },
        ]}
      />

      {/* Header */}
      <AnimateIn>
        <header className="mb-12">
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {topic.title}
          </h1>
          <p className="text-lg text-textSecondary">{topic.description}</p>
        </header>
      </AnimateIn>

      {/* Content Sections */}
      {topic.sections.map((section, index) => (
        <AnimateIn key={index} delay={index * 0.05}>
          <section className="mb-12" aria-labelledby={`section-${index}`}>
            <h2
              id={`section-${index}`}
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              {section.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-textSecondary">
              {section.content.split("\n\n").map((paragraph, pIndex) => {
                if (paragraph.trim().startsWith("- ")) {
                  const items = paragraph
                    .split("\n")
                    .filter((line) => line.trim().startsWith("- "));
                  return (
                    <ul key={pIndex} className="flex flex-col gap-2.5 pl-0">
                      {items.map((item, iIndex) => (
                        <li
                          key={iIndex}
                          className="flex items-start gap-2.5 text-sm text-textSecondary"
                        >
                          <span
                            className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primaryGreen"
                            aria-hidden="true"
                          />
                          <span>
                            {renderContent(item.replace(/^-\s*/, ""))}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (/^\d+\.\s/.test(paragraph.trim())) {
                  const items = paragraph
                    .split("\n")
                    .filter((line) => /^\d+\.\s/.test(line.trim()));
                  return (
                    <ol key={pIndex} className="flex flex-col gap-3 pl-0">
                      {items.map((item, iIndex) => (
                        <li
                          key={iIndex}
                          className="flex items-start gap-3 text-sm text-textSecondary"
                        >
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary"
                            aria-hidden="true"
                          >
                            {iIndex + 1}
                          </span>
                          <span>
                            {renderContent(item.replace(/^\d+\.\s*/, ""))}
                          </span>
                        </li>
                      ))}
                    </ol>
                  );
                }

                return (
                  <p key={pIndex} className="mb-0">
                    {renderContent(paragraph)}
                  </p>
                );
              })}
            </div>
          </section>
        </AnimateIn>
      ))}

      {/* Related Steps */}
      {relatedSteps.length > 0 && (
        <AnimateIn>
          <section className="mb-12" aria-labelledby="related-steps-heading">
            <h2
              id="related-steps-heading"
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Related Steps
            </h2>
            <div className="flex flex-col gap-3">
              {relatedSteps.map(({ step, stage }) => (
                <Link
                  key={step.id}
                  href={`/roadmap/${stage.id}/${step.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-white p-5 no-underline shadow-card transition-all duration-300 hover:border-primaryGreen/50 hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <Icon
                      name="chevron-right"
                      size="sm"
                      className="text-primary group-hover:text-white"
                    />
                  </span>
                  <div>
                    <p className="mb-0 text-base font-semibold text-textPrimary">
                      {step.title}
                    </p>
                    <p className="mb-0 text-xs text-textMuted">{stage.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </AnimateIn>
      )}

      {/* Related Glossary Terms */}
      {glossaryTerms.length > 0 && (
        <AnimateIn>
          <section className="mb-12" aria-labelledby="glossary-heading">
            <h2
              id="glossary-heading"
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Key Terms
            </h2>
            <dl className="flex flex-col gap-3">
              {glossaryTerms.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5"
                >
                  <dt className="mb-1.5 flex flex-wrap items-baseline gap-2">
                    <Link
                      href={`/glossary#${entry.id}`}
                      className="text-base font-semibold text-primary no-underline hover:underline"
                    >
                      {entry.term}
                    </Link>
                    {entry.arabicText && (
                      <span
                        className="font-arabic text-lg text-textMuted"
                        lang="ar"
                        dir="rtl"
                      >
                        {entry.arabicText}
                      </span>
                    )}
                  </dt>
                  <dd className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {entry.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </AnimateIn>
      )}

      {/* Resources */}
      {resources.length > 0 && (
        <section className="mb-12" aria-labelledby="resources-heading">
          <AnimateIn>
            <h2
              id="resources-heading"
              className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Resources
            </h2>
          </AnimateIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((resource, index) => (
              <AnimateIn key={resource.id} delay={index * 0.06}>
                <ResourceCard
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  url={resource.url}
                />
              </AnimateIn>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
