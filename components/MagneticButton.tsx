"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { AnchorHTMLAttributes, ReactNode, useRef } from "react";

type ConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers> {
  children: ReactNode;
  variant?: "solid" | "outline";
  cursorLabel?: string;
}

export default function MagneticButton({
  children,
  variant = "solid",
  className = "",
  cursorLabel,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "text-[var(--on-accent)]"
      : "border border-[var(--line-strong)] text-[var(--ink)] hover:border-[var(--violet)] hover:text-[var(--violet-bright)]";

  return (
    <motion.a
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor={cursorLabel}
      className={`${base} ${styles} group ${className}`}
      {...rest}
    >
      {variant === "solid" && (
        <span
          className="absolute inset-0 -z-10 transition-transform duration-300 group-hover:scale-105"
          style={{ background: "var(--grad)" }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "solid" && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute top-0 left-0 h-full w-1/3 bg-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.9s_ease]" />
        </span>
      )}
    </motion.a>
  );
}
