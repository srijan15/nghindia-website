import Link from "next/link";
import { SITE_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-2)] pt-16 pb-8 text-[var(--ink-dim)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="font-serif text-2xl text-[var(--ink)] mb-3">
              NGH <span className="text-gradient">India</span>
            </div>
            <p className="text-sm leading-relaxed">
              The official India Chapter of NGH USA. CCH certification, clinical hypnotherapy training,
              and a growing practitioner community.
            </p>
            <a
              href={SITE_LINKS.founder}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-[var(--violet-bright)] hover:underline"
            >
              Founded by Dr. Maruti Sharma →
            </a>
          </div>

          <div>
            <h4 className="text-[var(--ink)] text-sm tracking-widest uppercase mb-4">Offerings</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#certification" className="hover:text-[var(--violet-bright)]">NGH Certification</Link></li>
              <li><Link href="/certification/syllabus" className="hover:text-[var(--violet-bright)]">Full Syllabus</Link></li>
              <li><Link href="/india/hypnotherapy-delhi-ncr" className="hover:text-[var(--violet-bright)]">Delhi NCR</Link></li>
              <li><Link href="/gcc/hypnotherapy-dubai-sharjah" className="hover:text-[var(--violet-bright)]">Dubai & Sharjah</Link></li>
              <li>
                <a href={SITE_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--violet-bright)]">
                  Clinical Sessions
                </a>
              </li>
              <li><Link href="/#community" className="hover:text-[var(--violet-bright)]">Community</Link></li>
              <li><Link href="/dr-maruti-sharma" className="hover:text-[var(--violet-bright)]">Dr. Sharma</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--ink)] text-sm tracking-widest uppercase mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={SITE_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--violet-bright)]">
                  WhatsApp +91 99101 20812
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_LINKS.email}`} className="hover:text-[var(--violet-bright)]">
                  {SITE_LINKS.email}
                </a>
              </li>
              <li><a href="#" className="hover:text-[var(--violet-bright)]">YouTube</a></li>
              <li><a href="#" className="hover:text-[var(--violet-bright)]">Instagram</a></li>
              <li><a href="#" className="hover:text-[var(--violet-bright)]">Facebook</a></li>
              <li><a href="#" className="hover:text-[var(--violet-bright)]">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--ink)] text-sm tracking-widest uppercase mb-4">Five Doors, One House</h4>
            <ul className="space-y-2 text-sm">
              {SITE_LINKS.sisters.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--violet-bright)]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--line)] text-xs leading-relaxed text-[var(--ink-faint)] space-y-3">
          <p>
            © 2026 NGH India · Dr. Maruti Sharma · RCI Reg. A100310 · India — Online &amp; In Person. The NGH CCH
            is a consulting-hypnotist credential — it does not replace an RCI registration or a medical licence.
          </p>
          <p>Not for emergencies · India: 112 · Tele-MANAS 14416</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[var(--violet-bright)]">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-[var(--violet-bright)]">Disclaimer</Link>
            <Link href="/portal" className="hover:text-[var(--violet-bright)]">Member Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
