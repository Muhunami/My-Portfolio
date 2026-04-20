import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectList, projectLongForm } from "@/lib/project-details";
import { PageLink } from "@/components/page-link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projectList.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projectList.find((x) => x.id === slug);
  if (!p) return { title: "Project" };
  return {
    title: p.title,
    description: p.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = projectList.find((x) => x.id === slug);
  if (!p) notFound();

  const body = projectLongForm[p.id];
  if (!body) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <PageLink
        href="/portfolio"
        className="text-sm text-[var(--color-muted)] transition hover:text-white"
      >
        ← Projects
      </PageLink>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider ${
              p.status === "live"
                ? "bg-emerald-500/10 text-emerald-200"
                : "bg-white/5 text-[var(--color-muted)]"
            }`}
          >
            {p.status === "live" ? "Live" : "In progress"}
          </span>
        </div>
        <h1 className="mt-4 font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {p.title}
        </h1>
        <p className="mt-3 text-lg text-[var(--color-silver)]">{p.subtitle}</p>
      </header>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-[var(--color-muted)]">
        {body.tagline && (
          <p className="text-[var(--color-silver)]">{body.tagline}</p>
        )}
        {body.paragraphs.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </div>

      {body.pillars && body.pillars.length > 0 && (
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-clash)] text-2xl text-white">
            What it includes
          </h2>
          <ul className="mt-6 space-y-4">
            {body.pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="glass rounded-2xl border border-white/10 p-5"
              >
                <h3 className="font-medium text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {pillar.text}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {p.liveUrl ? (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Open live project
          </a>
        ) : (
          <p className="text-sm text-[var(--color-muted)]">
            Live link will appear here when the project ships.
          </p>
        )}
        <PageLink
          href="/contact"
          className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Discuss this project
        </PageLink>
      </div>
    </article>
  );
}
