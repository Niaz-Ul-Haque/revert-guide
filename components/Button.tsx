import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends
    ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink
  extends
    ButtonBaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#5B9168] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
  secondary:
    "bg-accent text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#7A8B4A] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
  outline:
    "border-2 border-primary/30 text-primary bg-transparent hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold no-underline hover:no-underline transition-all duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorRest } = rest as ButtonAsLink;

    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorRest}
        >
          {children}
          <svg
            className="h-4 w-4"
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
        </a>
      );
    }

    return (
      <Link href={href} className={styles} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>;
  return (
    <button className={styles} {...buttonRest}>
      {children}
    </button>
  );
}
