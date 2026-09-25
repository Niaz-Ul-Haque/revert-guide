"use client";

import { useEffect } from "react";

/**
 * Old FAQ ids that were merged into another entry. Links shared before the
 * merge (/faq#old-id) open the surviving entry instead.
 */
const FAQ_ID_ALIASES: Record<string, string> = {
  "faq-gap-001": "faq-wor-013",
  "faq-gap-002": "faq-wor-008",
  "faq-gap-003": "faq-lif-024",
  "faq-gap-004": "faq-lif-027",
  "faq-gap-005": "faq-lif-028",
  "faq-fnd-010": "faq-lif-022",
  "faq-fnd-011": "faq-lif-016",
  "faq-fnd-020": "faq-pry-006",
  "faq-fnd-021": "faq-lif-014",
  "faq-lrn-001": "faq-pry-006",
  "faq-pry-022": "faq-wor-001",
  "faq-pry-023": "faq-lif-007",
  "faq-pry-024": "faq-lif-007",
  "faq-sup-002": "faq-lrn-002",
};

/**
 * Opens FAQ disclosures when they are the target of a link (for example from
 * site search) and before printing, so a printed FAQ shows every answer.
 */
export function FaqPageClient() {
  useEffect(() => {
    const openFromHash = () => {
      const hashId = decodeURIComponent(window.location.hash.slice(1));
      if (!hashId) return;
      const id = FAQ_ID_ALIASES[hashId] ?? hashId;
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        if (id !== hashId) target.scrollIntoView();
      }
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
