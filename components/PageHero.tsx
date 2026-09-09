import ScrollReveal from "@/components/ScrollReveal";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 border-b border-[var(--line)] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.12),_transparent_55%)]" />
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold-bright)] mb-5">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[var(--ink)]">{title}</h1>
          {intro && <p className="mt-6 text-[var(--ink-dim)] leading-relaxed max-w-2xl mx-auto">{intro}</p>}
        </ScrollReveal>
      </div>
    </section>
  );
}
