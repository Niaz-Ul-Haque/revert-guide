import { hasPlaceholderConfig } from "./site";

/**
 * rel for links built from the lib/site.ts placeholders. While any value is
 * still a placeholder, crawlers are told not to follow these dead links.
 */
export const PLACEHOLDER_LINK_REL = hasPlaceholderConfig()
  ? "nofollow noopener noreferrer"
  : "noopener noreferrer";
