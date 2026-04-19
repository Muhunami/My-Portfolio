import type { MetadataRoute } from "next";
import { blogBodies } from "@/lib/blog-content";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = Object.keys(blogBodies).map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/portfolio`, lastModified: new Date() },
    { url: `${base}/resume`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    ...posts,
  ];
}
