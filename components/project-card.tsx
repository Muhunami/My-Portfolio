"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectPreview } from "@/components/project-preview";

type Preview = "mirror" | "mun" | "blog" | "web" | "media";

export function ProjectCard({
  title,
  description,
  stack,
  href,
  accent,
  preview,
}: {
  title: string;
  description: string;
  stack: readonly string[];
  href: string;
  accent: string;
  preview: Preview;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/50"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-60 transition group-hover:opacity-100`}
      />
      <div className="relative p-6">
        <ProjectPreview variant={preview} />
        <h3 className="mt-5 font-[family-name:var(--font-clash)] text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-[var(--color-silver)]"
            >
              {s}
            </span>
          ))}
        </div>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:gap-3"
        >
          View project
          <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
