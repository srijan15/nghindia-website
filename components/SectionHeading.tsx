import ScrollReveal from "@/components/ScrollReveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <ScrollReveal className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold-bright)] mb-4">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[var(--ink)]">{title}</h2>
      {intro && <p className="mt-5 text-[var(--ink-dim)] leading-relaxed">{intro}</p>}
    </ScrollReveal>
  );
}
