import { pageHref } from "@/lib/paths";

export function PageLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const url =
    href === "#" || href.startsWith("http") || href.startsWith("mailto:")
      ? href
      : pageHref(href);
  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
}
