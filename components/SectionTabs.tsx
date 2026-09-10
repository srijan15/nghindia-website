"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function SectionTabs({ items, defaultId }: { items: TabItem[]; defaultId?: string }) {
  const [active, setActive] = useState(defaultId ?? items[0].id);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.slice(1);
      if (items.some((it) => it.id === hash)) {
        setActive(hash);
        requestAnimationFrame(() => {
          document.getElementById("more")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [items]);

  const activeItem = items.find((it) => it.id === active) ?? items[0];

  return (
    <section id="more" className="py-20 md:py-28 border-t border-[var(--line)] scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-[var(--violet-bright)] mb-8">
          More to Know
        </p>

        <div role="tablist" className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <button
                key={it.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActive(it.id);
                  if (history.replaceState) history.replaceState(null, "", `#${it.id}`);
                }}
                className={`relative px-5 py-2.5 rounded-full text-sm tracking-wide transition-colors cursor-pointer ${
                  isActive ? "text-[var(--on-accent)]" : "text-[var(--ink-dim)] hover:text-[var(--violet-bright)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--grad)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full border border-[var(--line-strong)]" />
                )}
                <span className="relative">{it.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 -mx-6 md:-mx-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeItem.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
