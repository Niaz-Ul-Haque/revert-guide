"use client";

import { useRef, useId } from "react";
import { useTranslations } from "@/components/LocaleProvider";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  hideLabel?: boolean;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder,
  label,
  hideLabel = false,
  className = "",
}: SearchBarProps) {
  const t = useTranslations();
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const inputId = `${id}-search`;

  function handleClear() {
    onChange("");
    inputRef.current?.focus();
  }

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className={
          hideLabel
            ? "sr-only"
            : "mb-2 block text-sm font-medium text-textPrimary"
        }
      >
        {label ?? t("common.search")}
      </label>
      <div className="relative">
        {/* Search icon */}
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-textMuted"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          ref={inputRef}
          id={inputId}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? t("common.searchPlaceholder")}
          className="w-full rounded-xl border border-border/60 bg-white py-3 pl-12 pr-10 text-base text-textPrimary shadow-inner-glow placeholder:text-textMuted/60 transition-all duration-200 focus:border-primaryGreen focus:shadow-soft focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong"
        />

        {/* Clear button */}
        {value.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-textMuted transition-all duration-200 hover:bg-surfaceElevated hover:text-textSecondary focus-visible:outline-2 focus-visible:outline-borderStrong"
            aria-label={t("common.clearSearch")}
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
