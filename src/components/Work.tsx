"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience, toolbox } from "@/lib/data";
import { iconMap } from "@/lib/icons";

export default function Work() {
  const [active, setActive] = useState(0);
  const current = experience[active];

  return (
    <section id="work" className="section-pad mx-auto max-w-6xl py-28">
      <SectionHeading eyebrow="Experience" title="Where the pipelines lived" />

      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <Reveal className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:border-l lg:border-void-line lg:pb-0">
          {experience.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActive(i)}
              data-cursor-hover
              className={`shrink-0 whitespace-nowrap px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.15em] transition-colors lg:-ml-px lg:border-l lg:whitespace-normal ${
                active === i
                  ? "text-moon lg:border-moon"
                  : "text-ink-faint hover:text-ink-dim lg:border-transparent"
              }`}
            >
              <span className="block">{exp.period}</span>
              <span className="mt-1 block text-sm normal-case tracking-normal text-ink">{exp.company}</span>
            </button>
          ))}
        </Reveal>

        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.company}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-2xl font-semibold text-ink">{current.role}</h3>
              {current.companyNote && <p className="mt-1 font-mono text-sm text-gold">{current.companyNote}</p>}

              <p className="mt-5 max-w-xl leading-relaxed text-ink-dim">{current.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {current.stack.map((key) => {
                  const Icon = iconMap[key as keyof typeof iconMap];
                  return (
                    <span
                      key={key}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-void-line bg-void-card text-ink-dim transition-colors hover:border-moon-dim hover:text-moon"
                      title={key}
                    >
                      {Icon && <Icon size={18} />}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Reveal delay={0.15} className="mt-24 border-t border-void-line pt-10">
        <p className="eyebrow mb-6">Toolbox</p>
        <div className="flex flex-wrap gap-3">
          {toolbox.map(({ icon, label }) => {
            const Icon = iconMap[icon];
            return (
              <span
                key={label}
                data-cursor-hover
                className="group flex items-center gap-2 rounded-full border border-void-line px-4 py-2 text-ink-faint transition-colors hover:border-moon-dim hover:text-moon"
              >
                {Icon && <Icon size={15} />}
                <span className="font-mono text-[0.7rem] uppercase tracking-wide">{label}</span>
              </span>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
