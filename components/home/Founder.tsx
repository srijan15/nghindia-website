import Link from "next/link";
import { FOUNDER_LINEAGE } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import OrbitingCredentials from "@/components/OrbitingCredentials";

export default function Founder() {
  return (
    <section id="dr-sharma" className="py-24 md:py-32 border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Instructor"
          title="In Practice Since 2000. A Lifetime Devoted to the Transformation Arts."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <TiltCard className="rounded-2xl">
            <ScrollReveal className="rounded-2xl border border-[var(--line)] p-8 h-full">
              <h3 className="font-serif text-2xl text-[var(--violet-bright)] mb-4">From the West</h3>
              <ul className="space-y-3">
                {FOUNDER_LINEAGE.west.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--ink-dim)]">
                    <span className="text-[var(--violet)] mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </TiltCard>
          <TiltCard className="rounded-2xl">
            <ScrollReveal delay={0.1} className="rounded-2xl border border-[var(--line)] p-8 h-full">
              <h3 className="font-serif text-2xl text-[var(--violet-bright)] mb-4">From the East</h3>
              <ul className="space-y-3">
                {FOUNDER_LINEAGE.east.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--ink-dim)]">
                    <span className="text-[var(--violet)] mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </TiltCard>
        </div>

        <ScrollReveal delay={0.15} className="mt-12 max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-xl md:text-2xl text-[var(--ink)] leading-relaxed">
            &ldquo;Most practitioners inherit one tradition. Dr. Sharma has moved through all of them — and
            then built something original.&rdquo;
          </p>
          <p className="mt-4 text-sm text-[var(--ink-faint)]">
            This training is built on both clinical licensure and NGH instructor certification.
          </p>
          <Link href="/dr-maruti-sharma" className="mt-6 inline-block text-sm text-[var(--violet-bright)] hover:underline">
            Read Dr. Sharma&rsquo;s full profile →
          </Link>
        </ScrollReveal>

        <div className="mt-8">
          <OrbitingCredentials />
        </div>
      </div>
    </section>
  );
}
