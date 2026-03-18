import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      {/* Logo mark */}
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10">
        <Image
          src="/revert-guide-logo.png"
          alt=""
          width={48}
          height={48}
          aria-hidden="true"
        />
      </div>

      <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary">
        Page Not Found
      </h1>
      <p className="mb-8 text-base leading-relaxed text-textSecondary">
        This page seems to have wandered off. It may have been moved, removed,
        or the URL might be incorrect. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary">
          <Icon name="home" size="sm" />
          Return Home
        </Button>
        <Button href="/roadmap" variant="outline">
          Go to Roadmap
        </Button>
      </div>
    </div>
  );
}
