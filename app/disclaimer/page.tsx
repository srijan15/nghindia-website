import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Disclaimer — NGH India",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Disclaimer" />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-6 text-sm text-[var(--ink-dim)] leading-relaxed">
          <ScrollReveal>
            <p>
              The NGH Certified Consulting Hypnotist (CCH) is a consulting-hypnotist credential issued by
              the National Guild of Hypnotists. It does not replace a registration with the Rehabilitation
              Council of India, nor does it constitute a medical licence. Fellows practise within the scope
              of a consulting hypnotist and refer clinical, medical, or psychiatric concerns to appropriately
              licensed professionals.
            </p>
            <p className="mt-4">
              This site is not a substitute for professional medical or psychological advice, diagnosis, or
              treatment. If you are experiencing a mental health emergency, this website is not for
              emergencies — in India, call 112, or Tele-MANAS at 14416.
            </p>
            <p className="mt-4">
              Content inconsistencies across historical pages (e.g. founding dates, lineage descriptions) are
              being actively reconciled as part of an ongoing content revamp.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
