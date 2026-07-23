"use client";

import { useEffect } from "react";

/**
 * Registers the site's key lookups as WebMCP tools so browser-based AI agents
 * can query them directly (https://webmachinelearning.github.io/webmcp/).
 * The API is experimental; everything here is feature-detected and inert in
 * browsers without navigator.modelContext. Tool strings are agent-facing
 * metadata, not user-visible UI, so they live outside the locale files.
 */

interface GlossaryEntry {
  id: string;
  term: string;
  arabicText?: string;
  transliteration?: string;
  definition: string;
}

interface Masjid {
  id: string;
  name: string;
  address: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  phone?: string;
  website?: string;
  notes?: string;
}

interface ToolTextResult {
  content: { type: "text"; text: string }[];
}

interface ModelContextTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<ToolTextResult>;
}

interface ModelContext {
  provideContext: (context: { tools: ModelContextTool[] }) => void;
}

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}

function textResult(value: unknown): ToolTextResult {
  return { content: [{ type: "text", text: JSON.stringify(value) }] };
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path} (${response.status})`);
  }
  return (await response.json()) as T;
}

const tools: ModelContextTool[] = [
  {
    name: "search_glossary",
    description:
      "Search Revert Guide's glossary of Islamic terms. Matches the query against term names, transliterations, and definitions, and returns up to 10 entries with Arabic text and plain-language definitions.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description:
            "Term to look up, e.g. 'wudu', 'shahada', or an English word from a definition.",
        },
      },
      required: ["query"],
    },
    async execute(args) {
      const query = String(args.query ?? "")
        .trim()
        .toLowerCase();
      const entries = await fetchJson<GlossaryEntry[]>("/data/glossary.json");
      const matches = entries
        .filter((entry) =>
          [entry.term, entry.transliteration ?? "", entry.definition]
            .join(" ")
            .toLowerCase()
            .includes(query),
        )
        .slice(0, 10);
      return textResult(matches);
    },
  },
  {
    name: "find_masjids",
    description:
      "Find Toronto-area masjids from Revert Guide's directory. Filters by name, city, or postal code; an empty query returns the full list with addresses, phone numbers, and websites.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description:
            "Optional filter matched against masjid name, city, or postal code.",
        },
      },
    },
    async execute(args) {
      const query = String(args.query ?? "")
        .trim()
        .toLowerCase();
      const masjids = await fetchJson<Masjid[]>("/data/masjids.json");
      const matches = query
        ? masjids.filter((masjid) =>
            [masjid.name, masjid.city, masjid.postalCode]
              .join(" ")
              .toLowerCase()
              .includes(query),
          )
        : masjids;
      return textResult(matches);
    },
  },
];

export function AgentTools(): null {
  useEffect(() => {
    try {
      navigator.modelContext?.provideContext({ tools });
    } catch {
      // Experimental API — never let registration break the page.
    }
  }, []);

  return null;
}
