import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
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

type EntryKind = "Quranic dua" | "Hadith dua" | "Dhikr" | "Personal dua";

interface DuaEntry {
  title: string;
  kind: EntryKind;
  occasion: string;
  arabic?: string;
  transliteration?: string;
  meaning: string;
  note: string;
  sourceIds: string[];
}

interface DuaSection {
  id: string;
  title: string;
  intro: string;
  entries: DuaEntry[];
}

const pageSourceIds = [
  "quran-al-fatihah-1",
  "quran-2-186-dua-nearness",
  "quran-2-201-rabbana-atina",
  "quran-2-250-patience",
  "quran-3-8-steadfastness",
  "quran-20-25-28-musa-ease",
  "quran-23-109-forgiveness",
  "sunnah-muslim-after-prayer-dhikr",
  "sunnah-bukhari-sayyid-istighfar",
  "sunnah-bukhari-anxiety-grief",
  "sunnah-ibnmajah-beneficial-knowledge",
  "darussalam",
  "988-lifeline",
];

const sections: DuaSection[] = [
  {
    id: "daily-basics",
    title: "Daily Remembrance Basics",
    intro:
      "Start with a few short phrases that are easy to understand and repeat. Do not turn dhikr into a race.",
    entries: [
      {
        title: "SubhanAllah",
        kind: "Dhikr",
        occasion: "Any time, and often after prayer",
        arabic: "سُبْحَانَ اللَّهِ",
        transliteration: "SubhanAllah",
        meaning: "Glory be to Allah.",
        note: "A short remembrance that turns the heart back to Allah's perfection.",
        sourceIds: ["sunnah-muslim-after-prayer-dhikr"],
      },
      {
        title: "Alhamdulillah",
        kind: "Dhikr",
        occasion: "Gratitude, ordinary moments, and after prayer",
        arabic: "الْحَمْدُ لِلَّهِ",
        transliteration: "Alhamdulillah",
        meaning: "All praise belongs to Allah.",
        note: "Use it when you notice a blessing, large or small.",
        sourceIds: ["sunnah-muslim-after-prayer-dhikr"],
      },
      {
        title: "Allahu Akbar",
        kind: "Dhikr",
        occasion: "Prayer, awe, and after prayer",
        arabic: "اللَّهُ أَكْبَرُ",
        transliteration: "Allahu akbar",
        meaning: "Allah is the Greatest.",
        note: "This phrase helps put worries, people, and problems back in perspective.",
        sourceIds: ["sunnah-muslim-after-prayer-dhikr"],
      },
      {
        title: "La ilaha illa Allah",
        kind: "Dhikr",
        occasion: "Remembering tawhid",
        arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
        transliteration: "La ilaha illa Allah",
        meaning: "There is no god worthy of worship except Allah.",
        note: "This is the heart of Islamic belief. Say it with attention, not as background noise.",
        sourceIds: ["sunnah-muslim-after-prayer-dhikr"],
      },
    ],
  },
  {
    id: "before-after-prayer",
    title: "Before And After Prayer",
    intro:
      "Prayer already contains the greatest beginner duas. After prayer, use a short dhikr rhythm before moving on.",
    entries: [
      {
        title: "Guidance from Al-Fatiha",
        kind: "Quranic dua",
        occasion: "Inside every prayer",
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdinas-siratal-mustaqim",
        meaning: "Guide us to the straight path.",
        note: "This is a central dua of every rak'ah. Let it be the anchor of learning prayer.",
        sourceIds: ["quran-al-fatihah-1"],
      },
      {
        title: "After-prayer dhikr pattern",
        kind: "Dhikr",
        occasion: "After the obligatory prayer",
        arabic: "سُبْحَانَ اللَّهِ\nالْحَمْدُ لِلَّهِ\nاللَّهُ أَكْبَرُ",
        transliteration: "SubhanAllah. Alhamdulillah. Allahu akbar.",
        meaning: "Glorify Allah, praise Allah, and declare Allah's greatness.",
        note: "Many Muslims repeat these after prayer. Start with a small, steady version and learn the full pattern later.",
        sourceIds: ["sunnah-muslim-after-prayer-dhikr"],
      },
    ],
  },
  {
    id: "guidance",
    title: "Asking For Guidance",
    intro:
      "These duas are especially useful when you feel unsure, pulled in different directions, or afraid of losing steadiness.",
    entries: [
      {
        title: "Keep my heart steady",
        kind: "Quranic dua",
        occasion: "When faith feels fragile",
        arabic:
          "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً",
        transliteration:
          "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah",
        meaning:
          "Our Lord, do not let our hearts turn away after You have guided us, and grant us mercy from You.",
        note: "A Quranic dua for steadiness when you worry about slipping or becoming confused.",
        sourceIds: ["quran-3-8-steadfastness"],
      },
      {
        title: "Good in this life and the next",
        kind: "Quranic dua",
        occasion: "A balanced everyday dua",
        arabic:
          "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        transliteration:
          "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adhaban-nar",
        meaning:
          "Our Lord, give us good in this world and the Hereafter, and protect us from the Fire.",
        note: "A short Quranic dua that asks for both practical worldly good and eternal good.",
        sourceIds: ["quran-2-201-rabbana-atina"],
      },
    ],
  },
  {
    id: "anxious-overwhelmed",
    title: "When Anxious Or Overwhelmed",
    intro:
      "Dua and dhikr can bring comfort, but crisis, self-harm thoughts, abuse, or inability to function need professional and emergency support too.",
    entries: [
      {
        title: "For anxiety and grief",
        kind: "Hadith dua",
        occasion: "When worry, sadness, debt, or pressure feels heavy",
        arabic:
          "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
        transliteration:
          "Allahumma inni a'udhu bika minal-hammi wal-huzn, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayn wa ghalabatir-rijal",
        meaning:
          "O Allah, I seek refuge in You from worry, grief, helplessness, laziness, miserliness, cowardice, heavy debt, and being overpowered.",
        note: "Use this as spiritual support while also taking practical steps and seeking help when needed.",
        sourceIds: ["sunnah-bukhari-anxiety-grief", "988-lifeline"],
      },
      {
        title: "Patience and firm steps",
        kind: "Quranic dua",
        occasion: "Before a hard conversation or test",
        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
        transliteration: "Rabbana afrigh 'alayna sabran wa thabbit aqdamana",
        meaning: "Our Lord, pour patience upon us and make our steps firm.",
        note: "A Quranic dua for steadiness when you need courage and patience.",
        sourceIds: ["quran-2-250-patience"],
      },
    ],
  },
  {
    id: "gratitude-repentance",
    title: "Gratitude And Repentance",
    intro:
      "Repentance is not only for major failures. It is a regular return to Allah with honesty and hope.",
    entries: [
      {
        title: "Sayyid al-istighfar",
        kind: "Hadith dua",
        occasion: "Morning, evening, or after a sincere reset",
        arabic:
          "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
        transliteration:
          "Allahumma anta Rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't...",
        meaning:
          "O Allah, You are my Lord. I admit Your blessings and my sins, so forgive me, for none forgives sins except You.",
        note: "This is longer than a starter phrase. Learn it in pieces and keep the meaning close.",
        sourceIds: ["sunnah-bukhari-sayyid-istighfar"],
      },
      {
        title: "Forgiveness and mercy",
        kind: "Quranic dua",
        occasion: "When returning to Allah",
        arabic:
          "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
        transliteration:
          "Rabbana amanna faghfir lana warhamna wa anta khayrur-rahimin",
        meaning:
          "Our Lord, we have believed, so forgive us and have mercy on us; You are the best of those who show mercy.",
        note: "A short Quranic dua that combines faith, forgiveness, and mercy.",
        sourceIds: ["quran-23-109-forgiveness"],
      },
    ],
  },
  {
    id: "learning-conversations",
    title: "Before Learning Or Difficult Conversations",
    intro:
      "Ask Allah for clarity, beneficial knowledge, and gentle speech before you study, ask questions, or speak with family.",
    entries: [
      {
        title: "Ease and an open heart",
        kind: "Quranic dua",
        occasion: "Before learning, speaking, or asking for help",
        arabic:
          "رَبِّ اشْرَحْ لِي صَدْرِي\nوَيَسِّرْ لِي أَمْرِي\nوَاحْلُلْ عُقْدَةً مِّن لِّسَانِي\nيَفْقَهُوا قَوْلِي",
        transliteration:
          "Rabbi ishrah li sadri. Wa yassir li amri. Wahlul 'uqdatan min lisani. Yafqahu qawli.",
        meaning:
          "My Lord, open my heart, make my task easy, loosen the knot from my tongue, and let my words be understood.",
        note: "A Quranic dua from Prophet Musa, peace be upon him, that many beginners find helpful before hard conversations.",
        sourceIds: ["quran-20-25-28-musa-ease"],
      },
      {
        title: "Beneficial knowledge",
        kind: "Hadith dua",
        occasion: "Before study or a class",
        arabic:
          "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
        transliteration:
          "Allahumma inni as'aluka 'ilman nafi'a, wa rizqan tayyiba, wa 'amalan mutaqabbala",
        meaning:
          "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.",
        note: "A useful dua before learning Islam, work, school, or a skill.",
        sourceIds: ["sunnah-ibnmajah-beneficial-knowledge"],
      },
    ],
  },
  {
    id: "own-words",
    title: "General Personal Dua In Your Own Words",
    intro:
      "You can call on Allah in the language you understand. Keep personal wording distinct from Quranic or Prophetic wording.",
    entries: [
      {
        title: "Personal wording",
        kind: "Personal dua",
        occasion: "Any time outside fixed prayer recitation",
        meaning:
          "Example: O Allah, guide me, forgive me, make prayer easy for me, and place good people in my life.",
        note: "This is personal wording, not a transmitted dua. You may ask Allah from your heart in your own language.",
        sourceIds: ["quran-2-186-dua-nearness"],
      },
    ],
  },
];

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = getTranslator(params.locale);
  return {
    title: `Dua and Dhikr Reference - ${t("brand.name")}`,
    description:
      "A beginner-friendly English reference for Quranic duas, hadith duas, dhikr phrases, and personal supplication boundaries.",
  };
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

function EntryCard({ entry, locale }: { entry: DuaEntry; locale: Locale }) {
  const sources = getSourcesByIds(entry.sourceIds, locale);

  return (
    <article className="page-break-avoid rounded-2xl border border-border/60 bg-white p-5 shadow-card">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {entry.kind}
            </span>
            <span className="text-xs font-medium text-textMuted">
              {entry.occasion}
            </span>
          </div>
          <h3 className="mb-0 mt-0 text-lg font-semibold text-textPrimary">
            {entry.title}
          </h3>
        </div>
        <SourceTags sources={sources} compact />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        {entry.arabic ? (
          <ArabicText text={entry.arabic} />
        ) : (
          <div className="rounded-xl border border-border/50 bg-surfaceElevated/40 p-4">
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              No fixed Arabic wording is attached to this card.
            </p>
          </div>
        )}
        <div className="rounded-xl border border-border/50 bg-surface/70 p-4">
          {entry.transliteration ? (
            <>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
                Transliteration
              </p>
              <p className="mb-3 text-sm italic leading-relaxed text-textSecondary">
                {entry.transliteration}
              </p>
            </>
          ) : null}
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
            Meaning
          </p>
          <p className="mb-3 text-sm leading-relaxed text-textSecondary">
            {entry.meaning}
          </p>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-textMuted">
            Beginner note
          </p>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {entry.note}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function DuaDhikrPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  if (locale !== DEFAULT_LOCALE) notFound();

  const t = getTranslator(locale);
  const pageSources = getSourcesByIds(pageSourceIds, locale);
  const totalEntries = sections.reduce(
    (count, section) => count + section.entries.length,
    0,
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: t("nav.topics"), href: localizeHref(locale, "/topics") },
          { label: t("nav.duaDhikr") },
        ]}
      />

      <AnimateIn>
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon name="star" size="sm" />
            Beginner reference
          </p>
          <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Dua And Dhikr Reference
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-textSecondary">
            A small, source-tagged collection of trustworthy duas and
            remembrance phrases for beginners. Learn a few meanings well before
            adding more.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <Button
              href={localizeHref(locale, "/topics/dua-and-dhikr")}
              variant="outline"
            >
              Dua topic
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
          aria-labelledby="using-reference-heading"
        >
          <h2
            id="using-reference-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Use This Reference Gently
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              `${totalEntries} beginner entries, not an endless quote collection.`,
              "Quranic and hadith-based wordings are labeled separately.",
              "Personal dua in your own words is welcome, but not labeled as transmitted.",
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
        <section
          className="mb-10 rounded-2xl border border-warning/25 bg-accentYellow/15 p-5"
          aria-labelledby="crisis-boundary-heading"
        >
          <h2
            id="crisis-boundary-heading"
            className="mb-2 mt-0 text-lg font-semibold text-textPrimary"
          >
            When You Need More Than A Dua Card
          </h2>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            If you might harm yourself, feel unsafe, are being abused, or cannot
            function, contact emergency services, a crisis line, a qualified
            clinician, or a trusted local professional. Dua and practical help
            can work together.
          </p>
        </section>
      </AnimateIn>

      {sections.map((section, index) => (
        <AnimateIn key={section.id} delay={index * 0.04}>
          <section className="mb-12" aria-labelledby={`${section.id}-heading`}>
            <div className="mb-5">
              <h2
                id={`${section.id}-heading`}
                className="mb-2 font-display text-2xl font-semibold tracking-tight text-textPrimary"
              >
                {section.title}
              </h2>
              <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                {section.intro}
              </p>
            </div>
            <div className="grid gap-5">
              {section.entries.map((entry) => (
                <EntryCard
                  key={`${section.id}-${entry.title}`}
                  entry={entry}
                  locale={locale}
                />
              ))}
            </div>
          </section>
        </AnimateIn>
      ))}

      <AnimateIn>
        <section
          className="mb-12 rounded-2xl border border-border/60 bg-surfaceElevated/50 p-6"
          aria-labelledby="compact-reference-heading"
        >
          <h2
            id="compact-reference-heading"
            className="mb-4 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Compact Daily Reference
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "After prayer",
                body: "Repeat SubhanAllah, Alhamdulillah, and Allahu akbar slowly. Add the full after-prayer pattern when it is steady.",
              },
              {
                title: "When overwhelmed",
                body: "Use one short dua, breathe, and take a practical step: call someone safe, leave danger, or ask for help.",
              },
              {
                title: "Before learning",
                body: "Ask Allah for beneficial knowledge and an open heart before a class, book, or hard conversation.",
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

      {pageSources.length > 0 && (
        <AnimateIn>
          <div className="mb-10">
            <SourcesPanel
              sources={pageSources}
              note="This page is source-checked for listed references and remains review-needed for hadith wording review, transliteration review, and any personal religious questions."
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
            href={localizeHref(locale, "/mental-health")}
            variant="outline"
          >
            Mental health support
            <Icon name="chevron-right" size="sm" />
          </Button>
          <Button
            href={localizeHref(locale, "/roadmap/week-1/questions-and-doubts")}
            variant="outline"
          >
            Questions and doubts
            <Icon name="chevron-right" size="sm" />
          </Button>
        </div>
      </AnimateIn>
    </div>
  );
}
