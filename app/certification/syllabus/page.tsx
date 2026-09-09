import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "NGH CCH Syllabus: Structure and Assessment",
};

const HOUR_LEDGER = [
  { component: "Live Sessions", hours: 40 },
  { component: "Supervised Practice", hours: 30 },
  { component: "Peer Work", hours: 15 },
  { component: "Case Portfolio", hours: 10 },
  { component: "NGH Exam", hours: 5 },
];

const SESSION_HIGHLIGHTS = [
  { s: "S1", topic: "What hypnosis is — and isn't" },
  { s: "S5", topic: "How to hypnotize" },
  { s: "S13", topic: "Anaesthesia management — 100% safety quiz" },
  { s: "S25", topic: "Age regression — abreaction protocol" },
  { s: "S27", topic: "Certification showcase" },
];

const GLOSSARY = ["Induction", "Deepening", "Ideomotor response", "Abreaction", "Emergence"];

export default function SyllabusPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification"
        title="The 100-Hour Syllabus"
        intro="100 hours over 3 months, online. Five components. Certification follows the exam and case portfolio — not attendance alone."
      />

      <section className="py-20 border-b border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-8">The Hour Ledger</h2>
          </ScrollReveal>
          <div className="rounded-2xl border border-[var(--line)] overflow-hidden">
            {HOUR_LEDGER.map((row, i) => (
              <ScrollReveal key={row.component} delay={i * 0.04}>
                <div
                  className={`flex items-center justify-between px-6 py-4 ${
                    i !== HOUR_LEDGER.length - 1 ? "border-b border-[var(--line)]" : ""
                  }`}
                >
                  <span className="text-[var(--ink-dim)]">{row.component}</span>
                  <span className="font-serif text-xl text-[var(--gold-bright)]">{row.hours} hrs</span>
                </div>
              </ScrollReveal>
            ))}
            <div className="flex items-center justify-between px-6 py-4 bg-[var(--dark-3)]">
              <span className="text-[var(--ink)] font-medium">Total</span>
              <span className="font-serif text-xl text-[var(--gold-bright)]">100 hrs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-8">
              Session Index — Selected Highlights
            </h2>
            <p className="text-sm text-[var(--ink-faint)] mb-8">
              27 sessions across seven parts: Foundations, Core Method, Advanced Technique, Applications,
              Ethics &amp; Standards, Clinical Craft, and Professional Practice. Full session-by-session
              index available on request at interview.
            </p>
          </ScrollReveal>
          <div className="space-y-3">
            {SESSION_HIGHLIGHTS.map((row) => (
              <ScrollReveal key={row.s} delay={0.05}>
                <div className="flex items-center gap-5 rounded-xl border border-[var(--line)] px-6 py-4 bg-[var(--bg)]/40">
                  <span className="font-serif text-lg text-[var(--gold)] w-12 shrink-0">{row.s}</span>
                  <span className="text-[var(--ink-dim)] text-sm">{row.topic}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-6">
              Which Lines Does the Training Hold
            </h2>
            <ul className="space-y-3 text-sm text-[var(--ink-dim)]">
              <li>— No therapy performed on practice partners.</li>
              <li>— Epilepsy, psychosis, and acute crisis are screened and referred, never worked directly.</li>
              <li>— Anaesthesia protocols never mask unexplained pain.</li>
              <li>— Weight work stays within a healthy-habit framing.</li>
              <li>— Age regression is limited to pleasant memory only.</li>
              <li>— Pain and trauma work are out of scope; referral-only at the advanced level.</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-6">Five Words Worth Knowing</h2>
            <div className="flex flex-wrap gap-3">
              {GLOSSARY.map((g) => (
                <span key={g} className="rounded-full border border-[var(--line)] px-4 py-1.5 text-sm text-[var(--ink-faint)]">
                  {g}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 text-center">
        <ScrollReveal>
          <p className="text-sm text-[var(--ink-faint)] max-w-xl mx-auto mb-6">
            Certification is a professional credential — it does not confer a government licence and does
            not replace RCI registration (Rehabilitation Council of India Act, 1992).
          </p>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[var(--gold)] px-8 py-3.5 text-sm font-medium text-[#0b0a08] hover:bg-[var(--gold-bright)] transition-colors"
          >
            Apply for an Interview
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
