import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CompareTeaser() {
  return (
    <section id="compare" className="py-20 border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-2xl md:text-4xl text-[var(--ink)]">Comparing Training Providers in India?</h2>
          <p className="mt-4 text-[var(--ink-dim)]">We have nothing to hide.</p>
          <Link
            href="/compare"
            className="mt-6 inline-flex rounded-full border border-[var(--gold)] px-7 py-3 text-sm text-[var(--gold-bright)] hover:bg-[var(--gold)] hover:text-[#0b0a08] transition-colors"
          >
            See the Full Comparison →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
