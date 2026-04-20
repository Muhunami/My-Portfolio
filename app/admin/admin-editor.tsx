"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AdminForm } from "./admin-form";

const STORAGE_KEY = "portfolio-admin-session";

function getExpectedPassword(): string {
  return (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "").trim();
}

export function AdminEditor() {
  const expected = useMemo(() => getExpectedPassword(), []);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  const tryUnlock = useCallback(() => {
    if (!expected) {
      setAuthError("Admin is disabled until you set NEXT_PUBLIC_ADMIN_PASSWORD.");
      return;
    }
    if (password === expected) {
      setUnlocked(true);
      setAuthError(null);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    } else {
      setAuthError("Incorrect password.");
    }
  }, [expected, password]);

  useEffect(() => {
    if (!expected) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    } catch {
      /* ignore */
    }
  }, [expected]);

  if (!expected) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <h1 className="font-[family-name:var(--font-clash)] text-3xl text-white">
          Site admin
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
          This build did not include a password (the unlock screen only appears after a
          successful deploy with the variable set). Fix it, then redeploy:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
          <li>
            <strong className="font-medium text-[var(--color-silver)]">GitHub:</strong> add
            a secret named exactly{" "}
            <code className="rounded bg-white/10 px-1.5 text-[var(--color-silver)]">
              ADMIN_PASSWORD
            </code>{" "}
            (Repository secrets, or Environment → <code className="text-[var(--color-silver)]">github-pages</code>).
            The workflow maps it into the build.
          </li>
          <li>
            Wait for <strong className="font-medium text-[var(--color-silver)]">Actions → Deploy to GitHub Pages</strong>{" "}
            to finish after you push, or re-run the failed workflow.
          </li>
          <li>
            <strong className="font-medium text-[var(--color-silver)]">Local dev:</strong>{" "}
            <code className="rounded bg-white/10 px-1.5">NEXT_PUBLIC_ADMIN_PASSWORD=…</code> in{" "}
            <code className="rounded bg-white/10 px-1.5">.env.local</code>, then{" "}
            <code className="rounded bg-white/10 px-1.5">npm run dev</code>.
          </li>
        </ul>
        <p className="mt-6 text-xs text-[var(--color-muted)]">
          Note: the password ships in the client bundle — use it as light access control only.
        </p>
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16">
        <h1 className="font-[family-name:var(--font-clash)] text-3xl text-white">
          Site admin
        </h1>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          Enter the password to edit your site content.
        </p>
        <label className="mt-8 block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
          Password
        </label>
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && tryUnlock()}
          className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 focus:border-white/25"
        />
        {authError && <p className="mt-2 text-sm text-red-400">{authError}</p>}
        <button
          type="button"
          onClick={tryUnlock}
          className="mt-6 rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-6 py-3 text-sm font-semibold text-white"
        >
          Unlock
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="font-[family-name:var(--font-clash)] text-3xl text-white">
          Edit site content
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)]">
          Use the sections below — no raw JSON needed for normal edits. When you are done,{" "}
          <span className="font-medium text-[var(--color-silver)]">Download JSON</span> and replace{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">public/site-content.json</code>{" "}
          in your repo, then commit and push. Need the old editor? Open{" "}
          <span className="font-medium text-[var(--color-silver)]">Advanced: raw JSON</span> at the bottom of the form.
        </p>
      </header>

      <AdminForm />
    </div>
  );
}
