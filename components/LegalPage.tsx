import Link from "next/link";
import { COPYRIGHT } from "@/lib/constants";

/* Shared layout for legal pages (Terms, Privacy). Plain, readable, on-brand. */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Minimal top bar — just the wordmark back to home */}
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-lg font-bold tracking-tight cursor-pointer">
            <span style={{ color: "var(--amber)" }}>Lemon</span>
            <span style={{ color: "var(--text)" }}>Guard</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 legal-body">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--text)" }}>
          {title}
        </h1>
        <p className="text-sm mb-12" style={{ color: "var(--text3)" }}>
          Last updated: {updated}
        </p>
        {children}
      </main>

      <footer className="border-t py-10 px-6" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/" className="text-sm cursor-pointer transition-opacity hover:opacity-70" style={{ color: "var(--text3)" }}>
            Home
          </Link>
          <Link href="/terms" className="text-sm cursor-pointer transition-opacity hover:opacity-70" style={{ color: "var(--text3)" }}>
            Terms
          </Link>
          <Link href="/privacy" className="text-sm cursor-pointer transition-opacity hover:opacity-70" style={{ color: "var(--text3)" }}>
            Privacy
          </Link>
          <span className="text-sm" style={{ color: "var(--text4)" }}>
            {COPYRIGHT}
          </span>
        </div>
      </footer>
    </div>
  );
}

/* Section heading + body helpers so the page reads cleanly. */
export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mb-9">
      <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
        {heading}
      </h2>
      <div className="flex flex-col gap-3 text-[15px] leading-relaxed" style={{ color: "var(--text2)" }}>
        {children}
      </div>
    </section>
  );
}
