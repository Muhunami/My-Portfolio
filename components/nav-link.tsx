"use client";

import { usePathname } from "next/navigation";
import { pageHref } from "@/lib/paths";

function pageUrl(href: string): string {
  return pageHref(href);
}

function isActive(pathname: string, href: string): boolean {
  const p = href === "/" ? "/" : href.replace(/\/$/, "");
  if (p === "/") {
    return pathname === "/" || pathname === "";
  }
  return pathname === p || pathname === `${p}/`;
}

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  desktopClassName: string;
  mobileClassName: string;
};

export function NavLink({
  href,
  children,
  desktopClassName,
  mobileClassName,
}: NavLinkProps) {
  const pathname = usePathname() ?? "";
  const active = isActive(pathname, href);
  const url = pageUrl(href);

  return (
    <>
      <a
        href={url}
        className={`${desktopClassName} ${active ? "text-white" : ""} relative max-lg:hidden`}
      >
        {active && (
          <span className="absolute inset-0 -z-10 rounded-full bg-white/5 ring-1 ring-white/10" />
        )}
        {children}
      </a>
      <a
        href={url}
        className={`${mobileClassName} ${active ? "bg-white/10 text-white" : ""} lg:hidden`}
      >
        {children}
      </a>
    </>
  );
}

type SimpleNavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavAnchor({ href, children, className }: SimpleNavLinkProps) {
  const url = pageUrl(href);
  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
}
