import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <Reveal delay={0}>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <p className="section-description">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
