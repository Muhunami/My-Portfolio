export const site = {
  name: "Manuel Muhunami",
  firstName: "Manuel",
  lastName: "Muhunami",
  initials: "MM",
  tagline: "I love solving problems.",
  email: "muhunanim@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/manuel-indombera/",
    github: "https://github.com/Muhunami",
    youtube: "https://www.youtube.com/@Manuhami",
    youtubeGazi: "https://www.youtube.com/@gaziai",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/10000000000",
  },
  calendarUrl: "https://cal.com",
};

export const awardsDetailed = [
  {
    year: "2026",
    lines: [
      "Best in Art & Music — World Scholar’s Cup",
      "Top Individual Category Honors",
    ],
  },
  {
    year: "2026",
    lines: [
      "Team Overall #1 Qualifier — World Scholar’s Cup",
      "Highest Ranked Qualifying Team",
    ],
  },
  {
    year: "2025",
    lines: [
      "IFLC Global Cultural Performer",
      "Represented Kenya at the International Festival of Language and Culture, performing at the Athanæum Center of Thought and Culture",
    ],
  },
  {
    year: "2025",
    lines: ["SOCHUM Representative (Benin)", "Model United Nations Delegation"],
  },
  {
    year: "2024",
    lines: [
      "22nd Best International Speaker",
      "International African Debate Academy",
    ],
  },
  {
    year: "2024",
    lines: [
      "U.S. Academic Exposure Tour",
      "Visited Harvard University, Yale University, Columbia University, and Massachusetts Institute of Technology",
    ],
  },
  {
    year: "2024",
    lines: [
      "Community Service Recognition",
      "Orphanage Outreach, Elderly Home Visits & Jomo Kenyatta Beach Clean-up",
    ],
  },
  {
    year: "2024",
    lines: [
      "Academic Portfolio Development",
      "Personal GitHub Portfolio Project",
    ],
  },
] as const;

/** [longitude, latitude] for react-simple-maps Marker */
export const mapPins = [
  { id: "nyc", label: "New York", coordinates: [-74.006, 40.7128] as [number, number] },
  { id: "bos", label: "Boston", coordinates: [-71.0589, 42.3601] as [number, number] },
  { id: "ct", label: "Connecticut", coordinates: [-72.6734, 41.7658] as [number, number] },
  { id: "mia", label: "Miami", coordinates: [-80.1918, 25.7617] as [number, number] },
  { id: "orl", label: "Orlando", coordinates: [-81.3792, 28.5383] as [number, number] },
  { id: "il", label: "Illinois", coordinates: [-87.6298, 41.8781] as [number, number] },
  { id: "ad", label: "Abu Dhabi", coordinates: [54.3773, 24.4539] as [number, number] },
  { id: "dxb", label: "Dubai", coordinates: [55.2708, 25.2048] as [number, number] },
  { id: "zan", label: "Zanzibar", coordinates: [39.2026, -6.1659] as [number, number] },
] as const;

export const skillBadges = [
  "Photography",
  "Creative Writing",
  "Problem Solving through System Design",
  "Song Writing",
  "UI / Idea Creation",
  "Storytelling",
  "Innovation Thinking",
] as const;

/** Clickable cards on /resume (Skills) → detail pages under /skills/[slug] */
export const skillClusters = [
  {
    id: "photography",
    title: "Photography",
    href: "/skills/photography",
    accent: "from-fuchsia-500/20 to-violet-500/10",
    blurb: "Still frames, light, and places worth remembering.",
    items: [
      "Composition & mood",
      "Travel & street moments",
      "Personal gallery — tap to explore",
    ],
  },
  {
    id: "creative-writing",
    title: "Creative writting",
    href: "/skills/creative-writing",
    accent: "from-cyan-500/15 to-blue-500/10",
    blurb: "Notes, essays, and lines that stuck.",
    items: [
      "Short reflections",
      "Ideas in progress",
      "Read excerpts — tap to explore",
    ],
  },
  {
    id: "storytelling",
    title: "Story telling",
    href: "/skills/storytelling",
    accent: "from-amber-500/15 to-rose-500/10",
    blurb: "Video stories and narrative experiments on YouTube.",
    items: [
      "Essays in motion",
      "Curated playlists of work",
      "Watch & browse — tap to explore",
    ],
  },
] as const;

