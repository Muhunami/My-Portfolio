"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--color-border)] bg-[var(--color-ink)]/80 px-4 py-16 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-clash)] text-2xl font-semibold tracking-tight text-white">
            {site.name.split(" ")[0]}{" "}
            <span className="text-[var(--color-muted)]">
              {site.name.split(" ")[1]}
            </span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
            {site.tagline}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Explore
            </p>
            <ul className="space-y-2 text-[var(--color-silver)]">
              <li>
                <Link className="hover:text-white" href="/portfolio">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/resume">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/blog">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Connect
            </p>
            <ul className="space-y-2 text-[var(--color-silver)]">
              <li>
                <a className="hover:text-white" href={site.social.linkedin}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={site.social.github}>
                  GitHub
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={site.social.twitter}>
                  X
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="block text-[var(--color-silver)] hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-[var(--color-muted)] sm:flex-row"
      >
        <p>© {new Date().getFullYear()} {site.name}. Crafted with intention.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <span className="text-white/10">|</span>
          <a href="/sitemap.xml" className="hover:text-white">
            Sitemap
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
