import { STORE_LINKS } from "@/lib/constants";

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
              <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>
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
              Inspect it like a pro in 30 minutes. Walk away — or knock <span style={{ color: "var(--text)" }}>$1,000s</span> off the price.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={STORE_LINKS.appStore}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm cursor-pointer transition-all hover:scale-[1.03]"
                style={{ background: "var(--amber)", color: "#0E0F11", boxShadow: "0 0 32px var(--amber-s)" }}
              >
                <AppleIcon />
                App Store
              </a>
              <a
                href={STORE_LINKS.playStore}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm cursor-pointer transition-all hover:scale-[1.03]"
                style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border2)" }}
              >
                <AndroidIcon />
                Google Play
              </a>
            </div>

            <p className="mt-5 text-xs flex items-center gap-2" style={{ color: "var(--text4)", fontFamily: "var(--font-ibm-plex-mono)" }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--pass)" }} />
              First inspection free &nbsp;·&nbsp; iOS &amp; Android &nbsp;·&nbsp; No account required
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
          <div className="text-xs" style={{ color: "var(--text3)", fontFamily: "var(--font-ibm-plex-mono)" }}>2021 Honda</div>
          <div className="font-semibold text-base" style={{ color: "var(--text)" }}>Accord Sport</div>
        </div>
        <div className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: "var(--amber-s)", color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>
          Standard
        </div>
      </div>

      <div className="flex flex-col items-center">
        <svg width="148" height="148" viewBox="0 0 148 148">
          <circle cx="74" cy="74" r={r} fill="none" stroke="var(--score-track)" strokeWidth="10" />
          <circle cx="74" cy="74" r={r} fill="none" stroke="var(--amber)" strokeWidth="10" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} transform="rotate(-90 74 74)" />
          <text x="74" y="68" textAnchor="middle" fontSize="38" fontWeight="700" fill="var(--text)" fontFamily="var(--font-ibm-plex-mono)">B</text>
          <text x="74" y="90" textAnchor="middle" fontSize="12" fill="var(--text3)" fontFamily="var(--font-ibm-plex-mono)">72 / 100</text>
        </svg>
      </div>

      {/* Tally chips — fast to read, no sentences */}
      <div className="grid grid-cols-3 gap-2">
        <Tally label="Pass" count={84} color="var(--pass)" soft="var(--pass-s)" />
        <Tally label="Flag" count={9} color="var(--flag)" soft="var(--flag-s)" />
        <Tally label="Fail" count={4} color="var(--fail)" soft="var(--fail-s)" />
      </div>

      <div className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: "var(--amber-xs)", border: "1px solid var(--amber-s)" }}>
        <span className="text-xs font-medium" style={{ color: "var(--text2)" }}>Est. repair cost</span>
        <span className="text-sm font-bold" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>$1,400&ndash;$2,100</span>
      </div>
    </div>
  );
}

function Tally({ label, count, color, soft }: { label: string; count: number; color: string; soft: string }) {
  return (
    <div className="rounded-xl py-2.5 flex flex-col items-center gap-0.5" style={{ background: soft }}>
      <span className="text-lg font-bold" style={{ color, fontFamily: "var(--font-ibm-plex-mono)" }}>{count}</span>
      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color }}>{label}</span>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1.5c-.96 0-1.86.23-2.66.63L7.85.65c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12a5.99 5.99 0 0 0-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  );
}
