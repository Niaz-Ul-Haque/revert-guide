import Link from "next/link";

/* ─── Base Card ─── */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className = "", href }: CardProps) {
  const styles = `block rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 ease-out-expo page-break-avoid ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${styles} no-underline hover:border-primaryGreen/60 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong`}
      >
        {children}
      </Link>
    );
  }

  return <div className={styles}>{children}</div>;
}

/* ─── Stage Card ─── */

interface StageCardProps {
  title: string;
  description: string;
  duration: string;
  stageNumber: number;
  href: string;
}

export function StageCard({
  title,
  description,
  duration,
  stageNumber,
  href,
}: StageCardProps) {
  return (
    <Card href={href} className="group relative overflow-hidden">
      {/* Decorative gradient accent */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primaryGreen/15 transition-transform duration-500 group-hover:scale-150"
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-4">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-soft"
          aria-hidden="true"
        >
          {stageNumber}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 mt-0 text-lg font-semibold text-textPrimary">
            {title}
          </h3>
          <p className="mb-3 text-sm text-textSecondary">{description}</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surfaceElevated px-3 py-1 text-xs font-medium text-textMuted">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {duration}
          </span>
        </div>
      </div>
    </Card>
  );
}

/* ─── Step Card ─── */

interface StepCardProps {
  title: string;
  stepNumber: number;
  timeEstimate?: string;
  href: string;
}

export function StepCard({
  title,
  stepNumber,
  timeEstimate,
  href,
}: StepCardProps) {
  return (
    <Card href={href} className="group">
      <div className="flex items-center gap-4">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-soft transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          {stepNumber}
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
            {title}
          </h4>
          {timeEstimate && (
            <span className="mt-0.5 block text-xs text-textMuted">
              {timeEstimate}
            </span>
          )}
        </div>
        <svg
          className="h-5 w-5 shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </Card>
  );
}

/* ─── Topic Card ─── */

interface TopicCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function TopicCard({ title, description, href, icon }: TopicCardProps) {
  return (
    <Card href={href} className="group relative overflow-hidden">
      {/* Subtle gradient on hover */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primaryGreen/0 to-primaryGreen/0 transition-all duration-500 group-hover:from-primaryGreen/5 group-hover:to-transparent"
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-4">
        {icon && (
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surfaceElevated text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 mt-0 text-lg font-semibold text-textPrimary">
            {title}
          </h3>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

/* ─── Resource Card ─── */

type ResourceType = "article" | "video" | "book" | "app" | "community" | "pdf";

interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  url: string;
}

const typeBadgeLabels: Record<ResourceType, string> = {
  article: "Article",
  video: "Video",
  book: "Book",
  app: "App",
  community: "Community",
  pdf: "PDF",
};

const typeBadgeColors: Record<ResourceType, string> = {
  article: "bg-primary/10 text-primary",
  video: "bg-accent/10 text-accent",
  book: "bg-primaryGreen/30 text-primaryHover",
  app: "bg-secondaryGreen/30 text-accent",
  community: "bg-surfaceElevated text-primary",
  pdf: "bg-oliveAccent/20 text-accent",
};

export function ResourceCard({
  title,
  description,
  type,
  url,
}: ResourceCardProps) {
  const isExternal = url.startsWith("http");

  return (
    <Card className="group">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-2.5 flex flex-wrap items-center gap-2">
            <h3 className="mb-0 mt-0 text-base font-semibold text-textPrimary">
              {title}
            </h3>
            <span
              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${typeBadgeColors[type]}`}
            >
              {typeBadgeLabels[type]}
            </span>
          </div>
          <p className="mb-3 text-sm leading-relaxed text-textSecondary">
            {description}
          </p>
          <a
            href={url}
            className="inline-flex items-center gap-1.5 rounded-lg bg-surfaceElevated px-3 py-1.5 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/15 hover:text-primaryHover"
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {isExternal ? "Visit Resource" : "View Resource"}
            {isExternal && (
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            )}
          </a>
        </div>
      </div>
    </Card>
  );
}
