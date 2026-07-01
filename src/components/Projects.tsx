import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

const kindLabel: Record<string, string> = {
  gov: "Governo",
  fintech: "Fintech",
  fiscal: "Auditoria Fiscal",
};

export default function Projects() {
  return (
    <section id="projetos" className="section-pad mx-auto max-w-6xl py-28">
      <SectionHeading
        eyebrow="Portfólio"
        title="Projetos de engenharia de dados"
        description="Estudos de caso em alto nível — a arquitetura e as decisões de design por trás de cada pipeline."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-void-line bg-void-card p-7 transition-colors hover:border-moon-dim"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="eyebrow w-fit rounded-full border border-void-line px-3 py-1 !text-gold">
                {kindLabel[project.kind]}
              </span>
              {project.kind === "gov" && (
                <Image
                  src="/images/logo-governo-goias.png"
                  alt="Governo de Goiás"
                  width={36}
                  height={22}
                  className="opacity-80"
                />
              )}
            </div>

            <h3 className="font-display text-xl italic leading-snug text-ink">{project.title}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-faint">{project.org}</p>

            <p className="mt-4 text-sm leading-relaxed text-ink-dim">{project.description}</p>

            <ul className="mt-4 space-y-2">
              {project.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moon-dim" />
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-void-line pt-5 font-mono text-[0.65rem] uppercase tracking-wide text-ink-faint">
              {project.stack.join("  ·  ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
