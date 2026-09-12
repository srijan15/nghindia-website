import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { SITE_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Does Hypnotherapy Actually Work? — NGH India",
  description:
    "An evidence-based look at what hypnotherapy can and can't do — from surgical pain to smoking cessation — with the research, the history, and how to choose a practitioner in India.",
};

const EVIDENCE_TABLE = [
  {
    level: "Strong evidence",
    items: "Procedural and surgical pain, irritable bowel syndrome, chronic and experimental pain management",
  },
  {
    level: "Moderate evidence",
    items: "Anxiety and stress reduction, pain management during childbirth",
  },
  {
    level: "Mixed evidence",
    items: "Smoking cessation — reviews have not consistently shown it outperforms other quit methods",
  },
  {
    level: "Adjunctive",
    items: "Weight management and habit change, as a support to an existing behavioural programme",
  },
  {
    level: "Practice-led",
    items: "Performance and confidence work — widely used, though the trial base is thinner",
  },
];

const MYTHS = [
  "A hypnotherapist cannot control your mind. You stay aware throughout and can reject any suggestion you don't want.",
  "There is no documented case of someone becoming permanently \"stuck\" in hypnosis.",
  "Hypnosis is a distinct state of focused attention — not sleep, and not unconsciousness.",
  "How readily you respond to hypnosis correlates with your capacity for absorption and imagination, not your intelligence.",
  "Clinical hypnotherapy and stage hypnosis are different disciplines with different goals, screening, and consent.",
  "Hypnosis can make a memory feel more vivid or confident without making it more accurate — which is why reputable clinicians don't use it to \"recover\" memories.",
  "Most goals take a handful of structured sessions. Single-session \"cures\" are the exception, not the rule.",
];

const FAQS = [
  {
    q: "Is hypnosis scientifically real?",
    a: "Yes. It's a recognised state of focused attention with measurable changes in brain activity, studied since the mid-20th century and endorsed by major medical bodies.",
  },
  {
    q: "Can everyone be hypnotised?",
    a: "Most people can enter a working level of hypnotic focus. Susceptibility varies — some people respond more readily than others — but very few are entirely unresponsive.",
  },
  {
    q: "Will I lose control?",
    a: "No. You remain aware of your surroundings and can end the session, speak, or decline a suggestion at any point.",
  },
  {
    q: "What does it actually feel like?",
    a: "Most people describe it as similar to the relaxed, absorbed state you get just before falling asleep, or the focus of being completely engrossed in a film or book.",
  },
  {
    q: "Is it regulated in India?",
    a: "Hypnotherapy itself isn't a licensed profession in India, which is exactly why the practitioner's underlying clinical credentials matter — see the checklist below.",
  },
];

export default function DoesHypnotherapyWorkArticle() {
  return (
    <>
      <PageHero
        eyebrow="Evidence · For People Considering Hypnosis"
        title="Does Hypnotherapy Actually Work?"
        intro="A clinical psychologist's review of the evidence — from surgical pain to smoking cessation, with the brain-imaging research, the history, and how to choose a practitioner in India."
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-14">
          <ScrollReveal>
            <p className="text-xs tracking-widest uppercase text-[var(--violet-bright)] mb-3">The Short Answer</p>
            <p className="text-[var(--ink-dim)] leading-relaxed">
              Hypnosis is a measurable state of focused attention, with characteristic shifts in brain activity that
              researchers can observe on a scan. It is not a fringe claim. The evidence is strongest for pain during
              medical procedures and recovery, and for irritable bowel syndrome; moderate for anxiety and stress;
              and mixed for harder habits like smoking. Like any clinical tool, it works best for what it&rsquo;s actually
              evidenced for — not as a cure-all.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">What Clinical Hypnotherapy Is — and Isn&rsquo;t</h2>
            <p className="text-[var(--ink-dim)] leading-relaxed">
              Professional definitions describe hypnosis as a state of focused attention and reduced peripheral
              awareness, paired with a heightened responsiveness to suggestion. It is not sleep, and it is not
              unconsciousness — most people remain fully aware of the room, the therapist&rsquo;s voice, and their own
              choices throughout. Clinical hypnotherapy, delivered by a trained practitioner working toward an
              agreed therapeutic goal, is a different discipline from stage hypnosis, which is built for
              entertainment and selects for the most responsive volunteers in a crowd.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">Is Hypnosis Real? What Brain Imaging Shows</h2>
            <p className="text-[var(--ink-dim)] leading-relaxed">
              Neuroimaging studies — including brain-scan research out of Stanford in the last decade — have found
              consistent changes during hypnosis: reduced activity in areas associated with vigilance and
              self-monitoring, and increased connectivity between the brain&rsquo;s executive-control network and the
              regions that process bodily sensation. In plain terms, the brain appears to quiet the &ldquo;inner critic&rdquo;
              while sharpening focused attention on a specific idea or sensation — which lines up with what people
              describe subjectively during a session.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">A Short History, Beginning in Bengal</h2>
            <p className="text-[var(--ink-dim)] leading-relaxed">
              Modern hypnosis traces back to 18th-century &ldquo;mesmerism,&rdquo; which a royal commission (with Benjamin
              Franklin among its members) debunked as a physical force while leaving the psychological effect
              itself unexplained. Scottish surgeon James Braid reframed it in psychological terms and gave it its
              current name in the 1840s. Around the same period, James Esdaile — a surgeon working in Bengal — used
              hypnosis as the sole anaesthesia for hundreds of major operations, decades before chemical anaesthetic
              was available. The practice reached formal medical acceptance later still: the British Medical
              Association endorsed it in 1955, and the American Medical Association followed in 1958.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">What the Research Shows, Condition by Condition</h2>
            <p className="text-[var(--ink-dim)] leading-relaxed mb-5">
              Evidence quality varies significantly by condition. A fair reading of the clinical trial literature
              looks roughly like this:
            </p>
            <div className="space-y-3">
              {EVIDENCE_TABLE.map((row) => (
                <div key={row.level} className="rounded-xl border border-[var(--line)] px-5 py-4">
                  <p className="text-xs tracking-widest uppercase text-[var(--violet)] mb-1">{row.level}</p>
                  <p className="text-sm text-[var(--ink-dim)] leading-relaxed">{row.items}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">What a Session Actually Looks Like</h2>
            <p className="text-[var(--ink-dim)] leading-relaxed">
              A typical clinical session starts with an ordinary conversation — the problem, the goal, medical
              history. Induction follows: a quiet, guided narrowing of attention, usually through breathing or a
              focal point. Once the client is settled into that focused state, the therapist does the actual
              therapeutic work — suggestion, guided imagery, or reframing, depending on the goal — before a clear,
              unhurried return to ordinary awareness. Many practitioners also teach a short self-hypnosis routine
              clients can use on their own between sessions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">Seven Myths, Retired</h2>
            <ul className="space-y-3">
              {MYTHS.map((m, i) => (
                <li key={m} className="flex items-start gap-3 text-sm text-[var(--ink-dim)] leading-relaxed">
                  <span className="shrink-0 font-serif text-[var(--violet-bright)]">{i + 1}.</span>
                  {m}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">Is Hypnotherapy Safe?</h2>
            <p className="text-[var(--ink-dim)] leading-relaxed">
              Within a clinical setting, hypnotherapy is generally considered a low-risk intervention — thousands of
              patients have undergone it in surgical and gastroenterology contexts with very few adverse reports.
              It&rsquo;s not a replacement for medical or psychiatric care, and it should complement rather than substitute
              treatment for conditions like psychosis or certain dissociative disorders, which need specialist
              oversight. It should also never be used to try to &ldquo;recover&rdquo; repressed memories — that application is
              both scientifically unsupported and, in some jurisdictions, legally fraught.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">How to Choose a Hypnotherapist in India</h2>
            <p className="text-[var(--ink-dim)] leading-relaxed mb-3">
              Hypnotherapy itself isn&rsquo;t a licensed profession here, so the practitioner&rsquo;s underlying credentials
              carry the weight. Before booking, it&rsquo;s worth checking for:
            </p>
            <ul className="space-y-2">
              {[
                "A clinical registration — such as with the Rehabilitation Council of India — that predates the hypnosis training.",
                "Certification from a recognised hypnosis body, with documented, supervised practice hours, not just a weekend course.",
                "Claims that match the evidence table above. If someone promises a guaranteed one-session cure for a serious condition, that's a red flag.",
                "A practitioner who works within — not instead of — the wider healthcare system, and refers out when a case needs a physician or psychiatrist.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--ink-dim)] leading-relaxed">
                  <span className="text-[var(--violet)] mt-1">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <h2 className="font-serif text-2xl text-[var(--ink)] mb-3">Questions People Ask Before Their First Session</h2>
            <div className="space-y-4">
              {FAQS.map((item) => (
                <div key={item.q} className="rounded-xl border border-[var(--line)] px-5 py-4">
                  <p className="text-sm font-medium text-[var(--ink)]">{item.q}</p>
                  <p className="mt-1.5 text-sm text-[var(--ink-dim)] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="text-sm text-[var(--ink-faint)] leading-relaxed border-t border-[var(--line)] pt-6">
              This article is educational and does not replace individualised medical or psychological diagnosis
              and treatment. If you&rsquo;re dealing with a specific condition, talk to a qualified clinician about
              whether hypnotherapy is appropriate alongside your existing care.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.55} className="flex flex-col sm:flex-row gap-4">
            <MagneticButton href={SITE_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" cursorLabel="Ask">
              Ask a Question
            </MagneticButton>
            <MagneticButton href="/certification/syllabus" variant="outline" cursorLabel="View">
              View the Certification
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <Link href="/perspectives" className="text-sm text-[var(--violet-bright)] hover:underline">
              ← Back to Perspectives
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
