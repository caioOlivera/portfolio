import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-balance leading-relaxed text-ink-dim">{description}</p>}
    </Reveal>
  );
}
