import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { FOUNDER_LINEAGE, SITE_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dr. Maruti Sharma — Psychologist & NGH Instructor",
};

const CREDENTIALS = [
  {
    body: "Clinical Psychologist (Assoc.), Reg. A100310",
    org: "RCI",
    verify: "Verifiable on the RCI Central Rehabilitation Register",
  },
  {
    body: "BCH, CI, CCH — member since 2025",
    org: "NGH",
    verify: "NGH member profile #15217 (ngh.net)",
  },
  {
    body: "Licensed Trainer, Master Practitioner, Practitioner — trained under Richard Bandler",
    org: "Society of NLP™",
    verify: "Owner-attested",
  },
  {
    body: "PhD, Vajrayana Buddhist Psychology, University of Jammu",
    org: "Doctorate",
    verify: "University of Jammu",
  },
  {
    body: "Yoga Siromani",
    org: "Yoga Alliance International",
    verify: "Yoga Alliance International",
  },
];

export default function DrMarutiSharma() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre · About the Author"
        title="Dr. Maruti Sharma"
        intro="Founding President, NGH India. RCI-registered Clinical Psychologist (Assoc.). NLP Trainer in the Founders' lineage. Reviewed 30 August 2026."
      />

      <section className="py-20 md:py-28 border-b border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-8">
              Registrations &amp; Credentials
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {CREDENTIALS.map((c) => (
              <ScrollReveal key={c.org} delay={0.05}>
                <div className="rounded-xl border border-[var(--line)] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <span className="text-xs tracking-widest uppercase text-[var(--violet)]">{c.org}</span>
                    <p className="text-[var(--ink)] mt-1">{c.body}</p>
                  </div>
                  <p className="text-xs text-[var(--ink-faint)]">{c.verify}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--ink)]">Two Lineages, One Practitioner</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal className="rounded-2xl border border-[var(--line)] p-8">
              <h3 className="font-serif text-xl text-[var(--violet-bright)] mb-4">From the West</h3>
              <ul className="space-y-3">
                {FOUNDER_LINEAGE.west.map((i) => (
                  <li key={i} className="text-sm text-[var(--ink-dim)] flex gap-2">
                    <span className="text-[var(--violet)]">—</span>
                    {i}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="rounded-2xl border border-[var(--line)] p-8">
              <h3 className="font-serif text-xl text-[var(--violet-bright)] mb-4">From the East</h3>
              <ul className="space-y-3">
                {FOUNDER_LINEAGE.east.map((i) => (
                  <li key={i} className="text-sm text-[var(--ink-dim)] flex gap-2">
                    <span className="text-[var(--violet)]">—</span>
                    {i}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-[var(--line)]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-6 text-[var(--ink-dim)] leading-relaxed">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-4">
              Practice &amp; Institutions
            </h2>
            <p>
              Founding president of NGH India, teaching the CCH in three formats. Clinical and executive
              practice via <a href={SITE_LINKS.founder} className="text-[var(--violet-bright)] hover:underline">marutisharma.com</a>,
              working across 100+ countries with Fortune 500 clients, humanitarian leaders, surgeons, and
              executives. Retreats span the Himalayas to Europe.
            </p>
            <p>
              Founded &ldquo;University of Life&rdquo; and has led the annual Happy Child Retreat for 24 consecutive
              years. Holds a mental-health MOU with the University of Jammu.
            </p>
            <p>
              The <strong className="text-[var(--ink)]">MTP™ Method</strong> — Meditation, Trance &amp; Psychotherapy —
              is his original clinical contribution, unifying Western hypnotherapy with Eastern contemplative
              traditions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 text-center">
        <ScrollReveal>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[var(--violet)] px-8 py-3.5 text-sm font-medium text-[var(--on-accent)] hover:bg-[var(--violet-bright)] transition-colors"
          >
            Apply for an Interview
          </a>
          <p className="mt-4 text-sm text-[var(--ink-faint)]">
            Or write to{" "}
            <a href={`mailto:${SITE_LINKS.email}`} className="text-[var(--violet-bright)] hover:underline">
              {SITE_LINKS.email}
            </a>
          </p>
          <p className="mt-8 text-sm">
            <Link href="/compare" className="text-[var(--violet-bright)] hover:underline">
              See how this training compares →
            </Link>
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
