"use client";

import { useEffect } from "react";

/**
 * Opens the <details> that holds a link target (from an index on the page, a
 * shared link or site search) and opens every matching <details> before
 * printing, so a printed page shows all of its content.
 */
export function DetailsOpener({ selector }: { selector: string }) {
  useEffect(() => {
    const openFor = (hash: string) => {
      const id = decodeURIComponent(hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      const details =
        target?.closest<HTMLDetailsElement>("details") ??
        target?.querySelector<HTMLDetailsElement>(selector);
      if (details) details.open = true;
    };
    const onHashChange = () => openFor(window.location.hash);
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (link) openFor(link.hash);
    };
    const openAll = () => {
      document
        .querySelectorAll<HTMLDetailsElement>(selector)
        .forEach((item) => {
          item.open = true;
        });
    };

    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick);
    window.addEventListener("beforeprint", openAll);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
      window.removeEventListener("beforeprint", openAll);
    };
  }, [selector]);

  return null;
}
