import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { PrintButton } from "@/components/PrintButton";
import { SourceTags, SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import {
  DEFAULT_LOCALE,
  getTranslator,
  localizeHref,
  type Locale,
} from "@/lib/i18n";

interface ReadingPath {
  title: string;
  time: string;
  body: string;
  readings: string[];
  sourceIds: string[];
}

interface WeekDay {
  day: string;
  title: string;
  body: string;
  sourceIds: string[];
}

interface ResourceLink {
  title: string;
  body: string;
  href: string;
  sourceIds: string[];
  icon: IconName;
}

const pageSourceIds = [
  "quran-com",
  "tanzil",
  "clear-quran",
  "quran-al-fatihah-1",
  "quran-al-ikhlas-112",
  "quran-al-falaq-113",
  "quran-an-nas-114",
  "quran-39-53-mercy",
  "quran-2-186-dua-nearness",
  "quran-23-109-forgiveness",
  "quran-yusuf-12",
  "quran-20-14-prayer-remembrance",
  "quran-2-153-patience-prayer",
  "quran-al-asr-103",
  "quran-reciter-mishary",
  "new-muslim-academy-quran-etiquette",
  "new-muslim-academy",
  "seekersguidance",
  "yaqeen-institute",
];

const vocabulary = [
  {
    term: "Arabic Quran",
    body: "The revealed Arabic text. When this page links Quran verses, treat the Arabic as the Quran itself.",
  },
  {
    term: "Translation of meaning",
    body: "An English rendering that helps you understand, but is not the Arabic Quran itself.",
  },
  {
    term: "Transliteration",
    body: "Arabic sounds written with English letters. It can help practice, but a teacher or reliable reciter is better for pronunciation.",
  },
  {
    term: "Tafsir",
    body: "Scholarly explanation of Quran meanings, context, and lessons. Use it when a verse feels difficult or layered.",
  },
];

const translationTips = [
  "Choose a translation whose translator, publisher, and method are clear.",
  "Prefer readable English with notes over anonymous PDFs, screenshots, or quote images.",
  "Use more than one translation when studying, but do not let comparison become a source of anxiety.",
  "Ask a qualified teacher when a verse affects belief, worship, family, safety, or a personal decision.",
];

const readingPaths: ReadingPath[] = [
  {
    title: "First sitting",
    time: "10 to 20 minutes",
    body: "Begin with short chapters that also support prayer learning. Read the meaning slowly, then listen once without trying to master pronunciation.",
    readings: [
      "Al-Fatiha, chapter 1",
      "Al-Ikhlas, chapter 112",
      "Al-Falaq, chapter 113",
      "An-Nas, chapter 114",
    ],
    sourceIds: [
      "quran-al-fatihah-1",
      "quran-al-ikhlas-112",
      "quran-al-falaq-113",
      "quran-an-nas-114",
    ],
  },
  {
    title: "Mercy and hope",
    time: "One quiet sitting",
    body: "Use this path when shame or fear feels louder than hope. Notice Allah's nearness, forgiveness, and mercy before adding more material.",
    readings: ["Quran 39:53", "Quran 2:186", "Quran 23:109"],
    sourceIds: [
      "quran-39-53-mercy",
      "quran-2-186-dua-nearness",
      "quran-23-109-forgiveness",
    ],
  },
  {
    title: "Prophets and purpose",
    time: "Several short sittings",
    body: "Read Surah Yusuf in pieces. It gives a full prophetic story with family pain, patience, temptation, forgiveness, and trust in Allah.",
    readings: ["Surah Yusuf, chapter 12"],
    sourceIds: ["quran-yusuf-12"],
  },
  {
    title: "Prayer and worship",
    time: "15 minutes",
    body: "Connect Quran reading to salah. These passages help frame prayer as remembrance, guidance, patience, and return to Allah.",
    readings: ["Al-Fatiha, chapter 1", "Quran 20:14", "Quran 2:153"],
    sourceIds: [
      "quran-al-fatihah-1",
      "quran-20-14-prayer-remembrance",
      "quran-2-153-patience-prayer",
    ],
  },
  {
    title: "Character and patience",
    time: "10 minutes",
    body: "Keep this path practical. Ask: what would this reading change in my speech, patience, honesty, or treatment of people today?",
    readings: ["Al-'Asr, chapter 103", "Quran 2:153"],
    sourceIds: ["quran-al-asr-103", "quran-2-153-patience-prayer"],
  },
];

const weekPlan: WeekDay[] = [
  {
    day: "Day 1",
    title: "Open with Al-Fatiha",
    body: "Read the meaning of Al-Fatiha and listen once. Let the request for guidance be the theme of the day.",
    sourceIds: ["quran-al-fatihah-1"],
  },
  {
    day: "Day 2",
    title: "Learn the three short protectors",
    body: "Read Al-Ikhlas, Al-Falaq, and An-Nas. Notice tawhid and seeking protection without trying to memorize everything at once.",
    sourceIds: [
      "quran-al-ikhlas-112",
      "quran-al-falaq-113",
      "quran-an-nas-114",
    ],
  },
  {
    day: "Day 3",
    title: "Read for hope",
    body: "Read Quran 39:53 slowly. Write one sentence in your own words about what hope in Allah's mercy means for you.",
    sourceIds: ["quran-39-53-mercy"],
  },
  {
    day: "Day 4",
    title: "Make dua from nearness",
    body: "Read Quran 2:186 and 23:109. Make a simple personal dua in English after reading.",
    sourceIds: ["quran-2-186-dua-nearness", "quran-23-109-forgiveness"],
  },
  {
    day: "Day 5",
    title: "Connect Quran to prayer",
    body: "Read Quran 20:14 and listen to Al-Fatiha again. Keep the focus on remembrance, not perfect performance.",
    sourceIds: ["quran-20-14-prayer-remembrance", "quran-al-fatihah-1"],
  },
  {
    day: "Day 6",
    title: "Practice patience",
    body: "Read Quran 2:153 and Al-'Asr. Choose one small act of patience or truthfulness for the day.",
    sourceIds: ["quran-2-153-patience-prayer", "quran-al-asr-103"],
  },
  {
    day: "Day 7",
    title: "Review and ask one question",
    body: "Reread the passage that stayed with you. If something confused you, write the exact verse and ask a reliable teacher.",
    sourceIds: ["quran-com", "seekersguidance"],
  },
];

const resourceLinks: ResourceLink[] = [
  {
    title: "Quran.com",
    body: "Read, listen, compare translations, and open official reciter pages without needing a new app.",
    href: "https://quran.com/",
    sourceIds: ["quran-com"],
    icon: "book",
  },
  {
    title: "The Clear Quran",
    body: "A readable English translation of meaning. Use it as meaning support, not as a replacement for Arabic Quran.",
    href: "https://theclearquran.org/",
    sourceIds: ["clear-quran"],
    icon: "file-text",
  },
  {
    title: "New Muslim Academy",
    body: "Beginner education and Quran learning support built for people who are new to Islam.",
    href: "https://www.newmuslimacademy.org/",
    sourceIds: ["new-muslim-academy"],
    icon: "users",
  },
  {
    title: "Mishari Rashid al-Afasy on Quran.com",
    body: "A clear reciter page for listening practice. Listen first, then repeat only a small amount.",
    href: "https://quran.com/reciters/7",
    sourceIds: ["quran-reciter-mishary"],
    icon: "play",
  },
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  return {
    title: `Quran Starter Path - ${t("brand.name")}`,
    description:
      "A beginner-friendly Quran starter path for reading, listening, translation boundaries, respectful handling, and a printable first-week plan.",
  };
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

function ReadingPathCard({
  path,
  locale,
}: {
  path: ReadingPath;
  locale: Locale;
}) {
  return (
    <article className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
            {path.time}
          </p>
          <h3 className="mb-0 mt-0 text-lg font-semibold text-textPrimary">
            {path.title}
          </h3>
        </div>
        <SourceTags sources={getSourcesByIds(path.sourceIds, locale)} compact />
      </div>
      <p className="mb-4 text-sm leading-relaxed text-textSecondary">
        {path.body}
      </p>
      <SimpleList items={path.readings} />
    </article>
  );
}

function WeekCard({ item, locale }: { item: WeekDay; locale: Locale }) {
  return (
    <article className="page-break-avoid rounded-xl border border-border/50 bg-white p-4">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {item.day}
          </p>
          <h3 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
            {item.title}
          </h3>
        </div>
        <SourceTags sources={getSourcesByIds(item.sourceIds, locale)} compact />
      </div>
      <p className="mb-0 text-sm leading-relaxed text-textSecondary">
        {item.body}
      </p>
    </article>
  );
}

function ResourceCard({
  item,
  locale,
}: {
  item: ResourceLink;
  locale: Locale;
}) {
  return (
    <article className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon name={item.icon} size="md" />
        </span>
        <div>
          <h3 className="mb-1 mt-0 text-base font-semibold text-textPrimary">
            {item.title}
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-textSecondary">
            {item.body}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-surfaceElevated px-3 py-1.5 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/15 hover:text-primaryHover"
            >
              Open resource
              <Icon name="external-link" size="sm" />
            </a>
            <SourceTags
              sources={getSourcesByIds(item.sourceIds, locale)}
              compact
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function QuranStarterPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  if (locale !== DEFAULT_LOCALE) notFound();

  const t = getTranslator(locale);
  const pageSources = getSourcesByIds(pageSourceIds, locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.topics"), href: localizeHref(locale, "/topics") },
          {
            label: "Quran",
            href: localizeHref(locale, "/topics/quran"),
          },
          { label: t("nav.quranStarter") },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="book" size="sm" />
            Beginner starter path
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Quran Starter Path
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-textSecondary">
            Start reading and listening to the Quran without turning it into a
            pressure project. Use short passages, clear translation boundaries,
            and one steady question at a time.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <Button
              href={localizeHref(locale, "/topics/quran")}
              variant="outline"
            >
              Quran topic
              <Icon name="chevron-right" size="sm" />
            </Button>
            <Button
              href={localizeHref(locale, "/tools/salah-companion")}
              variant="outline"
            >
              Salah companion
              <Icon name="chevron-right" size="sm" />
            </Button>
          </div>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="matters-most-heading"
        >
          <h2
            id="matters-most-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            What Matters Most Right Now
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Read a small portion with attention, not a huge amount with pressure.",
              "Treat English as translation of meaning, not the Arabic Quran itself.",
              "Ask a reliable teacher when a verse confuses or worries you.",
            ].map((item) => (
              <div
                key={item}
                className="page-break-avoid rounded-xl border border-border/50 bg-white p-4"
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

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="translation-policy-heading"
          >
            <h2
              id="translation-policy-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Translation Boundaries
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-textSecondary">
              The Arabic Quran is the revealed text. English helps you
              understand the meaning, but it is still a translation and may not
              carry every layer of the Arabic.
            </p>
            <SourceTags
              sources={getSourcesByIds(
                ["quran-com", "tanzil", "clear-quran"],
                locale,
              )}
              compact
              className="mb-4"
            />
            <SimpleList items={translationTips} />
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-surfaceElevated/50 p-6"
            aria-labelledby="vocabulary-heading"
          >
            <h2
              id="vocabulary-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Helpful Words
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {vocabulary.map((item) => (
                <article
                  key={item.term}
                  className="rounded-xl border border-border/50 bg-white p-4"
                >
                  <h3 className="mb-1 mt-0 text-base font-semibold text-textPrimary">
                    {item.term}
                  </h3>
                  <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </AnimateIn>
      </div>

      <AnimateIn>
        <section className="my-12" aria-labelledby="reading-paths-heading">
          <div className="mb-5">
            <h2
              id="reading-paths-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Suggested Beginner Reading Paths
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              These are not saved plans and there is no completion tracking.
              Pick one path, read slowly, and stop before you feel overloaded.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {readingPaths.map((path) => (
              <ReadingPathCard key={path.title} path={path} locale={locale} />
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-12 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
          aria-labelledby="week-plan-heading"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2
                id="week-plan-heading"
                className="mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
              >
                Printable First Quran Week
              </h2>
              <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                Use this as a printed rhythm. It does not save progress, set
                reminders, or ask you to track completion.
              </p>
            </div>
            <PrintButton />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {weekPlan.map((item) => (
              <WeekCard key={item.day} item={item} locale={locale} />
            ))}
          </div>
        </section>
      </AnimateIn>

      <div className="grid gap-5 lg:grid-cols-2">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="listening-heading"
          >
            <h2
              id="listening-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Listening Without Overwhelm
            </h2>
            <SimpleList
              items={[
                "Start with one short surah and one reciter.",
                "Listen once just to receive it, then listen again while following the translation of meaning.",
                "Repeat only a small phrase if you are practicing pronunciation.",
                "Use a Quran teacher, imam, or class when you are ready to correct recitation.",
              ]}
            />
            <SourceTags
              sources={getSourcesByIds(["quran-reciter-mishary"], locale)}
              compact
              className="mt-4"
            />
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-warning/25 bg-accentYellow/15 p-6"
            aria-labelledby="respect-heading"
          >
            <h2
              id="respect-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Respectful Handling
            </h2>
            <SimpleList
              items={[
                "Keep a physical mushaf in a clean, respectful place.",
                "Ask a qualified local teacher about wudu and purity details for touching Arabic Quran text.",
                "Translations and phone apps do not carry every same handling detail, but treating them respectfully is still good adab.",
                "Do not let fear of doing something imperfectly stop you from reading, listening, and learning.",
              ]}
            />
            <SourceTags
              sources={getSourcesByIds(
                ["new-muslim-academy-quran-etiquette"],
                locale,
              )}
              compact
              className="mt-4"
            />
          </section>
        </AnimateIn>
      </div>

      <AnimateIn>
        <section
          className="my-12 rounded-2xl border border-primary/25 bg-surfaceElevated/60 p-6"
          aria-labelledby="confusing-verse-heading"
        >
          <h2
            id="confusing-verse-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            When A Verse Confuses You
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                title: "Pause",
                body: "Do not build a conclusion from a screenshot, short clip, or hostile thread.",
              },
              {
                title: "Read around it",
                body: "Look at the verses before and after, then read a trusted explanation.",
              },
              {
                title: "Write the exact question",
                body: "Name the verse, what bothered you, and what you need clarified.",
              },
              {
                title: "Ask someone reliable",
                body: "Bring the question to a teacher, imam, or source-checked learning program.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="page-break-avoid rounded-xl border border-border/50 bg-white p-4"
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
        <section className="mb-12" aria-labelledby="resources-heading">
          <div className="mb-5">
            <h2
              id="resources-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Reliable Starter Resources
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              Use identifiable sources with clear publishers and teachers. Avoid
              anonymous quote images or debate channels as your main Quran
              learning path.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {resourceLinks.map((item) => (
              <ResourceCard key={item.title} item={item} locale={locale} />
            ))}
          </div>
        </section>
      </AnimateIn>

      {pageSources.length > 0 && (
        <AnimateIn>
          <div className="mb-10">
            <SourcesPanel
              sources={pageSources}
              note="This page is source-checked for Quran references, translation boundaries, beginner listening guidance, and respectful handling orientation. Personal recitation, purity, and tafsir questions should be reviewed with qualified teachers."
            />
          </div>
        </AnimateIn>
      )}

      <AnimateIn>
        <div className="flex flex-wrap gap-3">
          <Button
            href={localizeHref(locale, "/topics/quran")}
            variant="primary"
          >
            Quran topic
          </Button>
          <Button
            href={localizeHref(locale, "/roadmap/week-2-3/quran")}
            variant="outline"
          >
            Roadmap step
            <Icon name="chevron-right" size="sm" />
          </Button>
          <Button href={localizeHref(locale, "/dua-dhikr")} variant="outline">
            Dua and dhikr
            <Icon name="chevron-right" size="sm" />
          </Button>
        </div>
      </AnimateIn>
    </div>
  );
}
