import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hypnotherapy Training in Dubai & Sharjah — NGH India",
};

export default function DubaiSharjahPage() {
  return (
    <>
      <PageHero
        eyebrow="GCC"
        title="Hypnotherapy Certification in Dubai & Sharjah"
        intro="In-person skill days in the UAE, part of the NGH CCH in-person format, connected to the wider Emergentis Group network across the Gulf."
      />
      <section className="py-16 text-center">
        <ScrollReveal>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[var(--violet)] px-8 py-3.5 text-sm font-medium text-[var(--on-accent)] hover:bg-[var(--violet-bright)] transition-colors"
          >
            Apply for an Interview
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
