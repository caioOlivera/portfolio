import SectionHeading from "./SectionHeading";
import { skillGroups, courses } from "@/lib/data";

export default function Skills() {
  return (
    <section id="stack" className="section-pad mx-auto max-w-6xl py-28">
      <SectionHeading eyebrow="Stack" title="Ferramentas e competências" />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gold">{group.label}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink-dim">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-void-line pt-10">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Cursos & certificações complementares
        </h3>
        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {courses.map((course) => (
            <li key={course} className="text-sm leading-relaxed text-ink-dim">
              — {course}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
