import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProjectCard } from "@/components/project-card";
import { projectList } from "@/lib/project-details";
import { portfolioPageCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: portfolioPageCopy.metaDescription,
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          {portfolioPageCopy.eyebrow}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {portfolioPageCopy.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          {portfolioPageCopy.subtitle}
        </p>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((p, idx) => (
          <ScrollReveal key={p.id} delay={idx * 0.05}>
            <ProjectCard
              title={p.title}
              description={p.cardDescription}
              stack={[]}
              href={p.href}
              accent={p.accent}
              preview={p.preview}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
