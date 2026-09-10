"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionSection({
  id,
  eyebrow,
  title,
  defaultOpen = false,
  dark = false,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  defaultOpen?: boolean;
  dark?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) return;
    const checkHash = () => {
      if (window.location.hash === `#${id}`) {
        setOpen(true);
        requestAnimationFrame(() => {
          rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [id]);

  return (
    <div
      ref={rootRef}
      id={id}
      className="border-t border-[var(--line)] scroll-mt-20"
      style={dark ? { background: "var(--dark-3)" } : undefined}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={title}
        className="group w-full flex items-center justify-between gap-6 px-6 md:px-10 py-6 md:py-7 text-left cursor-pointer"
      >
        <span className="flex items-baseline gap-4 min-w-0">
          <span className="shrink-0 font-serif text-base md:text-lg text-[var(--ink)] group-hover:text-[var(--violet-bright)] transition-colors">
            {eyebrow}
          </span>
          {!open && (
            <span className="hidden sm:block truncate text-xs text-[var(--ink-faint)]">
              {title}
            </span>
          )}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 h-9 w-9 md:h-10 md:w-10 rounded-full border border-[var(--line-strong)] flex items-center justify-center group-hover:border-[var(--violet-bright)] transition-colors"
        >
          <ChevronDown className="h-4 w-4 text-[var(--ink-dim)] group-hover:text-[var(--violet-bright)] transition-colors" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
