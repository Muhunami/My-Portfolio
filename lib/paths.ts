/**
 * Use for raw <a href> and non-Next assets so GitHub Pages subpath works.
 * Next.js <Link href="/x"> already respects basePath from next.config — do not double-prefix.
 */
export function withBase(path: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!base) return p;
  return `${base}${p}`;
}
