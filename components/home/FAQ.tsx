"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 border-b border-[var(--line)]" style={{ background: "#08070d" }}>
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <SectionHeading eyebrow="Questions" title="Frequently Asked" />

        <div className="mt-14 space-y-3">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <ScrollReveal key={item.q} delay={i * 0.03}>
                <motion.div
                  layout
                  className={`rounded-xl border overflow-hidden transition-colors ${
                    open ? "border-[var(--line-strong)] bg-[var(--bg-2)]/60" : "border-[var(--line)]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-sans text-sm md:text-base text-[var(--ink)]">{item.q}</span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 text-[var(--violet)]"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans px-6 pb-5 text-sm text-[var(--ink-dim)] leading-relaxed">{item.a}</p>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
