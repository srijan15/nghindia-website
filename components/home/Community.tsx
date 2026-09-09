import { COMMUNITY_ITEMS, SITE_LINKS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";

export default function Community() {
  return (
    <section id="community" className="py-24 md:py-32 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="After Certification"
          title="The NGH India Chapter & Community"
          intro="On certification you join a room — a monthly chapter meet, first Sunday of every month, with Fellows signing in from six countries: India, UAE, US, Canada, Sweden, Switzerland."
        />

        <Stagger className="mt-16 grid md:grid-cols-3 gap-6">
          {COMMUNITY_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-2xl border border-[var(--line)] p-7 bg-[var(--bg)]/40">
                <h3 className="font-serif text-xl text-[var(--gold-bright)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--ink-dim)] leading-relaxed">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <ScrollReveal delay={0.1} className="mt-14 max-w-3xl mx-auto text-center text-sm text-[var(--ink-faint)] leading-relaxed">
          <p>
            Interview → optional call with a practising Fellow (with consent) → first chapter meet is the
            first Sunday after certification → 100 extra supervised hours optionally available post-cert,
            arranged with a consenting Fellow, at no extra cost, logged separately, no additional certificate.
          </p>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-[var(--gold)] px-7 py-3 text-sm text-[var(--gold-bright)] hover:bg-[var(--gold)] hover:text-[#0b0a08] transition-colors"
          >
            Apply for an Interview
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
