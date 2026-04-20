import { getSiteContent } from "@/lib/site-content";

const c = getSiteContent();

export const skillShowcaseBySlug = c.skillShowcase;

export type SkillShowcaseSlug = keyof typeof c.skillShowcase;

export const skillShowcaseSlugs = Object.keys(
  c.skillShowcase
) as SkillShowcaseSlug[];
