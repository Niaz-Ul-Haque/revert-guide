"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export default function OfflinePage() {
  function handleRetry() {
    window.location.reload();
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      {/* Illustration */}
      <div className="relative mb-8 h-48 w-36">
        <Image
          src="/Adult female Character Standing.png"
          alt=""
          fill
          className="object-contain animate-float"
          aria-hidden="true"
        />
      </div>

      <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary">
        You&apos;re Offline
      </h1>
      <p className="mb-2 text-base leading-relaxed text-textSecondary">
        It looks like you are not connected to the internet. The page you
        requested has not been cached for offline use yet.
      </p>
      <p className="mb-8 text-sm text-textMuted">
        Pages you have previously visited should still be available. Try
        navigating to a page you have opened before, or reconnect to the
        internet and try again.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary">
          <Icon name="home" size="sm" />
          Go Home
        </Button>
        <button
          type="button"
          onClick={handleRetry}
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-transparent px-5 py-3 text-base font-semibold text-primary transition-all duration-300 ease-out-expo hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong"
        >
          Retry Connection
        </button>
      </div>
    </div>
  );
}
