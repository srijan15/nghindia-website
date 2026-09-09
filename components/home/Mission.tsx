import { MISSION_STATS } from "@/lib/content";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ScrollReveal";
import RevealText from "@/components/RevealText";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Mission() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)]" style={{ background: "var(--dark-3)" }}>
      <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
        <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[var(--ink)]">
          <RevealText text="For those who want to achieve the extraordinary —" />
          <br className="hidden md:block" />{" "}
          <RevealText text="with the power of" delay={0.35} />{" "}
          <RevealText text="hypnosis." as="span" className="text-gradient italic" delay={0.55} />
        </h2>
        <ScrollReveal delay={0.15}>
          <p className="mt-8 max-w-2xl mx-auto text-[var(--ink-dim)] leading-relaxed">
            Hypnosis is not a shortcut. It is a precision instrument — for practitioners who want
            clinical depth, and for individuals who have decided that ordinary results are no longer
            enough.
          </p>
        </ScrollReveal>

        <Stagger className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {MISSION_STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="font-serif text-3xl md:text-4xl text-[var(--violet-bright)]">
                {s.num !== null ? <AnimatedCounter value={s.num} suffix={s.suffix} /> : s.value}
              </div>
              <div className="mt-2 text-xs tracking-widest uppercase text-[var(--ink-faint)]">{s.label}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
