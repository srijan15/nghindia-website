import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ScrollReveal";
import { SITE_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hypnosis for Every Psychology Curriculum — NGH India College Workshops",
};

const MODULES = [
  { n: "01", title: "The Science of the Hypnotic Mind", body: "Neuroscience of trance, and correcting common misconceptions." },
  { n: "02", title: "Experiencing Trance", body: "A live, guided group induction." },
  { n: "03", title: "Nervous System Self-Regulation", body: "A practical self-hypnosis skill every student keeps." },
  { n: "04", title: "Hypnosis in Clinical Practice", body: "The evidence base, and referral ethics." },
  { n: "05", title: "Q&A, Certification & Next Steps", body: "Workshop certificate and the pathway to full CCH." },
];

const OUTCOMES = [
  "A working self-hypnosis skill",
  "NGH India Workshop Certificate",
  "A clinical-lens understanding of hypnosis",
  "Practical resilience tools",
  "Referral awareness for clinical settings",
  "A pathway to the full CCH certification",
  "A private-practice perspective on psychology",
];

export default function CollegesPage() {
  return (
    <>
      <PageHero
        eyebrow="100 Colleges 2026"
        title="Hypnosis for Every Psychology Curriculum"
        intro="A half-day workshop that closes the gap between theory and self-regulation skill in Indian psychology curricula."
      />

      <section className="py-20 border-b border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <ScrollReveal className="text-center mb-4">
            <p className="text-sm text-[var(--ink-faint)]">
              49 meta-analyses · 261+ RCTs · NICE CG61 recommends hypnotherapy for refractory IBS
            </p>
          </ScrollReveal>
          <Stagger className="grid sm:grid-cols-2 gap-3 mt-10">
            {OUTCOMES.map((o, i) => (
              <StaggerItem key={o}>
                <div className="flex items-start gap-2 text-sm text-[var(--ink-dim)] rounded-lg border border-[var(--line)] p-4">
                  <span className="text-[var(--violet)] font-serif">{"I II III IV V VI VII".split(" ")[i]}</span>
                  {o}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl text-[var(--ink)]">Workshop Curriculum</h2>
            <p className="mt-2 text-sm text-[var(--ink-faint)]">Half-day · 4 hours · up to 100 participants · faculty included free</p>
          </ScrollReveal>
          <div className="space-y-4">
            {MODULES.map((m) => (
              <ScrollReveal key={m.n} delay={0.05}>
                <div className="flex gap-5 rounded-xl border border-[var(--line)] p-6 bg-[var(--bg)]/40">
                  <span className="font-serif text-2xl text-[var(--violet)] shrink-0">{m.n}</span>
                  <div>
                    <h3 className="text-[var(--ink)] font-medium">{m.title}</h3>
                    <p className="text-sm text-[var(--ink-faint)] mt-1">{m.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-2xl text-[var(--ink)] mb-4">For Heads of Department</h2>
          <p className="text-sm text-[var(--ink-dim)] max-w-xl mx-auto mb-8">
            No curriculum disruption. Trainer credibility verified. Faculty attend free. Framed as part of a
            national initiative, not a one-off vendor pitch.
          </p>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[var(--violet)] px-8 py-3.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--violet-bright)] transition-colors"
          >
            Enquire for Your Institution
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
