import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { certifications, education } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="section-pad mx-auto max-w-6xl py-28">
      <SectionHeading eyebrow="Sobre" title="Da esteira de crédito à camada analítica do governo" />

      <div className="grid gap-14 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5 leading-relaxed text-ink-dim">
          <p>
            Sou engenheiro de dados formado pela <strong className="text-ink">Universidade Federal de Goiás</strong>,
            com a carreira construída entre pipelines de crédito, documentos fiscais em escala e, mais recentemente,
            dados para inteligência artificial generativa dentro do setor público.
          </p>
          <p>
            Comecei no front-end, mas migrei para dados ao perceber que o trabalho mais interessante acontecia nos
            bastidores: desenhar como a informação flui, se transforma e chega confiável a quem decide. Hoje esse
            trabalho ganha uma camada extra de responsabilidade — os pipelines que construo alimentam painéis usados
            por secretarias de estado.
          </p>
          <p>
            Sou <strong className="text-ink">Google Cloud Certified Professional Data Engineer</strong>, e mantenho
            uma rotina de estudo constante em arquitetura de dados moderna — Data Vault, Lakehouse e Delta Live
            Tables. Fora do trabalho, sou apaixonado por RPGs, MOBAs e por tudo que tem a ver com a Lua — algo que
            você provavelmente já notou rolando esta página.
          </p>

          <div className="!mt-10 flex flex-wrap items-center gap-6 border-t border-void-line pt-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-center gap-3">
                <Image src={cert.image} alt={cert.title} width={56} height={56} className="rounded-full" />
                <span className="max-w-[180px] text-xs leading-snug text-ink-dim">{cert.title}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 border-l border-void-line pl-6">
              <span className="font-mono text-2xl text-gold">🎓</span>
              <span className="max-w-[180px] text-xs leading-snug text-ink-dim">
                {education.degree} — {education.school} ({education.period})
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-3xl border border-void-line bg-void-card">
          <Image
            src="/images/caio-portrait-01.png"
            alt="Retrato de Caio Oliveira"
            fill
            className="object-cover object-top"
            sizes="280px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
