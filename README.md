This is a [Next.js](https://nextjs.org) project for Revert Guide, an offline-first companion for new Muslims.

## Getting Started

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

## Translation workflow

Shared UI strings and metadata live in [`locales/en.json`](./locales/en.json) and [`locales/fr.json`](./locales/fr.json).

Structured content lives under [`content/en`](./content/en). The content loader now reads from `content/{locale}` and falls back to English when a translated file is missing.

To add a new language:

1. Add the locale code to `SUPPORTED_LOCALES` in [`lib/i18n.ts`](./lib/i18n.ts).
2. Create a new locale dictionary in `locales/<locale>.json`.
3. Add translated content files under `content/<locale>` as needed. Missing files automatically fall back to English.
4. Review route-level page copy in `app/[locale]` for any language-specific text that still needs translation.

The language switcher stores the selected locale in local storage so the root entry page can redirect users back to their last-used language in the static export.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
