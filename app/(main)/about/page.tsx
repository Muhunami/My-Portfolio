import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site, aboutPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.metaDescription,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="font-[family-name:var(--font-clash)] text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          {site.firstName}
        </h1>
      </header>

      <section className="mt-16">
        <ScrollReveal>
          <div className="glass rounded-[2rem] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              {aboutPage.storyEyebrow}
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[var(--color-muted)]">
              {aboutPage.paragraphs.map((para, i) => {
                const isLast = i === aboutPage.paragraphs.length - 1;
                return (
                  <p
                    key={i}
                    className={
                      para.tone === "silver"
                        ? isLast
                          ? "pt-2 text-[var(--color-silver)]"
                          : "text-[var(--color-silver)]"
                        : undefined
                    }
                  >
                    {para.text}
                  </p>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-16">
        <ScrollReveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            {aboutPage.educationEyebrow}
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {aboutPage.education.map((card) => (
              <div
                key={card.school}
                className="glass flex h-full flex-col rounded-3xl p-6 transition hover:border-white/15"
              >
                <h3 className="font-[family-name:var(--font-clash)] text-lg text-white">
                  {card.school}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-silver)]">{card.line}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
