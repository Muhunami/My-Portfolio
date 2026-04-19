"use client";

import { motion } from "framer-motion";

export function ParticlesSoft() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
      aria-hidden
    >
      {Array.from({ length: 32 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/25"
          style={{
            width: `${1.5 + (i % 4) * 0.4}px`,
            height: `${1.5 + (i % 4) * 0.4}px`,
            left: `${(i * 47) % 100}%`,
            top: `${(i * 31) % 100}%`,
          }}
          animate={{
            opacity: [0.08, 0.35, 0.08],
            y: [0, -20, 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
          }}
          transition={{
            duration: 8 + (i % 6),
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 12) * 0.3,
          }}
        />
      ))}
    </div>
  );
}
