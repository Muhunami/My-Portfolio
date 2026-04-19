import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected projects — AI, debate strategy, editorial systems, and media.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Portfolio
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Work that feels considered — end to end.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          Each card is a capsule: live preview, stack, story, and motion. Hover to feel the
          craft — this is not a template; it is a system.
        </p>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, idx) => (
          <ScrollReveal key={p.id} delay={idx * 0.05}>
            <ProjectCard
              title={p.title}
              description={p.description}
              stack={p.stack}
              href={p.href}
              accent={p.accent}
              preview={p.preview}
            />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="glass mt-16 rounded-[2rem] p-8 text-center sm:p-10">
          <SectionHeading
            eyebrow="Next"
            title="Want a bespoke case study?"
            subtitle="If you are hiring, collaborating, or commissioning — send context. I reply to thoughtful messages first."
          />
          <a
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Start a conversation
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
