import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contato" className="section-pad mx-auto max-w-6xl py-28">
      <div className="rounded-3xl border border-void-line bg-void-card px-8 py-16 text-center sm:px-16">
        <p className="eyebrow mb-6">Vamos conversar</p>
        <h2 className="mx-auto max-w-xl font-display text-3xl italic leading-snug text-ink sm:text-4xl">
          Tem um problema de dados complexo? Eu gosto exatamente desses.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink-dim">
          Aberto a conversas sobre engenharia de dados, arquitetura na nuvem e projetos que unem dados a IA
          generativa.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-moon px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-void transition-transform hover:scale-[1.03]"
          >
            <FiMail /> {profile.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-ink-dim transition-colors hover:text-moon"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-ink-dim transition-colors hover:text-moon"
          >
            <FiGithub size={22} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            aria-label="Baixar currículo"
            className="text-ink-dim transition-colors hover:text-moon"
          >
            <FiDownload size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
