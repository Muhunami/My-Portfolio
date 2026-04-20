"use client";

import { PageLink } from "@/components/page-link";
import { HeroBackground } from "@/components/hero-background";
import { SocialDock } from "@/components/social-dock";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { site, awardsDetailed, home } from "@/lib/site";
import { WorldMap } from "@/components/world-map";

export function HomeContent() {
  return (
    <>
      <SocialDock />

      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/40 pb-24 pt-16 sm:pt-24">
        <HeroBackground />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted)]">
            {home.heroEyebrow}
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-silver)] sm:text-xl">
            {site.tagline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <PageLink
              href="/portfolio"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_20px_60px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 sm:w-auto"
            >
              {home.primaryCta}
            </PageLink>
            <PageLink
              href="/contact"
              className="glass inline-flex w-full items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
            >
              {home.secondaryCta}
            </PageLink>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 max-w-6xl px-6">
          <div className="glass grid gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                {home.currentFocus.label}
              </p>
              <p className="mt-3 text-lg font-medium leading-relaxed text-[var(--color-silver)]">
                {home.currentFocus.lead}{" "}
                <span className="gradient-text font-semibold">
                  {home.currentFocus.highlight}
                </span>
              </p>
            </div>
            <div className="relative border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="pointer-events-none absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                {home.quoteSection.label}
              </p>
              <p className="mt-4 font-[family-name:var(--font-clash)] text-xl leading-snug text-white">
                {home.quoteSection.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow={home.intellectual.eyebrow}
            title={home.intellectual.title}
          />
        </ScrollReveal>
      </section>

      <section className="mx-auto mt-24 max-w-6xl">
        <ScrollReveal>
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              {home.recognition.eyebrow}
            </p>
            <h2 className="font-[family-name:var(--font-clash)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {home.recognition.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
              {home.recognition.subtitle}
            </p>
          </div>
        </ScrollReveal>
        <div className="relative">
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent sm:left-4" />
          <ol className="space-y-6">
            {awardsDetailed.map((entry, idx) => (
              <li key={`${entry.year}-${idx}`} className="relative pl-10 sm:pl-12">
                <span className="absolute left-0 top-1 flex min-h-[1.75rem] min-w-[1.75rem] items-center justify-center rounded-full border border-white/15 bg-[var(--color-surface)] text-[10px] font-semibold text-white">
                  {entry.year.slice(2)}
                </span>
                <div className="glass rounded-3xl p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {entry.year}
                  </p>
                  <div className="mt-3 space-y-2">
                    {entry.lines.map((line, li) => (
                      <p
                        key={line}
                        className={
                          li === 0
                            ? "font-medium text-white"
                            : "text-sm leading-relaxed text-[var(--color-muted)]"
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow={home.atlas.eyebrow}
            title={home.atlas.title}
          />
          <WorldMap />
        </ScrollReveal>
      </section>
    </>
  );
}
