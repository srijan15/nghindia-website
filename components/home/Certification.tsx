import { CERTIFICATION_FORMATS, SITE_LINKS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

export default function Certification() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Credential"
          title="NGH Consulting Hypnotist Certification (CCH)"
          intro="Issued by the National Guild of Hypnotists — 12,000+ members, 105 countries, issued since 1950. Three formats. One credential. The rigour is identical across all of them."
        />

        <Stagger className="mt-16 grid md:grid-cols-3 gap-6">
          {CERTIFICATION_FORMATS.map((f) => (
            <StaggerItem key={f.title}>
              <TiltCard className="h-full rounded-2xl">
                <div className="h-full rounded-2xl border border-[var(--line)] p-8 transition-colors group-hover:border-[var(--line-strong)] bg-[var(--bg-2)]/40 group-hover:bg-[var(--bg-2)]">
                  <span className="text-xs tracking-widest uppercase text-[var(--violet)]">{f.tag}</span>
                  <h3 className="font-serif text-2xl mt-2 mb-3 text-[var(--ink)]">{f.title}</h3>
                  <p className="text-sm text-[var(--ink-dim)] leading-relaxed">{f.detail}</p>
                  <ul className="mt-5 space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[var(--ink-faint)]">
                        <span className="text-[var(--violet)] mt-1">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <ScrollReveal className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-[var(--line)] px-8 py-6">
          <div>
            <p className="text-sm text-[var(--ink-dim)]">Rolling enrolment · next start on the 1st or 15th.</p>
            <a href="/certification/syllabus" className="text-sm text-[var(--violet-bright)] hover:underline">
              View the full 100-hour syllabus →
            </a>
          </div>
          <MagneticButton
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="!px-7 !py-3 shrink-0"
            cursorLabel="Apply"
          >
            Apply Now
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
