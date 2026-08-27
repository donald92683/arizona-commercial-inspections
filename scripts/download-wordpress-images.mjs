import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const appDirectory = path.resolve("app");
const outputDirectory = path.resolve("public/uploads");
const uploadsBase = "https://arizonacommercialinspections.com/wp-content/uploads/";
const imageExtension = "(?:jpe?g|png|webp|gif|svg)";

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const location = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(location) : location;
  }));
  return files.flat().filter((file) => /\.(?:css|tsx?|jsx?)$/.test(file));
}

const paths = new Set();
for (const file of await sourceFiles(appDirectory)) {
  const source = await readFile(file, "utf8");
  const fullUrlPattern = new RegExp(
    `${uploadsBase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^'\"()\\s]+\\.${imageExtension})`,
    "gi",
  );
  const relativePattern = new RegExp(
    `[\"'](20\\d{2}/[^\"']+\\.${imageExtension})[\"']`,
    "gi",
  );

  for (const match of source.matchAll(fullUrlPattern)) paths.add(decodeURIComponent(match[1]));
  for (const match of source.matchAll(relativePattern)) paths.add(match[1]);
}

const missing = [];
for (const relativePath of [...paths].sort()) {
  const destination = path.join(outputDirectory, relativePath);
  const originalUrl = new URL(relativePath, uploadsBase);
  let response = await fetch(originalUrl);
  if (!response.ok) {
    const archivedUrl = `https://web.archive.org/web/20260801000000id_/${originalUrl}`;
    response = await fetch(archivedUrl);
  }
  if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
    missing.push(relativePath);
    console.warn(`Missing ${relativePath}`);
    continue;
  }
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${relativePath}`);
}

if (missing.length) {
  throw new Error(`Could not recover ${missing.length} images:\n${missing.join("\n")}`);
}

console.log(`Downloaded ${paths.size} WordPress images to public/uploads.`);
