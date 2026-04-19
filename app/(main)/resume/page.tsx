import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { skillBadges, skillClusters } from "@/lib/site";
import { withBase } from "@/lib/paths";
import { PageLink } from "@/components/page-link";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills and strengths — Manuel Muhunami.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-6 py-12 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(91,108,255,0.2),transparent_65%)] blur-2xl" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Skills
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              How I create & think
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
              A map of what I practice — from visuals and words to systems and new ideas.
            </p>
          </div>
          <a
            href={withBase("/resume.pdf")}
            download
            className="glass inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Download résumé PDF
            <span aria-hidden>↓</span>
          </a>
        </div>
      </header>

      <section className="mt-14 grid gap-6 lg:grid-cols-3">
        {skillClusters.map((cluster, idx) => (
          <ScrollReveal key={cluster.id} delay={idx * 0.05}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-6 transition hover:border-white/15 sm:p-8">
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cluster.accent} opacity-50 transition group-hover:opacity-80`}
              />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-clash)] text-2xl text-white">
                  {cluster.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{cluster.blurb}</p>
                <ul className="mt-6 space-y-3">
                  {cluster.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-snug text-[var(--color-silver)]"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-br from-[#5b6cff] to-[#8b5cf6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section className="mt-14">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            At a glance
          </p>
          <div className="flex flex-wrap gap-2">
            {skillBadges.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[var(--color-muted)]"
              >
                {s}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal>
        <div className="glass mt-14 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 text-center sm:p-10">
          <p className="text-sm text-[var(--color-muted)]">
            Want to go deeper? Use the nav or reach out directly.
          </p>
          <PageLink
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)] transition hover:brightness-110"
          >
            Contact
          </PageLink>
        </div>
      </ScrollReveal>
    </div>
  );
}
