"use client";

import { site } from "@/lib/site";

const items = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "GitHub", href: site.social.github },
  { label: "YouTube", href: site.social.youtube },
];

export function SocialDock() {
  return (
    <div className="glass fixed bottom-6 left-1/2 z-[55] flex -translate-x-1/2 items-center gap-1 rounded-full px-2 py-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full px-3 py-2 text-xs font-medium text-[var(--color-muted)] transition hover:-translate-y-0.5 hover:bg-white/5 hover:text-white"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
