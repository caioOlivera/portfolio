import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="section-pad mx-auto max-w-6xl py-28">
      <SectionHeading
        eyebrow="Trajetória"
        title="Experiência"
        description="Uma linha do tempo real de granularidade de dados: de eventos bancários a métricas agregadas de governo."
      />

      <ol className="relative space-y-16 border-l border-void-line pl-8 sm:pl-12">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-moon shadow-[0_0_12px_2px_rgba(201,214,255,0.6)] sm:-left-[calc(3rem+5px)]" />

            <p className="eyebrow mb-2">{item.period}</p>
            <h3 className="font-display text-2xl italic text-ink">{item.role}</h3>
            <p className="mt-1 font-mono text-sm text-gold">
              {item.company}
              {item.companyNote && <span className="text-ink-faint"> · {item.companyNote}</span>}
            </p>

            <ul className="mt-5 space-y-3">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-void-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-ink-faint"
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
