import Image from "next/image";
import { COMMUNITY_ITEMS, SITE_LINKS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

export default function Community() {
  return (
    <section id="community" className="py-24 md:py-32 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="After Certification"
          title="The NGH India Chapter & Community"
          intro="On certification you join a room — a monthly chapter meet, first Sunday of every month, with Fellows signing in from six countries: India, UAE, US, Canada, Sweden, Switzerland."
        />

        <ScrollReveal delay={0.05} className="mt-12 relative h-64 md:h-96 rounded-2xl overflow-hidden border border-[var(--line)]">
          <Image
            src="/images/cohort-group.webp"
            alt="NGH India Fellows at a chapter meet"
            fill
            className="object-cover"
          />
        </ScrollReveal>

        <Stagger className="mt-16 grid md:grid-cols-3 gap-6">
          {COMMUNITY_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <TiltCard className="h-full rounded-2xl">
                <div className="h-full rounded-2xl border border-[var(--line)] p-7 bg-[var(--bg)]/40">
                  <h3 className="font-serif text-xl text-[var(--violet-bright)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--ink-dim)] leading-relaxed">{item.body}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <ScrollReveal delay={0.1} className="mt-14 max-w-3xl mx-auto text-center text-sm text-[var(--ink-faint)] leading-relaxed">
          <p>
            Interview → optional call with a practising Fellow (with consent) → first chapter meet is the
            first Sunday after certification → 100 extra supervised hours optionally available post-cert,
            arranged with a consenting Fellow, at no extra cost, logged separately, no additional certificate.
          </p>
          <div className="mt-6 flex justify-center">
            <MagneticButton
              href={SITE_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              cursorLabel="Apply"
            >
              Apply for an Interview
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
