"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { useLocale, useTranslations } from "@/components/LocaleProvider";
import { localizeHref, type Messages } from "@/lib/i18n";

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations();
  const copy = t<Messages["pages"]["notFound"]>("pages.notFound");

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10">
        <Image
          src="/revert-guide-logo.webp"
          alt=""
          width={48}
          height={48}
          aria-hidden="true"
        />
      </div>

      <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary">
        {copy.title}
      </h1>
      <p className="mb-8 text-base leading-relaxed text-textSecondary">
        {copy.body}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={localizeHref(locale, "/")} variant="primary">
          <Icon name="home" size="sm" />
          {copy.returnHome}
        </Button>
        <Button href={localizeHref(locale, "/roadmap")} variant="outline">
          {copy.goToRoadmap}
        </Button>
      </div>
    </div>
  );
}
