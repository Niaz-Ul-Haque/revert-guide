"use client";

import { createContext, useContext, useMemo } from "react";
import type { Locale, Messages } from "@/lib/i18n";
import { createTranslator } from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  messages: Messages;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: Locale;
  messages: Messages;
}) {
  const value = useMemo(() => ({ locale, messages }), [locale, messages]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context.locale;
}

export function useTranslations() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslations must be used within LocaleProvider");
  }

  return useMemo(() => createTranslator(context.messages), [context.messages]);
}
