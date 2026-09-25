import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SourceTags } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import { localizeHref, type Locale } from "@/lib/i18n";
import type { InfoCard } from "@/lib/tool-content";

function PointList({ items }: { items: string[] }) {
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

/** One situational card on a tool page. All text comes from the tool JSON. */
export function InfoCardSection({
  card,
  locale,
  className = "mt-12",
}: {
  card: InfoCard;
  locale: Locale;
  className?: string;
}) {
  const headingId = `${card.id}-heading`;
  return (
    <section
      id={card.id}
      className={`scroll-mt-24 rounded-2xl border border-border/60 bg-white p-6 shadow-card ${className}`}
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="mb-3 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
      >
        {card.title}
      </h2>
      {card.summary && (
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-textSecondary">
          {card.summary}
        </p>
      )}
      <PointList items={card.points} />
      {card.differences && card.differences.length > 0 && (
        <div className="mt-5 rounded-xl border border-border/50 bg-surfaceElevated/50 p-4">
          {card.differencesTitle && (
            <h3 className="mb-3 mt-0 text-base font-semibold text-textPrimary">
              {card.differencesTitle}
            </h3>
          )}
          <PointList items={card.differences} />
        </div>
      )}
      {card.referral && (
        <p className="mb-0 mt-4 text-sm font-medium leading-relaxed text-textPrimary">
          {card.referral}
        </p>
      )}
      {card.links && card.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-x-5">
          {card.links.map((link) => (
            <Link
              key={link.href}
              href={localizeHref(locale, link.href)}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {link.label}
              <Icon name="chevron-right" size="sm" />
            </Link>
          ))}
        </div>
      )}
      <div className="mt-4">
        <SourceTags sources={getSourcesByIds(card.sourceIds, locale)} compact />
      </div>
    </section>
  );
}
