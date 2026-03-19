"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale, useTranslations } from "@/components/LocaleProvider";
import { useGlobalSearch } from "@/components/GlobalSearchProvider";
import { localizeHref } from "@/lib/i18n";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

function DesktopDropdown({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  const openDropdown = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
    }
    if (e.key === "ArrowDown" && !open) {
      e.preventDefault();
      setOpen(true);
    }
  }

  return (
    <li
      ref={dropdownRef}
      className="relative mb-0 list-none"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium no-underline transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${
          isActive ? "text-primary" : "text-textSecondary"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
      >
        {item.label}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-300 ease-out-expo ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute left-0 top-full z-50 mt-2 mb-0 min-w-[200px] list-none animate-slide-down rounded-xl border border-border/50 bg-white/95 p-2 pl-0 shadow-elevated backdrop-blur-lg"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          {item.dropdown!.map((subItem) => (
            <li key={subItem.href} className="mb-0 list-none">
              <Link
                href={subItem.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-textSecondary no-underline transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:bg-surfaceElevated focus-visible:text-primary focus-visible:outline-none"
                onClick={() => setOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpen(false);
                }}
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const { openSearch } = useGlobalSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { href: localizeHref(locale, "/roadmap"), label: t("nav.roadmap") },
    { href: localizeHref(locale, "/topics"), label: t("nav.topics") },
    { href: localizeHref(locale, "/glossary"), label: t("nav.glossary") },
    {
      href: localizeHref(locale, "/resources"),
      label: t("nav.resources"),
      dropdown: [
        {
          href: localizeHref(locale, "/resources"),
          label: t("nav.allResources"),
        },
        {
          href: localizeHref(locale, "/resources/find-masjid"),
          label: t("nav.findMasjid"),
        },
      ],
    },
    {
      href: localizeHref(locale, "/prayer-times"),
      label: t("nav.tools"),
      dropdown: [
        {
          href: localizeHref(locale, "/prayer-times"),
          label: t("nav.prayerTimes"),
        },
        {
          href: localizeHref(locale, "/qibla"),
          label: t("nav.qibla"),
        },
        {
          href: localizeHref(locale, "/asma-al-husna"),
          label: t("nav.asmaAlHusna"),
        },
      ],
    },
    {
      href: localizeHref(locale, "/about"),
      label: t("nav.about"),
      dropdown: [
        { href: localizeHref(locale, "/about"), label: t("nav.aboutUs") },
        {
          href: localizeHref(locale, "/accessibility"),
          label: t("nav.accessibility"),
        },
        { href: localizeHref(locale, "/privacy"), label: t("nav.privacy") },
        { href: localizeHref(locale, "/terms"), label: t("nav.terms") },
        { href: localizeHref(locale, "/sources"), label: t("nav.sources") },
      ],
    },
  ];

  /* Track scroll for glass effect */
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href: string, dropdown?: DropdownItem[]) {
    if (pathname === href) return true;
    if (dropdown) {
      return dropdown.some((sub) => pathname === sub.href);
    }
    return false;
  }

  // All links for the mobile menu (flattened, no duplicates)
  const mobileLinks = [
    { href: localizeHref(locale, "/"), label: t("nav.home") },
    { href: localizeHref(locale, "/roadmap"), label: t("nav.roadmap") },
    { href: localizeHref(locale, "/topics"), label: t("nav.topics") },
    { href: localizeHref(locale, "/glossary"), label: t("nav.glossary") },
    { href: localizeHref(locale, "/resources"), label: t("nav.resources") },
    {
      href: localizeHref(locale, "/resources/find-masjid"),
      label: t("nav.findMasjid"),
      prominent: true,
    },
    { href: localizeHref(locale, "/ramadan"), label: t("nav.ramadan") },
    {
      href: localizeHref(locale, "/mental-health"),
      label: t("nav.mentalHealth"),
    },
    {
      href: localizeHref(locale, "/prayer-times"),
      label: t("nav.prayerTimes"),
    },
    {
      href: localizeHref(locale, "/qibla"),
      label: t("nav.qibla"),
    },
    {
      href: localizeHref(locale, "/asma-al-husna"),
      label: t("nav.asmaAlHusna"),
    },
    { href: localizeHref(locale, "/about"), label: t("nav.about") },
    {
      href: localizeHref(locale, "/accessibility"),
      label: t("nav.accessibility"),
    },
    { href: localizeHref(locale, "/privacy"), label: t("nav.privacy") },
    { href: localizeHref(locale, "/terms"), label: t("nav.terms") },
    { href: localizeHref(locale, "/sources"), label: t("nav.sources") },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-white/80 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-white"
      }`}
    >
      <nav
        aria-label={t("nav.mainNavigation")}
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
      >
        {/* Logo / Brand */}
        <Link
          href={localizeHref(locale, "/")}
          className="group flex items-center gap-2.5 text-xl font-bold text-primary no-underline hover:text-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
          aria-label={t("brand.homeAriaLabel")}
        >
          {/* Logo mark */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-soft transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/revert-guide-logo.png"
              alt=""
              width={40}
              height={40}
              aria-hidden="true"
            />
          </span>
          <span className="font-display text-lg tracking-tight">
            {t("brand.name")}
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <ul className="mb-0 list-none items-center gap-1 pl-0 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href, item.dropdown);

              // Dropdown items
              if (item.dropdown) {
                return (
                  <DesktopDropdown
                    key={item.label}
                    item={item}
                    isActive={active}
                  />
                );
              }

              // Standard link
              return (
                <li key={item.href} className="mb-0 list-none">
                  <Link
                    href={item.href}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium no-underline transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${
                      active
                        ? "text-primary bg-surfaceElevated"
                        : "text-textSecondary"
                    }`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-textMuted transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
            aria-label={t("search.openSearch")}
            title={`${t("common.search")} (${t("search.keyboardHint")})`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile search + hamburger */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-textSecondary transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
            aria-label={t("search.openSearch")}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* Mobile hamburger button */}
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-textSecondary transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ${
                  menuOpen ? "top-[9px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ${
                  menuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ${
                  menuOpen ? "top-[9px] -rotate-45" : "top-[17px]"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`fixed inset-x-0 top-[57px] z-50 max-h-[calc(100vh-57px)] overflow-y-auto bg-white/95 backdrop-blur-xl transition-all duration-300 ease-out-expo lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-label={t("nav.mobileMenu")}
      >
        <div className="border-b border-border/40 px-5 py-4">
          <LanguageSwitcher />
        </div>
        <ul className="space-y-1 px-5 py-4">
          {mobileLinks.map((link, index) => {
            const active = pathname === link.href;
            return (
              <li
                key={link.href}
                className={menuOpen ? "animate-fade-up" : ""}
                style={
                  menuOpen ? { animationDelay: `${index * 0.03}s` } : undefined
                }
              >
                <Link
                  href={link.href}
                  className={`flex min-h-11 items-center rounded-xl px-4 text-sm font-medium no-underline transition-all duration-200 ${
                    link.prominent
                      ? "mt-2 gap-2.5 bg-primary text-white shadow-soft hover:bg-primaryHover"
                      : active
                        ? "bg-surfaceElevated text-primary"
                        : "text-textSecondary hover:bg-surface hover:text-primary"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.prominent && (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
