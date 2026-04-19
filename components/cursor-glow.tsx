"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[40] hidden h-[min(520px,70vw)] w-[min(520px,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen md:block"
      style={{ left: pos.x, top: pos.y }}
    >
      <div
        className="h-full w-full rounded-full opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle, rgba(91,108,255,0.55) 0%, rgba(139,92,246,0.2) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
