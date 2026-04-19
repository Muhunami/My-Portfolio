"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "manuel-intro-seen";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        return;
      }
    } catch {
      /* ignore */
    }
    setVisible(true);
    const t = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 2000);
    return () => window.clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-void)]"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center gap-[0.15em]">
              {"MANUEL".split("").map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.06 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-[family-name:var(--font-clash)] text-4xl font-semibold tracking-[0.2em] text-white sm:text-5xl md:text-6xl"
                >
                  {ch}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-32 origin-left bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
