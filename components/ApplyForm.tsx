"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-lg border border-[var(--line)] bg-[var(--bg-2)] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none focus:border-[var(--violet)] transition-colors";
const labelClass = "block text-xs tracking-widest uppercase text-[var(--ink-faint)] mb-2";

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--violet)] p-10 text-center">
        <p className="font-serif text-2xl text-[var(--violet-bright)] mb-2">Thank you.</p>
        <p className="text-sm text-[var(--ink-dim)]">
          Your application has reached Dr. Sharma&rsquo;s office. Expect a response within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-[var(--line)] p-6 md:p-10">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <h3 className="font-serif text-lg text-[var(--violet-bright)] mb-4">About You</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input required name="firstName" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Last Name *</label>
            <input required name="lastName" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input required type="email" name="email" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>WhatsApp Number *</label>
            <input required type="tel" name="whatsapp" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>City *</label>
            <input required name="city" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Country</label>
            <input name="country" className={inputClass} />
          </div>
        </div>
        <div className="mt-4">
          <label className={labelClass}>Current Profession / Background *</label>
          <input required name="profession" className={inputClass} />
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg text-[var(--violet-bright)] mb-4">Your Interest</h3>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Why do you want to learn hypnosis?</label>
            <textarea required name="why" rows={4} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Prior training (optional)</label>
            <input name="priorTraining" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Preferred format</label>
            <select name="format" className={inputClass} defaultValue="No preference">
              <option>Online</option>
              <option>In Person — Delhi NCR / Dubai</option>
              <option>Residential — McLeodganj</option>
              <option>No preference</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>How did you hear about NGH India?</label>
            <select name="source" className={inputClass} defaultValue="Google">
              <option>Google</option>
              <option>Social Media</option>
              <option>Word of Mouth</option>
              <option>Existing client</option>
              <option>marutisharma.com</option>
              <option>University of Life</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg text-[var(--violet-bright)] mb-4">Fellowship Award</h3>
        <div className="flex gap-6 text-sm text-[var(--ink-dim)]">
          <label className="flex items-center gap-2">
            <input type="radio" name="fellowship" value="yes" className="accent-[var(--violet)]" /> Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="fellowship" value="no" defaultChecked className="accent-[var(--violet)]" /> No
          </label>
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-[var(--violet)] px-8 py-3.5 text-sm font-medium text-[var(--on-accent)] hover:bg-[var(--violet-bright)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
