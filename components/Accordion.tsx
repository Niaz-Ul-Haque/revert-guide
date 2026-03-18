"use client";

import { useState, useId } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function Accordion({
  title,
  children,
  defaultExpanded = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-primaryGreen/50 shadow-soft" : "border-border/60"}`}
    >
      <h3 className="m-0">
        <button
          id={triggerId}
          className="flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left text-base font-semibold text-textPrimary transition-all duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-borderStrong"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${isOpen ? "bg-primary text-white" : "bg-surfaceElevated text-primary"}`}
            >
              <svg
                className={`h-4 w-4 transition-transform duration-300 ease-out-expo ${isOpen ? "rotate-180" : ""}`}
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
            </span>
            {title}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="grid transition-all duration-300 ease-out-expo"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/40 px-5 py-4 pl-14">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
