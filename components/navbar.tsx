"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Projects" },
  { href: "/resume", label: "Skills" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-[60] px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="glass relative mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-[family-name:var(--font-clash)] text-lg font-semibold tracking-tight text-[var(--color-silver)] transition group-hover:text-white">
            {site.initials}
          </span>
          <span className="hidden font-medium text-[var(--color-silver)] transition group-hover:text-white sm:inline">
            Manuel
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "text-white"
                      : "text-[var(--color-muted)] hover:text-[var(--color-silver)]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/5 ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-frost)] px-3 py-1.5 text-xs font-medium text-[var(--color-silver)] transition hover:border-white/20 hover:text-white"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)] transition hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
        </div>
      </nav>

      <div className="mx-auto mt-3 flex max-w-6xl justify-center lg:hidden">
        <div className="glass flex max-w-full gap-1 overflow-x-auto rounded-full px-2 py-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-[var(--color-muted)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
