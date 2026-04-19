"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 280, damping: 28, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[40] hidden h-[min(520px,70vw)] w-[min(520px,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen md:block"
      style={{ left: sx, top: sy }}
    >
      <div
        className="h-full w-full rounded-full opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle, rgba(91,108,255,0.55) 0%, rgba(139,92,246,0.2) 45%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
