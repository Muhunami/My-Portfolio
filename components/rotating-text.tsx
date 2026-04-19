"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  items: readonly string[];
  intervalMs?: number;
};

export function RotatingText({ items, intervalMs = 3200 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [items.length, intervalMs]);

  return (
    <span className="relative inline-flex min-h-[1.4em] items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text font-medium"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
