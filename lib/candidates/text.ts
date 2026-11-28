/** Lowercase, strip diacritics and punctuation, collapse whitespace. */
export function normalize(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function slugify(input: string): string {
  return normalize(input).replace(/\s+/g, "-");
}

export function tokens(input: string): string[] {
  const n = normalize(input);
  return n ? n.split(" ") : [];
}

const SMALL_WORDS = new Set(["of", "and", "the"]);

/** "OTTI ALEX CHIOMA" -> "Otti Alex Chioma"; keeps mixed-case input as-is. */
export function titleCase(name: string): string {
  const trimmed = name.trim().replace(/\s+/g, " ");
  if (trimmed !== trimmed.toUpperCase()) return trimmed;
  return trimmed
    .toLowerCase()
    .split(" ")
    .map((w, i) =>
      i > 0 && SMALL_WORDS.has(w)
        ? w
        : w.replace(/(^|[-'])([a-z])/g, (_, p, c) => p + c.toUpperCase())
    )
    .join(" ");
}

/** Number of distinct name tokens (length > 1) two names share. */
export function sharedNameTokens(a: string, b: string): number {
  const ta = new Set(tokens(a).filter((t) => t.length > 1));
  return new Set(tokens(b).filter((t) => t.length > 1 && ta.has(t))).size;
}
