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
        <div className="max-w-2xl">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "var(--amber)" }} />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>
              Used Car Inspection App
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] mb-6" style={{ color: "var(--text)" }}>
            Don&rsquo;t get burned
            <br />
            <span style={{ color: "var(--amber)" }}>buying a used car.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: "var(--text2)" }}>
            Walk through 119 expert checks, score the car live, and generate a PDF report you can use to negotiate the price down — or walk away with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={STORE_LINKS.appStore}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all hover:scale-[1.03]"
              style={{ background: "var(--amber)", color: "#0E0F11", boxShadow: "0 0 32px var(--amber-s)" }}
            >
              <AppleIcon />
              App Store
            </a>
            <a
              href={STORE_LINKS.playStore}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm transition-all hover:scale-[1.03]"
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
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }} />
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1.5c-.96 0-1.86.23-2.66.63L7.85.65c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12a5.99 5.99 0 0 0-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  );
}
