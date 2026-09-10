import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";

export default function CompareTeaser() {
  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-2xl md:text-4xl text-[var(--ink)]">Comparing Training Providers in India?</h2>
          <p className="mt-4 text-[var(--ink-dim)]">We have nothing to hide.</p>
          <div className="mt-6 flex justify-center">
            <MagneticButton href="/compare" variant="outline" cursorLabel="Compare">
              See the Full Comparison →
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
