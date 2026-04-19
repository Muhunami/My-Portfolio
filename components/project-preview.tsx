"use client";

type Variant = "mirror" | "mun" | "blog" | "web" | "media";

export function ProjectPreview({ variant }: { variant: Variant }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,108,255,0.25),transparent_55%)]" />
      {variant === "mirror" && <MirrorUi />}
      {variant === "mun" && <MunUi />}
      {variant === "blog" && <BlogUi />}
      {variant === "web" && <WebUi />}
      {variant === "media" && <MediaUi />}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent opacity-80"
      />
    </div>
  );
}

function MirrorUi() {
  return (
    <>
      <div className="absolute left-1/2 top-6 h-24 w-[70%] -translate-x-1/2 rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(91,108,255,0.2)]" />
      <div className="absolute left-1/2 top-14 w-[55%] -translate-x-1/2 space-y-2">
        <div className="h-1.5 rounded-full bg-white/20" />
        <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
        <div className="flex gap-2 pt-2">
          <span className="h-6 flex-1 rounded-md bg-emerald-400/15 ring-1 ring-emerald-400/25" />
          <span className="h-6 flex-1 rounded-md bg-blue-400/15 ring-1 ring-blue-400/25" />
        </div>
      </div>
    </>
  );
}

function MunUi() {
  return (
    <div className="absolute inset-4 grid grid-cols-3 gap-2">
      {["Bloc", "Crisis", "Intel"].map((t) => (
        <div
          key={t}
          className="rounded-lg border border-white/10 bg-white/[0.03] p-2"
        >
          <p className="text-[9px] font-semibold text-white/70">{t}</p>
          <div className="mt-2 space-y-1">
            <div className="h-1 rounded bg-white/10" />
            <div className="h-1 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

function BlogUi() {
  return (
    <div className="absolute inset-5">
      <div className="mb-2 text-[10px] font-semibold tracking-wide text-white/60">
        EDITORIAL
      </div>
      <div className="space-y-2">
        <div className="h-2 w-4/5 rounded bg-white/15" />
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-11/12 rounded bg-white/10" />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="h-14 rounded-lg bg-white/5 ring-1 ring-white/10" />
          <div className="h-14 rounded-lg bg-white/5 ring-1 ring-white/10" />
        </div>
      </div>
    </div>
  );
}

function WebUi() {
  return (
    <div className="absolute inset-4 rounded-xl border border-white/10 bg-[var(--color-surface)]/60 p-3">
      <div className="mb-2 flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-amber-400/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 h-16 rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
        <div className="space-y-2">
          <div className="h-4 rounded bg-white/10" />
          <div className="h-4 rounded bg-white/10" />
          <div className="h-4 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function MediaUi() {
  return (
    <div className="absolute inset-4 flex items-center gap-3">
      <div className="h-24 w-16 rounded-lg bg-gradient-to-br from-amber-400/30 to-fuchsia-500/20 ring-1 ring-white/15" />
      <div className="flex-1 space-y-2">
        <div className="h-2 w-3/4 rounded bg-white/15" />
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="flex gap-2 pt-2">
          <span className="h-6 w-10 rounded-md bg-white/10" />
          <span className="h-6 w-10 rounded-md bg-white/10" />
          <span className="h-6 w-10 rounded-md bg-white/10" />
        </div>
      </div>
    </div>
  );
}
