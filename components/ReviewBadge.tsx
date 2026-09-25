import type { Locale } from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";
import type { ContentReviewStatus } from "@/lib/types";

/** Small "Awaiting scholar review" label for content still marked
 *  review-needed. Renders nothing for any other status. */
export function ReviewBadge({
  status,
  locale,
}: {
  status?: ContentReviewStatus;
  locale: Locale;
}) {
  if (status !== "review-needed") return null;

  return (
    <p className="mb-4 mt-2">
      <span className="inline-block rounded-full bg-accentYellow/40 px-2.5 py-0.5 text-xs font-medium text-textPrimary">
        {getTranslator(locale)("common.reviewBadge")}
      </span>
    </p>
  );
}
