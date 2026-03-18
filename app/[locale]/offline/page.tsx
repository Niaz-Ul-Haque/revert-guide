"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";

export default function OfflinePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getTranslator(params.locale);
  const copy = t<Messages["pages"]["offline"]>("pages.offline");

  function handleRetry() {
    window.location.reload();
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <div className="relative mb-8 h-48 w-36">
        <Image
          src="/Adult female Character Standing.png"
          alt=""
          fill
          className="animate-float object-contain"
          aria-hidden="true"
        />
      </div>

      <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary">
        {copy.title}
      </h1>
      <p className="mb-2 text-base leading-relaxed text-textSecondary">
        {copy.body}
      </p>
      <p className="mb-8 text-sm text-textMuted">{copy.note}</p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={localizeHref(params.locale, "/")} variant="primary">
          <Icon name="home" size="sm" />
          {copy.goHome}
        </Button>
        <button
          type="button"
          onClick={handleRetry}
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-transparent px-5 py-3 text-base font-semibold text-primary transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
        >
          {copy.retry}
        </button>
      </div>
    </div>
  );
}
