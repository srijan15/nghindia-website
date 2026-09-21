"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "nghindia-cookie-consent";
const CONSENT_EVENT = "nghindia-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function getSnapshot(): "accepted" | "pending" {
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted" ? "accepted" : "pending";
  } catch {
    return "pending";
  }
}

function getServerSnapshot(): "accepted" | "pending" {
  return "pending";
}

function accept() {
  try {
    localStorage.setItem(CONSENT_KEY, "accepted");
  } catch {
    // localStorage unavailable — consent still applies for this session
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export default function Analytics() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <>
      {GA_ID && consent === "accepted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {GA_ID && consent === "pending" && (
        <div className="fixed inset-x-0 bottom-0 z-[998] flex flex-col sm:flex-row items-center gap-4 border-t border-[var(--line)] bg-[var(--bg)] px-6 py-4 text-sm text-[var(--ink-dim)]">
          <p className="flex-1">
            This site uses cookies for analytics via Google Analytics 4 to help us understand how visitors
            use it. No personal data is sold. By continuing you accept this.{" "}
            <a href="/privacy" className="text-[var(--violet-bright)] hover:underline">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="/disclaimer" className="text-[var(--violet-bright)] hover:underline">
              Disclaimer
            </a>
          </p>
          <button
            onClick={accept}
            className="shrink-0 rounded-full bg-[var(--violet)] px-6 py-2.5 text-sm font-medium text-[var(--on-accent)] hover:bg-[var(--violet-bright)] transition-colors"
          >
            Accept
          </button>
        </div>
      )}
    </>
  );
}
