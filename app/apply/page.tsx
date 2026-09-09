import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import ApplyForm from "@/components/ApplyForm";
import { INVESTMENT_INCLUDES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply for NGH Certification — Interview with Dr. Sharma",
};

const VALUE_PROPS = [
  "The credential — NGH CCH, Boston 1950, verifiable at ngh.net",
  "Training you can read before you pay — the full 100-hour syllabus is public",
  "Three private 1:1 sessions with Dr. Sharma, included on certification",
  "A second 100 hours of optional post-cert supervised practice",
  "Lifelong NGH India Fellowship — first-Sunday room, 13 cities, 20 Nov gathering",
  "“Build Your Premium Practice” business training",
  "Transparent, single-tier pricing — no hidden ladder",
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Fellowship Track"
        title="Apply for an Interview"
        intro="No public checkout. Admission is selective by suitability, not by wealth — Fellowship Awards and payment plans are discussed directly."
      />

      <section className="py-20 border-b border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-4">
            {VALUE_PROPS.map((v, i) => (
              <ScrollReveal key={v} delay={i * 0.03}>
                <div className="flex items-start gap-3 rounded-xl border border-[var(--line)] p-5">
                  <span className="font-serif text-[var(--violet)] shrink-0">{`①②③④⑤⑥⑦`[i] ?? "—"}</span>
                  <span className="text-sm text-[var(--ink-dim)]">{v}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-6">What You Receive</h2>
            <ul className="space-y-3">
              {INVESTMENT_INCLUDES.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--ink-dim)]">
                  <span className="text-[var(--violet)] mt-1">—</span>
                  {i}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-2 text-center">
              Application
            </h2>
            <p className="text-sm text-[var(--ink-faint)] text-center mb-10">
              Goes directly to Dr. Sharma&rsquo;s office. Processed with the help of secure automated tools.
            </p>
          </ScrollReveal>
          <ApplyForm />
        </div>
      </section>
    </>
  );
}
