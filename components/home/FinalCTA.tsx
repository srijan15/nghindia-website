import { SITE_LINKS } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";
import Parallax from "@/components/Parallax";

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <Parallax speed={0.15} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.16),_transparent_60%)]" />
      </Parallax>
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] leading-tight">
            Ready to Get <span className="text-gradient-gold italic">Certified?</span>
          </h2>
          <p className="mt-5 text-[var(--ink-dim)]">One conversation is all it takes.</p>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-full bg-[var(--gold)] px-10 py-4 text-sm font-medium tracking-wide text-[#0b0a08] hover:bg-[var(--gold-bright)] transition-colors"
          >
            Apply for an Interview
          </a>
          <p className="mt-6 text-xs tracking-wide text-[var(--ink-faint)]">
            Admission by interview · Online &amp; In Person · Rolling enrolment
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
