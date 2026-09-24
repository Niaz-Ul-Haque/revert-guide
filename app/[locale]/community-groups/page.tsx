import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Callout";
import { Icon } from "@/components/Icon";
import { AnimateIn } from "@/components/AnimateIn";
import { SourcesPanel } from "@/components/SourceTags";
import { getSourcesByIds } from "@/lib/content";
import {
  getTranslator,
  localizeHref,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import {
  REPORT_EMAIL,
  WHATSAPP_CHANNEL_URL,
  WHATSAPP_GROUPS,
  hasPlaceholderConfig,
} from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  return getPageMetadata(params.locale, "communityGroups", "/community-groups");
}

const linkClass =
  "font-semibold text-primary underline-offset-2 hover:text-primaryHover hover:underline";

export default function CommunityGroupsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslator(locale);
  const copy = t<Messages["pages"]["communityGroups"]>(
    "pages.communityGroups",
  );
  const sources = getSourcesByIds(
    [
      "whatsapp-help-channels",
      "whatsapp-help-channel-guidelines",
      "whatsapp-help-communities-privacy",
      "whatsapp-help-approve-members",
      "whatsapp-help-group-invites",
      "whatsapp-help-usernames",
    ],
    locale,
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: t("nav.home"), href: localizeHref(locale, "/") },
          { label: copy.title },
        ]}
      />

      <header className="mb-8">
        <AnimateIn animation="fade-up">
          <h1 className="mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
            {copy.title}
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-textSecondary">
            {copy.subtitle}
          </p>
        </AnimateIn>
      </header>

      {hasPlaceholderConfig() && (
        <Callout variant="info" title={copy.placeholderNotice.title}>
          <p>{copy.placeholderNotice.body}</p>
        </Callout>
      )}

      <AnimateIn>
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <section
            className="flex flex-col rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6"
            aria-labelledby="channel"
          >
            <h2
              id="channel"
              className="mb-2 mt-0 font-display text-xl font-semibold text-textPrimary"
            >
              {copy.channel.title}
            </h2>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-textSecondary">
              {copy.channel.body}
            </p>
            <Button href={WHATSAPP_CHANNEL_URL} external className="self-start">
              {copy.channel.buttonLabel}
            </Button>
          </section>

          <section
            className="flex flex-col rounded-2xl border border-border/60 bg-white p-6 shadow-card"
            aria-labelledby="groups"
          >
            <h2
              id="groups"
              className="mb-2 mt-0 font-display text-xl font-semibold text-textPrimary"
            >
              {copy.groups.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-textSecondary">
              {copy.groups.body}
            </p>
            {WHATSAPP_GROUPS.length === 0 ? (
              <p className="mb-0 rounded-xl bg-surfaceElevated/50 p-4 text-sm text-textSecondary">
                {copy.groups.emptyState}
              </p>
            ) : (
              <>
                <p className="mb-3 flex items-start gap-2 text-sm leading-relaxed text-textPrimary">
                  <Icon
                    name="info"
                    size="sm"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span>{copy.groups.joinNote}</span>
                </p>
                <ul className="mb-0 flex flex-col gap-2 pl-0">
                  {WHATSAPP_GROUPS.map((group) => (
                    <li key={group.url}>
                      <a
                        href={group.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary no-underline hover:text-primaryHover hover:underline"
                      >
                        {group.label}
                        <Icon name="external-link" size="sm" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        </div>
      </AnimateIn>

      <AnimateIn>
        <section className="mb-10" aria-labelledby="reveals">
          <h2
            id="reveals"
            className="mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.reveals.title}
          </h2>
          <dl className="mb-4 flex flex-col gap-3">
            {copy.reveals.items.map((item) => (
              <div
                key={item.name}
                className="rounded-xl bg-surfaceElevated/50 p-4 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4"
              >
                <dt className="mb-1 font-semibold text-textPrimary sm:mb-0">
                  {item.name}
                </dt>
                <dd className="mb-0 ml-0 text-base leading-relaxed text-textSecondary">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mb-0 text-sm leading-relaxed text-textSecondary">
            {copy.reveals.usernameNote}
          </p>
        </section>
      </AnimateIn>

      <Callout variant="tip" title={copy.safety.title}>
        <p>{copy.safety.body}</p>
      </Callout>

      <AnimateIn>
        <section className="mb-10 mt-10" aria-labelledby="rules">
          <h2
            id="rules"
            className="mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.rules.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            {copy.rules.intro}
          </p>
          <ul className="mb-6 flex flex-col gap-2.5 pl-0 text-base text-textSecondary">
            {copy.rules.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="mb-2 font-display text-lg font-semibold text-textPrimary">
            {copy.rules.adminsTitle}
          </h3>
          <p className="mb-0 text-base leading-relaxed text-textSecondary">
            {copy.rules.admins}
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section
          className="mb-10 rounded-2xl border border-border/60 bg-white p-6 shadow-card"
          aria-labelledby="report"
        >
          <h2
            id="report"
            className="mb-3 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary"
          >
            {copy.report.title}
          </h2>
          <p className="mb-4 text-base leading-relaxed text-textSecondary">
            {copy.report.body}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Button href={localizeHref(locale, "/get-help")} variant="outline">
              {copy.report.linkLabel}
            </Button>
            <p className="mb-0 text-base">
              <span className="font-medium text-textPrimary">
                {copy.report.emailLabel}:
              </span>{" "}
              <a href={`mailto:${REPORT_EMAIL}`} className={linkClass}>
                {REPORT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <div className="rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center shadow-card">
          <p className="mb-3 text-sm text-textSecondary">
            {copy.redFlags.prompt}
          </p>
          <Link
            href={localizeHref(locale, "/guides/red-flags-and-staying-safe")}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary no-underline transition-colors duration-300 hover:bg-primary/20 hover:text-primaryHover"
          >
            {copy.redFlags.label}
            <Icon name="chevron-right" size="sm" />
          </Link>
        </div>
      </AnimateIn>

      {sources.length > 0 && (
        <div className="mt-10">
          <SourcesPanel
            sources={sources}
            title={copy.sourcesTitle}
            note={copy.sourcesNote}
          />
        </div>
      )}
    </div>
  );
}
