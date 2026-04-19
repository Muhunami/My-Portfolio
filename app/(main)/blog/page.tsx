import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PageLink } from "@/components/page-link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "What inspires Manuel — learning from creators who raise the bar.",
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Insights
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          People who push me forward
        </h1>
      </header>

      <ScrollReveal>
        <div className="glass mt-14 rounded-[2rem] p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            I&apos;m deeply motivated by the YouTuber{" "}
            <span className="text-[var(--color-silver)]">Gazi J</span>. Her work in
            computer science pushes me to work harder, think bigger, and hopefully one day
            reach that level of excellence.
          </p>
          <div className="mt-10">
            <a
              href={site.social.youtubeGazi}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500/15"
            >
              <span className="text-red-400" aria-hidden>
                ▶
              </span>
              Gazi J on YouTube
            </a>
          </div>
        </div>
      </ScrollReveal>

      <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
        <PageLink href="/contact" className="text-[var(--color-silver)] hover:text-white">
          Contact me
        </PageLink>{" "}
        — I&apos;d love to hear what inspires you too.
      </p>
    </div>
  );
}
