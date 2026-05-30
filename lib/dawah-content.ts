import { DEFAULT_LOCALE, type Locale } from "./i18n";
import type { DawahGuide } from "./dawah-types";

// Loader for the hidden Dawah Guide data. Mirrors the locale-with-English-
// fallback pattern used in content-server.ts, but is intentionally kept
// separate so this content is not bundled into any public content collection.

async function load(
  primary: () => Promise<{ default: unknown }>,
  fallback: () => Promise<{ default: unknown }>,
): Promise<DawahGuide> {
  // JSON imports widen string-literal fields (e.g. node.kind) to `string`,
  // so cast through the data shape after the graph has been validated.
  try {
    return (await primary()).default as DawahGuide;
  } catch {
    return (await fallback()).default as DawahGuide;
  }
}

// Validates the guide graph and throws a clear, named error when something is
// broken. Runs during page rendering/build so problems surface immediately.
export function validateDawahGuide(guide: DawahGuide): DawahGuide {
  const { nodes, startNodeId, references } = guide;
  const nodeIds = Object.keys(nodes);
  const referenceIds = new Set(references.map((ref) => ref.id));

  // Duplicate node IDs cannot happen with a Record, but the declared key and
  // the node's own `id` must agree to avoid confusing navigation.
  for (const [key, node] of Object.entries(nodes)) {
    if (key !== node.id) {
      throw new Error(
        `Dawah guide: node key "${key}" does not match node.id "${node.id}".`,
      );
    }
  }

  if (!nodes[startNodeId]) {
    throw new Error(
      `Dawah guide: startNodeId "${startNodeId}" is not a known node.`,
    );
  }

  for (const node of Object.values(nodes)) {
    if (node.nextNodeId && !nodes[node.nextNodeId]) {
      throw new Error(
        `Dawah guide: node "${node.id}" points to missing nextNodeId "${node.nextNodeId}".`,
      );
    }
    for (const option of node.options ?? []) {
      if (!nodes[option.nextNodeId]) {
        throw new Error(
          `Dawah guide: node "${node.id}" option "${option.id}" points to missing node "${option.nextNodeId}".`,
        );
      }
    }
    for (const refId of node.referenceIds ?? []) {
      if (!referenceIds.has(refId)) {
        throw new Error(
          `Dawah guide: node "${node.id}" references missing reference "${refId}".`,
        );
      }
    }
  }

  // Validate reference IDs used by the additional field-guidance content.
  const ag = guide.additionalGuidance;
  if (ag) {
    const withRefs: Array<{
      kind: string;
      id: string;
      referenceIds?: string[];
    }> = [
      ...ag.commonQuestions.map((q) => ({ kind: "commonQuestion", ...q })),
      ...ag.misconceptions.map((m) => ({ kind: "misconception", ...m })),
    ];
    for (const item of withRefs) {
      for (const refId of item.referenceIds ?? []) {
        if (!referenceIds.has(refId)) {
          throw new Error(
            `Dawah guide: ${item.kind} "${item.id}" references missing reference "${refId}".`,
          );
        }
      }
    }
    for (const dua of ag.duas) {
      if (dua.referenceId && !referenceIds.has(dua.referenceId)) {
        throw new Error(
          `Dawah guide: dua "${dua.id}" references missing reference "${dua.referenceId}".`,
        );
      }
    }
  }

  // Ensure terminal nodes exist for respectful exit and community connection.
  const hasExit = nodeIds.some((id) => nodes[id].kind === "exit");
  const hasCompletion = nodeIds.some((id) => nodes[id].kind === "completion");
  if (!hasExit) {
    throw new Error('Dawah guide: missing a terminal node of kind "exit".');
  }
  if (!hasCompletion) {
    throw new Error(
      'Dawah guide: missing a terminal node of kind "completion".',
    );
  }

  return guide;
}

export async function getDawahGuide(locale: Locale): Promise<DawahGuide> {
  const guide = await load(
    () => import(`@/locales/${locale}/dawah-guides/personal.json`),
    () => import(`@/locales/${DEFAULT_LOCALE}/dawah-guides/personal.json`),
  );
  return validateDawahGuide(guide);
}
