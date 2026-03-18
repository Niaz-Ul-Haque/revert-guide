import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Callout } from "@/components/Callout";
import { ResourceCard } from "@/components/Card";
import { AnimateIn } from "@/components/AnimateIn";
import { getAllResources } from "@/lib/content";

export const metadata = {
  title: "Ramadan Guide - Revert Guide",
  description:
    "Your first Ramadan as a Muslim. A comprehensive guide covering fasting basics, preparation, daily life, Tarawih, Eid al-Fitr, and resources for new Muslims.",
};

export default function RamadanPage() {
  const allResources = getAllResources();
  const ramadanResources = allResources.filter(
    (r) =>
      r.relatedStepIds.includes("fasting") ||
      r.relatedTopicIds.includes("fasting"),
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Ramadan Guide" }]}
      />

      {/* ── 1. Title ── */}
      <header className="relative mb-12">
        <AnimateIn animation="fade-up">
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Ramadan Guide
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-textSecondary">
            Your first Ramadan as a Muslim.
          </p>
        </AnimateIn>

        {/* Decorative illustration */}
        <div
          className="pointer-events-none absolute -right-4 top-0 hidden h-[160px] w-[100px] opacity-[0.12] lg:block"
          aria-hidden="true"
        >
          <Image
            src="/Grandmother female Character Standing.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* ── 2. Intro ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="what-is-ramadan">
          <h2
            id="what-is-ramadan"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            What Is Ramadan?
          </h2>
          <p className="text-base leading-relaxed text-textSecondary">
            Ramadan is the ninth month of the Islamic calendar and the holiest
            month for Muslims worldwide. During Ramadan, Muslims fast from dawn
            to sunset each day — abstaining from food, drink, and other physical
            needs. But Ramadan is far more than not eating; it is a time of
            spiritual reflection, self-improvement, increased prayer, and
            deepened community bonds. The Quran was first revealed during
            Ramadan, making it a month of special spiritual significance.
          </p>
        </section>
      </AnimateIn>

      {/* ── 3. For New Muslims ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="for-new-muslims">
          <h2
            id="for-new-muslims"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            For New Muslims
          </h2>
          <Callout variant="tip" title="You are not alone">
            <p>
              If this is your first Ramadan, it is completely normal to feel
              anxious or unsure. Remember that any fasting you can do is
              valuable, and you can build up gradually. Do not be hard on
              yourself — even lifelong Muslims find Ramadan challenging at
              times.
            </p>
          </Callout>
          <p className="text-base leading-relaxed text-textSecondary">
            Seek out a fasting buddy, mentor, or community group to share the
            experience with. Many mosques have special programs for new Muslims
            during Ramadan. You are taking on something beautiful, and the
            Muslim community is here to support you.
          </p>
        </section>
      </AnimateIn>

      {/* ── 4. Fasting Basics ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="fasting-basics">
          <h2
            id="fasting-basics"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Fasting Basics
          </h2>
          <div className="flex flex-col gap-3">
            {[
              {
                term: "Suhoor",
                desc: "(pre-dawn meal) — Eat a sustaining meal before the Fajr prayer. This is important for energy throughout the day. Foods high in fibre and protein help you stay full longer.",
              },
              {
                term: "Iftar",
                desc: "(breaking the fast) — Break your fast at sunset, traditionally with dates and water. This is a Sunnah of the Prophet Muhammad (peace be upon him) and a quick way to replenish energy.",
              },
              {
                term: "What to avoid",
                desc: "— No food, drink, or intimate relations from dawn to sunset. If you accidentally eat or drink, your fast is still valid — simply stop and continue fasting.",
              },
              {
                term: "Who is exempt",
                desc: "— Those who are sick, travelling, elderly, pregnant, nursing, or menstruating are exempt. Missed days can be made up later.",
              },
              {
                term: "Intention (Niyyah)",
                desc: "— Make an intention in your heart each night or before dawn that you are fasting for the sake of Allah.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4"
              >
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-textSecondary">
                  <strong className="text-textPrimary">{item.term}</strong>{" "}
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-textMuted">
            For detailed fasting rules, see{" "}
            <Link
              href="/topics/fasting"
              className="font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover"
            >
              Fasting and Ramadan
            </Link>{" "}
            in the Topics section.
          </p>
        </section>
      </AnimateIn>

      {/* ── 5. Preparing for Ramadan ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="preparing">
          <h2
            id="preparing"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Preparing for Ramadan
          </h2>
          <ul className="flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {[
              "Gradually adjust your sleep schedule — you will be waking up before dawn for suhoor.",
              "Reduce caffeine intake beforehand to avoid withdrawal headaches during fasting hours.",
              "Plan simple, nutritious suhoor and iftar meals ahead of time.",
              "If possible, let your employer or school know — many people are understanding about religious observances.",
              "Learn the key supplications: the intention for fasting and the dua for breaking the fast.",
              "Set personal goals for the month — read more Quran, give charity, improve a habit, or strengthen a relationship.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      {/* ── 6. During Ramadan ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="during-ramadan">
          <h2
            id="during-ramadan"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            During Ramadan
          </h2>

          <h3 className="mb-3 mt-4 font-display text-lg font-semibold text-textPrimary">
            Spiritual Practices
          </h3>
          <ul className="mb-6 flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {[
              "Read Quran every day — Ramadan is the month of the Quran, and even a few verses daily makes a difference.",
              "Increase your prayers, especially Tarawih (night prayers) at the mosque.",
              "Make dua (supplication) frequently — the prayers of a fasting person hold special significance.",
              "Give charity (sadaqah) if you are able — generosity is greatly encouraged during this month.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          <h3 className="mb-3 mt-4 font-display text-lg font-semibold text-textPrimary">
            Practical Survival Tips
          </h3>
          <Callout variant="tip" title="Stay hydrated!">
            <p>
              Drink plenty of water between iftar and suhoor. Dehydration is the
              most common challenge, especially during long summer fasts.
            </p>
          </Callout>
          <ul className="flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {[
              "Do not skip suhoor — it gives you energy to get through the day.",
              "Take a short nap if possible, especially if your nights are shorter due to Tarawih and suhoor.",
              "Expect an energy dip in the afternoon — schedule demanding tasks for the morning when possible.",
              "Break your fast with dates and water — this provides quick energy and follows the Sunnah.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>

      {/* ── 7. Tarawih and Community ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="tarawih">
          <h2
            id="tarawih"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Tarawih and Community
          </h2>
          <p className="mb-3 text-base leading-relaxed text-textSecondary">
            <strong className="text-textPrimary">Tarawih</strong> are special
            evening prayers performed during Ramadan, held after{" "}
            <span lang="ar" dir="rtl" className="font-arabic">
              العشاء
            </span>{" "}
            (Isha) prayer at the mosque. They can be quite long, but do not
            worry if you cannot pray the entire session — even partial
            participation is rewarding. Try to attend at least once to
            experience the beautiful community atmosphere.
          </p>
          <p className="mb-3 text-base leading-relaxed text-textSecondary">
            <strong className="text-textPrimary">Iftar gatherings</strong> at
            mosques and community centres are a wonderful way to break your fast
            together with others. You will find generous meals and welcoming
            faces. These gatherings are one of the most cherished parts of
            Ramadan and a great way to make new friends.
          </p>
          <Callout variant="info" title="Community tip">
            <p>
              Consider finding a fasting buddy or mentor for accountability and
              support. Sharing the experience with someone else makes the
              journey much easier.
            </p>
          </Callout>
        </section>
      </AnimateIn>

      {/* ── 8. Laylat al-Qadr ── */}
      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/40 p-6"
          aria-labelledby="laylat-al-qadr"
        >
          <h2
            id="laylat-al-qadr"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Laylat al-Qadr (Night of Power)
          </h2>
          <p className="mb-0 text-base leading-relaxed text-textSecondary">
            During the last ten nights of Ramadan, Muslims seek{" "}
            <strong className="text-textPrimary">Laylat al-Qadr</strong> — the
            Night of Power. The Quran describes this night as &quot;better than
            a thousand months.&quot; While its exact date is unknown, it is
            traditionally sought on the odd-numbered nights of the last ten days
            (21st, 23rd, 25th, 27th, or 29th). Many Muslims increase their
            worship during these nights through extra prayers, Quran reading,
            and supplication.
          </p>
        </section>
      </AnimateIn>

      {/* ── 9. Eid al-Fitr ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="eid">
          <h2
            id="eid"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Eid al-Fitr
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            At the end of Ramadan, Muslims celebrate{" "}
            <strong className="text-textPrimary">Eid al-Fitr</strong> — a joyful
            festival marking the completion of the month of fasting. It begins
            with a special Eid prayer in the morning, usually held in large
            gatherings at mosques or open spaces.
          </p>
          <ul className="mb-4 flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {[
              'Wear your best clothes and greet others with "Eid Mubarak" (Blessed Eid).',
              "Enjoy festive meals with your community — Eid is a day of celebration and gratitude.",
              "If you are able, contribute Zakat al-Fitr (a small charitable donation) before the Eid prayer. Ask your mosque for details.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
          <Callout variant="tip" title="You earned it!">
            <p>
              It is okay to feel emotional on Eid, especially if your family is
              far away or does not understand your journey. Remember — you have
              a new community to celebrate with. Go to the Eid prayer, enjoy the
              day, and be proud of what you accomplished.
            </p>
          </Callout>
        </section>
      </AnimateIn>

      {/* ── 10. Resources ── */}
      {ramadanResources.length > 0 && (
        <AnimateIn>
          <section className="mb-10" aria-labelledby="ramadan-resources">
            <h2
              id="ramadan-resources"
              className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
            >
              Resources
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ramadanResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  url={resource.url}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-textMuted">
              For more detail, explore the{" "}
              <Link
                href="/topics/fasting"
                className="font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover"
              >
                Fasting and Ramadan
              </Link>{" "}
              topic page.
            </p>
          </section>
        </AnimateIn>
      )}
    </div>
  );
}
