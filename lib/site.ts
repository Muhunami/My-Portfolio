export const site = {
  name: "Manuel Muhunami",
  initials: "MM",
  tagline: "I build ideas in code, writing, and conversation.",
  email: "hello@manuelmuhunami.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com/Muhunami",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/10000000000",
  },
  calendarUrl: "https://cal.com",
  spotifyPlaylistUrl:
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3SiO?utm_source=generator&theme=0",
};

export const heroRoles = [
  "Builder",
  "Writer",
  "Student Leader",
  "Creative Thinker",
  "Future Founder",
] as const;

export const stats = [
  { label: "Projects shipped", value: "24" },
  { label: "Essays & posts", value: "47" },
  { label: "Collaborations", value: "9" },
  { label: "Cities explored", value: "18" },
] as const;

export const testimonials = [
  {
    quote:
      "Manuel brings clarity where others bring noise. A rare mix of empathy and strategic rigor.",
    name: "Dr. Elena Voss",
    role: "Mentor",
  },
  {
    quote:
      "The most composed operator in the room—whether it is a sprint review or a student forum.",
    name: "Marcus Chen",
    role: "Advisor",
  },
  {
    quote:
      "Precision thinking, cinematic storytelling, and relentless follow-through.",
    name: "Priya Nair",
    role: "Collaborator",
  },
] as const;

export const awards = [
  { title: "Innovation Grant", org: "Youth Entrepreneurship Fund", year: "2025" },
  { title: "National Program Finalist", org: "National Leadership Cohort", year: "2024" },
  { title: "Writing & Rhetoric Award", org: "Regional Honors Council", year: "2024" },
  { title: "Leadership Excellence", org: "Student Government", year: "2023" },
] as const;

export const blogPosts = [
  {
    slug: "discipline-as-compounding-interest",
    title: "Discipline as Compounding Interest",
    excerpt: "Small rituals that stack into outsized outcomes over semesters, not days.",
    category: "Discipline & Growth",
    date: "2026-03-12",
    readTime: "6 min",
  },
  {
    slug: "ai-as-creative-co-pilot",
    title: "AI as a Creative Co-Pilot, Not a Crutch",
    excerpt: "How I use models to sharpen thinking without outsourcing originality.",
    category: "Tech + AI",
    date: "2026-02-28",
    readTime: "8 min",
  },
  {
    slug: "student-success-is-systems",
    title: "Student Success Is Systems, Not Motivation",
    excerpt: "Design your environment so excellence is the default state.",
    category: "Student Success",
    date: "2026-02-02",
    readTime: "5 min",
  },
  {
    slug: "mindset-under-pressure",
    title: "Mindset Under Pressure",
    excerpt: "What competitive speaking taught me about staying lucid when stakes are high.",
    category: "Mindset",
    date: "2026-01-18",
    readTime: "7 min",
  },
  {
    slug: "notes-from-the-road",
    title: "Notes from the Road",
    excerpt: "Travel as curriculum: pattern recognition across cultures and cities.",
    category: "Personal Experiences",
    date: "2025-12-04",
    readTime: "9 min",
  },
] as const;

export const projects = [
  {
    id: "ai-smart-mirror",
    title: "AI Smart Mirror Assistant",
    description:
      "Ambient intelligence for morning briefings: calendar, weather, and focus cues—wrapped in glass and motion.",
    stack: ["Next.js", "Python", "Edge inference", "WebSockets"],
    accent: "from-violet-500/20 to-blue-500/10",
    href: "#",
    preview: "mirror",
  },
  {
    id: "mun-strategy-lab",
    title: "Strategy & Research Lab",
    description:
      "Research pipelines and synthesis distilled into repeatable playbooks for writing and debate.",
    stack: ["Notion API", "Figma", "Research OS"],
    accent: "from-blue-500/20 to-cyan-500/10",
    href: "#",
    preview: "mun",
  },
  {
    id: "personal-brand-blog",
    title: "Personal Branding Blog",
    description:
      "Editorial system for long-form essays with typography tuned for deep reading.",
    stack: ["MDX", "Next.js", "Tailwind"],
    accent: "from-fuchsia-500/20 to-violet-500/10",
    href: "#",
    preview: "blog",
  },
  {
    id: "web-dev-suite",
    title: "Web Development Projects",
    description:
      "Performance-first interfaces: micro-interactions, accessibility, and lighthouse scores that stay green.",
    stack: ["React", "TypeScript", "Framer Motion"],
    accent: "from-emerald-500/15 to-teal-500/10",
    href: "#",
    preview: "web",
  },
  {
    id: "creative-media",
    title: "Creative Media / Content",
    description:
      "Cinematic edits, narrative hooks, and campaign systems built for retention, not vanity metrics.",
    stack: ["Premiere", "After Effects", "Story frameworks"],
    accent: "from-amber-500/15 to-orange-500/10",
    href: "#",
    preview: "media",
  },
] as const;

export const mapPins = [
  { id: "nyc", label: "NYC — UN simulation", x: 26, y: 38 },
  { id: "lon", label: "London — Policy sprint", x: 47, y: 32 },
  { id: "sg", label: "Singapore — Tech immersion", x: 74, y: 58 },
  { id: "tok", label: "Tokyo — Design pilgrimage", x: 86, y: 42 },
  { id: "ist", label: "Istanbul — Crossroads study", x: 56, y: 40 },
] as const;
