import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-brand-blue md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
