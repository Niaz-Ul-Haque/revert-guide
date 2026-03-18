import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Callout } from "@/components/Callout";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata = {
  title: "Taking Care of Your Mind - Revert Guide",
  description:
    "Emotional support and guidance for new Muslims. Validation, coping strategies, crisis resources, and practical advice for navigating the challenges of conversion.",
};

export default function MentalHealthPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Taking Care of Your Mind" },
        ]}
      />

      {/* ── 1. Title ── */}
      <header className="relative mb-12">
        <AnimateIn animation="fade-up">
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            Taking Care of Your Mind
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-textSecondary">
            Your emotional well-being matters. This page is here to support you.
          </p>
        </AnimateIn>

        {/* Decorative illustration */}
        <div
          className="pointer-events-none absolute -right-4 top-0 hidden h-[160px] w-[100px] opacity-[0.12] lg:block"
          aria-hidden="true"
        >
          <Image
            src="/Adult female Character Standing.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
            aria-hidden="true"
          />
        </div>
      </header>

      {/* ── 2. Validation ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="validation">
          <h2
            id="validation"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Your Feelings Are Valid
          </h2>
          <Callout variant="info" title="You are not alone">
            <p>
              Many new Muslims experience feelings of loneliness, doubt,
              anxiety, identity questions, or family conflict. These feelings do
              not make you a bad Muslim — they make you human.
            </p>
          </Callout>
          <p className="text-base leading-relaxed text-textSecondary">
            Embracing Islam is one of the most significant decisions you can
            make. It is a beautiful step, but it is also a major life change
            that requires emotional adjustment. It is completely normal to feel
            overwhelmed, conflicted, or uncertain at times. What matters is that
            you are here, learning and growing. Every convert before you has
            navigated these same waters, and you will find your footing too.
          </p>
        </section>
      </AnimateIn>

      {/* ── 3. Islamic Framing ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="islamic-framing">
          <h2
            id="islamic-framing"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Faith and Professional Help
          </h2>
          <p className="mb-3 text-base leading-relaxed text-textSecondary">
            Islam teaches compassion, mercy, and that taking care of your mind
            is important. Trust in Allah can bring great comfort, but our faith
            also teaches us to seek practical means of help. Just as we see a
            doctor for physical illness while praying for healing, it is
            completely acceptable to see a counsellor for emotional distress
            while praying for ease.
          </p>
          <p className="mb-3 text-base leading-relaxed text-textSecondary">
            The Prophet Muhammad (peace be upon him) and his companions
            experienced sadness, grief, and stress. Being Muslim does not mean
            being happy every moment — it means having hope and perseverance
            even in difficulty.
          </p>
          <Callout variant="tip" title="Tie your camel">
            <p>
              There is a well-known concept in Islam: &quot;Tie your camel, then
              trust in Allah.&quot; This means taking practical steps to address
              your challenges while also placing your trust in God. Seeking
              therapy or counselling is one such practical step.
            </p>
          </Callout>
        </section>
      </AnimateIn>

      {/* ── 4. Common Experiences ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="common-experiences">
          <h2
            id="common-experiences"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Common Experiences
          </h2>

          <div className="flex flex-col gap-5">
            {[
              {
                title: "Loneliness",
                body: "You might feel isolated if you do not have Muslim friends yet, or if your family has distanced themselves. This feeling is temporary, even though it may not seem that way right now.",
                help: "Join new Muslim classes or community events at your local mosque. Online communities can provide support when in-person connections are not available. Check if your mosque has a convert support group — many do.",
              },
              {
                title: "Family Conflict",
                body: "Your family may not understand your conversion, and some may react with confusion, concern, or even hostility. This is one of the hardest parts of the journey for many converts.",
                help: "Maintain loving communication if possible. Give your family time to adjust — you do not have to debate every detail of your faith. Set gentle boundaries to protect your peace. Many converts have navigated this before you, and their experiences can offer guidance and hope.",
              },
              {
                title: "Identity Questions",
                body: 'You may feel torn between your previous identity and your new life as a Muslim. You might wonder if you are "Muslim enough" or feel like an imposter in religious settings.',
                help: 'You do not have to abandon your culture or personality to be Muslim. Islam adds to who you are — it does not erase who you were. Embrace the good from your upbringing and blend it with Islamic values. Everyone grows at their own pace, and there is no single "right way" to be Muslim.',
              },
              {
                title: "Doubts in Faith",
                body: "You might experience doubts about Islam or second-guess your decision. Faith can fluctuate, and questions are a natural part of any spiritual journey.",
                help: "Islam encourages seeking knowledge. Talk to a knowledgeable mentor, read reliable books, or attend a study circle. Do not bottle up your questions — exploring them with sincerity often strengthens faith over time. Make dua (supplication) for guidance, and be patient with yourself.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-card"
              >
                <h3 className="mb-2 mt-0 font-display text-lg font-semibold text-textPrimary">
                  {item.title}
                </h3>
                <p className="mb-3 text-base leading-relaxed text-textSecondary">
                  {item.body}
                </p>
                <p className="mb-0 text-base leading-relaxed text-textSecondary">
                  <strong className="text-textPrimary">What can help:</strong>{" "}
                  {item.help}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* ── 5. Practical Self-Care ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="self-care">
          <h2
            id="self-care"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Practical Self-Care Strategies
          </h2>
          <ul className="flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {[
              "Maintain basic self-care: adequate sleep, nutritious food, and regular exercise. Physical well-being strongly affects emotional well-being.",
              "Stay connected — reach out to a friend or mentor regularly. Even a weekly phone call can make a big difference.",
              "Engage in activities that bring you peace and joy: nature walks, reading, creative hobbies. Healthy recreation is not un-Islamic.",
              'Use remembrance of Allah (dhikr) and prayer to ease anxiety. Simple phrases like "SubhanAllah" or reciting Al-Fatiha can bring calm in difficult moments.',
              "Journal your feelings or express them in dua — writing things down or talking to Allah from your heart can relieve emotional pressure.",
              "Set healthy boundaries with people or situations that drain you emotionally. Protecting your peace is a form of self-care.",
              'Practice breathing exercises. Dhikr (remembrance) can be meditative — repeating "SubhanAllah" with slow, deep breaths combines spiritual and physical calm.',
              "Find a supportive community or mentor who understands the conversion journey. You do not have to do this alone.",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-3.5"
              >
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

      {/* ── 6. When to Seek Help ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="seek-help">
          <h2
            id="seek-help"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            When to Seek Professional Help
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            If you experience any of the following, please reach out to a mental
            health professional or crisis helpline. This is not a sign of weak
            faith — getting help is a courageous step toward healing that Islam
            fully supports.
          </p>
          <ul className="mb-4 flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {[
              "Persistent sadness, hopelessness, or emptiness that does not improve",
              "Inability to perform daily functions — eating, working, or self-care — due to your emotional state",
              "Frequent panic attacks or intense anxiety that interferes with daily life",
              "Thoughts of self-harm or wishing you were not alive",
              "Feeling completely overwhelmed or unable to cope with daily life",
              "Using substances to cope with your emotions",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-error/20 bg-error/5 p-3.5"
              >
                <Icon
                  name="alert-circle"
                  size="sm"
                  className="mt-0.5 shrink-0 text-error"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <Callout variant="important" title="If you are in immediate danger">
            <p>
              If you are having thoughts of harming yourself, please call 911 or
              go to your nearest emergency room immediately. Your life is
              precious and valued.
            </p>
          </Callout>
        </section>
      </AnimateIn>

      {/* ── 7. Disclaimer ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="disclaimer">
          <p className="rounded-xl bg-surfaceElevated/50 p-4 text-sm italic leading-relaxed text-textMuted">
            <strong>Note:</strong> This guide is for general emotional support
            and education. It is not a substitute for professional therapy or
            medical advice. If you are experiencing a mental health crisis,
            please contact a licensed professional or one of the crisis
            resources listed below.
          </p>
        </section>
      </AnimateIn>

      {/* ── 8. Resources ── */}
      <AnimateIn>
        <section className="mb-10" aria-labelledby="resources">
          <h2
            id="resources"
            className="mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            Support Resources
          </h2>

          {/* Crisis Helplines */}
          <h3 className="mb-3 font-display text-lg font-semibold text-textPrimary">
            Crisis Helplines
          </h3>
          <div className="mb-8 flex flex-col gap-3">
            {[
              {
                name: "988 Suicide & Crisis Lifeline",
                desc: "24/7 support for anyone in distress or crisis.",
                label: "Call or text:",
                contact: "988",
                href: "tel:988",
              },
              {
                name: "Crisis Text Line",
                desc: "Free, 24/7 text-based crisis support.",
                label: "Text HOME to",
                contact: "741741",
                href: "sms:741741",
              },
              {
                name: "Naseeha Mental Health Helpline",
                desc: "Confidential support for Muslims, available 24/7.",
                label: "Call:",
                contact: "1-866-627-3342",
                href: "tel:1-866-627-3342",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft"
              >
                <p className="mb-1 text-base font-bold text-textPrimary">
                  {item.name}
                </p>
                <p className="mb-2 text-sm leading-relaxed text-textSecondary">
                  {item.desc}
                </p>
                <p className="mb-0 flex items-center gap-2 text-sm">
                  <span className="font-medium text-textPrimary">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="font-bold text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline"
                  >
                    {item.contact}
                  </a>
                </p>
              </div>
            ))}
          </div>

          {/* Directories & Support */}
          <h3 className="mb-3 font-display text-lg font-semibold text-textPrimary">
            Directories &amp; Support
          </h3>
          <div className="mb-8 flex flex-col gap-3">
            <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft">
              <p className="mb-1 text-base font-bold text-textPrimary">
                Khalil Center
              </p>
              <p className="mb-2 text-sm leading-relaxed text-textSecondary">
                Faith-sensitive therapy and support groups for Muslims.
              </p>
              <a
                href="https://khalilcenter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline"
              >
                Visit website
                <Icon name="external-link" size="sm" />
              </a>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft">
              <p className="mb-1 text-base font-bold text-textPrimary">
                Your Local Imam or Muslim Chaplain
              </p>
              <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                Many imams and chaplains are trained to provide spiritual and
                emotional guidance. Do not hesitate to reach out to one at your
                local mosque.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft">
              <p className="mb-1 text-base font-bold text-textPrimary">
                Local Convert Support Groups
              </p>
              <p className="mb-0 text-sm leading-relaxed text-textSecondary">
                Check with your mosque for convert support groups in your area.
                Many communities have regular gatherings where new Muslims share
                experiences and support each other.
              </p>
            </div>
          </div>

          {/* Educational */}
          <h3 className="mb-3 font-display text-lg font-semibold text-textPrimary">
            Further Reading
          </h3>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft">
              <p className="mb-1 text-base font-bold text-textPrimary">
                Mental Health and the Muslim Convert Experience
              </p>
              <p className="mb-2 text-sm leading-relaxed text-textSecondary">
                An in-depth exploration of the unique emotional challenges
                converts face, with practical coping strategies.
              </p>
              <a
                href="https://yaqeeninstitute.org/read/paper/new-muslims-and-mental-health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline"
              >
                Read article
                <Icon name="external-link" size="sm" />
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* ── Cross-links ── */}
      <AnimateIn>
        <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center shadow-card">
          <p className="mb-3 text-sm text-textSecondary">
            Looking for community support?
          </p>
          <Link
            href="/topics/community"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary no-underline transition-all duration-300 ease-out-expo hover:bg-primary/20 hover:text-primaryHover"
          >
            Read: Building Your Muslim Community
            <Icon name="chevron-right" size="sm" />
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}
