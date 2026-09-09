import { INVESTMENT_INCLUDES, ENROLMENT_STEPS, SITE_LINKS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { Check } from "lucide-react";

export default function Investment() {
  return (
    <section id="investment" className="relative py-24 md:py-32 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Investment"
          title="The Credential Is the Same. The Clinical Depth Is Greater."
          intro="Dr. Sharma trained at the source — NGH, Boston — and returned as founding chapter president. This programme is built to make that depth accessible."
        />

        <ScrollReveal className="mt-16 rounded-3xl border border-[var(--line-strong)] p-8 md:p-12 bg-[var(--bg)]/60">
          <h3 className="font-serif text-2xl text-[var(--ink)] mb-6">What You Receive</h3>
          <Stagger className="grid md:grid-cols-2 gap-4">
            {INVESTMENT_INCLUDES.map((item) => (
              <StaggerItem key={item} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1.5">
                <Check size={18} className="text-[var(--violet)] mt-0.5 shrink-0" />
                <span className="text-sm text-[var(--ink-dim)] leading-relaxed">{item}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 pt-10 border-t border-[var(--line)] grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-serif text-4xl text-[var(--violet-bright)]">₹75,000 <span className="text-lg text-[var(--ink-faint)]">+ 18% GST</span></div>
              <p className="text-sm text-[var(--ink-faint)] mt-1">
                Tuition · plus US$150 first-time NGH membership (paid to the Guild directly), renewing
                annually at US$115–145 per ngh.net.
              </p>
              <p className="text-sm text-[var(--violet-bright)] mt-3">No hidden certification ladder — one price, no upsell levels.</p>
            </div>
            <div className="text-sm text-[var(--ink-dim)] leading-relaxed">
              NGH India Fellowship Awards (merit/need-based) and payment plans are discussed at interview.
              Residential retreat (McLeodganj) available — enquire separately. Admission by interview, no
              public checkout, rolling start dates on the 1st and 15th.
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {ENROLMENT_STEPS.map((step) => (
            <ScrollReveal key={step.n} delay={0.05}>
              <div className="text-center">
                <div className="font-serif text-4xl text-[var(--violet)] mb-3">{step.n}</div>
                <h4 className="text-[var(--ink)] font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-[var(--ink-faint)]">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-14 flex justify-center">
          <MagneticButton href={SITE_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" cursorLabel="Apply">
            Apply for an Interview
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
