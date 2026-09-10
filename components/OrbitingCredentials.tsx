"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  GraduationCap,
  Trophy,
  Brain,
  Flower2,
  Building2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ORBIT_CREDENTIALS } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  award: Award,
  "badge-check": BadgeCheck,
  "graduation-cap": GraduationCap,
  trophy: Trophy,
  brain: Brain,
  "flower-2": Flower2,
  "building-2": Building2,
  sparkles: Sparkles,
};

function OrbitBadge({ icon, label }: { icon: string; label: string }) {
  const Icon = ICONS[icon] ?? Sparkles;
  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--bg)] px-3 py-2 shadow-sm shadow-[var(--line)] whitespace-nowrap">
      <Icon size={14} className="shrink-0 text-[var(--violet)]" />
      <span className="text-[11px] sm:text-xs font-medium text-[var(--ink)]">{label}</span>
    </div>
  );
}

function OrbitRing({
  items,
  radiusVar,
  duration,
  reverse = false,
  startDelay = 0,
}: {
  items: readonly { icon: string; label: string }[];
  radiusVar: string;
  duration: number;
  reverse?: boolean;
  startDelay?: number;
}) {
  const n = items.length;
  return (
    <div
      className="absolute inset-0"
      style={{
        animation: `orbit-spin ${duration}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((item, i) => {
        const angle = (360 / n) * i;
        return (
          <div
            key={item.label}
            className="absolute top-1/2 left-1/2"
            style={{ transform: `translate(-50%,-50%) rotate(${angle}deg) translateX(var(${radiusVar}))` }}
          >
            <div style={{ transform: `rotate(${-angle}deg)` }}>
              <div
                style={{
                  animation: `orbit-spin ${duration}s linear infinite`,
                  animationDirection: reverse ? "normal" : "reverse",
                }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: startDelay + i * 0.1, duration: 0.5, type: "spring", bounce: 0.45 }}
                >
                  <OrbitBadge icon={item.icon} label={item.label} />
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function OrbitingCredentials() {
  const inner = ORBIT_CREDENTIALS.slice(0, 4);
  const outer = ORBIT_CREDENTIALS.slice(4);

  return (
    <div
      className="relative mx-auto flex items-center justify-center [--r1:118px] [--r2:190px] sm:[--r1:140px] sm:[--r2:230px] md:[--r1:150px] md:[--r2:255px]"
      style={{ height: "380px", width: "100%", maxWidth: "560px" }}
    >
      <div
        className="absolute rounded-full border border-dashed border-[var(--line)]"
        style={{ width: "calc(var(--r1) * 2)", height: "calc(var(--r1) * 2)" }}
      />
      <div
        className="absolute rounded-full border border-dashed border-[var(--line)]"
        style={{ width: "calc(var(--r2) * 2)", height: "calc(var(--r2) * 2)" }}
      />

      <OrbitRing items={inner} radiusVar="--r1" duration={26} />
      <OrbitRing items={outer} radiusVar="--r2" duration={38} reverse startDelay={0.3} />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full text-center shadow-lg"
        style={{ background: "var(--grad)" }}
      >
        <span className="font-serif text-xl sm:text-2xl italic text-[var(--on-accent)] leading-none">NGH</span>
        <span className="mt-1 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[var(--on-accent)]">India</span>
      </motion.div>
    </div>
  );
}
