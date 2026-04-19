"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const items = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "GitHub", href: site.social.github },
  { label: "YouTube", href: site.social.youtube },
];

export function SocialDock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="glass fixed bottom-6 left-1/2 z-[55] flex -translate-x-1/2 items-center gap-1 rounded-full px-2 py-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
    >
      {items.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full px-3 py-2 text-xs font-medium text-[var(--color-muted)] transition hover:bg-white/5 hover:text-white"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          {s.label}
        </motion.a>
      ))}
    </motion.div>
  );
}
