"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (!inView) return;
    const el = numberRef.current;
    if (!el) return;

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        el.textContent = Math.round(v).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      <span ref={numberRef}>0</span>
      {suffix}
    </span>
  );
}
