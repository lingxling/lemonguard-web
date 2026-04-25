export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-lg mb-1">
            <span style={{ color: "var(--amber)" }}>Lemon</span>
            <span style={{ color: "var(--text)" }}>Guard</span>
          </div>
          <p className="text-sm" style={{ color: "var(--text3)" }}>Inspect smarter. Negotiate better.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-sm transition-opacity hover:opacity-70" style={{ color: "var(--text3)" }}>Privacy</a>
          <a href="#" className="text-sm transition-opacity hover:opacity-70" style={{ color: "var(--text3)" }}>Terms</a>
          <span className="text-sm" style={{ color: "var(--text4)", fontFamily: "var(--font-ibm-plex-mono)" }}>© 2025 LemonGuard</span>
        </div>
      </div>
    </footer>
  );
}
