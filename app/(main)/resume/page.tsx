import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { site, skillBadges } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills and strengths — Manuel Muhunami.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Skills
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {site.firstName}
          </h1>
          <p className="mt-3 max-w-xl text-[var(--color-muted)]">
            How I think, create, and show up.
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          Download PDF
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section className="mt-14">
        <ScrollReveal>
          <SectionHeading eyebrow="Capabilities" title="What I bring" />
        </ScrollReveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {skillBadges.map((s, idx) => (
            <ScrollReveal key={s} delay={idx * 0.03}>
              <span className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm text-[var(--color-silver)] transition hover:border-white/25 hover:bg-white/[0.06]">
                {s}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <div className="glass mt-16 rounded-[2rem] p-8 text-center sm:p-10">
          <p className="text-sm text-[var(--color-muted)]">
            PDF in{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-white/80">
              /public/resume.pdf
            </code>{" "}
            can be replaced with your export.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)]"
          >
            Get in touch
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
