"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { STAT_TRIO, SITE_LINKS } from "@/lib/content";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const sx = useSpring(mvX, { stiffness: 40, damping: 20 });
  const sy = useSpring(mvY, { stiffness: 40, damping: 20 });
  const blob1X = useTransform(sx, (v) => v * 40);
  const blob1Y = useTransform(sy, (v) => v * 30);
  const blob2X = useTransform(sx, (v) => v * -30);
  const blob2Y = useTransform(sy, (v) => v * -24);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <motion.div
          style={{ x: blob1X, y: blob1Y }}
          className="absolute -top-20 left-1/4 h-[32rem] w-[32rem] rounded-full opacity-40 blur-[110px]"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{ background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)" }}
          />
        </motion.div>
        <motion.div
          style={{ x: blob2X, y: blob2Y }}
          className="absolute bottom-0 right-1/4 h-[28rem] w-[28rem] rounded-full opacity-30 blur-[110px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{ background: "radial-gradient(circle, var(--coral) 0%, transparent 70%)" }}
          />
        </motion.div>
      </motion.div>
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
          className="flex items-center gap-4 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[var(--violet-bright)] mb-8"
        >
          <span className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent to-[var(--line-strong)]" />
          <span className="shrink-0 text-center">India&rsquo;s Official NGH Chapter · Est. 2025</span>
          <span className="hidden sm:block h-px flex-1 bg-gradient-to-l from-transparent to-[var(--line-strong)]" />
        </motion.p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[var(--ink)]">
          <RevealText text="The Credential of the" delay={0.1} />{" "}
          <RevealText text="World's Largest" as="span" className="text-gradient italic" delay={0.35} />{" "}
          <RevealText text="Hypnosis Organisation." delay={0.55} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-[var(--ink-dim)] leading-relaxed"
        >
          Taught by an NGH Certified Instructor, RCI-Registered Clinical Psychologist (Assoc.), and NLP
          Trainer with Dr. Richard Bandler.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {STAT_TRIO.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-2xl md:text-3xl text-[var(--violet-bright)]">
                {s.num !== null ? <AnimatedCounter value={s.num} suffix={s.suffix} /> : s.value}
              </div>
              <div className="text-xs tracking-widest uppercase text-[var(--ink-faint)] mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-8 max-w-2xl mx-auto text-sm text-[var(--ink-faint)] leading-relaxed"
        >
          Founded in Boston in 1950. More than 12,000 NGH members in 105 countries (as published at
          ngh.net/membership, 2026). Commended twice in the U.S. Congressional Record.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton href={SITE_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" cursorLabel="Apply">
            Get Certified Now
          </MagneticButton>
          <MagneticButton href="#certification" variant="outline" cursorLabel="View">
            Explore the Programme
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
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
