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

export const projects = [
  {
    id: "bloomly",
    title: "Bloomly",
    description:
      "A unified community platform built to connect people, ideas, and opportunities through one ecosystem.",
    stack: [] as const,
    accent: "from-violet-500/25 to-fuchsia-500/15",
    href: "#",
    preview: "blog" as const,
  },
  {
    id: "pro-ai",
    title: "Pro AI",
    description:
      "An intelligent parking assistant system designed to ease parking struggles using AI-powered optimization and smart guidance.",
    stack: [] as const,
    accent: "from-blue-500/25 to-cyan-500/12",
    href: "#",
    preview: "web" as const,
  },
  {
    id: "mirrai",
    title: "MIRRAI",
    description:
      "A smart home mirror assistant designed to help with home activities, productivity, schedules, and daily life — inspired by Alexa and Google Home.",
    stack: [] as const,
    accent: "from-emerald-500/20 to-teal-500/12",
    href: "#",
    preview: "mirror" as const,
  },
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

export const skillClusters = [
  {
    id: "create",
    title: "Create",
    blurb: "Stories, images, and rhythm.",
    items: ["Photography", "Creative Writing", "Song Writing", "Storytelling"],
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    id: "build",
    title: "Build",
    blurb: "Systems, interfaces, and how things work.",
    items: ["Problem Solving through System Design", "UI / Idea Creation"],
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "think",
    title: "Think",
    blurb: "Direction and new angles.",
    items: ["Innovation Thinking"],
    accent: "from-emerald-500/15 to-teal-500/10",
  },
] as const;
