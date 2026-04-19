import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — collaboration, speaking, mentorship, and press.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Contact
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Let&apos;s build something unmistakable.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          Share context, constraints, and what success looks like. I read every
          thoughtful message — and I respond quickly when there is a clear fit.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>

        <aside className="space-y-5 lg:col-span-2">
          <ScrollReveal delay={0.06}>
            <div className="glass rounded-3xl p-6">
              <SectionHeading
                eyebrow="Direct"
                title="Channels"
                subtitle="Choose the fastest channel for your intent."
              />
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[var(--color-silver)] hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 font-medium text-emerald-100 transition hover:bg-emerald-400/15"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href={site.calendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)] transition hover:brightness-110"
                  >
                    Book a calendar slot
                  </a>
                  <p className="mt-2 text-xs text-[var(--color-muted)]">
                    Set <code className="rounded bg-white/5 px-1">calendarUrl</code> in{" "}
                    <code className="rounded bg-white/5 px-1">lib/site.ts</code> to your Cal.com
                    or Calendly link.
                  </p>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass rounded-3xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: "LinkedIn", href: site.social.linkedin },
                  { label: "GitHub", href: site.social.github },
                  { label: "X", href: site.social.twitter },
                  { label: "Instagram", href: site.social.instagram },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--color-silver)] transition hover:border-white/20 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </aside>
      </div>
    </div>
  );
}
