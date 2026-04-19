"use client";

import { motion } from "framer-motion";

export function SkillBar({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: number;
  delay?: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-[var(--color-silver)]">{label}</span>
        <span className="text-xs text-[var(--color-muted)]">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6]"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
        />
      </div>
    </div>
  );
}
