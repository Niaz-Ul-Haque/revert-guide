import type { Locale } from "@/lib/i18n";
import { PLACEHOLDER_LINK_REL } from "@/lib/link-rel";
import { getTranslator } from "@/lib/messages";
import { isPlaceholder } from "@/lib/site";

/** A mailto link for an address from lib/site.ts. While the address is still
 *  a placeholder it renders a short "not set up yet" note instead, so nobody
 *  writes to an address that does not exist. */
export function ContactEmail({
  email,
  locale,
  className,
}: {
  email: string;
  locale: Locale;
  className?: string;
}) {
  if (isPlaceholder(email)) {
    return (
      <span className="text-sm italic text-textMuted">
        {getTranslator(locale)("common.emailPending")}
      </span>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      rel={PLACEHOLDER_LINK_REL}
      className={className}
    >
      {email}
    </a>
  );
}
