import Image from "next/image";
import Link from "next/link";
import { FOUNDER_LINEAGE } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import OrbitingCredentials from "@/components/OrbitingCredentials";

export default function Founder() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Instructor"
          title="In Practice Since 2000. A Lifetime Devoted to the Transformation Arts."
        />

        <div className="mt-16 grid md:grid-cols-[1fr_auto_1fr] gap-10 items-stretch">
          <TiltCard className="rounded-2xl h-full">
            <ScrollReveal className="rounded-2xl border border-[var(--line)] p-8 h-full">
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

          <ScrollReveal delay={0.05} className="mx-auto shrink-0 flex items-center justify-center h-full">
            <div className="relative h-56 w-40 md:h-64 md:w-48 overflow-hidden rounded-2xl border border-[var(--line)]">
              <Image
                src="/images/dr-maruti-sharma.webp"
                alt="Dr. Maruti Sharma"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <TiltCard className="rounded-2xl h-full">
            <ScrollReveal delay={0.1} className="rounded-2xl border border-[var(--line)] p-8 h-full">
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
