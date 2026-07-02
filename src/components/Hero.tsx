"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { useScrollProgressRef } from "@/lib/useScrollProgressRef";
import { profile } from "@/lib/data";
import Magnetic from "./Magnetic";

const MoonScene = dynamic(() => import("./MoonScene"), { ssr: false });

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const scrollProgress = useScrollProgressRef();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-auto absolute right-[-14%] top-1/2 h-[480px] w-[480px] -translate-y-1/2 sm:h-[640px] sm:w-[640px] lg:right-[-2%] lg:h-[760px] lg:w-[760px]">
        <MoonScene scrollProgress={scrollProgress} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-pad relative z-10 mx-auto w-full max-w-6xl"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          {profile.role} — {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-3xl font-display text-6xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-8xl"
        >
          Caio
          <br />
          <span className="text-moon">Oliveira</span>
        </motion.h1>

        <motion.p variants={item} className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-ink-dim">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={profile.resumeUrl}
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full bg-moon px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-void"
            >
              <FiDownload /> Resume
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="#projects"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-void-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-dim transition-colors hover:border-moon hover:text-moon"
            >
              See the work
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        data-cursor-hover
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
