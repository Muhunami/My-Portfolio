"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { mapPins } from "@/lib/site";
import geoData from "world-atlas/countries-110m.json";

export function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.1),transparent_60%)]" />

      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07070c]">
        <div className="aspect-[2/1] w-full min-h-[220px] sm:min-h-[300px]">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 118,
              center: [18, 14],
            }}
            width={960}
            height={480}
            className="h-full w-full max-w-none [&>svg]:h-full [&>svg]:w-full [&>svg]:max-w-none"
          >
            <defs>
              <linearGradient id="mapPinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5b6cff" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <filter id="mapPinGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <Geographies geography={geoData as object}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "rgba(255,255,255,0.09)" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {mapPins.map((pin) => (
              <Marker key={pin.id} coordinates={[...pin.coordinates]}>
                <g
                  onMouseEnter={() => setHovered(pin.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle r={14} fill="transparent" />
                  <circle
                    r={hovered === pin.id ? 7 : 5.5}
                    fill="url(#mapPinGrad)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth={1.2}
                    filter="url(#mapPinGlow)"
                    className="transition-[r] duration-200"
                  />
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,8,0)_35%,rgba(5,5,8,0.55)_100%)]" />

        {hovered && (
          <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-[var(--color-ink)]/95 px-4 py-2 text-xs font-medium text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            {mapPins.find((p) => p.id === hovered)?.label}
          </div>
        )}
      </div>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {mapPins.map((pin) => (
          <li
            key={pin.id}
            className="flex items-center gap-2 text-sm text-[var(--color-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            {pin.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
