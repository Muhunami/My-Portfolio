import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const bp = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const adminPath = bp ? `${bp}/admin` : "/admin";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [`${adminPath}/`, adminPath],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
