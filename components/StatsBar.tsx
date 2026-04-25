const STATS = [
  { value: "119", label: "Inspection Checks" },
  { value: "8",   label: "Categories" },
  { value: "3",   label: "Inspection Tiers" },
  { value: "A–F", label: "Live Score" },
];

export default function StatsBar() {
  return (
    <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>
                {s.value}
              </div>
              <div className="text-sm" style={{ color: "var(--text3)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
