"use client";

import { motion } from "framer-motion";
import { mapPins } from "@/lib/site";

export function WorldMap() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-surface)]">
        <svg
          viewBox="0 0 100 50"
          className="h-full w-full opacity-[0.35]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.15"
            d="M10 28c6-4 12-6 18-5 8 1 14 6 22 7 10 1 20-4 28-9 6-4 12-6 18-5"
          />
          <path
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.12"
            d="M8 34c10 2 20-1 30-6 8-4 16-6 24-4"
          />
        </svg>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,8,0)_0%,rgba(5,5,8,0.55)_100%)]" />

        {mapPins.map((pin) => (
          <motion.button
            key={pin.id}
            type="button"
            title={pin.label}
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#5b6cff] to-[#8b5cf6] shadow-[0_0_25px_rgba(91,108,255,0.55)] ring-2 ring-white/30"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            whileHover={{ scale: 1.15 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {mapPins.map((pin) => (
          <li
            key={pin.id}
            className="flex items-center gap-2 text-sm text-[var(--color-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            {pin.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
