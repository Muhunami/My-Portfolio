"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/site";

export function TestimonialsSlider() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () =>
    setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[i];

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(91,108,255,0.35),transparent_65%)] blur-2xl" />
      <AnimatePresence mode="wait">
        <motion.figure
          key={t.quote}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <blockquote className="text-lg leading-relaxed text-[var(--color-silver)] sm:text-xl">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 ring-1 ring-white/15" />
            <div>
              <p className="font-medium text-white">{t.name}</p>
              <p className="text-sm text-[var(--color-muted)]">{t.role}</p>
            </div>
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition ${
                idx === i ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
