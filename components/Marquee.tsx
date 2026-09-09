import { CREDENTIAL_CHIPS } from "@/lib/content";

export default function Marquee() {
  const items = [...CREDENTIAL_CHIPS, ...CREDENTIAL_CHIPS];
  return (
    <div className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--bg-2)] py-4">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10">
        {items.map((chip, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm tracking-wide text-[var(--ink-faint)] whitespace-nowrap"
          >
            <span className="text-[var(--gold)]">◆</span>
            {chip}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
