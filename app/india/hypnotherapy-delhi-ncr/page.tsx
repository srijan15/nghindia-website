import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hypnotherapy Training in Delhi NCR — NGH India",
};

export default function DelhiNCRPage() {
  return (
    <>
      <PageHero
        eyebrow="India"
        title="Hypnotherapy Certification in Delhi NCR"
        intro="In-person skill days at a premium venue — The Oberoi, Delhi NCR — as part of the NGH CCH in-person format."
      />
      <section className="py-16 text-center">
        <ScrollReveal>
          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[var(--violet)] px-8 py-3.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--violet-bright)] transition-colors"
          >
            Apply for an Interview
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
