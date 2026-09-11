import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { PERSPECTIVES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Perspectives — NGH India",
};

const TAG_COLORS: Record<string, string> = {
  Education: "text-[var(--violet-bright)]",
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
          {PERSPECTIVES.map((a, i) => (
            <ScrollReveal key={a.slug} delay={i * 0.02}>
              <Link
                href={`/perspectives/${a.slug}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-[var(--line)] px-6 py-5 hover:border-[var(--violet)] transition-colors"
              >
                <div>
                  <span className={`text-xs tracking-widest uppercase ${TAG_COLORS[a.tag] ?? "text-[var(--violet)]"}`}>
                    {a.tag}
                  </span>
                  <p className="text-[var(--ink)] mt-1">{a.title}</p>
                </div>
                {a.date && <span className="text-xs text-[var(--ink-faint)] shrink-0">{a.date}</span>}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
