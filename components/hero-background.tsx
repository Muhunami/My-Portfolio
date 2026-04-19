"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(91,108,255,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.12),transparent_45%)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.28]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ln" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(196,196,212,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={`${10 + i * 18}%`}
            y1="110%"
            x2={`${32 + i * 14}%`}
            y2="-10%"
            stroke="url(#ln)"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]">
        {Array.from({ length: 48 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white/60"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 41) % 100}%`,
            }}
            animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -6, 0] }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 10) * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
