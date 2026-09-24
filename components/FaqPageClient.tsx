"use client";

import { useEffect } from "react";

/**
 * Opens FAQ disclosures when they are the target of a link (for example from
 * site search) and before printing, so a printed FAQ shows every answer.
 */
export function FaqPageClient() {
  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) target.open = true;
    };
    const openAll = () => {
      document
        .querySelectorAll<HTMLDetailsElement>("details[data-faq]")
        .forEach((item) => {
          item.open = true;
        });
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    window.addEventListener("beforeprint", openAll);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener("beforeprint", openAll);
    };
  }, []);

  return null;
}
