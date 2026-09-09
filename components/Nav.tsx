"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_LINKS } from "@/lib/content";
import MagneticButton from "@/components/MagneticButton";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[var(--bg)]/85 border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="font-serif text-2xl tracking-wide text-[var(--ink)]" data-cursor="Home">
          NGH <span className="text-gradient">India</span>
        </Link>

        <div className="hidden lg:flex items-center gap-9 text-sm tracking-wide text-[var(--ink-dim)]">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="group relative py-1">
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[var(--violet-bright)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <MagneticButton
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="!px-5 !py-2 text-sm"
            cursorLabel="Chat"
          >
            Enquire
          </MagneticButton>
        </div>

        <button
          className="lg:hidden text-[var(--ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: open ? 90 : 0 }} className="inline-block">
            {open ? <X size={26} /> : <Menu size={26} />}
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[var(--bg)] border-t border-[var(--line)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[var(--ink-dim)] text-lg hover:text-[var(--violet-bright)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={SITE_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex justify-center rounded-full border border-[var(--violet)] px-5 py-2.5 text-[var(--violet-bright)]"
              >
                Enquire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
