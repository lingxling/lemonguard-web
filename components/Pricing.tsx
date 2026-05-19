const PLANS = [
  {
    name: "Free", price: "$0", unit: "first 3 inspections",
    features: [
      "3 full inspections",
      "All 112 checks · 8 categories",
      "Photos, notes & live score",
      "Multi-car compare & PDF report",
    ],
    cta: "Get Started Free", highlight: false,
  },
  {
    name: "Lifetime Unlock", price: "$7.99", unit: "one-time",
    features: [
      "Everything in Free",
      "Unlimited inspections — no 3-car cap",
      "All future updates",
    ],
    cta: "Unlock for $7.99", highlight: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: "var(--amber)" }}>
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: "var(--text)" }}>
          Pay once. No subscriptions.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {["No auto-renewal", "No hidden fees", "No account"].map((chip) => (
            <span key={chip} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "var(--surface2)", color: "var(--text2)", border: "1px solid var(--border)" }}>
              {chip}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start max-w-2xl mx-auto">
          {PLANS.map((plan) => (
            <div key={plan.name} className="p-6 rounded-2xl flex flex-col gap-5"
              style={{ background: plan.highlight ? "var(--amber-s)" : "var(--surface)", border: plan.highlight ? "1.5px solid var(--amber)" : "1px solid var(--border)" }}>
              {plan.highlight && (
                <div className="self-start text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "var(--amber)", color: "#0E0F11" }}>
                  Most Popular
                </div>
              )}
              <div>
                <div className="text-sm font-semibold mb-1" style={{ color: "var(--text3)" }}>{plan.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold" style={{ color: "var(--text)" }}>{plan.price}</span>
                  <span className="text-sm" style={{ color: "var(--text3)" }}>/ {plan.unit}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text2)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--pass)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              {/* CTA is a disabled "Coming soon" state until the app ships;
                  both tiers unlock inside the app, so there's no web link. */}
              <span className="mt-auto text-center py-3 rounded-xl text-sm font-semibold cursor-not-allowed"
                style={plan.highlight
                  ? { background: "var(--amber)", color: "#0E0F11", opacity: 0.55 }
                  : { background: "var(--surface2)", color: "var(--text3)", border: "1px solid var(--border)", opacity: 0.65 }}
                aria-disabled="true">
                Coming soon
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "var(--text4)" }}>
          Purchases unlock on-device only · No auto-renewal · No account required
        </p>
      </div>
    </section>
  );
}
