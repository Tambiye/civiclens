/**
 * Node module hooks so plain `node` can import the app's TypeScript modules:
 * resolves the "@/..." path alias, extensionless .ts imports, and JSON imports.
 * Relies on Node >= 22.18 native type stripping (no extra dependencies).
 */
import { existsSync, statSync } from "node:fs";
import { resolve as resolvePath, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolvePath(dirname(fileURLToPath(import.meta.url)), "..");

function findFile(p) {
  for (const c of [p, `${p}.ts`, `${p}.tsx`, `${p}/index.ts`]) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  return null;
}

export async function resolve(specifier, context, next) {
  let target = null;
  if (specifier.startsWith("@/")) {
    target = findFile(resolvePath(ROOT, specifier.slice(2)));
  } else if ((specifier.startsWith("./") || specifier.startsWith("../")) && context.parentURL?.startsWith("file:")) {
    target = findFile(fileURLToPath(new URL(specifier, context.parentURL)));
  }
  const result = await next(target ? pathToFileURL(target).href : specifier, context);
  if (result.url.endsWith(".json")) {
    return { ...result, importAttributes: { ...result.importAttributes, type: "json" } };
  }
  return result;
}
