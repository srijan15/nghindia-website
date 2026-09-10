import Image from "next/image";
import { TESTIMONIALS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 border-b border-[var(--line)] overflow-hidden" style={{ background: "var(--dark-3)" }}>
      <Image
        src="/images/cohort-moment-bg.webp"
        alt=""
        fill
        className="object-cover opacity-10 pointer-events-none"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow="Voices" title="Somebody Speaks. In Their Own Words." />

        <Stagger className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <TiltCard className="h-full rounded-2xl">
                <div className="h-full rounded-2xl border border-[var(--line)] p-7 bg-[var(--bg)]/40 flex flex-col">
                  <span className="font-serif text-4xl text-[var(--violet)] leading-none">&ldquo;</span>
                  <p className="mt-2 text-sm text-[var(--ink-dim)] leading-relaxed flex-1">{t.quote}</p>
                  <div className="mt-5 pt-5 border-t border-[var(--line)] flex items-center gap-3">
                    {"photo" in t && t.photo && (
                      <Image
                        src={t.photo}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover shrink-0"
                      />
                    )}
                    <div>
                      <p className="text-sm text-[var(--ink)] font-medium">{t.name}</p>
                      <p className="text-xs text-[var(--ink-faint)] mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
