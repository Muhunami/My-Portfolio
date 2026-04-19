type Props = {
  children: React.ReactNode;
  className?: string;
  /** Kept for API compatibility; no longer used (animations caused blank SPA navigations). */
  delay?: number;
};

/**
 * Plain wrapper — Framer opacity + viewport animations broke client-side navigation
 * on static export (content stayed at opacity 0 until full reload).
 */
export function ScrollReveal({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
