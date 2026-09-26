"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { useTranslations } from "@/components/LocaleProvider";

/**
 * A fixed "back to top" link that appears once the page is scrolled past the
 * first screen. It is a plain anchor to the main landmark, so the browser
 * handles the scroll (smooth via the global scroll-behavior, instant under
 * reduced motion) and moves keyboard focus to the top of the content.
 */
export function BackToTop() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#main-content"
      aria-label={t("common.backToTop")}
      className={`fixed bottom-16 end-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white no-underline shadow-elevated transition-opacity duration-200 hover:bg-primaryHover hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong print:hidden ${
        visible ? "opacity-100" : "invisible opacity-0"
      }`}
    >
      <Icon name="chevron-down" className="rotate-180" />
    </a>
  );
}
