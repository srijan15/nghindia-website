"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const observerInView = useInView(containerRef, { once: true, margin: "-10% 0px -10% 0px" });
  const [checkedInitial, setCheckedInitial] = useState(false);
  const [initiallyVisible, setInitiallyVisible] = useState(false);

  // Safari's IntersectionObserver can be slow to fire its first callback on
  // initial page load, leaving above-the-fold counters stuck at 0 until a
  // scroll event forces recalculation. Fall back to a synchronous
  // getBoundingClientRect check so already-visible counters start at once.
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      setInitiallyVisible(rect.top < window.innerHeight && rect.bottom > 0);
    }
    setCheckedInitial(true);
  }, []);

  const inView = observerInView || (checkedInitial && initiallyVisible);

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
