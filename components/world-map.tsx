"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mapPins } from "@/lib/site";

export function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

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

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="pointer-events-none absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-[var(--color-ink)]/95 px-4 py-2 text-xs font-medium text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
            >
              {mapPins.find((p) => p.id === hovered)?.label}
            </motion.div>
          )}
        </AnimatePresence>

        {mapPins.map((pin) => (
          <motion.button
            key={pin.id}
            type="button"
            title={pin.label}
            onMouseEnter={() => setHovered(pin.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(pin.id)}
            onBlur={() => setHovered(null)}
            className="absolute z-[5] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#5b6cff] to-[#8b5cf6] shadow-[0_0_28px_rgba(91,108,255,0.65)] ring-2 ring-white/35 transition-transform hover:scale-150 hover:shadow-[0_0_40px_rgba(139,92,246,0.75)]"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3 + (pin.x % 3) * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
