"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/hero-background";
import { SocialDock } from "@/components/social-dock";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { stats, site, awards } from "@/lib/site";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { WorldMap } from "@/components/world-map";
import { SpotifyWidget } from "@/components/spotify-widget";

export function HomeContent() {
  return (
    <>
      <SocialDock />

      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/40 pb-24 pt-16 sm:pt-24">
        <HeroBackground />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted)]"
          >
            Precision · Poise · Purpose
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-silver)] sm:text-xl"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href="/portfolio"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_20px_60px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 sm:w-auto"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="glass inline-flex w-full items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto mt-16 grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="glass rounded-3xl p-6 lg:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Current focus
            </p>
            <p className="mt-3 text-lg font-medium text-[var(--color-silver)]">
              Shipping thoughtful interfaces and clear writing — code, narrative, and
              collaboration in one loop.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Code", "Writing", "Conversation"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
            className="glass relative overflow-hidden rounded-3xl p-6"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Quote
            </p>
            <p className="mt-4 font-[family-name:var(--font-clash)] text-xl leading-snug text-white">
              “Ambition without taste is just noise.”
            </p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">— Studio note, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Signal"
            title="Numbers that track momentum, not vanity."
            subtitle="Metrics chosen to reflect depth: shipped work, competitive wins, and the geography of curiosity."
          />
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <ScrollReveal key={s.label} delay={idx * 0.05}>
              <div className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/20">
                <p className="font-[family-name:var(--font-clash)] text-4xl font-semibold text-white">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{s.label}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-white/25 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Voices"
            title="Trusted by coaches, mentors, and collaborators."
          />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSlider />
        </ScrollReveal>
      </section>

      <section className="mx-auto mt-24 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Recognition"
            title="Awards & milestones"
            subtitle="A concise ledger of competitive craft and institutional trust."
          />
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2">
          {awards.map((a, idx) => (
            <ScrollReveal key={a.title} delay={idx * 0.06}>
              <div className="glass flex items-start justify-between gap-4 rounded-3xl p-6">
                <div>
                  <p className="font-medium text-white">{a.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{a.org}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[var(--color-silver)]">
                  {a.year}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Atlas"
            title="Goals on a map — where ambition meets geography."
          />
          <WorldMap />
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <SectionHeading
            eyebrow="Soundtrack"
            title="Focus, scored."
            subtitle="A living playlist for deep work — swap the embed URL in site config."
          />
          <SpotifyWidget />
        </ScrollReveal>
      </section>
    </>
  );
}
