import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="section-pad mx-auto max-w-6xl py-28">
      <Reveal className="rounded-3xl border border-void-line bg-void-card px-8 py-16 text-center sm:px-16">
        <p className="eyebrow mb-6">Let&apos;s talk</p>
        <h2 className="mx-auto max-w-xl font-display text-4xl font-semibold leading-snug tracking-tight text-ink sm:text-5xl">
          Got a gnarly data problem? That&apos;s exactly my kind of fun.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink-dim">
          Open to conversations about data engineering, cloud architecture, and projects that pair
          data with generative AI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full bg-moon px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-void"
            >
              <FiMail /> {profile.email}
            </a>
          </Magnetic>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" data-cursor-hover className="text-ink-dim transition-colors hover:text-moon">
            <FiLinkedin size={22} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" data-cursor-hover className="text-ink-dim transition-colors hover:text-moon">
            <FiGithub size={22} />
          </a>
          <a href={profile.resumeUrl} download aria-label="Download resume" data-cursor-hover className="text-ink-dim transition-colors hover:text-moon">
            <FiDownload size={22} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
