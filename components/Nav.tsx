"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_LINKS } from "@/lib/content";

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
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[#0b0a08]/85 border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="font-serif text-2xl tracking-wide text-[var(--ink)]">
          NGH <span className="text-gradient-gold">India</span>
        </Link>

        <div className="hidden lg:flex items-center gap-9 text-sm tracking-wide text-[var(--ink-dim)]">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--gold-bright)] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[var(--gold)] px-5 py-2 text-sm text-[var(--gold-bright)] hover:bg-[var(--gold)] hover:text-[#0b0a08] transition-colors"
          >
            Enquire
          </a>
        </div>

        <button
          className="lg:hidden text-[var(--ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0b0a08] border-t border-[var(--line)] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[var(--ink-dim)] text-lg hover:text-[var(--gold-bright)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center rounded-full border border-[var(--gold)] px-5 py-2.5 text-[var(--gold-bright)]"
          >
            Enquire
          </a>
        </div>
      )}
    </nav>
  );
}
