import Link from "next/link";
import { CERTIFICATION_FORMATS, SITE_LINKS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";

export default function Certification() {
  return (
    <section id="certification" className="py-24 md:py-32 border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Credential"
          title="NGH Consulting Hypnotist Certification (CCH)"
          intro="Issued by the National Guild of Hypnotists — 12,000+ members, 105 countries, issued since 1950. Three formats. One credential. The rigour is identical across all of them."
        />

        <Stagger className="mt-16 grid md:grid-cols-3 gap-6">
          {CERTIFICATION_FORMATS.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-2xl border border-[var(--line)] p-8 hover:border-[var(--line-strong)] transition-colors bg-[var(--bg-2)]/40 hover:bg-[var(--bg-2)]">
                <span className="text-xs tracking-widest uppercase text-[var(--gold)]">{f.tag}</span>
                <h3 className="font-serif text-2xl mt-2 mb-3 text-[var(--ink)]">{f.title}</h3>
                <p className="text-sm text-[var(--ink-dim)] leading-relaxed">{f.detail}</p>
                <ul className="mt-5 space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[var(--ink-faint)]">
                      <span className="text-[var(--gold)] mt-1">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <ScrollReveal className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-[var(--line)] px-8 py-6">
          <div>
            <p className="text-sm text-[var(--ink-dim)]">Rolling enrolment · next start on the 1st or 15th.</p>
            <Link href="/certification/syllabus" className="text-sm text-[var(--gold-bright)] hover:underline">
              View the full 100-hour syllabus →
            </Link>
          </div>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[#0b0a08] hover:bg-[var(--gold-bright)] transition-colors"
          >
            Apply Now
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
