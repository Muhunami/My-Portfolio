import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Bloomly, Pro AI, MIRRAI — selected work.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Projects
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Ideas turned into systems.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          A few things I&apos;ve shaped — community, intelligence, and home.
        </p>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            title="Want to collaborate?"
            subtitle="Reach out — I read thoughtful messages."
          />
          <Link
            prefetch
            scroll
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
