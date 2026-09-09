import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — NGH India",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-6 text-sm text-[var(--ink-dim)] leading-relaxed">
          <ScrollReveal>
            <p>
              NGH India collects only the information you provide directly — through the application form,
              WhatsApp, or email — to evaluate your interest in the CCH certification and to communicate
              with you about it. Application submissions go directly to Dr. Sharma&rsquo;s office and are
              processed with the help of secure automated tools.
            </p>
            <p className="mt-4">
              We do not sell or share your personal information with third parties for marketing purposes.
              Information collected during the member portal use is used solely to administer your Fellowship
              and chapter membership.
            </p>
            <p className="mt-4">
              For any privacy-related request, write to{" "}
              <a href={`mailto:${SITE_LINKS.email}`} className="text-[var(--gold-bright)] hover:underline">
                {SITE_LINKS.email}
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
