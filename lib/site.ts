import { getSiteContent } from "@/lib/site-content";

const c = getSiteContent();

export const site = c.site;
export const awardsDetailed = c.awardsDetailed;
export const mapPins = c.mapPins;
export const skillBadges = c.skillBadges;
export const skillClusters = c.skillClusters;

/** Page-specific blocks (edit via `data/site-content.json` or /admin) */
export const home = c.home;
export const footerCopy = c.footer;
export const aboutPage = c.about;
export const insightsPage = c.insights;
export const contactPageCopy = c.contactPage;
export const portfolioPageCopy = c.portfolioPage;
export const resumePageCopy = c.resumePage;
