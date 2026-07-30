"use client";

import { Icon } from "@/components/Icon";
import { useTranslations } from "@/components/LocaleProvider";

interface PrintButtonProps {
  label?: string;
  className?: string;
}

export function PrintButton({ label, className = "" }: PrintButtonProps) {
  const t = useTranslations();

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-transparent px-5 py-3 text-base font-semibold text-primary no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${className}`}
    >
      <Icon name="download" size="sm" />
      {label ?? t<string>("common.print")}
    </button>
  );
}
