import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import Mission from "@/components/home/Mission";
import Certification from "@/components/home/Certification";
import Community from "@/components/home/Community";
import Founder from "@/components/home/Founder";
import Testimonials from "@/components/home/Testimonials";
import CaseNotes from "@/components/home/CaseNotes";
import Investment from "@/components/home/Investment";
import CompareTeaser from "@/components/home/CompareTeaser";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import AccordionSection from "@/components/AccordionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      <AccordionSection eyebrow="The Mission" title="Why Hypnosis" dark>
        <Mission />
      </AccordionSection>

      <AccordionSection id="certification" eyebrow="The Credential" title="NGH Consulting Hypnotist Certification (CCH)" defaultOpen>
        <Certification />
      </AccordionSection>

      <AccordionSection id="community" eyebrow="After Certification" title="The NGH India Chapter & Community" dark>
        <Community />
      </AccordionSection>

      <AccordionSection id="dr-sharma" eyebrow="The Instructor" title="Dr. Maruti Sharma">
        <Founder />
      </AccordionSection>

      <AccordionSection id="testimonials" eyebrow="Voices" title="What Graduates Say" dark>
        <Testimonials />
      </AccordionSection>

      <AccordionSection id="record" eyebrow="Case Notes" title="Documented Cases">
        <CaseNotes />
      </AccordionSection>

      <AccordionSection id="investment" eyebrow="The Investment" title="Certification Investment" dark>
        <Investment />
      </AccordionSection>

      <AccordionSection id="compare" eyebrow="Compare" title="Comparing Providers?">
        <CompareTeaser />
      </AccordionSection>

      <AccordionSection id="faq" eyebrow="Questions" title="Frequently Asked">
        <FAQ />
      </AccordionSection>

      <FinalCTA />
    </>
  );
}
