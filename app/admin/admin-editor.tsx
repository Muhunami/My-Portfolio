"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { withBase } from "@/lib/paths";

const STORAGE_KEY = "portfolio-admin-session";

function getExpectedPassword(): string {
  return (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "").trim();
}

export function AdminEditor() {
  const expected = useMemo(() => getExpectedPassword(), []);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [jsonText, setJsonText] = useState("");
  const [parseError, setParseError] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

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

  const loadJson = useCallback(async () => {
    setLoadError(null);
    setStatus(null);
    try {
      const res = await fetch(`${withBase("/site-content.json")}?t=${Date.now()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      setJsonText(text);
      setParseError(null);
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : "Failed to load");
    }
  }, []);

  useEffect(() => {
    if (unlocked) void loadJson();
  }, [unlocked, loadJson]);

  function validateAndSetStatus() {
    setParseError(null);
    setStatus(null);
    try {
      const parsed = JSON.parse(jsonText) as { version?: unknown };
      if (parsed.version !== 1) {
        setParseError('JSON must include "version": 1');
        return;
      }
      setStatus("JSON is valid.");
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }

  function download() {
    setParseError(null);
    try {
      const parsed = JSON.parse(jsonText) as { version?: unknown };
      if (parsed.version !== 1) {
        setParseError('JSON must include "version": 1');
        return;
      }
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
      return;
    }
    const blob = new Blob([jsonText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "site-content.json";
    a.click();
    URL.revokeObjectURL(url);
    setStatus("Download started — replace public/site-content.json in the repo, then commit and push.");
  }

  function formatJson() {
    try {
      const o = JSON.parse(jsonText);
      setJsonText(JSON.stringify(o, null, 2));
      setParseError(null);
      setStatus("Formatted.");
    } catch (e) {
      setParseError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }

  if (!expected) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <h1 className="font-[family-name:var(--font-clash)] text-3xl text-white">
          Site admin
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
          Admin is disabled. Add{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-[var(--color-silver)]">
            NEXT_PUBLIC_ADMIN_PASSWORD=your_secret
          </code>{" "}
          to <code className="rounded bg-white/10 px-1.5">.env.local</code> (local) or to
          your GitHub Actions build env (for the live site), then rebuild. The password is
          embedded in the client bundle — treat it as casual access control only; anyone
          with the bundle can extract it.
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
          Enter the password to edit <code className="text-[var(--color-silver)]">site-content.json</code>.
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
          Site content
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)]">
          This site is static (GitHub Pages). Edits here do not save to the server. Use{" "}
          <span className="font-medium text-[var(--color-silver)]">Validate</span>, then{" "}
          <span className="font-medium text-[var(--color-silver)]">Download JSON</span>, replace{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">public/site-content.json</code>{" "}
          in your repo, commit, and push — the deploy workflow will rebuild the site.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={loadJson}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Reload from site
        </button>
        <button
          type="button"
          onClick={validateAndSetStatus}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Validate
        </button>
        <button
          type="button"
          onClick={formatJson}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Format
        </button>
        <button
          type="button"
          onClick={download}
          className="rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-4 py-2 text-sm font-semibold text-white"
        >
          Download JSON
        </button>
      </div>

      {loadError && (
        <p className="mt-4 text-sm text-amber-400">Could not load: {loadError}</p>
      )}
      {parseError && <p className="mt-4 text-sm text-red-400">{parseError}</p>}
      {status && !parseError && (
        <p className="mt-4 text-sm text-emerald-400/90">{status}</p>
      )}

      <textarea
        value={jsonText}
        onChange={(e) => {
          setJsonText(e.target.value);
          setParseError(null);
          setStatus(null);
        }}
        spellCheck={false}
        className="mt-6 min-h-[70vh] w-full resize-y rounded-2xl border border-white/10 bg-[#0a0a0f] p-4 font-mono text-xs leading-relaxed text-[var(--color-silver)] outline-none focus:border-white/20 sm:text-sm"
        aria-label="Site content JSON"
      />
    </div>
  );
}
