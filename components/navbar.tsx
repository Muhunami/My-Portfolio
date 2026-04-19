"use client";

import { site } from "@/lib/site";
import { NavLink, NavAnchor } from "@/components/nav-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Projects" },
  { href: "/resume", label: "Skills" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-[60] px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="glass relative mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6">
        <NavAnchor
          href="/"
          className="group flex min-h-[44px] min-w-[44px] items-center gap-2 py-1"
        >
          <span className="font-[family-name:var(--font-clash)] text-lg font-semibold tracking-tight text-[var(--color-silver)] transition group-hover:text-white">
            {site.initials}
          </span>
          <span className="hidden font-medium text-[var(--color-silver)] transition group-hover:text-white sm:inline">
            {site.firstName}
          </span>
        </NavAnchor>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                href={l.href}
                desktopClassName="relative rounded-full px-3 py-2.5 text-sm font-medium transition text-[var(--color-muted)] hover:text-[var(--color-silver)]"
                mobileClassName="hidden"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <NavAnchor
            href="/contact"
            className="hidden min-h-[44px] items-center rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)] transition hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s talk
          </NavAnchor>
        </div>
      </nav>

      <div className="mx-auto mt-3 flex max-w-6xl justify-center lg:hidden">
        <div className="glass flex max-w-full gap-0.5 overflow-x-auto rounded-full px-2 py-1.5 [-webkit-overflow-scrolling:touch]">
          {links.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              desktopClassName="hidden"
              mobileClassName="flex min-h-[44px] items-center whitespace-nowrap rounded-full px-3.5 py-2.5 text-xs font-medium text-[var(--color-muted)]"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
