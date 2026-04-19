"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * No AnimatePresence + mode="wait" — that pattern often leaves the next route
 * invisible (opacity 0) until a full reload with static export + client nav.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
