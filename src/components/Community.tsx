"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import InView from "./InView";
import { community } from "@/lib/data";

const ArcherScene = dynamic(() => import("./ArcherScene"), { ssr: false });

export default function Community() {
  return (
    <section id="community" className="section-pad mx-auto max-w-6xl py-28">
      <SectionHeading
        eyebrow="Off the clock"
        title="RPGs, MOBAs, and a Riot Games activation on my own campus"
        description="One foot in data engineering, the other in fantasy worlds — the statue below is a nod to years of RPGs and MOBAs. Drag it around."
      />

      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <InView className="relative aspect-square w-full overflow-hidden rounded-3xl border border-void-line bg-void-card">
          <ArcherScene />
          <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint">
            Elven Archer — personal collection
          </div>
        </InView>

        <Reveal delay={0.1}>
          <div className="mb-6 flex items-center gap-4">
            <Image src="/images/riot-games-logo.svg" alt="Riot Games" width={110} height={28} className="opacity-90" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">{community.date}</span>
          </div>

          <h3 className="font-display text-2xl font-semibold text-ink">{community.title}</h3>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-dim">
            {community.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {community.partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-void-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-ink-faint"
              >
                {partner}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {community.gallery.map((photo, i) => (
          <Reveal key={photo.src} delay={i * 0.06}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              data-cursor-hover
              className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-void-line"
            >
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
