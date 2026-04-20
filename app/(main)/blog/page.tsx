import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PageLink } from "@/components/page-link";
import { site, insightsPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: insightsPage.metaDescription,
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          {insightsPage.eyebrow}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {insightsPage.title}
        </h1>
      </header>

      <ScrollReveal>
        <div className="glass mt-14 rounded-[2rem] p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            {insightsPage.paragraphBeforeHighlight}
            <span className="text-[var(--color-silver)]">
              {insightsPage.highlightName}
            </span>
            {insightsPage.paragraphAfterHighlight}
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
              {insightsPage.youtubeButtonLabel}
            </a>
          </div>
        </div>
      </ScrollReveal>

      <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
        <PageLink href="/contact" className="text-[var(--color-silver)] hover:text-white">
          Contact me
        </PageLink>{" "}
        — {insightsPage.closingLineBeforeContact}
      </p>
    </div>
  );
}
