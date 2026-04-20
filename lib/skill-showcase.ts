/** Replace image URLs with files in /public or your own CDN. */
const photography = {
  title: "Photography",
  subtitle: "Frames, light, and places I’ve stood still for.",
  intro:
    "A gallery grid — swap the URLs below for your own files in public/ or keep these placeholders while you curate.",
  images: [
    {
      src: "https://picsum.photos/seed/bloom1/900/700",
      alt: "Photography sample 1",
      caption: "Golden hour — replace with your shot",
    },
    {
      src: "https://picsum.photos/seed/bloom2/900/700",
      alt: "Photography sample 2",
      caption: "Street rhythm — replace with your shot",
    },
    {
      src: "https://picsum.photos/seed/bloom3/800/900",
      alt: "Photography sample 3",
      caption: "Portrait space — replace with your shot",
    },
  ],
} as const;

const creativeWriting = {
  title: "Creative writting",
  subtitle: "Notes, essays, and lines that stuck.",
  intro: "Short excerpts and ideas — edit or replace with your real pieces.",
  pieces: [
    {
      title: "On imperfection",
      excerpt:
        "Imperfections are the perfection of life — a reminder that growth rarely looks linear from the inside.",
    },
    {
      title: "Letters to future focus",
      excerpt:
        "Write the one sentence you want future-you to remember on a hard day. Keep it somewhere visible.",
    },
    {
      title: "Why curiosity scales",
      excerpt:
        "Curiosity compounds when you protect time for it — even twenty minutes a week changes what you notice.",
    },
  ],
} as const;

const storytelling = {
  title: "Story telling",
  subtitle: "Video essays and moments — YouTube as my story shelf.",
  intro:
    "Paste your video IDs from YouTube (the part after v= in the URL) in lib/skill-showcase.ts.",
  videos: [
    {
      title: "Featured story",
      videoId: "",
      note: "Set videoId to your first YouTube video ID.",
    },
    {
      title: "Another chapter",
      videoId: "",
      note: "Optional second video.",
    },
  ],
} as const;

export const skillShowcaseBySlug = {
  photography,
  "creative-writing": creativeWriting,
  storytelling,
} as const;

export type SkillShowcaseSlug = keyof typeof skillShowcaseBySlug;

export const skillShowcaseSlugs = Object.keys(
  skillShowcaseBySlug
) as SkillShowcaseSlug[];
