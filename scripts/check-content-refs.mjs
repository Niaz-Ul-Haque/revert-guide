// Fails when a content file in locales/en points at an id that does not exist.
// The step and topic pages silently drop unknown ids, so this is the only
// place a typo in relatedGlossaryIds or sourceIds shows up.
// Usage: node scripts/check-content-refs.mjs
import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "locales", "en");
const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const idsOf = (list) => new Set(list.map((item) => item.id));
const idsInDir = (dir) =>
  new Set(
    fs
      .readdirSync(path.join(root, dir))
      .filter((file) => file.endsWith(".json"))
      .map((file) => readJson(path.join(root, dir, file)).id),
  );

const targets = {
  glossary: idsOf(readJson(path.join(root, "glossary.json"))),
  sources: idsOf(readJson(path.join(root, "sources.json"))),
  resources: idsOf(readJson(path.join(root, "resources.json"))),
  topics: idsInDir("topics"),
  steps: idsInDir("steps"),
};

// Key name to the collection its ids belong to.
function targetFor(key) {
  if (key === "relatedGlossaryIds" || key === "seeAlso") return "glossary";
  if (key === "relatedTopicIds") return "topics";
  if (key === "relatedStepIds" || key === "stepIds") return "steps";
  if (key === "resourceIds" || key === "relatedResourceIds") return "resources";
  if (/sourceIds$/i.test(key)) return "sources";
  // The dawah guide cites its own references list, not sources.json.
  if (key === "referenceIds") return "localReferences";
  return null;
}

const problems = [];

function walk(value, file, trail) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, file, `${trail}[${index}]`));
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    const target = targetFor(key);
    if (target && Array.isArray(child)) {
      for (const id of child) {
        if (typeof id === "string" && !targets[target].has(id)) {
          problems.push(`${file} ${trail}.${key}: unknown ${target} id "${id}"`);
        }
      }
    } else {
      walk(child, file, `${trail}.${key}`);
    }
  }
}

function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full);
    else if (entry.name.endsWith(".json")) {
      const data = readJson(full);
      targets.localReferences = new Set(
        Array.isArray(data.references) ? data.references.map((r) => r.id) : [],
      );
      walk(data, path.relative(process.cwd(), full), "");
    }
  }
}

walkDir(root);

if (problems.length > 0) {
  console.error(problems.join("\n"));
  console.error(`\n${problems.length} unresolved reference(s).`);
  process.exit(1);
}
console.log("clean");
