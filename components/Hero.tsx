import { ANDROID_AVAILABLE } from "@/lib/constants";
import StoreButtons from "@/components/StoreButtons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Amber glow top-left */}
      <div className="absolute pointer-events-none" style={{ top: "-10%", left: "-5%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, var(--hero-glow) 0%, transparent 65%)" }} />
      {/* Accent glow top-right */}
      <div className="absolute pointer-events-none" style={{ top: "5%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, var(--hero-glow2) 0%, transparent 65%)" }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "linear-gradient(var(--grid-lines) 1px, transparent 1px), linear-gradient(90deg, var(--grid-lines) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* ─── Left: headline ─── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "var(--amber)" }} />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--amber)" }}>
                Used Car Inspection App
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] mb-6" style={{ color: "var(--text)" }}>
              Don&rsquo;t get burned
              <br />
              <span style={{ color: "var(--amber)" }}>buying a used car.</span>
            </h1>

            {/* One punchy line, not a paragraph */}
            <p className="text-xl md:text-2xl font-medium mb-8" style={{ color: "var(--text2)" }}>
              Inspect it like a pro in 25 minutes. Walk away — or knock <span style={{ color: "var(--text)" }}>$1,000s</span> off the price.
            </p>

            <div className="flex flex-wrap gap-4">
              <StoreButtons glow />
            </div>

            <p className="mt-5 text-xs flex items-center gap-2" style={{ color: "var(--text4)" }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--pass)" }} />
              First 3 inspections free &nbsp;·&nbsp; {ANDROID_AVAILABLE ? "iOS & Android" : "For iPhone"} &nbsp;·&nbsp; No account required
            </p>
          </div>

          {/* ─── Right: live score visual (the product, visible immediately) ─── */}
          <div className="hidden lg:flex justify-center">
            <ScoreCard />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }} />
    </section>
  );
}

/* A faux inspection-result card — shows what the app delivers without a word of prose. */
function ScoreCard() {
  const r = 58;
  const circ = 2 * Math.PI * r;
  const pct = 0.72;
  return (
    <div
      className="w-[320px] rounded-3xl p-7 flex flex-col gap-6"
      style={{ background: "var(--surface)", border: "1px solid var(--border2)", boxShadow: "0 32px 64px rgba(0,0,0,0.40)" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs" style={{ color: "var(--text3)" }}>2021 Honda</div>
          <div className="font-semibold text-base" style={{ color: "var(--text)" }}>Accord Sport</div>
        </div>
        <div className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: "var(--amber-s)", color: "var(--amber)" }}>
          Standard
        </div>
      </div>

      <div className="flex flex-col items-center">
        <svg width="148" height="148" viewBox="0 0 148 148">
          <circle cx="74" cy="74" r={r} fill="none" stroke="var(--score-track)" strokeWidth="10" />
          <circle cx="74" cy="74" r={r} fill="none" stroke="var(--amber)" strokeWidth="10" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} transform="rotate(-90 74 74)" />
          <text x="74" y="74" textAnchor="middle" dominantBaseline="central" fontSize="44" fontWeight="700" fill="var(--flag)">72</text>
        </svg>
        <p className="text-xs font-semibold tracking-wider uppercase -mt-2" style={{ color: "var(--text3)" }}>
          Mostly passed, some flags
        </p>
      </div>

      {/* Tally chips — fast to read, no sentences */}
      <div className="grid grid-cols-3 gap-2">
        <Tally label="Pass" count={70} color="var(--pass)" soft="var(--pass-s)" />
        <Tally label="Flag" count={11} color="var(--flag)" soft="var(--flag-s)" />
        <Tally label="Fail" count={6} color="var(--fail)" soft="var(--fail-s)" />
      </div>

      <div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: "var(--amber-xs)", border: "1px solid var(--amber-s)" }}>
        <span className="text-xs font-medium" style={{ color: "var(--text2)" }}>Est. repair cost</span>
        <span className="text-sm font-bold" style={{ color: "var(--amber)" }}>$1,400&ndash;$2,100</span>
      </div>

      {/* Frames the score as a recap of the user's own inputs, not a verdict. */}
      <p className="text-[11px] leading-snug" style={{ color: "var(--text4)" }}>
        The score reflects only the items you check and record — it is not an
        appraisal of the car.
      </p>
    </div>
  );
}

function Tally({ label, count, color, soft }: { label: string; count: number; color: string; soft: string }) {
  return (
    <div className="rounded-xl py-2.5 flex flex-col items-center gap-0.5" style={{ background: soft }}>
      <span className="text-lg font-bold" style={{ color }}>{count}</span>
      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color }}>{label}</span>
    </div>
  );
}

