import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Perspectives — NGH India",
};

const ARTICLES = [
  { title: "Clinical Hypnotherapy in India and the GCC: What the Evidence Actually Supports", tag: "Education", date: "22 Aug 2026" },
  { title: "The MTP™ Method: What It Is and How It Works", tag: "Clinical Method", date: "16 Apr 2026" },
  { title: "The MTP™ Method — Methodology", tag: "Training", date: "26 Mar 2026" },
  { title: "The MTP™ Method: A Clinical Framework for Meditation, Trance, and Psychotherapy", tag: "Philosophy", date: "10 Feb 2026" },
  { title: "What Is Clinical Hypnotherapy? Evidence, Process, and What to Expect", tag: "Education", date: "15 Jan 2026" },
  { title: "The Eastern Lineage of Hypnosis — Sammohan Vidya, the Atharva Veda, and the Tantric Tradition", tag: "Philosophy", date: "16 Mar 2026" },
  { title: "NGH Certification India — The Official Chapter", tag: "Training" },
  { title: "RCI-Registered Clinical Psychologist (Assoc.) and Hypnotherapy — The Credential Distinction", tag: "Education" },
  { title: "Is the NGH Certification Recognised in India?", tag: "Education" },
  { title: "Hypnotherapy for Anxiety: What 261 Clinical Trials Actually Show", tag: "Education" },
  { title: "Hypnotherapy for IBS: The NICE-Recommended Treatment Indian Doctors Don't Know About", tag: "Education" },
  { title: "CCH vs Diploma: Comparing Hypnotherapy Qualifications in India", tag: "Training" },
  { title: "Can a Doctor or Psychologist Add Hypnotherapy to Their Practice in India?", tag: "Training" },
  { title: "What Is the MTP™ Method — and Why It's Part of NGH India Training", tag: "Philosophy" },
];

const TAG_COLORS: Record<string, string> = {
  Education: "text-[var(--gold-bright)]",
  "Clinical Method": "text-emerald-300",
  Training: "text-sky-300",
  Philosophy: "text-violet-300",
};

export default function PerspectivesPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Perspectives"
        intro="Fourteen articles on the evidence, method, and lineage behind clinical hypnotherapy."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-3">
          {ARTICLES.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.02}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-[var(--line)] px-6 py-5 hover:border-[var(--line-strong)] transition-colors">
                <div>
                  <span className={`text-xs tracking-widest uppercase ${TAG_COLORS[a.tag] ?? "text-[var(--gold)]"}`}>
                    {a.tag}
                  </span>
                  <p className="text-[var(--ink)] mt-1">{a.title}</p>
                </div>
                {a.date && <span className="text-xs text-[var(--ink-faint)] shrink-0">{a.date}</span>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
