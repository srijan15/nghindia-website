"use client";

import { useState } from "react";

export function HorizontalMarquee({
  rows,
  speed = 26,
  gap = 12,
  fadeSize = 80,
  pauseOnHover = true,
  className = "",
  itemClassName = "",
}: {
  rows: string[][];
  speed?: number;
  gap?: number;
  fadeSize?: number;
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage: `linear-gradient(to right, transparent, black ${fadeSize}px, black calc(100% - ${fadeSize}px), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeSize}px, black calc(100% - ${fadeSize}px), transparent)`,
      }}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div className="flex flex-col" style={{ gap }}>
        {rows.map((row, ri) => {
          const duration = speed * (1 + ri * 0.3);
          const reverse = ri % 2 === 1;
          return (
            <div key={ri} className="overflow-hidden">
              <div
                className="flex w-max"
                style={{
                  gap,
                  animation: `hmarquee-${reverse ? "reverse" : "forward"} ${duration}s linear infinite`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              >
                {[...row, ...row].map((item, i) => (
                  <span
                    key={i}
                    className={`shrink-0 whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--bg)] px-4 py-2 text-xs md:text-sm tracking-wide text-[var(--ink-dim)] ${itemClassName}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes hmarquee-forward {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes hmarquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
