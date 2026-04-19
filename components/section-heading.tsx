type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-[family-name:var(--font-satoshi)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-clash)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
