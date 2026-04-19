import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.firstName} — story and education.`,
};

const educationCards = [
  {
    school: "The Stepping Stones Elementary School",
    line: "Graduated Primary School",
    detail: "KCPE Score: 397",
  },
  {
    school: "Light Academy Nairobi",
    line: "High School Student",
    detail: "Graduating in 2027",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="font-[family-name:var(--font-clash)] text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          {site.firstName}
        </h1>
      </header>

      <section className="mt-16">
        <ScrollReveal>
          <div className="glass rounded-[2rem] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Story
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[var(--color-muted)]">
              <p>Hi, I&apos;m Manuel.</p>
              <p>
                I&apos;m not really the type with crazy achievements — honestly, I&apos;m
                simple. Basic in some ways. I just do what makes me happy.
              </p>
              <p>
                Life isn&apos;t something I can sit down and figure out in one day, so I
                explore. I try new things, join competitions, step into unfamiliar spaces —
                just to understand life from different lenses and gain new perspectives.
              </p>
              <p>
                Life is too short to spend it worrying. Live life. Take each day one step
                at a time.
              </p>
              <p className="text-[var(--color-silver)]">
                And always remember: imperfections are the perfection of life.
              </p>
              <p>
                I aspire to study Computer Science. I&apos;ve always loved solving problems
                of any kind, but computers fascinated me early. They feel powerful —
                capable of solving so many of the issues people face daily.
              </p>
              <p>My dream is to build systems that solve real problems in society.</p>
              <p>
                I also love writing — fiction, journaling, ideas, anything creative.
                Photography is another passion of mine, something I enjoy in my free
                time. I&apos;m also learning video editing and exploring storytelling
                through visuals.
              </p>
              <p>
                To be honest, school can sometimes feel limiting. The structure feels
                repetitive, and I often think learning could be designed in a better way.
                But even then, I still give my best and keep pushing.
              </p>
              <p className="pt-2 text-[var(--color-silver)]">Wishing you all the best.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-16">
        <ScrollReveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Education
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {educationCards.map((card) => (
              <div
                key={card.school}
                className="glass flex h-full flex-col rounded-3xl p-6 transition hover:border-white/15"
              >
                <h3 className="font-[family-name:var(--font-clash)] text-lg text-white">
                  {card.school}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-silver)]">{card.line}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
