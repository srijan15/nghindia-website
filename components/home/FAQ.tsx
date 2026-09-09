"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 md:py-32 border-b border-[var(--line)]"
      style={{ background: "#0a0a0f", fontFamily: "var(--font-fraunces), Georgia, serif" }}
    >
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <SectionHeading eyebrow="Questions" title="Frequently Asked" />

        <div className="mt-14 space-y-3">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <ScrollReveal key={item.q} delay={i * 0.03}>
                <div className="rounded-xl border border-[var(--line)] overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-sans text-sm md:text-base text-[var(--ink)]">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[var(--gold)] transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans px-6 pb-5 text-sm text-[var(--ink-dim)] leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
