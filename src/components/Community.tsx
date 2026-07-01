"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import InView from "./InView";
import { community } from "@/lib/data";

const ArcherScene = dynamic(() => import("./ArcherScene"), { ssr: false });

export default function Community() {
  return (
    <section id="comunidade" className="section-pad mx-auto max-w-6xl py-28">
      <SectionHeading
        eyebrow="Fora do código"
        title="RPGs, MOBAs e uma ativação da Riot Games na minha universidade"
        description="Um pé na engenharia de dados, outro em mundos de fantasia — a estátua abaixo é uma homenagem a anos de RPG e MOBA."
      />

      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <InView className="relative aspect-square w-full overflow-hidden rounded-3xl border border-void-line bg-void-card">
          <ArcherScene />
          <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint">
            Elven Archer — peça de acervo pessoal
          </div>
        </InView>

        <div>
          <div className="mb-6 flex items-center gap-4">
            <Image src="/images/riot-games-logo.svg" alt="Riot Games" width={110} height={28} className="opacity-90" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">{community.date}</span>
          </div>

          <h3 className="font-display text-2xl italic text-ink">{community.title}</h3>

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
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {community.gallery.map((photo) => (
          <div key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-void-line">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(min-width: 640px) 25vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
