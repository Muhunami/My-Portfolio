import raw from "../public/site-content.json";
import type { SiteContentV1 } from "@/lib/site-content-schema";

function isSiteContentV1(x: unknown): x is SiteContentV1 {
  return (
    typeof x === "object" &&
    x !== null &&
    (x as { version?: unknown }).version === 1
  );
}

const dataUnknown: unknown = raw;

if (!isSiteContentV1(dataUnknown)) {
  throw new Error(
    "public/site-content.json is missing or invalid (expected version: 1)."
  );
}

const siteContentData: SiteContentV1 = dataUnknown;

/** Full site copy from `public/site-content.json` (edit in repo or via /admin). */
export function getSiteContent(): SiteContentV1 {
  return siteContentData;
}
