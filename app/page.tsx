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
import SectionTabs from "@/components/SectionTabs";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Mission />
      <Certification />
      <Community />

      <SectionTabs
        defaultId="dr-sharma"
        items={[
          { id: "dr-sharma", label: "The Instructor", content: <Founder /> },
          { id: "testimonials", label: "Voices", content: <Testimonials /> },
          { id: "record", label: "Case Notes", content: <CaseNotes /> },
          { id: "investment", label: "Investment", content: <Investment /> },
          { id: "compare", label: "Compare", content: <CompareTeaser /> },
          { id: "faq", label: "FAQ", content: <FAQ /> },
        ]}
      />

      <FinalCTA />
    </>
  );
}
