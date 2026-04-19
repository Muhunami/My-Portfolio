import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Story, mission, values, and timeline — ${site.name}.`,
};

const timeline = [
  {
    year: "2026",
    title: "Research & writing systems",
    detail: "Shipped a modular pipeline blending human judgment with retrieval.",
  },
  {
    year: "2025",
    title: "National programs & leadership",
    detail: "Finalist-level performance across speaking and student initiatives.",
  },
  {
    year: "2024",
    title: "Student government leadership",
    detail: "Led initiatives on student voice, campus culture, and transparency.",
  },
  {
    year: "2023",
    title: "First shipped product",
    detail: "Public web experiments — performance-first, animation-forward interfaces.",
  },
] as const;

const values = [
  {
    title: "Clarity over noise",
    body: "Ideas should land cleanly — in rounds, in rooms, and in product.",
  },
  {
    title: "Craft with constraints",
    body: "Time, rules, and ethics sharpen creativity instead of limiting it.",
  },
  {
    title: "Global fluency",
    body: "Comfort with ambiguity across cultures, policies, and technologies.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          About
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Built in conversation. Refined in code.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          I am {site.name} — I care about narrative, systems, and the quiet confidence
          that comes from work you can stand behind.
        </p>
      </header>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Story"
            title="The thread"
            subtitle="From writing and speaking to product thinking — synthesize fast, decide calmly, communicate with precision."
          />
          <div className="glass rounded-3xl p-6 text-sm leading-relaxed text-[var(--color-muted)] sm:p-8 sm:text-base">
            <p>
              My work sits at the intersection of language and systems. Writing taught me
              to love constraints; building taught me to love iteration. I chase outcomes
              that feel inevitable in hindsight — because the foundations were laid with
              care.
            </p>
            <p className="mt-4">
              I write, prototype, and study how technology can amplify judgment without
              replacing taste. If that resonates, we should talk.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <SectionHeading
            eyebrow="Mission / Vision"
            title="A future built on articulate ambition"
          />
          <div className="space-y-4">
            <div className="glass rounded-3xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Mission
              </p>
              <p className="mt-3 text-[var(--color-silver)]">
                Equip ambitious students with frameworks that convert curiosity into
                compounding capability.
              </p>
            </div>
            <div className="glass rounded-3xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Vision
              </p>
              <p className="mt-3 text-[var(--color-silver)]">
                A generation that leads with taste — ethical, articulate, and fluent in
                both human persuasion and machine leverage.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Values"
            title="What I optimize for"
          />
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((v, idx) => (
            <ScrollReveal key={v.title} delay={idx * 0.06}>
              <div className="glass h-full rounded-3xl p-6">
                <h3 className="font-[family-name:var(--font-clash)] text-lg text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {v.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Timeline"
            title="Achievements & inflection points"
          />
        </ScrollReveal>
        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent sm:left-4" />
          <ol className="space-y-8">
            {timeline.map((t, idx) => (
              <ScrollReveal key={t.year + t.title} delay={idx * 0.05}>
                <li className="relative pl-10 sm:pl-12">
                  <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-[var(--color-surface)] text-[10px] font-semibold text-white">
                    {t.year.slice(2)}
                  </span>
                  <div className="glass rounded-3xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {t.year}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-clash)] text-xl text-white">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">{t.detail}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-20">
        <ScrollReveal>
          <div className="glass rounded-[2rem] p-8 sm:p-12">
            <h2 className="font-[family-name:var(--font-clash)] text-3xl text-white sm:text-4xl">
              Why I stand out
            </h2>
            <ul className="mt-6 space-y-4 text-[var(--color-muted)]">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                <span>
                  <strong className="text-[var(--color-silver)]">Strategic depth:</strong>{" "}
                  I map second-order effects before I ship the first draft.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                <span>
                  <strong className="text-[var(--color-silver)]">Composure:</strong> high
                  stakes sharpen me — I do not perform panic.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                <span>
                  <strong className="text-[var(--color-silver)]">Taste:</strong> I design
                  experiences that feel expensive because the details were considered.
                </span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
