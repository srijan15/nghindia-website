import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Famous People Who Used Hypnosis — The Verified Record",
};

export default function FamousPeopleArticle() {
  return (
    <>
      <PageHero
        eyebrow="Case Notes"
        title="The Verified Record"
        intro="Fourteen documented cases of hypnosis used by people you'd recognise — in their own words, or the newsrooms of their day."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <ScrollReveal>
            <p className="text-sm text-[var(--ink-dim)] leading-relaxed">
              This case-note archive is being compiled to the same evidentiary standard as the rest of the
              site — each entry linked to a primary source, not hearsay. Full write-ups are in progress.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
