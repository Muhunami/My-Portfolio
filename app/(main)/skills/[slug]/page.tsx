import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  skillShowcaseBySlug,
  skillShowcaseSlugs,
  type SkillShowcaseSlug,
} from "@/lib/skill-showcase";
import { PageLink } from "@/components/page-link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return skillShowcaseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isSkillSlug(slug)) return { title: "Skills" };
  const data = skillShowcaseBySlug[slug];
  return {
    title: data.title,
    description: data.subtitle,
  };
}

function isSkillSlug(s: string): s is SkillShowcaseSlug {
  return skillShowcaseSlugs.includes(s as SkillShowcaseSlug);
}

export default async function SkillShowcasePage({ params }: Props) {
  const { slug } = await params;
  if (!isSkillSlug(slug)) notFound();

  const data = skillShowcaseBySlug[slug];

  if (slug === "photography" && "images" in data) {
    return (
      <article className="mx-auto max-w-5xl">
        <PageLink
          href="/resume"
          className="text-sm text-[var(--color-muted)] transition hover:text-white"
        >
          ← Skills
        </PageLink>

        <header className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Showcase
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[var(--color-silver)]">
            {data.subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
            {data.intro}
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {data.images.map((img) => (
            <figure
              key={img.src}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-surface)]/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-[var(--color-muted)]">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
    );
  }

  if (slug === "creative-writing" && "pieces" in data) {
    return (
      <article className="mx-auto max-w-3xl">
        <PageLink
          href="/resume"
          className="text-sm text-[var(--color-muted)] transition hover:text-white"
        >
          ← Skills
        </PageLink>

        <header className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Showcase
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[var(--color-silver)]">
            {data.subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
            {data.intro}
          </p>
        </header>

        <div className="mt-12 space-y-6">
          {data.pieces.map((piece) => (
            <div
              key={piece.title}
              className="glass rounded-2xl border border-white/10 p-6 sm:p-8"
            >
              <h2 className="font-[family-name:var(--font-clash)] text-xl text-white">
                {piece.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                {piece.excerpt}
              </p>
            </div>
          ))}
        </div>
      </article>
    );
  }

  if (slug === "storytelling" && "videos" in data) {
    return (
      <article className="mx-auto max-w-4xl">
        <PageLink
          href="/resume"
          className="text-sm text-[var(--color-muted)] transition hover:text-white"
        >
          ← Skills
        </PageLink>

        <header className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Showcase
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[var(--color-silver)]">
            {data.subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
            {data.intro}
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {data.videos.map((v) => (
            <section key={v.title} className="space-y-4">
              <h2 className="font-[family-name:var(--font-clash)] text-xl text-white">
                {v.title}
              </h2>
              {v.videoId ? (
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_60px_rgba(91,108,255,0.12)]">
                  <iframe
                    title={v.title}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <p className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-4 py-6 text-sm text-[var(--color-muted)]">
                  {v.note}
                </p>
              )}
            </section>
          ))}
        </div>
      </article>
    );
  }

  notFound();
}
