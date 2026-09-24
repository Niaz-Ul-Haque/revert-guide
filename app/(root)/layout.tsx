import type { Metadata, Viewport } from "next";
import "leaflet/dist/leaflet.css";
import "../globals.css";
import { JsonLd } from "@/components/JsonLd";
import { fontClassName } from "@/lib/fonts";
import { siteMetadata, siteViewport, websiteJsonLd } from "@/lib/site-metadata";

/* Root layout for the language chooser at "/" and the hidden root alias.
   Every localized page lives under app/[locale], which is its own root
   layout so the html element can carry the right lang and dir. */

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClassName}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
