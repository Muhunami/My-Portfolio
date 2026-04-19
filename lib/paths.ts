/**
 * Use for raw <a href> and non-Next assets so GitHub Pages subpath works.
 */
export function withBase(path: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!base) return p;
  return `${base}${p}`;
}

/** Full URL for an app page (trailing slash for static export) — use for <a href> instead of client router. */
export function pageHref(path: string): string {
  if (path === "/" || path === "") return withBase("/");
  const clean = path.replace(/\/$/, "");
  return withBase(`${clean}/`);
}
