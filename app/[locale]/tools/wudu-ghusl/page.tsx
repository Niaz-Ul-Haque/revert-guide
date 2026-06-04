import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { PrintButton } from "@/components/PrintButton";
import { SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import {
  DEFAULT_LOCALE,
  getTranslator,
  localizeHref,
  type Locale,
} from "@/lib/i18n";

interface PracticeStep {
  title: string;
  body: string;
  icon: IconName;
}

const sourceIds = [
  "quran-com",
  "new-muslim-guide-wudu",
  "new-muslim-guide-hadath",
  "seekersguidance",
];

const wuduSteps: PracticeStep[] = [
  {
    title: "Set your intention",
    body: "In your heart, intend to make wudu so you can pray. You do not need to say a special formula out loud.",
    icon: "lightbulb",
  },
  {
    title: "Begin with Allah's name",
    body: "Say Bismillah if you remember. If you forget, continue calmly and do not restart out of panic.",
    icon: "star",
  },
  {
    title: "Wash hands",
    body: "Wash both hands up to the wrists, making sure water reaches between the fingers.",
    icon: "check",
  },
  {
    title: "Rinse mouth and nose",
    body: "Rinse the mouth and gently clean the nose. Use a level of water that is comfortable and safe.",
    icon: "check",
  },
  {
    title: "Wash face",
    body: "Wash the face from the hairline to the chin and from ear to ear.",
    icon: "check",
  },
  {
    title: "Wash arms",
    body: "Wash the right arm through the elbow, then the left arm through the elbow.",
    icon: "check",
  },
  {
    title: "Wipe head and ears",
    body: "With wet hands, wipe the head. Many beginner guides also include wiping the ears once.",
    icon: "check",
  },
  {
    title: "Wash feet",
    body: "Wash the right foot through the ankle, then the left foot through the ankle.",
    icon: "check",
  },
];

const ghuslSteps: PracticeStep[] = [
  {
    title: "Set your intention",
    body: "In your heart, intend a full purification bath for Allah. A normal shower can be used when the intention and full washing are present.",
    icon: "lightbulb",
  },
  {
    title: "Wash private areas if needed",
    body: "Clean any area that needs cleaning in a modest, private way before continuing.",
    icon: "check",
  },
  {
    title: "Make wudu",
    body: "Perform wudu as part of the ghusl. If your wudu breaks after the ghusl, make wudu again before prayer.",
    icon: "check",
  },
  {
    title: "Wash head and hair roots",
    body: "Let water reach the scalp and hair roots as best you can. Ask a qualified person about braids, medical needs, or special hair situations.",
    icon: "info",
  },
  {
    title: "Wash the whole body",
    body: "Wash the whole body so water reaches the skin, often starting with the right side and then the left.",
    icon: "check",
  },
];

const wuduBreaks = [
  "Using the restroom or passing wind.",
  "Deep sleep or loss of consciousness.",
  "Some details, such as bleeding or touching private areas, can differ by school of law. Ask a qualified local teacher if this affects you often.",
];

const ghuslNeeded = [
  "After marital intimacy or sexual discharge.",
  "After menstruation or postpartum bleeding ends.",
  "When entering Islam, many scholars recommend or require ghusl. If you already took Shahada and have not done it yet, do it calmly when you can.",
];

const commonCorrections = [
  {
    title: "I keep restarting because I feel unsure.",
    body: "Do the steps once with attention, then move on. Repeating because of anxiety can turn purification into a burden.",
  },
  {
    title: "I forgot one recommended detail.",
    body: "Do not panic. Learn the essentials first and ask a teacher about what is required in your school of law.",
  },
  {
    title: "Water is hard to use because of illness or injury.",
    body: "Ask a qualified person about concessions such as wiping over a bandage or tayammum. Medical harm should be taken seriously.",
  },
  {
    title: "I am confused by different videos.",
    body: "Choose one reliable beginner method and learn it well. Differences in small details do not mean your worship is hopeless.",
  },
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  return {
    title: `Wudu and Ghusl Guide - ${t("brand.name")}`,
    description:
      "A beginner-friendly, print-friendly English guide to wudu, ghusl, common mistakes, and when to ask a qualified person.",
  };
}

function StepGrid({ steps }: { steps: PracticeStep[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card"
        >
          <div className="mb-3 flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon name={step.icon} size="md" />
            </span>
            <div>
              <p className="mb-0 text-xs font-semibold uppercase tracking-wider text-textMuted">
                Step {index + 1}
              </p>
              <h3 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
                {step.title}
              </h3>
            </div>
          </div>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {step.body}
          </p>
        </article>
      ))}
    </div>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="mb-0 flex flex-col gap-2.5 pl-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-textSecondary"
        >
          <span
            className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primaryGreen"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WuduGhuslPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  if (locale !== DEFAULT_LOCALE) notFound();

  const t = getTranslator(locale);
  const sources = getSourcesByIds(sourceIds, locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.tools") },
          { label: t("nav.wuduGhusl") },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="check" size="sm" />
            Worship learning tool
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Wudu and Ghusl Guide
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-textSecondary">
            A simple, print-friendly guide to purification before prayer. Start
            with the essentials, learn calmly, and ask a qualified teacher about
            details that affect your personal situation.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <Button
              href={localizeHref(locale, "/topics/purification")}
              variant="outline"
            >
              Purification topic
              <Icon name="chevron-right" size="sm" />
            </Button>
          </div>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="what-matters-heading"
        >
          <h2
            id="what-matters-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            What Matters Most
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Water reaches the required areas.",
              "You make purification for Allah, not from panic.",
              "You ask about unusual medical, work, or family situations.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/50 bg-white p-4"
              >
                <Icon name="check" size="sm" className="mb-2 text-primary" />
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="wudu-heading">
          <div className="mb-5">
            <h2
              id="wudu-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Wudu Step By Step
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              Wudu is the partial purification normally made before prayer.
              Quran 5:6 is a core reference for the required washed and wiped
              areas, and beginner guides explain the practical sequence.
            </p>
          </div>
          <StepGrid steps={wuduSteps} />
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="ghusl-heading">
          <div className="mb-5">
            <h2
              id="ghusl-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Ghusl Step By Step
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              Ghusl is the full-body purification bath. Keep it modest and
              simple: intend purification, clean what needs cleaning, and make
              sure water reaches the whole body.
            </p>
          </div>
          <StepGrid steps={ghuslSteps} />
        </section>
      </AnimateIn>

      <div className="grid gap-5 lg:grid-cols-2">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="wudu-breaks-heading"
          >
            <h2
              id="wudu-breaks-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              When Wudu Breaks
            </h2>
            <SimpleList items={wuduBreaks} />
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="ghusl-needed-heading"
          >
            <h2
              id="ghusl-needed-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              When Ghusl Is Needed
            </h2>
            <SimpleList items={ghuslNeeded} />
          </section>
        </AnimateIn>
      </div>

      <AnimateIn>
        <section className="my-12" aria-labelledby="corrections-heading">
          <h2
            id="corrections-heading"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Common Mistakes And Gentle Corrections
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {commonCorrections.map((item) => (
              <article
                key={item.title}
                className="page-break-avoid rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5"
              >
                <h3 className="mb-2 mt-0 text-base font-semibold text-textPrimary">
                  {item.title}
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-12 rounded-2xl border border-warning/20 bg-accentYellow/20 p-5"
          aria-labelledby="qualified-help-heading"
        >
          <h2
            id="qualified-help-heading"
            className="mb-2 mt-0 text-lg font-semibold text-textPrimary"
          >
            Ask A Qualified Person If
          </h2>
          <SimpleList
            items={[
              "You have a medical condition, wound, disability, or severe dryness that makes water difficult.",
              "You are unsure about menstruation, postpartum bleeding, discharge, or intimacy-related rulings.",
              "Your job, school, travel, or family situation makes purification hard to manage.",
              "You feel trapped in repeating wudu or ghusl because of anxiety.",
            ]}
          />
        </section>
      </AnimateIn>

      {sources.length > 0 && (
        <AnimateIn>
          <div className="mb-10">
            <SourcesPanel
              sources={sources}
              note="This page is a beginner worship tool. Some purification details differ by school of law, and personal situations should be reviewed with a qualified local imam or scholar."
            />
          </div>
        </AnimateIn>
      )}

      <AnimateIn>
        <div className="flex flex-wrap gap-3">
          <Button
            href={localizeHref(locale, "/roadmap/day-0-1/ghusl")}
            variant="primary"
          >
            Go to the Ghusl roadmap step
          </Button>
          <Button
            href={localizeHref(locale, "/topics/prayer")}
            variant="outline"
          >
            Prayer topic
            <Icon name="chevron-right" size="sm" />
          </Button>
        </div>
      </AnimateIn>
    </div>
  );
}
