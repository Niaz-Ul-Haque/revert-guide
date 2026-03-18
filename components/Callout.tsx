type CalloutVariant = "info" | "tip" | "warning" | "important";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const variantConfig: Record<
  CalloutVariant,
  {
    bg: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
    role?: string;
    icon: React.ReactNode;
  }
> = {
  info: {
    bg: "bg-surfaceElevated/70",
    borderColor: "border-primary/30",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    ),
  },
  tip: {
    bg: "bg-accentYellow/20",
    borderColor: "border-oliveAccent/40",
    iconBg: "bg-accentYellow/40",
    iconColor: "text-accent",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  warning: {
    bg: "bg-accentYellow/15",
    borderColor: "border-warning/30",
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
    role: "alert",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  important: {
    bg: "bg-surfaceElevated/60",
    borderColor: "border-error/30",
    iconBg: "bg-error/10",
    iconColor: "text-error",
    role: "alert",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
};

export function Callout({ variant = "info", title, children }: CalloutProps) {
  const config = variantConfig[variant];

  return (
    <div
      className={`my-6 rounded-2xl border ${config.borderColor} ${config.bg} p-5 backdrop-blur-sm`}
      role={config.role ?? "note"}
    >
      <div className="flex gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${config.iconBg} ${config.iconColor}`}
        >
          {config.icon}
        </span>
        <div className="min-w-0 flex-1">
          {title && (
            <p className="mb-2 text-sm font-semibold text-textPrimary">
              {title}
            </p>
          )}
          <div className="text-sm leading-relaxed text-textSecondary [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
