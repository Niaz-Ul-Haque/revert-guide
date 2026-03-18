import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata = {
  title: "Sources & Citations - Revert Guide",
  description:
    "Bibliography and citations used throughout the Revert Guide content. Quranic references, hadith, articles, and books.",
};

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Sources & Citations" }]}
      />

      <AnimateIn>
        <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
          Sources &amp; Citations
        </h1>
        <p className="mb-10 text-base leading-relaxed text-textSecondary">
          We are committed to accuracy and grounding our content in authentic
          sources. Every specific claim and quote in this guide is referenced
          below. We encourage you to read these sources yourself for deeper
          knowledge.
        </p>
      </AnimateIn>

      {/* Quranic References */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="quran-refs">
          <h2
            id="quran-refs"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Quranic References
          </h2>
          <ol className="flex flex-col gap-3 pl-0">
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[Q1]</span> Quran
              2:185 — &quot;Ramadan is the month in which the Quran was sent
              down as a guide to mankind...&quot; — Referenced in{" "}
              <Link href="/ramadan" className="text-primary">
                Ramadan Guide
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[Q2]</span> Quran
              1:1–7 (Surah Al-Fatiha) — The opening chapter of the Quran,
              recited in every unit of prayer. — Referenced in{" "}
              <Link href="/topics/prayer" className="text-primary">
                Topics: Prayer
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[Q3]</span> Quran
              112:1–4 (Surah Al-Ikhlas) — &quot;Say, He is Allah, the
              One...&quot; — Referenced in{" "}
              <Link href="/topics/beliefs" className="text-primary">
                Topics: Core Beliefs
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[Q4]</span> Quran
              7:156 — &quot;My mercy encompasses all things.&quot; — Referenced
              in{" "}
              <Link href="/topics/beliefs" className="text-primary">
                Topics: Core Beliefs
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[Q5]</span> Quran
              21:107 — &quot;We have not sent you except as a mercy to the
              worlds.&quot; — Referenced in{" "}
              <Link href="/topics/beliefs" className="text-primary">
                Topics: Core Beliefs
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[Q6]</span> Quran
              97:1–5 (Surah Al-Qadr) — Describes Laylat al-Qadr as &quot;better
              than a thousand months.&quot; — Referenced in{" "}
              <Link href="/ramadan" className="text-primary">
                Ramadan Guide
              </Link>
            </li>
          </ol>
        </section>
      </AnimateIn>

      {/* Hadith References */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="hadith-refs">
          <h2
            id="hadith-refs"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Hadith References
          </h2>
          <ol className="flex flex-col gap-3 pl-0">
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[H1]</span> Sahih
              Bukhari, Vol. 1, Book 2, Hadith 7 — &quot;Actions are judged by
              intentions (niyyah).&quot; — Referenced throughout multiple steps
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[H2]</span> Sahih
              Muslim, Book 35, Hadith 6505 — &quot;How wonderful is the affair
              of the believer...&quot; — Referenced in{" "}
              <Link href="/topics/beliefs" className="text-primary">
                Topics: Core Beliefs
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[H3]</span> Sahih
              Bukhari, Book 8, Hadith 604 — &quot;Pray as you have seen me
              pray.&quot; — Referenced in{" "}
              <Link href="/topics/prayer" className="text-primary">
                Topics: Prayer
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[H4]</span> Sahih
              Bukhari — &quot;Allah has ninety-nine names; whoever memorizes
              them will enter Paradise.&quot; — Referenced in{" "}
              <Link href="/topics/beliefs" className="text-primary">
                Topics: Core Beliefs
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[H5]</span> Jami
              at-Tirmidhi — &quot;Tie your camel, then trust in Allah.&quot; —
              Referenced in{" "}
              <Link href="/mental-health" className="text-primary">
                Mental Health Guide
              </Link>
            </li>
          </ol>
        </section>
      </AnimateIn>

      {/* Articles */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="article-refs">
          <h2
            id="article-refs"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Articles
          </h2>
          <ol className="flex flex-col gap-3 pl-0">
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[A1]</span>{" "}
              <em>New Muslim Guide</em> — newmuslimguide.com — Comprehensive
              resource covering worship, beliefs, and daily life. — Referenced
              in Steps 1–3
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[A2]</span>{" "}
              <em>My Prayer (Salah) — A Step-by-Step Guide</em> —
              newmuslimguide.com — Illustrated prayer guide. — Referenced in{" "}
              <Link href="/roadmap/week-1/prayer" className="text-primary">
                Step: Prayer
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[A3]</span>{" "}
              <em>Mental Health and the Muslim Convert Experience</em> — Yaqeen
              Institute — Referenced in{" "}
              <Link href="/mental-health" className="text-primary">
                Mental Health Guide
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[A4]</span>{" "}
              <em>Ramadan Prep Guide</em> — Yaqeen Institute — Referenced in{" "}
              <Link href="/ramadan" className="text-primary">
                Ramadan Guide
              </Link>
            </li>
          </ol>
        </section>
      </AnimateIn>

      {/* Books */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="book-refs">
          <h2
            id="book-refs"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Books
          </h2>
          <ol className="flex flex-col gap-3 pl-0">
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[B1]</span>{" "}
              <em>The Clear Quran</em> by Dr. Mustafa Khattab — Modern English
              Quran translation. — Referenced in{" "}
              <Link href="/topics/quran" className="text-primary">
                Topics: Quran
              </Link>
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[B2]</span>{" "}
              <em>Welcome to Islam</em> by Mustafa Umar — Practical new Muslim
              guide. — Referenced in Steps 1 and 3
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[B3]</span>{" "}
              <em>Being Muslim: A Practical Guide</em> by Asad Tarsin (Sandala
              Press) — Handbook for new and returning Muslims. — Referenced in
              Steps 3, 8
            </li>
            <li className="rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary">
              <span className="font-bold text-textPrimary">[B4]</span>{" "}
              <em>Fortress of the Muslim (Hisn al-Muslim)</em> — Collection of
              authentic daily supplications. — Referenced in{" "}
              <Link href="/topics/prayer" className="text-primary">
                Topics: Prayer
              </Link>
            </li>
          </ol>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section aria-labelledby="closing">
          <p className="text-sm text-textMuted">
            If you have questions about any of these references or would like to
            suggest additional sources, please use the feedback options within
            the app. We welcome contributions that help strengthen the accuracy
            and depth of this guide.
          </p>
        </section>
      </AnimateIn>
    </div>
  );
}
