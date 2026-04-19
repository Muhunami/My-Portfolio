import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Essays on discipline, technology, mindset, and student success.",
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Blog / Insights
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Long-form thinking, short enough to respect your time.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          Topics span discipline, AI, student success, mindset, and lived experience — each
          piece designed for deep reading on any device.
        </p>
      </header>

      <div className="mt-14 grid gap-5">
        {blogPosts.map((post, idx) => (
          <ScrollReveal key={post.slug} delay={idx * 0.04}>
            <Link
              href={`/blog/${post.slug}`}
              className="group glass block rounded-3xl p-6 transition hover:-translate-y-1 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-[var(--color-silver)]">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-clash)] text-2xl text-white transition group-hover:text-[var(--color-silver)]">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                Read article
                <span className="transition group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
