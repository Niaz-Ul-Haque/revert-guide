import { Icon } from "@/components/Icon";
import type { SourceEntry } from "@/lib/types";

type SourceReference = Pick<
  SourceEntry,
  "id" | "title" | "organization" | "url" | "sourceType" | "label" | "note"
>;

interface SourceTagsProps {
  sources: SourceReference[];
  className?: string;
  compact?: boolean;
}

interface SourcesPanelProps extends SourceTagsProps {
  title?: string;
  note?: string;
}

export function SourceTags({
  sources,
  className = "",
  compact = false,
}: SourceTagsProps) {
  if (sources.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {sources.map((source) => (
        <a
          key={source.id}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-surfaceElevated text-primary no-underline transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${
            compact
              ? "px-2.5 py-1 text-[11px] font-medium"
              : "px-3 py-1.5 text-xs font-semibold"
          }`}
          aria-label={`${source.label}: ${source.title}`}
        >
          <span>{source.label}</span>
          <Icon name="external-link" size="sm" className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

export function SourcesPanel({
  sources,
  title = "Sources used",
  note,
  className = "",
}: SourcesPanelProps) {
  if (sources.length === 0) return null;

  return (
    <section
      className={`page-break-avoid rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 ${className}`}
      aria-labelledby="sources-used-heading"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon name="file-text" size="sm" />
        </span>
        <h2
          id="sources-used-heading"
          className="mb-0 mt-0 font-display text-lg font-semibold text-textPrimary"
        >
          {title}
        </h2>
      </div>
      {note ? (
        <p className="mb-4 text-sm leading-relaxed text-textSecondary">
          {note}
        </p>
      ) : null}
      <ul className="mb-0 flex flex-col gap-3 pl-0">
        {sources.map((source) => (
          <li
            key={source.id}
            className="rounded-xl border border-border/50 bg-white p-4"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
              >
                {source.title}
                <Icon name="external-link" size="sm" />
              </a>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                {source.label}
              </span>
            </div>
            <p className="mb-1 text-xs font-medium text-textMuted">
              {source.organization} - {source.sourceType}
            </p>
            <p className="mb-0 text-sm leading-relaxed text-textSecondary">
              {source.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
