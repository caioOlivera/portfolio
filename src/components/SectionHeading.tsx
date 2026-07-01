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
    <div className="mb-14 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl italic text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-balance leading-relaxed text-ink-dim">{description}</p>}
    </div>
  );
}
