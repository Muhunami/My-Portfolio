"use client";

import { LoadingScreen } from "./loading-screen";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      {children}
    </>
  );
}
