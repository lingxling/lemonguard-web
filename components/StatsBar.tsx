"use client";
import { useCountUp } from "@/lib/useReveal";

const STATS = [
  { value: 25, suffix: " min", label: "Quick scan" },
  { value: 112, suffix: "", label: "Inspection checks" },
  { value: 8, suffix: "", label: "Categories" },
];

export default function StatsBar() {
  return (
    <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: shown } = useCountUp(value);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: "var(--amber)" }}>
        <span ref={ref}>{shown}</span>{suffix}
      </div>
      <div className="text-sm" style={{ color: "var(--text3)" }}>
        {label}
      </div>
    </div>
  );
}
