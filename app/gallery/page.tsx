import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Gallery — NGH India",
};

const CAPTIONS = [
  "In-person skill days · The Oberoi, Delhi NCR · 2026",
  "Monthly Chapter Meet · Online",
  "Dr. Maruti Sharma with Don Mottin, VP · NGH, Boston USA",
  "McLeodganj Residential Retreat",
  "Certification showcase — Session 27",
  "Fellows practising across 13 cities",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Fourteen People. One Credential." />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPTIONS.map((c, i) => (
            <ScrollReveal key={c} delay={i * 0.04}>
              <TiltCard className="rounded-2xl">
                <div className="aspect-[4/3] rounded-2xl border border-[var(--line)] bg-[var(--dark-3)] flex items-end p-5 bg-[radial-gradient(circle_at_30%_20%,rgba(109,40,217,0.16),transparent_60%)]">
                  <p className="text-xs text-[var(--ink-faint)] italic">{c}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
