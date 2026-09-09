"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STAT_TRIO, SITE_LINKS } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.14),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(201,168,76,0.08),_transparent_50%)]"
      />
      <div className="absolute inset-0 -z-10 grain" />
      <div
        className="absolute inset-0 -z-30 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div style={{ y: contentY, opacity }} className="mx-auto max-w-6xl px-6 md:px-10 pt-32 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[var(--gold-bright)] mb-8"
        >
          <span className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent to-[var(--line-strong)]" />
          <span className="shrink-0 text-center">India&rsquo;s Official NGH Chapter · Est. 2025</span>
          <span className="hidden sm:block h-px flex-1 bg-gradient-to-l from-transparent to-[var(--line-strong)]" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[var(--ink)]"
        >
          The Credential of the <span className="text-gradient-gold italic">World&rsquo;s Largest</span>{" "}
          Hypnosis Organisation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-[var(--ink-dim)] leading-relaxed"
        >
          Taught by an NGH Certified Instructor, RCI-Registered Clinical Psychologist (Assoc.), and NLP
          Trainer with Dr. Richard Bandler.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {STAT_TRIO.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-2xl md:text-3xl text-[var(--gold-bright)]">{s.value}</div>
              <div className="text-xs tracking-widest uppercase text-[var(--ink-faint)] mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl mx-auto text-sm text-[var(--ink-faint)] leading-relaxed"
        >
          Founded in Boston in 1950. More than 12,000 NGH members in 105 countries (as published at
          ngh.net/membership, 2026). Commended twice in the U.S. Congressional Record.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--gold)] px-8 py-3.5 text-sm font-medium tracking-wide text-[#0b0a08] hover:bg-[var(--gold-bright)] transition-colors"
          >
            Get Certified Now
          </a>
          <a
            href="#certification"
            className="rounded-full border border-[var(--line-strong)] px-8 py-3.5 text-sm font-medium tracking-wide text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors"
          >
            Explore the Programme
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-xs tracking-wide text-[var(--ink-faint)] italic"
        >
          Dr. Maruti Sharma with Don Mottin, Vice President · NGH, Boston USA
        </motion.p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--ink-faint)] text-xs tracking-widest uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
