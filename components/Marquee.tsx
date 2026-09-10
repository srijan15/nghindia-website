import { CREDENTIAL_CHIPS } from "@/lib/content";

export default function Marquee() {
  const items = [...CREDENTIAL_CHIPS, ...CREDENTIAL_CHIPS];
  return (
    <div
      className="group relative overflow-hidden border-y border-[var(--line)] bg-[var(--bg-2)] py-4"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-12 py-1 group-hover:[animation-play-state:paused]">
        {items.map((chip, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-base md:text-lg font-medium tracking-wide text-[var(--ink)] whitespace-nowrap transition-colors hover:text-[var(--violet)]"
          >
            <span className="text-[var(--violet)]">◆</span>
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
