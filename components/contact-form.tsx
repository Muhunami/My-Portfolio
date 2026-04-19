"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("Collaboration");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, intent, message }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send.");
    }
  }

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(91,108,255,0.35),transparent_65%)] blur-3xl" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="relative py-10 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/20 ring-1 ring-white/20"
            >
              <span className="text-2xl" aria-hidden>
                ✓
              </span>
            </motion.div>
            <h3 className="font-[family-name:var(--font-clash)] text-2xl text-white">
              Message received
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-muted)]">
              Thank you for reaching out. If email delivery is configured, you will hear
              back shortly. Otherwise, your note was logged for review.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="relative space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-left">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Name
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[var(--color-surface)]/80 px-4 py-3 text-sm text-white outline-none ring-0 transition placeholder:text-white/25 focus:border-white/25"
                  placeholder="Manuel Muhunami"
                />
              </label>
              <label className="block text-left">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[var(--color-surface)]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                  placeholder="you@domain.com"
                />
              </label>
            </div>

            <label className="block text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Intent
              </span>
              <select
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[var(--color-surface)]/80 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
              >
                {["Collaboration", "Speaking", "Mentorship", "Press", "Other"].map(
                  (o) => (
                    <option key={o} value={o} className="bg-[var(--color-ink)]">
                      {o}
                    </option>
                  )
                )}
              </select>
            </label>

            <label className="block text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Message
              </span>
              <textarea
                required
                minLength={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[var(--color-surface)]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                placeholder="Tell me what you are building — context wins."
              />
            </label>

            {error && (
              <p className="text-sm text-rose-300" role="alert">
                {error}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[var(--color-muted)]">
                Delivered via API — configure{" "}
                <code className="rounded bg-white/5 px-1 py-0.5 text-[11px] text-white/70">
                  RESEND_API_KEY
                </code>{" "}
                +{" "}
                <code className="rounded bg-white/5 px-1 py-0.5 text-[11px] text-white/70">
                  CONTACT_TO
                </code>{" "}
                for live email.
              </p>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)] transition hover:brightness-110 disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <p className="relative mt-8 text-center text-xs text-[var(--color-muted)]">
        Prefer direct email?{" "}
        <a className="text-white/90 hover:underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
    </div>
  );
}
