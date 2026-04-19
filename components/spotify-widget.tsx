"use client";

import { site } from "@/lib/site";

export function SpotifyWidget() {
  return (
    <div className="glass overflow-hidden rounded-3xl">
      <div className="border-b border-white/10 px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Now playing
        </p>
        <p className="mt-1 text-sm text-[var(--color-silver)]">
          A rotating focus playlist — cinematic, minimal, deep work.
        </p>
      </div>
      <iframe
        title="Spotify playlist"
        className="h-[352px] w-full border-0"
        src={site.spotifyPlaylistUrl}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
