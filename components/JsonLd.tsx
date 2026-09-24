interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders a JSON-LD structured-data script tag. The payload is built from
 * our own static content and serialized with JSON.stringify; "<" is escaped
 * so the output can never close the script tag early.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Drops markdown links and emphasis so answers read as plain text. */
function plainText(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`#]/g, "")
    .trim();
}

/**
 * FAQPage payload from entries already in display order. Only answers whose
 * sources were checked are published. If the script would pass about 80 KB,
 * the first 60 entries are kept.
 */
export function faqPageJsonLd(
  entries: { question: string; answer: string; reviewStatus: string }[],
): Record<string, unknown> {
  const build = (list: typeof entries) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: plainText(entry.answer) },
    })),
  });
  const checked = entries.filter(
    (entry) => entry.reviewStatus === "source-checked",
  );
  const data = build(checked);
  return JSON.stringify(data).length > 80_000
    ? build(checked.slice(0, 60))
    : data;
}
