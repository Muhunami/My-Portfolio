/**
 * Shape of `data/site-content.json` — single source of truth for site copy.
 * The admin UI edits this file; you commit the updated JSON and redeploy.
 */

export type SiteContentV1 = {
  version: 1;
  seo: {
    siteTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
    openGraphDescription: string;
    twitterDescription: string;
  };
  site: {
    name: string;
    firstName: string;
    lastName: string;
    initials: string;
    tagline: string;
    email: string;
    social: {
      linkedin: string;
      github: string;
      youtube: string;
      youtubeGazi: string;
      twitter: string;
      instagram: string;
      whatsapp: string;
    };
    calendarUrl: string;
  };
  footer: {
    quote: string;
  };
  home: {
    heroEyebrow: string;
    primaryCta: string;
    secondaryCta: string;
    currentFocus: {
      label: string;
      lead: string;
      highlight: string;
    };
    quoteSection: {
      label: string;
      text: string;
    };
    intellectual: {
      eyebrow: string;
      title: string;
    };
    recognition: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    atlas: {
      eyebrow: string;
      title: string;
    };
  };
  about: {
    metaDescription: string;
    storyEyebrow: string;
    paragraphs: { text: string; tone?: "silver" }[];
    educationEyebrow: string;
    education: { school: string; line: string; detail: string }[];
  };
  insights: {
    metaDescription: string;
    eyebrow: string;
    title: string;
    paragraphBeforeHighlight: string;
    highlightName: string;
    paragraphAfterHighlight: string;
    youtubeButtonLabel: string;
    closingLineBeforeContact: string;
  };
  contactPage: {
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    sidebarEyebrow: string;
    linkedinDisplay: string;
    youtubeDisplay: string;
  };
  portfolioPage: {
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  resumePage: {
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    downloadLabel: string;
    atAGlanceLabel: string;
    bottomText: string;
    bottomCta: string;
  };
  awardsDetailed: { year: string; lines: string[] }[];
  mapPins: {
    id: string;
    label: string;
    coordinates: [number, number];
  }[];
  skillBadges: string[];
  skillClusters: {
    id: string;
    title: string;
    href: string;
    accent: string;
    blurb: string;
    items: string[];
  }[];
  projects: {
    id: string;
    title: string;
    subtitle: string;
    status: "live" | "in progress";
    liveUrl?: string;
    preview: "blog" | "web" | "mirror";
    accent: string;
    cardDescription: string;
    href: string;
  }[];
  projectLongForm: Record<
    string,
    {
      tagline?: string;
      paragraphs: string[];
      pillars?: { title: string; text: string }[];
    }
  >;
  skillShowcase: {
    photography: {
      title: string;
      subtitle: string;
      intro: string;
      images: { src: string; alt: string; caption: string }[];
    };
    "creative-writing": {
      title: string;
      subtitle: string;
      intro: string;
      pieces: { title: string; excerpt: string }[];
    };
    storytelling: {
      title: string;
      subtitle: string;
      intro: string;
      videos: { title: string; videoId: string; note: string }[];
    };
  };
};
