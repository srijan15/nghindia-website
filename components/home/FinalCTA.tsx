import { SITE_LINKS } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";
import Parallax from "@/components/Parallax";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <Parallax speed={0.15} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,123,255,0.18),_transparent_60%)]" />
      </Parallax>
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] leading-tight">
          <RevealText text="Ready to Get" />{" "}
          <RevealText text="Certified?" as="span" className="text-gradient italic" delay={0.25} />
        </h2>
        <ScrollReveal delay={0.2}>
          <p className="mt-5 text-[var(--ink-dim)]">One conversation is all it takes.</p>
          <div className="mt-9 flex justify-center">
            <MagneticButton
              href={SITE_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="!px-10 !py-4"
              cursorLabel="Apply"
            >
              Apply for an Interview
            </MagneticButton>
          </div>
          <p className="mt-6 text-xs tracking-wide text-[var(--ink-faint)]">
            Admission by interview · Online &amp; In Person · Rolling enrolment
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
