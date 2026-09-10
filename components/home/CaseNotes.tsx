import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import RevealText from "@/components/RevealText";

export default function CaseNotes() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--violet-bright)] mb-4">Case Notes</p>
        </ScrollReveal>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[var(--ink)]">
          <RevealText text="Somebody you admire has done this." />{" "}
          <RevealText text="Quietly." as="span" className="text-gradient italic" delay={0.3} />
        </h2>
        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-[var(--ink-dim)] leading-relaxed">
            Fourteen documented cases — their own words, or the newsrooms of their day. Ships only after
            the cluster hub is live.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/articles/famous-people-who-used-hypnosis" variant="outline" cursorLabel="Read">
              The Verified Record →
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
