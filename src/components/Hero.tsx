"use client";

import dynamic from "next/dynamic";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { useScrollProgressRef } from "@/lib/useScrollProgressRef";
import { profile } from "@/lib/data";

const MoonScene = dynamic(() => import("./MoonScene"), { ssr: false });

export default function Hero() {
  const scrollProgress = useScrollProgressRef();

  return (
    <section id="topo" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 sm:h-[720px] sm:w-[720px] lg:right-[2%]">
        <MoonScene scrollProgress={scrollProgress} />
      </div>

      <div className="section-pad relative z-10 mx-auto w-full max-w-6xl">
        <p className="eyebrow mb-6 animate-fade-up opacity-0 [animation-delay:0.1s]">
          {profile.role} — {profile.location}
        </p>

        <h1 className="max-w-3xl animate-fade-up font-display text-5xl italic leading-[1.05] tracking-tight text-ink opacity-0 [animation-delay:0.25s] sm:text-6xl lg:text-7xl">
          Caio Oliveira
          <br />
          <span className="text-moon">Gonçalves</span>
        </h1>

        <p className="mt-8 max-w-lg animate-fade-up text-balance text-lg leading-relaxed text-ink-dim opacity-0 [animation-delay:0.4s]">
          {profile.tagline}
        </p>

        <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-4 opacity-0 [animation-delay:0.55s]">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-moon px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-void transition-transform hover:scale-[1.03]"
          >
            <FiDownload /> Currículo
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full border border-void-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-dim transition-colors hover:border-moon hover:text-moon"
          >
            Ver projetos
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção sobre"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-float items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint sm:flex"
      >
        <FiArrowDown />
      </a>
    </section>
  );
}
