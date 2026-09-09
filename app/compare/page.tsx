import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPARE_QUESTIONS, SITE_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hypnotherapy Training in India, Compared",
};

const TABLE_ROWS = [
  "Issuing body",
  "Trainer's clinical licence",
  "Active practice",
  "Source lineage",
  "Method",
  "Eastern depth",
  "Post-cert support",
  "Business training",
  "Enrolment format",
  "International reach",
  "Structure",
  "Admission",
  "Investment",
];

const COLUMNS = [
  "NGH India",
  "Independent Certified Instructors",
  "Multi-Certificate Institutes",
  "Proprietary-Certificate Schools",
];

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Due Diligence"
        title="Can I Actually Make a Living From Hypnotherapy?"
        intro="Seven questions worth asking any trainer, anywhere — answered here without naming names."
      />

      <section className="py-20 border-b border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-4">
          {COMPARE_QUESTIONS.map((item, i) => (
            <ScrollReveal key={item.q} delay={i * 0.04}>
              <div className="rounded-xl border border-[var(--line)] p-6">
                <p className="text-[var(--ink)] font-medium mb-2">{item.q}</p>
                <p className="text-sm text-[var(--ink-dim)] leading-relaxed">{item.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-4xl text-[var(--ink)]">Side by Side</h2>
            <p className="mt-3 text-sm text-[var(--ink-faint)] max-w-2xl mx-auto">
              This table names no provider, institute, or person. Individual providers vary — capable
              trainers exist in every category.
            </p>
          </ScrollReveal>
          <ScrollReveal className="overflow-x-auto rounded-2xl border border-[var(--line)]">
            <table className="w-full text-sm min-w-[760px]">
              <thead>
                <tr className="border-b border-[var(--line)] bg-[var(--bg)]/60">
                  <th className="text-left px-5 py-4 text-[var(--ink-faint)] font-normal">Criteria</th>
                  {COLUMNS.map((c, i) => (
                    <th
                      key={c}
                      className={`text-left px-5 py-4 font-normal ${
                        i === 0 ? "text-[var(--gold-bright)]" : "text-[var(--ink-faint)]"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={row} className={i % 2 === 0 ? "" : "bg-[var(--bg)]/30"}>
                    <td className="px-5 py-3 text-[var(--ink-dim)]">{row}</td>
                    <td className="px-5 py-3 text-[var(--gold-bright)]">Verified</td>
                    <td className="px-5 py-3 text-[var(--ink-faint)]">Varies</td>
                    <td className="px-5 py-3 text-[var(--ink-faint)]">Varies</td>
                    <td className="px-5 py-3 text-[var(--ink-faint)]">Varies</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 border-b border-[var(--line)]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-4">Five Doors Into the Same House</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {SITE_LINKS.sisters.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--line)] px-4 py-1.5 text-xs text-[var(--ink-faint)] hover:border-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 text-center">
        <ScrollReveal>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[var(--gold)] px-8 py-3.5 text-sm font-medium text-[#0b0a08] hover:bg-[var(--gold-bright)] transition-colors"
          >
            Apply via WhatsApp
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
