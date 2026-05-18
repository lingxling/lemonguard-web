// Figures below are the repair-cost ranges LemonGuard's own checklist assigns
// to these faults (see assets/checklist_items.json — e.g. chassis frame
// UND_006 $2k–$10k, floor-pan rust UND_003 $500–$3k). The odometer card shows
// the mileage gap, not a dollar cost: rollback makes you OVERPAY for a
// worn-out car — it isn't a repair you can price.
const PAINS = [
  {
    cost: "up to $10k",
    costNote: "frame & floor-pan rust repair",
    label: "Hidden rust & flood damage",
    note: "Under panels. Invisible on a test drive.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    cost: "+70k mi",
    costNote: "you overpay for the wear",
    label: "Odometer rollback",
    note: "You pay for a 60k car. It has 130k.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    cost: "$2k–$10k",
    costNote: "structural frame repair",
    label: "Undisclosed accident",
    note: "A repaired wreck sold as clean.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: "var(--fail)" }}>
          What a bad car costs you
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight" style={{ color: "var(--text)" }}>
          One missed problem.
          <br />
          <span style={{ color: "var(--fail)" }}>Thousands gone.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {PAINS.map((p) => (
            <div key={p.label} className="p-7 rounded-2xl flex flex-col gap-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--fail-s)", color: "var(--fail)" }}>
                  {p.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: "var(--fail)" }}>
                    {p.cost}
                  </div>
                  <div className="text-[11px] mt-0.5" style={{ color: "var(--text4)" }}>{p.costNote}</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: "var(--text)" }}>{p.label}</h3>
                <p className="text-sm" style={{ color: "var(--text3)" }}>{p.note}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-base font-medium" style={{ color: "var(--text2)" }}>
          A 25-minute inspection costs you nothing. Skipping it can cost everything.
        </p>
        <p className="text-center mt-3 text-xs" style={{ color: "var(--text4)" }}>
          Repair ranges reflect LemonGuard&rsquo;s checklist estimates. Actual
          costs vary by vehicle, region, and severity.
        </p>
      </div>
    </section>
  );
}
