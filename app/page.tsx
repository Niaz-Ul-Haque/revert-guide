import { RootLocaleChooser } from "@/components/RootLocaleChooser";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getLocaleDisplayName,
  localizeHref,
  type Messages,
} from "@/lib/i18n";
import { getTranslator } from "@/lib/messages";

export default function RootPage() {
  const t = getTranslator(DEFAULT_LOCALE);
  const copy = t<Messages["pages"]["rootRedirect"]>("pages.rootRedirect");
  const links = SUPPORTED_LOCALES.map((locale) => ({
    locale,
    href: localizeHref(locale, "/"),
    label: getLocaleDisplayName(locale),
  }));

  return <RootLocaleChooser body={copy.body} links={links} />;
}
