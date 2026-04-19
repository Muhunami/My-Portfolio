"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Replaces whileInView — that API often never fires on client-side navigations when
 * content is already in the viewport, leaving sections stuck at opacity 0.
 */
export function ScrollReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh + 160 && rect.bottom > -100) {
      const ms = Math.round(delay * 1000);
      if (ms <= 0) setVisible(true);
      else window.setTimeout(() => setVisible(true), ms);
    }
  }, [delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ms = Math.round(delay * 1000);
            if (ms <= 0) setVisible(true);
            else window.setTimeout(() => setVisible(true), ms);
          }
        });
      },
      { threshold: 0, rootMargin: "25% 0px 25% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
