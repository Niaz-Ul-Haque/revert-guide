This is a [Next.js](https://nextjs.org) project for Revert Guide, an offline-first companion for new Muslims.

## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The app redirects to a locale-prefixed route such as `/en` or `/fr`.

You can start editing the localized routes under [`app/[locale]`](./app/%5Blocale%5D). The page auto-updates as you edit the file.

## Placeholder contact details

The help form, contact and report emails, WhatsApp channel and organisation details live in `lib/site.ts`. While a value is still a placeholder, pages show a short "still being set up" note in place of the link. Before launch, fill in the real values, build, and run:

```bash
npm run build
npm run check:placeholders
```

The check reads every HTML file in `out/` and exits with an error if any link still points to a `PLACEHOLDER` address or URL.

## Translation workflow

Each language now lives under a single root folder such as [`locales/en`](./locales/en) or [`locales/fr`](./locales/fr).

Shared UI strings and metadata live in `locales/<locale>/ui.json`.

Structured content also lives in that same locale folder, for example:

- `locales/en/stages.json`
- `locales/en/resources.json`
- `locales/en/glossary.json`
- `locales/en/masjids.json`
- `locales/en/sources.json`
- `locales/en/topics/*.json`
- `locales/en/steps/*.json`
- `locales/en/life-guides.json` and `locales/en/seasonal-guides.json`
- `locales/en/source-categories.json` and `locales/en/resource-collections.json`
- `locales/en/tools/*.json` and `locales/en/pages/*.json`
- `locales/en/dawah-guides/*.json`

The content loader reads from `locales/{locale}/...` and falls back to English when a translated file is missing. All thirteen locales are complete, so the fallback only covers content added before its translation lands. Run `node scripts/check-translations.mjs` to list anything a locale is missing; it prints `clean` per locale when nothing is.

Collections merged by id (sources, resources, glossary, stages, masjids, FAQ, life guides and seasonal guides) hold only the id and the translated text fields in each locale file. Steps and topics need a file per English file with every text field. The tools, the Ramadan planning page, the dawah guide, events, source categories and resource collections are whole-file translations.

To add a new language:

1. Add the locale code to `SUPPORTED_LOCALES` in [`lib/i18n.ts`](./lib/i18n.ts).
2. Create `locales/<locale>/ui.json` by following the structure of [`locales/en/ui.json`](./locales/en/ui.json).
3. Add translated content files under `locales/<locale>/` as needed. Missing files automatically fall back to English from [`locales/en`](./locales/en).
4. Review route-level page copy in `app/[locale]` for any language-specific text that still needs translation.

The language switcher stores the selected locale in local storage so the root entry page can redirect users back to their last-used language in the static export.

## Checking content references

Steps, topics and other content files point at each other by id: `relatedGlossaryIds`, `relatedTopicIds`, `relatedStepIds`, `resourceIds` and every `sourceIds`. The pages drop an id they cannot find without any warning, so run this after editing content:

```bash
node scripts/check-content-refs.mjs
```

It reads every JSON file under `locales/en` and exits 1 with a list of each id that does not resolve. It prints `clean` when every reference points at a real glossary entry, topic, step, resource or source.

## Learn more

Useful Next.js references:

- [Next.js documentation](https://nextjs.org/docs) covers the framework features and API.
- [Learn Next.js](https://nextjs.org/learn) is an interactive tutorial.
- [The Next.js GitHub repository](https://github.com/vercel/next.js) takes issues and pull requests.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
