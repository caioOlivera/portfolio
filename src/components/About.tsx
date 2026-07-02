import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad mx-auto max-w-6xl py-28">
      <SectionHeading eyebrow="About" title="From credit engines to government dashboards" />

      <div className="grid gap-14 lg:grid-cols-[1fr_300px] lg:items-start">
        <Reveal delay={0.1} className="space-y-5 leading-relaxed text-ink-dim">
          <p>
            I&apos;m a data engineer who started in front-end and moved to data once I realized the
            interesting work happens backstage — shaping how information flows and reaches the
            people who make decisions with it. These days that comes with extra weight: the
            pipelines I build feed dashboards used by state government secretariats.
          </p>
          <p>
            <span className="text-ink">Google Cloud Certified Professional Data Engineer.</span>{" "}
            Outside of work, I&apos;m deep into RPGs, MOBAs, and anything Moon-related — you&apos;ve probably
            noticed that scrolling through this page.
          </p>

          <div className="!mt-10 flex flex-wrap items-center gap-6 border-t border-void-line pt-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-center gap-3">
                <Image src={cert.image} alt={cert.title} width={48} height={48} className="rounded-full" />
                <span className="max-w-[170px] text-xs leading-snug text-ink-faint">{cert.title}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 border-l border-void-line pl-6">
              <span className="max-w-[170px] text-xs leading-snug text-ink-faint">
                {education.degree} — {education.school} ({education.period})
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-3xl border border-void-line bg-void-card">
          <Image
            src="/images/caio-portrait-01.png"
            alt="Portrait of Caio Oliveira"
            fill
            className="object-cover object-top"
            sizes="260px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
