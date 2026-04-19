"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="sticky top-0 z-[60] px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="glass relative mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6">
        <Link href="/" className="group flex min-h-[44px] min-w-[44px] items-center gap-2 py-1">
          <span className="font-[family-name:var(--font-clash)] text-lg font-semibold tracking-tight text-[var(--color-silver)] transition group-hover:text-white">
            {site.initials}
          </span>
          <span className="hidden font-medium text-[var(--color-silver)] transition group-hover:text-white sm:inline">
            {site.firstName}
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  prefetch
                  scroll
                  className={`relative rounded-full px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-white/5 text-white ring-1 ring-white/10"
                      : "text-[var(--color-muted)] hover:text-[var(--color-silver)]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            prefetch
            scroll
            className="hidden min-h-[44px] items-center rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)] transition hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
        </div>
      </nav>

      <div className="mx-auto mt-3 flex max-w-6xl justify-center lg:hidden">
        <div className="glass flex max-w-full gap-0.5 overflow-x-auto rounded-full px-2 py-1.5 [-webkit-overflow-scrolling:touch]">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                prefetch
                scroll
                className={`flex min-h-[44px] items-center whitespace-nowrap rounded-full px-3.5 py-2.5 text-xs font-medium ${
                  active ? "bg-white/10 text-white" : "text-[var(--color-muted)]"
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
