import { getSiteContent } from "@/lib/site-content";

export type ProjectDetail = {
  id: string;
  title: string;
  subtitle: string;
  status: "live" | "in progress";
  liveUrl?: string;
  preview: "blog" | "web" | "mirror";
  accent: string;
  cardDescription: string;
  href: string;
};

const c = getSiteContent();

export const projectList: ProjectDetail[] = c.projects;

export const projectLongForm: Record<
  string,
  {
    paragraphs: string[];
    pillars?: { title: string; text: string }[];
    tagline?: string;
  }
> = c.projectLongForm;
