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
import { buildPageMetadata } from "@/lib/metadata";

interface SequenceStep {
  title: string;
  posture: string;
  body: string;
  icon: IconName;
  sourceIds?: string[];
}

interface RecitationBlock {
  title: string;
  occasion: string;
  arabic?: string;
  transliteration?: string;
  meaning: string;
  beginnerNote: string;
  sourceIds: string[];
}

const pageSourceIds = [
  "quran-al-fatihah-1",
  "quran-al-ikhlas-112",
  "quran-al-asr-103",
  "sunnah-bukhari-pray-as-seen",
  "new-muslim-guide-prayer",
  "hisn-ruku-dhikr",
  "hisn-sujud-dhikr",
  "sunnah-bukhari-tashahhud",
  "sunnah-abudawud-taslim",
  "seekersguidance",
];

const prayerSequence: SequenceStep[] = [
  {
    title: "Prepare calmly",
    posture: "Before the prayer",
    body: "Make wudu, choose a clean place, face the qibla, and intend in your heart which prayer you are praying. You do not need to announce the intention out loud.",
    icon: "check",
    sourceIds: ["new-muslim-guide-prayer"],
  },
  {
    title: "Begin standing",
    posture: "Opening takbir",
    body: "Raise your hands naturally and say Allahu akbar. This opens the prayer and moves you from ordinary speech into worship.",
    icon: "star",
    sourceIds: ["new-muslim-guide-prayer"],
  },
  {
    title: "Recite in the first rak'ah",
    posture: "Standing",
    body: "Recite Al-Fatiha, then a short surah or a few verses you are learning. If you are not ready yet, keep learning phrase by phrase and ask an imam what to do while you are still memorizing.",
    icon: "book",
    sourceIds: ["quran-al-fatihah-1", "quran-al-ikhlas-112"],
  },
  {
    title: "Bow and rise",
    posture: "Ruku",
    body: "Bow with your back steady, glorify Allah, then rise and pause before going down. Do not rush the movement just to finish.",
    icon: "check",
    sourceIds: ["hisn-ruku-dhikr"],
  },
  {
    title: "Prostrate twice",
    posture: "Sujud",
    body: "Go down into prostration, sit briefly, then prostrate again. Sujud is a place of closeness to Allah; learn the short phrase first and add personal dua outside the required recitation when a teacher says it is appropriate.",
    icon: "check",
    sourceIds: ["hisn-sujud-dhikr"],
  },
  {
    title: "Repeat for the second rak'ah",
    posture: "Second unit",
    body: "Stand again and repeat the same shape: Al-Fatiha, a short recitation, ruku, rising, and two prostrations.",
    icon: "chevron-right",
    sourceIds: ["new-muslim-guide-prayer"],
  },
  {
    title: "Sit for the final words",
    posture: "Tashahhud",
    body: "After the second rak'ah, sit and recite the tashahhud. Learn it slowly with a teacher or reliable recording because small wording differences are normal across narrations and schools.",
    icon: "info",
    sourceIds: ["sunnah-bukhari-tashahhud"],
  },
  {
    title: "End with salam",
    posture: "Taslim",
    body: "Turn to the right and left to end the prayer with the greeting of peace. After the prayer, pause before rushing back into your day.",
    icon: "star",
    sourceIds: ["sunnah-abudawud-taslim"],
  },
];

const recitations: RecitationBlock[] = [
  {
    title: "Opening takbir",
    occasion: "Start of prayer",
    arabic: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu akbar",
    meaning: "Allah is the Greatest.",
    beginnerNote:
      "This is the first phrase to learn. Say it clearly and calmly; perfection in accent comes with time.",
    sourceIds: ["new-muslim-guide-prayer"],
  },
  {
    title: "Al-Fatiha",
    occasion: "Every rak'ah",
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَٰنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration:
      "Bismillahir-Rahmanir-Rahim. Alhamdu lillahi Rabbil-'alamin. Ar-Rahmanir-Rahim. Maliki yawmid-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim. Siratal-ladhina an'amta 'alayhim ghayril-maghdubi 'alayhim wa lad-dallin.",
    meaning:
      "Translation of meaning: praise, worship, and help belong to Allah, and we ask Him to guide us to the straight path.",
    beginnerNote:
      "Al-Fatiha is the first major recitation goal. Learn one phrase at a time and ask a teacher about what to do while you are still memorizing.",
    sourceIds: ["quran-al-fatihah-1"],
  },
  {
    title: "Short surah example: Al-Ikhlas",
    occasion: "After Al-Fatiha in the first two rak'ahs",
    arabic:
      "قُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    transliteration:
      "Qul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.",
    meaning:
      "Translation of meaning: Allah is One, self-sufficient, unlike creation, and nothing is comparable to Him.",
    beginnerNote:
      "This is a common beginner surah because it is short and carries the core message of tawhid.",
    sourceIds: ["quran-al-ikhlas-112"],
  },
  {
    title: "Short surah example: Al-'Asr",
    occasion: "After Al-Fatiha in the first two rak'ahs",
    arabic:
      "وَالْعَصْرِ\nإِنَّ الْإِنسَانَ لَفِي خُسْرٍ\nإِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
    transliteration:
      "Wal-'asr. Innal-insana lafi khusr. Illal-ladhina amanu wa 'amilus-salihat, wa tawasaw bil-haqqi wa tawasaw bis-sabr.",
    meaning:
      "Translation of meaning: people are in loss except those who believe, do good, and encourage truth and patience.",
    beginnerNote:
      "Use one short surah at a time. Listening to a reliable reciter before practice helps more than rushing through many chapters.",
    sourceIds: ["quran-al-asr-103"],
  },
  {
    title: "Ruku phrase",
    occasion: "While bowing",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhana Rabbiyal-'Azim",
    meaning: "Glory be to my Lord, the Most Great.",
    beginnerNote:
      "Many guides teach saying this three times. If you are still learning, begin with one clear repetition and ask a teacher about details.",
    sourceIds: ["hisn-ruku-dhikr"],
  },
  {
    title: "Sujud phrase",
    occasion: "While prostrating",
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    transliteration: "Subhana Rabbiyal-A'la",
    meaning: "Glory be to my Lord, the Most High.",
    beginnerNote:
      "Sujud can feel unfamiliar at first. Move safely, pause, and learn the phrase without shaming yourself for slow progress.",
    sourceIds: ["hisn-sujud-dhikr"],
  },
  {
    title: "Tashahhud overview",
    occasion: "Final sitting",
    arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ...",
    transliteration: "At-tahiyyatu lillahi was-salawatu wat-tayyibat...",
    meaning:
      "Translation of meaning: greetings, prayers, and good words are for Allah, followed by testimony of faith.",
    beginnerNote:
      "This card is only an overview, not the full learning text. Learn the complete wording with a teacher or reliable recording.",
    sourceIds: ["sunnah-bukhari-tashahhud"],
  },
  {
    title: "Salam",
    occasion: "End of prayer",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    transliteration: "As-salamu 'alaykum wa rahmatullah",
    meaning: "Peace and Allah's mercy be upon you.",
    beginnerNote:
      "This closes the prayer. Turn gently to the right and left; do not exaggerate the movement.",
    sourceIds: ["sunnah-abudawud-taslim"],
  },
];

const cannotReciteYet = [
  "Keep praying while you are learning. Do not wait for perfect Arabic before building the habit.",
  "Memorize Al-Fatiha phrase by phrase. A printed card or transliteration can help practice, but ask a local imam how to handle interim recitation in your prayer.",
  "Choose one short surah and stay with it until it feels steady.",
  "If disability, pain, trauma, or anxiety affects your prayer movements, ask a qualified teacher about concessions before forcing your body.",
];

const invalidatesPrayer = [
  "Losing wudu, such as by using the restroom or passing wind.",
  "Deliberately eating, drinking, or speaking unrelated words during prayer.",
  "Knowingly leaving a required posture, condition, or recitation after you understand it is required.",
  "Intentionally ending the prayer or turning away from the prayer without need.",
  "Details around mistakes, forgetfulness, illness, menstruation, travel, and disability should be reviewed with a qualified teacher.",
];

const commonCorrections = [
  {
    title: "I keep restarting after every small mistake.",
    body: "Finish the prayer calmly, then ask about the specific mistake later. Panic can become a heavier burden than the original mistake.",
  },
  {
    title: "I am embarrassed by pronunciation.",
    body: "Arabic pronunciation improves through repetition. Allah knows the difference between laziness and sincere learning.",
  },
  {
    title: "Different videos show different hand positions.",
    body: "Do not let valid detail differences stop you from praying. Learn one reliable beginner method and ask a teacher before switching constantly.",
  },
  {
    title: "I rush because I feel awkward.",
    body: "Slow down enough that each posture is distinct. A short, calm prayer is better for learning than a fast, anxious one.",
  },
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    title: `Salah Companion - ${t("brand.name")}`,
    description:
      "A beginner-friendly English salah companion for prayer shape, recitation support, common mistakes, and source-backed next steps.",
    path: "/tools/salah-companion",
  });
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

function ArabicText({ text }: { text: string }) {
  return (
    <p
      className="mb-0 whitespace-pre-line rounded-xl bg-surfaceElevated/60 p-4 text-right font-arabic text-2xl leading-loose text-textPrimary"
      lang="ar"
      dir="rtl"
    >
      {text}
    </p>
  );
}

export default function SalahCompanionPage({
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
          { label: t("nav.tools") },
          { label: t("nav.salahCompanion") },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="star" size="sm" />
            Worship learning tool
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Salah Companion
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-textSecondary">
            A calm guide to the shape of a simple two-unit prayer, with beginner
            recitation support and reminders about when to ask a qualified
            teacher.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <Button
              href={localizeHref(locale, "/tools/wudu-ghusl")}
              variant="outline"
            >
              Wudu and ghusl
              <Icon name="chevron-right" size="sm" />
            </Button>
            <Button
              href={localizeHref(locale, "/prayer-times")}
              variant="outline"
            >
              Prayer times
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
              "Pray sincerely while learning the words.",
              "Learn the prayer shape before chasing every detail.",
              "Ask a qualified imam about rulings that affect your situation.",
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

      <AnimateIn>
        <section className="mb-12" aria-labelledby="shape-heading">
          <div className="mb-5">
            <h2
              id="shape-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Shape Of A Two-Unit Prayer
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              This is a beginner map, not a replacement for a teacher. Use it to
              see the order, then ask a local imam or teacher to watch and
              correct you kindly.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {prayerSequence.map((step, index) => (
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
                      Step {index + 1} - {step.posture}
                    </p>
                    <h3 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                  {step.body}
                </p>
                <SourceTags
                  sources={getSourcesByIds(step.sourceIds ?? [], locale)}
                  compact
                />
              </article>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-12" aria-labelledby="recitation-heading">
          <div className="mb-5">
            <h2
              id="recitation-heading"
              className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Beginner Recitation Blocks
            </h2>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              Arabic is shown with transliteration and a translation-of-meaning
              summary. For Quran recitation, treat English as meaning support,
              not as the Arabic Quran itself.
            </p>
          </div>
          <div className="grid gap-5">
            {recitations.map((item) => (
              <article
                key={item.title}
                className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                      {item.occasion}
                    </p>
                    <h3 className="mb-0 mt-0 text-lg font-semibold text-textPrimary">
                      {item.title}
                    </h3>
                  </div>
                  <SourceTags
                    sources={getSourcesByIds(item.sourceIds, locale)}
                    compact
                  />
                </div>
                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  {item.arabic ? <ArabicText text={item.arabic} /> : null}
                  <div className="rounded-xl border border-border/50 bg-surface/70 p-4">
                    {item.transliteration ? (
                      <>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                          Transliteration
                        </p>
                        <p className="mb-3 text-sm italic leading-relaxed text-textSecondary">
                          {item.transliteration}
                        </p>
                      </>
                    ) : null}
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                      Meaning
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-textSecondary">
                      {item.meaning}
                    </p>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                      Beginner note
                    </p>
                    <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                      {item.beginnerNote}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </AnimateIn>

      <div className="grid gap-5 lg:grid-cols-2">
        <AnimateIn>
          <section
            className="page-break-avoid rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="cannot-recite-heading"
          >
            <h2
              id="cannot-recite-heading"
              className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              If You Cannot Recite Arabic Yet
            </h2>
            <SimpleList items={cannotReciteYet} />
          </section>
        </AnimateIn>

        <AnimateIn delay={0.05}>
          <section
            className="page-break-avoid rounded-2xl border border-warning/25 bg-accentYellow/15 p-6"
            aria-labelledby="invalidates-heading"
          >
            <h2
              id="invalidates-heading"
              className="mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              What Invalidates Prayer?
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-textSecondary">
              This is only a beginner overview. Details can differ by school of
              law and personal circumstance.
            </p>
            <SimpleList items={invalidatesPrayer} />
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
          className="mb-12 rounded-2xl border border-primary/25 bg-surfaceElevated/60 p-5"
          aria-labelledby="ask-imam-heading"
        >
          <h2
            id="ask-imam-heading"
            className="mb-2 mt-0 text-lg font-semibold text-textPrimary"
          >
            Ask An Imam If
          </h2>
          <SimpleList
            items={[
              "You cannot stand, bow, sit, or prostrate because of pain, disability, injury, or trauma.",
              "You are unsure what to recite while still learning Arabic.",
              "You often miss prayers and need a realistic make-up or habit plan.",
              "You are confused by conflicting advice from videos or different schools of law.",
              "A work, school, travel, family, or safety situation affects how you pray.",
            ]}
          />
        </section>
      </AnimateIn>

      {pageSources.length > 0 && (
        <AnimateIn>
          <div className="mb-10">
            <SourcesPanel
              sources={pageSources}
              note="This page is a beginner worship companion. It is source-checked for references but remains review-needed for personal prayer rulings, school-specific details, disability accommodations, and unusual circumstances."
            />
          </div>
        </AnimateIn>
      )}

      <AnimateIn>
        <div className="flex flex-wrap gap-3">
          <Button
            href={localizeHref(locale, "/topics/prayer")}
            variant="primary"
          >
            Prayer topic
          </Button>
          <Button
            href={localizeHref(locale, "/roadmap/week-1/prayer-on-ramp")}
            variant="outline"
          >
            Prayer on-ramp
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
