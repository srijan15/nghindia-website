import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CaseNotes() {
  return (
    <section id="record" className="py-24 md:py-32 border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold-bright)] mb-4">Case Notes</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[var(--ink)]">
            Somebody you admire has done this. <span className="text-gradient-gold italic">Quietly.</span>
          </h2>
          <p className="mt-6 text-[var(--ink-dim)] leading-relaxed">
            Fourteen documented cases — their own words, or the newsrooms of their day. Ships only after
            the cluster hub is live.
          </p>
          <Link
            href="/articles/famous-people-who-used-hypnosis"
            className="mt-8 inline-flex rounded-full border border-[var(--line-strong)] px-7 py-3 text-sm text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors"
          >
            The Verified Record →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
