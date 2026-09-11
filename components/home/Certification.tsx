"use client";

import { motion } from "framer-motion";
import { Laptop, MapPin, Mountain } from "lucide-react";
import { CERTIFICATION_FORMATS, SITE_LINKS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

const ICONS: Record<string, typeof Laptop> = {
  Online: Laptop,
  "In Person": MapPin,
  "Residential Retreat": Mountain,
};

export default function Certification() {
  return (
    <section id="certification" className="py-24 md:py-32 border-b border-[var(--line)] scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Credential"
          title="NGH Consulting Hypnotist Certification (CCH)"
          intro="Issued by the National Guild of Hypnotists — 12,000+ members, 105 countries, issued since 1950. Three formats. One credential. The rigour is identical across all of them."
        />

        {/* Connecting track: draws in on scroll, ties the three formats together as one journey */}
        <div className="relative mt-16 hidden md:block h-px mx-[16.6%]">
          <div className="absolute inset-0 bg-[var(--line)]" />
          <motion.div
            className="absolute inset-y-0 left-0 origin-left"
            style={{ background: "var(--grad)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </div>

        <Stagger className="mt-8 md:-mt-3 grid md:grid-cols-3 gap-6">
          {CERTIFICATION_FORMATS.map((f, i) => {
            const Icon = ICONS[f.title] ?? Laptop;
            return (
              <StaggerItem key={f.title}>
                <TiltCard className="h-full rounded-2xl">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="relative h-full overflow-hidden rounded-2xl border border-[var(--line)] p-8 bg-[var(--bg-2)]/40 group-hover:border-[var(--line-strong)] group-hover:bg-[var(--bg-2)] transition-colors"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-6 -right-2 font-serif text-8xl text-[var(--violet)]/10 select-none"
                    >
                      0{i + 1}
                    </span>

                    <motion.div
                      className="relative flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: "var(--grad)" }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>

                    <span className="relative mt-5 block text-xs tracking-widest uppercase text-[var(--violet)]">
                      {f.tag}
                    </span>
                    <h3 className="relative font-serif text-2xl mt-2 mb-3 text-[var(--ink)]">{f.title}</h3>
                    <p className="relative text-sm text-[var(--ink-dim)] leading-relaxed">{f.detail}</p>
                    <ul className="relative mt-5 space-y-2">
                      {f.bullets.map((b, bi) => (
                        <motion.li
                          key={b}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + bi * 0.08 }}
                          className="flex items-start gap-2 text-sm text-[var(--ink-faint)]"
                        >
                          <span className="text-[var(--violet)] mt-1">—</span>
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <ScrollReveal className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-[var(--line)] px-8 py-6">
          <div>
            <p className="text-sm text-[var(--ink-dim)]">Rolling enrolment · next start on the 1st or 15th.</p>
            <a href="/certification/syllabus" className="text-sm text-[var(--violet-bright)] hover:underline">
              View the full 100-hour syllabus →
            </a>
          </div>
          <MagneticButton
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="!px-7 !py-3 shrink-0"
            cursorLabel="Apply"
          >
            Apply Now
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
