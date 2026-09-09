import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Member Login — NGH India",
};

export default function PortalPage() {
  return (
    <>
      <PageHero eyebrow="Fellows Only" title="Member Login" />
      <section className="py-20">
        <div className="mx-auto max-w-md px-6 md:px-10">
          <ScrollReveal>
            <form className="space-y-5 rounded-2xl border border-[var(--line)] p-8">
              <div>
                <label className="block text-xs tracking-widest uppercase text-[var(--ink-faint)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-[var(--line)] bg-[var(--bg-2)] px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--violet)]"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[var(--ink-faint)] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-[var(--line)] bg-[var(--bg-2)] px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--violet)]"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[var(--violet)] px-8 py-3 text-sm font-medium text-[var(--bg)] hover:bg-[var(--violet-bright)] transition-colors"
              >
                Sign In
              </button>
              <p className="text-xs text-center text-[var(--ink-faint)]">
                Fellowship credentials issued on certification.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
