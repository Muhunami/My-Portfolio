"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("Collaboration");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] ${intent} — ${name}`);
    const body = encodeURIComponent(
      `Intent: ${intent}\n\n${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(91,108,255,0.35),transparent_65%)] blur-3xl" />

      {status === "success" ? (
        <div className="relative py-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/20 ring-1 ring-white/20">
            <span className="text-2xl" aria-hidden>
              ✓
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-clash)] text-2xl text-white">
            Opening your email
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-muted)]">
            Your mail app should open with a draft to {site.email}. Send it when you are
            ready.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            Back to form
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="relative space-y-5">
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
              {["Collaboration", "Speaking", "Mentorship", "Press", "Other"].map((o) => (
                <option key={o} value={o} className="bg-[var(--color-ink)]">
                  {o}
                </option>
              ))}
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
              placeholder="Say hello — context helps."
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[var(--color-muted)]">
              Opens your email client to reach me at {site.email}.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_var(--color-glow)] transition hover:brightness-110"
            >
              Send message
            </button>
          </div>
        </form>
      )}

      {status === "idle" && (
        <p className="relative mt-8 text-center text-xs text-[var(--color-muted)]">
          Prefer direct?{" "}
          <a className="text-white/90 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      )}
    </div>
  );
}
