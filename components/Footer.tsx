export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg mb-1">
              <span style={{ color: "var(--amber)" }}>Lemon</span>
              <span style={{ color: "var(--text)" }}>Guard</span>
            </div>
            <p className="text-sm" style={{ color: "var(--text3)" }}>Inspect smarter. Negotiate better.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="mailto:support@lemonguard.app" className="text-sm cursor-pointer transition-opacity hover:opacity-70" style={{ color: "var(--text3)" }}>Contact</a>
            <a href="/privacy" className="text-sm cursor-pointer transition-opacity hover:opacity-70" style={{ color: "var(--text3)" }}>Privacy</a>
            <a href="/terms" className="text-sm cursor-pointer transition-opacity hover:opacity-70" style={{ color: "var(--text3)" }}>Terms</a>
            <span className="text-sm" style={{ color: "var(--text4)" }}>© 2026 LemonGuard</span>
          </div>
        </div>

        {/* Disclaimer — limits liability for buying decisions made on app results */}
        <p
          className="text-xs leading-relaxed max-w-3xl"
          style={{ color: "var(--text4)" }}
        >
          <span className="font-semibold" style={{ color: "var(--text3)" }}>Disclaimer:</span>{" "}
          LemonGuard is a self-inspection guidance tool. Scores, grades, and
          repair estimates are for reference only, may be incomplete or
          inaccurate, and are not a substitute for a professional pre-purchase
          inspection by a qualified mechanic. LemonGuard does not buy, sell, or
          guarantee any vehicle. Any buying, pricing, or walk-away decision is
          your own, and LemonGuard accepts no liability for the outcome.
        </p>
      </div>
    </footer>
  );
}
