const PLANS = [
  {
    name: "Free", price: "$0", unit: "first inspection",
    desc: "Try it before you commit. Full Standard-tier inspection, live score, and PDF export — on your first car.",
    features: ["1 full inspection", "119-item checklist", "Live A–F score", "PDF report export"],
    cta: "Get Started Free", highlight: false,
  },
  {
    name: "7-Day Pass", price: "$1.99", unit: "one-time",
    desc: "Inspect as many cars as you need for a week. Perfect for a focused weekend of shopping.",
    features: ["Unlimited inspections", "All 3 tiers", "Photo evidence", "Multi-car compare", "PDF reports"],
    cta: "Buy 7-Day Pass", highlight: true,
  },
  {
    name: "30-Day Pass", price: "$3.99", unit: "one-time",
    desc: "A full month of unlimited inspections. Great if you're taking your time finding the right car.",
    features: ["Unlimited inspections", "All 3 tiers", "Photo evidence", "Multi-car compare", "PDF reports"],
    cta: "Buy 30-Day Pass", highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "var(--text)" }}>
          Pay once. No subscriptions.
        </h2>
        <p className="text-center max-w-sm mx-auto mb-16 text-base leading-relaxed" style={{ color: "var(--text2)" }}>
          No auto-renewal. No hidden fees. Pay when you need it.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div key={plan.name} className="p-6 rounded-2xl flex flex-col gap-5"
              style={{ background: plan.highlight ? "var(--amber-s)" : "var(--surface)", border: plan.highlight ? "1.5px solid var(--amber)" : "1px solid var(--border)" }}>
              {plan.highlight && (
                <div className="self-start text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "var(--amber)", color: "#0E0F11", fontFamily: "var(--font-ibm-plex-mono)" }}>
                  Most Popular
                </div>
              )}
              <div>
                <div className="text-sm font-semibold mb-1" style={{ color: "var(--text3)" }}>{plan.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-ibm-plex-mono)" }}>{plan.price}</span>
                  <span className="text-sm" style={{ color: "var(--text3)" }}>/ {plan.unit}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>{plan.desc}</p>
              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text2)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--pass)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-auto text-center py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                style={plan.highlight
                  ? { background: "var(--amber)", color: "#0E0F11" }
                  : { background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)" }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "var(--text4)", fontFamily: "var(--font-ibm-plex-mono)" }}>
          Purchases unlock on-device only · No auto-renewal · No account required
        </p>
      </div>
    </section>
  );
}
