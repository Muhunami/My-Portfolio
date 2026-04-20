import type { MetadataRoute } from "next";
import { projectList } from "@/lib/project-details";
import { skillShowcaseSlugs } from "@/lib/skill-showcase";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://muhunami.github.io/My-Portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projectList.map((p) => ({
    url: `${base}/portfolio/${p.id}`,
    lastModified: new Date(),
  }));
  const skillUrls = skillShowcaseSlugs.map((slug) => ({
    url: `${base}/skills/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/portfolio`, lastModified: new Date() },
    ...projectUrls,
    { url: `${base}/resume`, lastModified: new Date() },
    ...skillUrls,
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
  ];
}
