export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: "var(--amber)" }}>
          How it works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "var(--text)" }}>
          Three steps. One confident decision.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Step 1 — pick a tier */}
          <Step num="01" title="Pick a tier">
            <div className="flex flex-col gap-2 w-full">
              {[
                { name: "Quick", time: "~25 min", on: false },
                { name: "Standard", time: "1–1.5 hr", on: true },
                { name: "Professional", time: "3–4 hr", on: false },
              ].map((t) => (
                <div
                  key={t.name}
                  className="flex items-center justify-between rounded-lg px-3 py-2"
                  style={{
                    background: t.on ? "var(--amber-s)" : "var(--input-bg)",
                    border: `1px solid ${t.on ? "var(--amber)" : "var(--border)"}`,
                  }}
                >
                  <span className="text-sm font-semibold" style={{ color: t.on ? "var(--amber)" : "var(--text2)" }}>{t.name}</span>
                  <span className="text-xs" style={{ color: "var(--text3)" }}>{t.time}</span>
                </div>
              ))}
            </div>
          </Step>

          {/* Step 2 — tap a verdict */}
          <Step num="02" title="Tap Pass, Flag or Fail">
            <div className="grid grid-cols-3 gap-2 w-full">
              {[
                { label: "PASS", color: "var(--pass)", soft: "var(--pass-s)", on: false },
                { label: "FLAG", color: "var(--flag)", soft: "var(--flag-s)", on: false },
                { label: "FAIL", color: "var(--fail)", soft: "var(--fail-s)", on: true },
              ].map((v) => (
                <div
                  key={v.label}
                  className="py-3 rounded-lg flex items-center justify-center"
                  style={{
                    background: v.on ? v.soft : "var(--input-bg)",
                    border: `1.5px solid ${v.on ? v.color : "transparent"}`,
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: v.on ? v.color : "var(--text3)" }}>{v.label}</span>
                </div>
              ))}
            </div>
          </Step>

          {/* Step 3 — get a score */}
          <Step num="03" title="Get a score & report">
            <div className="flex items-center justify-center gap-4 w-full">
              <ScoreRing />
              <div className="flex flex-col gap-1.5">
                <span className="text-xs px-2 py-1 rounded-md font-semibold text-center" style={{ background: "var(--amber-s)", color: "var(--amber)" }}>
                  PDF report
                </span>
                <span className="text-xs px-2 py-1 rounded-md font-semibold text-center" style={{ background: "var(--pass-s)", color: "var(--pass)" }}>
                  Repair cost
                </span>
              </div>
            </div>
          </Step>
        </div>
      </div>
    </section>
  );
}

function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center gap-5 p-7 rounded-2xl" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold" style={{ color: "var(--amber)" }}>{num}</span>
        <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{title}</h3>
      </div>
      <div className="flex items-center justify-center w-full min-h-[112px]">{children}</div>
    </div>
  );
}

function ScoreRing() {
  const r = 28;
  const circ = 2 * Math.PI * r;
  return (
    <svg width="76" height="76" viewBox="0 0 76 76">
      <circle cx="38" cy="38" r={r} fill="none" stroke="var(--score-track)" strokeWidth="6" />
      <circle cx="38" cy="38" r={r} fill="none" stroke="var(--amber)" strokeWidth="6" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * 0.28} transform="rotate(-90 38 38)" />
      <text x="38" y="45" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--text)">72</text>
    </svg>
  );
}
