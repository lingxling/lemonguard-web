const PAINS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Hidden damage",
    body: "Rust under body panels, flood damage, frame bends — impossible to spot without a systematic walk-through.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Odometer rollback",
    body: "Sellers roll back clocks to inflate the car's value. Wear patterns on the pedals, wheel, and interior tell the real story.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Undisclosed accidents",
    body: "Mismatched paint gaps, airbag sensors, VIN mismatch on panels — signs of a repaired wreck a non-expert will miss.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "var(--text)" }}>
          Used car buying is a gamble
          <br />
          <span style={{ color: "var(--text2)" }}>— until now.</span>
        </h2>
        <p className="text-center max-w-xl mx-auto mb-16 text-base leading-relaxed" style={{ color: "var(--text2)" }}>
          Dealerships and private sellers don&rsquo;t volunteer bad news. Without a structured process, buyers pay thousands for problems they didn&rsquo;t know existed.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {PAINS.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--amber-s)", color: "var(--amber)" }}>
                {p.icon}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text)" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
