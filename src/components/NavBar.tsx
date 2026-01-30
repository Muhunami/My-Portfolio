"use client";

import { useMemo } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

type NavSection = {
  id: string;
  label: string;
};

type NavBarProps = {
  name: string;
  sections: NavSection[];
};

export function NavBar({ name, sections }: NavBarProps) {
  const sectionIds = useMemo(
    () => sections.map((section) => section.id),
    [sections]
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50">
      <nav className="nav-glass mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <span className="nav-brand">{name}</span>
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] md:text-sm">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link ${isActive ? "is-active" : ""}`}
              >
                {section.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
