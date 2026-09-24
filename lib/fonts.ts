import { Amiri, Fraunces, Outfit } from "next/font/google";

/* Shared by both root layouts (the language chooser and the locale tree). */

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

export const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-amiri",
  // Only pages with Arabic text use this font, so it is not preloaded on
  // every page; the browser fetches it when a page first uses it.
  preload: false,
});

export const fontClassName = `${outfit.variable} ${fraunces.variable} ${amiri.variable}`;
