import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={item.href ?? item.label}
              className="mb-0 inline-flex items-center gap-1.5"
            >
              {index > 0 && (
                <svg
                  className="h-3 w-3 text-border"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}

              {isLast || !item.href ? (
                <span
                  className="font-medium text-textMuted"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-medium text-textSecondary no-underline transition-colors duration-200 hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
