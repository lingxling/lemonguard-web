import { ANDROID_AVAILABLE } from "@/lib/constants";
import StoreButtons from "@/components/StoreButtons";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 px-6 relative overflow-hidden scroll-mt-16" style={{ background: "var(--surface)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--amber-xs) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "var(--amber)" }}>
          Ready to inspect?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: "var(--text)" }}>
          Your first 3 inspections<br />are <span style={{ color: "var(--amber)" }}>free.</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <StoreButtons />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
          {["No account required", "Works offline", ANDROID_AVAILABLE ? "iOS & Android" : "For iPhone"].map((chip) => (
            <span key={chip} className="flex items-center gap-2 text-xs" style={{ color: "var(--text3)" }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--pass)" }} />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

