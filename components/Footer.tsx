import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/sources", label: "Sources" },
];

const quickLinks = [
  { href: "/roadmap", label: "Roadmap" },
  { href: "/topics", label: "Topics" },
  { href: "/glossary", label: "Glossary" },
  { href: "/resources", label: "Resources" },
  { href: "/ramadan", label: "Ramadan Guide" },
  { href: "/mental-health", label: "Mental Health" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-surface">
      {/* Decorative background elements */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primaryGreen/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-accentYellow/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2.5 text-lg font-bold text-primary no-underline hover:text-primaryHover"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/revert-guide-logo.png"
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden="true"
                />
              </span>
              <span className="font-display tracking-tight">Revert Guide</span>
            </Link>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-textSecondary">
              A free, offline-first resource for new Muslims. No tracking, no
              ads, just guidance on your journey.
            </p>
            {/* Logo mark in footer */}
            <div
              className="mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 opacity-60 md:h-20 md:w-20"
              aria-hidden="true"
            >
              <Image
                src="/revert-guide-logo.png"
                alt=""
                width={40}
                height={40}
                className="opacity-80"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-textMuted">
              Explore
            </p>
            <nav aria-label="Quick links">
              <ul className="flex flex-col gap-2.5 pl-0">
                {quickLinks.map((link) => (
                  <li key={link.href} className="mb-0">
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-textSecondary no-underline transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-textMuted">
              Information
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2.5 pl-0">
                {footerLinks.map((link) => (
                  <li key={link.href} className="mb-0">
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-textSecondary no-underline transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border/50 pt-6">
          <p className="mb-0 text-center text-xs text-textMuted">
            &copy; {new Date().getFullYear()} Revert Guide. Made with care for
            new Muslims everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
