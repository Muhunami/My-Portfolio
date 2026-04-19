"use client";

export function ParticlesSoft() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
      aria-hidden
    >
      {Array.from({ length: 32 }).map((_, i) => (
        <span
          key={i}
          className="particle-float absolute rounded-full bg-white/25"
          style={{
            width: `${1.5 + (i % 4) * 0.4}px`,
            height: `${1.5 + (i % 4) * 0.4}px`,
            left: `${(i * 47) % 100}%`,
            top: `${(i * 31) % 100}%`,
            animationDelay: `${(i % 12) * 0.3}s`,
            animationDuration: `${8 + (i % 6)}s`,
          }}
        />
      ))}
    </div>
  );
}
