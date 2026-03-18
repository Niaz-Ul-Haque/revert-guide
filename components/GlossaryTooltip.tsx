interface GlossaryTooltipProps {
  term: string;
  definition: string;
  arabicText?: string;
  children?: React.ReactNode;
}

export function GlossaryTooltip({
  term,
  definition,
  arabicText,
  children,
}: GlossaryTooltipProps) {
  const fullDefinition = arabicText
    ? `${term} (${arabicText}): ${definition}`
    : `${term}: ${definition}`;

  return (
    <abbr
      title={fullDefinition}
      aria-label={fullDefinition}
      className="cursor-help border-b border-dotted border-textMuted text-textPrimary no-underline"
    >
      {children ?? term}
    </abbr>
  );
}
