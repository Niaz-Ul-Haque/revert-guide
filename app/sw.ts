/// <reference lib="webworker" />
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { NetworkOnly, Serwist } from "serwist";
import { DEFAULT_LOCALE } from "@/lib/i18n";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope & typeof globalThis;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    // Embedded videos are never cached: nothing from YouTube should sit in
    // the offline cache, and the player only loads after a person presses play.
    {
      matcher: ({ url }) =>
        url.hostname.endsWith("youtube-nocookie.com") ||
        url.hostname.endsWith("youtube.com") ||
        url.hostname.endsWith("ytimg.com"),
      handler: new NetworkOnly(),
    },
    ...defaultCache,
  ],
  fallbacks: {
    entries: [
      {
        url: `/${DEFAULT_LOCALE}/offline`,
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();
