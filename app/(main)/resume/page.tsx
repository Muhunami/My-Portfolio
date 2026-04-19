import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { SkillBar } from "@/components/skill-bar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Education, experience, skills, certifications, and leadership.",
};

const education = [
  {
    school: "Northfield Academy",
    program: "Honors STEM + Humanities",
    years: "2023 — Present",
    detail: "Debate captain · MUN leadership · Independent research in AI ethics.",
  },
] as const;

const experience = [
  {
    role: "Founding Builder — Personal Lab",
    org: "Independent",
    years: "2024 — Present",
    points: [
      "Shipped premium web experiences with performance budgets and motion design.",
      "Built research workflows for competitive speaking with retrieval + synthesis.",
    ],
  },
  {
    role: "Student Government — Executive Board",
    org: "Northfield Academy",
    years: "2023 — Present",
    points: [
      "Led cross-functional initiatives spanning communications and student life.",
      "Facilitated stakeholder alignment between faculty, students, and administration.",
    ],
  },
] as const;

const certs = [
  "Google UX Foundations (sample)",
  "Harvard CS50 (sample)",
  "Debate & Parliamentary Excellence (sample)",
] as const;

const leadership = [
  "Debate Team Captain — strategy, training pipelines, tournament logistics",
  "MUN Delegation Head — research briefs, bloc coordination, crisis simulations",
  "Tech Club Lead — workshops on modern frontend tooling and product taste",
] as const;

const skills = [
  { label: "Strategic communication", value: 96 },
  { label: "Research & synthesis", value: 92 },
  { label: "Frontend engineering", value: 88 },
  { label: "Product sense & UX writing", value: 90 },
] as const;

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Résumé / CV
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 max-w-xl text-[var(--color-muted)]">
            A single-page narrative you can skim in 30 seconds — or study in detail.
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

      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation"
          />
          {education.map((e) => (
            <div key={e.school} className="glass rounded-3xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-[family-name:var(--font-clash)] text-xl text-white">
                  {e.school}
                </h3>
                <span className="text-xs text-[var(--color-muted)]">{e.years}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--color-silver)]">{e.program}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {e.detail}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <SectionHeading
            eyebrow="Skills"
            title="Capability map"
          />
          <div className="glass space-y-5 rounded-3xl p-6 sm:p-8">
            {skills.map((s, idx) => (
              <SkillBar key={s.label} label={s.label} value={s.value} delay={0.1 * idx} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Roles & outcomes"
          />
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((x, idx) => (
            <ScrollReveal key={x.role} delay={idx * 0.05}>
              <div className="glass h-full rounded-3xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-[family-name:var(--font-clash)] text-lg text-white">
                    {x.role}
                  </h3>
                  <span className="text-xs text-[var(--color-muted)]">{x.years}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-silver)]">{x.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                  {x.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white/35" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <SectionHeading eyebrow="Certifications" title="Credentials" />
          <ul className="space-y-3">
            {certs.map((c) => (
              <li
                key={c}
                className="glass rounded-2xl px-4 py-3 text-sm text-[var(--color-silver)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading eyebrow="Leadership" title="Institutional trust" />
          <ul className="space-y-3">
            {leadership.map((l) => (
              <li
                key={l}
                className="glass rounded-2xl px-4 py-3 text-sm leading-relaxed text-[var(--color-muted)]"
              >
                {l}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      <ScrollReveal>
        <div className="glass mt-16 rounded-[2rem] p-8 text-center sm:p-10">
          <p className="text-sm text-[var(--color-muted)]">
            Replace the placeholder PDF in{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-white/80">
              /public/resume.pdf
            </code>{" "}
            with your final export.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)]"
          >
            Request references
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
