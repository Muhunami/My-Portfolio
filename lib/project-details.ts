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

export const projectList: ProjectDetail[] = [
  {
    id: "bloomly",
    title: "Bloomly",
    subtitle: "The platform where people grow together.",
    status: "in progress",
    preview: "blog",
    accent: "from-violet-500/25 to-fuchsia-500/15",
    cardDescription:
      "A unified community where people connect to grow socially, academically, creatively, and professionally.",
    href: "/portfolio/bloomly",
  },
  {
    id: "park-ai",
    title: "Park AI",
    subtitle: "Smarter parking, less circling, calmer arrivals.",
    status: "in progress",
    preview: "web",
    accent: "from-blue-500/25 to-cyan-500/12",
    cardDescription:
      "An intelligent parking assistant that uses AI to guide drivers to the best spot with less stress.",
    href: "/portfolio/park-ai",
  },
  {
    id: "mirrai",
    title: "MIRRAI",
    subtitle: "Your day, reflected intelligently.",
    status: "in progress",
    preview: "mirror",
    accent: "from-emerald-500/20 to-teal-500/12",
    cardDescription:
      "A smart mirror that blends voice, calendar, and ambient UI for mornings that feel composed.",
    href: "/portfolio/mirrai",
  },
];

export const projectLongForm: Record<
  string,
  {
    paragraphs: string[];
    pillars?: { title: string; text: string }[];
    tagline?: string;
  }
> = {
  bloomly: {
    tagline: "Bloomly is a unified community where people come together to grow socially, academically, creatively, and professionally.",
    paragraphs: [
      "It’s a space designed to help individuals “bloom” through meaningful connections, shared resources, events, mentorship, and collaboration.",
      "The name Bloomly gives the feeling of progress, freshness, positivity, and becoming something greater. If positioned strongly, it could be seen as: the platform where people grow together.",
    ],
    pillars: [
      {
        title: "Networking",
        text: "Meet like-minded people across interests and cities.",
      },
      {
        title: "Student opportunities",
        text: "Internships, competitions, scholarships — surfaced in one place.",
      },
      {
        title: "Creative spaces",
        text: "Showcase art, writing, projects, and ideas — not just résumés.",
      },
      {
        title: "Communities",
        text: "Interest groups, schools, cities, youth circles — real belonging.",
      },
      {
        title: "Growth tools",
        text: "Mentorship, goal tracking, and learning resources that feel human.",
      },
      {
        title: "Events",
        text: "Local meetups, debates, hackathons, workshops — show up and level up.",
      },
    ],
  },
  "park-ai": {
    tagline: "Park AI turns parking lots into calmer systems.",
    paragraphs: [
      "Urban drivers waste time circling blocks. Park AI is an intelligent assistant that combines occupancy signals, routing, and simple guidance so you spend less time searching and more time arriving.",
      "The focus is practical: fewer wrong turns, clearer expectations, and a product that feels invisible when it works — like good infrastructure should.",
      "Under the hood, the vision layers computer vision or sensor fusion (depending on deployment), optimization for stall assignment, and a calm interface — whether that’s a mobile companion or a dashboard for venues.",
    ],
    pillars: [
      {
        title: "Guidance",
        text: "Turn-by-turn style suggestions toward available capacity.",
      },
      {
        title: "Prediction",
        text: "Models that learn peak times and event-driven surges.",
      },
      {
        title: "Venues",
        text: "Tools for campuses, malls, and cities to reduce congestion.",
      },
    ],
  },
  mirrai: {
    tagline: "MIRRAI is a smart mirror for the rhythm of your day.",
    paragraphs: [
      "Inspired by the idea of ambient assistants, MIRRAI lives where you already look — your reflection — and keeps the noise low. Weather, calendar, reminders, and quick prompts appear in a glanceable layer so you don’t have to open five apps before breakfast.",
      "It’s not about replacing Alexa or Google Home — it’s about a dedicated surface for mornings and wind-downs: voice when you want it, visuals when you don’t, and privacy-minded defaults (local processing where possible).",
      "Long term, MIRRAI could tie into wellness routines, focus timers, and household routines — the mirror as a neutral, beautiful hub instead of another screen on your desk.",
    ],
    pillars: [
      {
        title: "Mirror-first UI",
        text: "Typography and motion tuned for arm’s length, not phone distance.",
      },
      {
        title: "Voice + touch",
        text: "Quick commands for when your hands are full.",
      },
      {
        title: "Day modes",
        text: "Morning focus, evening wind-down — different densities of information.",
      },
    ],
  },
};
