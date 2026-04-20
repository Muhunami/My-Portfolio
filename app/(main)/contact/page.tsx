import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm } from "@/components/contact-form";
import { site, contactPageCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPageCopy.metaDescription,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          {contactPageCopy.eyebrow}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {contactPageCopy.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          {contactPageCopy.subtitle}
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
            <div className="glass rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {contactPageCopy.sidebarEyebrow}
              </p>
              <ul className="mt-6 space-y-5 text-sm">
                <li>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-lg text-[var(--color-silver)] transition hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    LinkedIn
                  </p>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block break-all text-[var(--color-silver)] transition hover:text-white"
                  >
                    {contactPageCopy.linkedinDisplay}
                  </a>
                </li>
                <li>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    YouTube
                  </p>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-[var(--color-silver)] transition hover:text-white"
                  >
                    {contactPageCopy.youtubeDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </aside>
      </div>
    </div>
  );
}
