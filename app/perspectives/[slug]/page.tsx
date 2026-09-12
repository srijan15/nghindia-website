import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { PERSPECTIVES, SITE_LINKS } from "@/lib/content";

export function generateStaticParams() {
  return PERSPECTIVES.filter((a) => !a.href).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = PERSPECTIVES.find((a) => a.slug === slug);
  return { title: article ? `${article.title} — NGH India` : "Perspectives — NGH India" };
}

export default async function PerspectiveArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = PERSPECTIVES.find((a) => a.slug === slug);
  if (!article) notFound();
  if (article.href) redirect(article.href);

  return (
    <>
      <PageHero eyebrow={article.tag} title={article.title} intro={article.date ? `Published ${article.date}` : undefined} />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <ScrollReveal>
            <p className="text-sm text-[var(--ink-dim)] leading-relaxed">
              This piece is being written to the same evidentiary standard as the rest of the site — every
              claim linked to a primary source, not hearsay. The full write-up is in progress; in the
              meantime, the underlying facts it covers are already documented across the certification
              and syllabus pages.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10 flex flex-col sm:flex-row gap-4">
            <MagneticButton href="/certification/syllabus" variant="outline" cursorLabel="View">
              View the Syllabus
            </MagneticButton>
            <MagneticButton href={SITE_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" cursorLabel="Ask">
              Ask Us Directly
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-14">
            <Link href="/perspectives" className="text-sm text-[var(--violet-bright)] hover:underline">
              ← Back to Perspectives
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
