const HUB_CATEGORIES = [
  { name: "Documents",  pct: 92, grade: "A" },
  { name: "Exterior",   pct: 65, grade: "C" },
  { name: "Interior",   pct: 80, grade: "B" },
  { name: "Engine Bay", pct: 45, grade: "D" },
];

export default function AppMockup() {
  return (
    <section className="py-24 px-6 overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>
          The App
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "var(--text)" }}>
          Built for the parking lot.
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <PhoneFrame title="Inspection Hub"><HubScreen /></PhoneFrame>
          <PhoneFrame title="Check an Item"><ItemScreen /></PhoneFrame>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-[280px] rounded-[38px] p-2 shadow-2xl"
        style={{ background: "#0A0B0D", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 32px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)" }}
      >
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-24 h-5 rounded-full" style={{ background: "#0A0B0D", border: "1px solid rgba(255,255,255,0.10)" }} />
        </div>
        <div className="rounded-[28px] overflow-hidden" style={{ background: "#0E0F11", minHeight: 520 }}>
          {children}
        </div>
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-24 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>
      <p className="text-sm font-medium" style={{ color: "var(--text3)" }}>{title}</p>
    </div>
  );
}

function HubScreen() {
  const circumference = 2 * Math.PI * 46;
  const offset = circumference * (1 - 0.68);
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs mb-0.5" style={{ color: "rgba(242,243,245,0.40)", fontFamily: "var(--font-ibm-plex-mono)" }}>2021 Honda</div>
          <div className="font-semibold text-sm" style={{ color: "#F2F3F5" }}>Accord Sport</div>
        </div>
        <div className="text-xs px-2 py-1 rounded-full font-semibold" style={{ background: "rgba(234,170,64,0.16)", color: "#EAAA40", fontFamily: "var(--font-ibm-plex-mono)" }}>
          Standard
        </div>
      </div>

      <div className="flex flex-col items-center py-4">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <circle cx="60" cy="60" r="46" fill="none" stroke="#EAAA40" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 60 60)" />
          <text x="60" y="54" textAnchor="middle" fontSize="28" fontWeight="700" fill="#F2F3F5" fontFamily="var(--font-ibm-plex-mono)">B</text>
          <text x="60" y="70" textAnchor="middle" fontSize="10" fill="rgba(242,243,245,0.45)" fontFamily="var(--font-ibm-plex-mono)">Good</text>
        </svg>
        <div className="text-xs mt-1" style={{ color: "rgba(242,243,245,0.40)", fontFamily: "var(--font-ibm-plex-mono)" }}>68 / 100</div>
      </div>

      <div className="flex flex-col gap-2">
        {HUB_CATEGORIES.map((cat) => (
          <div key={cat.name} className="flex items-center gap-3">
            <div className="text-xs w-20 shrink-0" style={{ color: "rgba(242,243,245,0.60)" }}>{cat.name}</div>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-full rounded-full" style={{ width: `${cat.pct}%`, background: cat.pct >= 80 ? "#51C672" : cat.pct >= 60 ? "#EAAA40" : "#F75D59" }} />
            </div>
            <div className="text-xs w-5 text-right font-semibold" style={{ color: cat.pct >= 80 ? "#51C672" : cat.pct >= 60 ? "#EAAA40" : "#F75D59", fontFamily: "var(--font-ibm-plex-mono)" }}>{cat.grade}</div>
          </div>
        ))}
        <div className="text-xs text-center mt-1" style={{ color: "rgba(242,243,245,0.28)" }}>+ 4 more categories</div>
      </div>

      <div className="mt-2 w-full py-3 rounded-xl text-center text-xs font-semibold" style={{ background: "rgba(234,170,64,0.14)", color: "#EAAA40" }}>
        Export PDF Report
      </div>
    </div>
  );
}

function ItemScreen() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "rgba(234,170,64,0.14)" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EAAA40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
        <div className="text-xs" style={{ color: "rgba(242,243,245,0.40)", fontFamily: "var(--font-ibm-plex-mono)" }}>Exterior & Body</div>
      </div>

      <div className="p-4 rounded-2xl" style={{ background: "#17191C", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="text-xs font-semibold mb-2" style={{ color: "#EAAA40", fontFamily: "var(--font-ibm-plex-mono)" }}>ITEM 7 OF 20</div>
        <div className="font-semibold text-sm mb-2" style={{ color: "#F2F3F5" }}>Panel gaps consistent all around?</div>
        <p className="text-xs leading-relaxed" style={{ color: "rgba(242,243,245,0.50)" }}>
          Uneven gaps between panels can indicate prior accident damage or poor repair work. Run your finger along each gap.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "PASS", color: "#51C672",  soft: "rgba(81,198,114,0.16)",  active: true },
          { label: "FLAG", color: "#EDB345",  soft: "rgba(237,179,69,0.16)",  active: false },
          { label: "FAIL", color: "#F75D59",  soft: "rgba(247,93,89,0.16)",   active: false },
          { label: "SKIP", color: "rgba(242,243,245,0.40)", soft: "rgba(255,255,255,0.06)", active: false },
        ].map((btn) => (
          <div key={btn.label} className="py-2.5 rounded-xl flex flex-col items-center"
            style={{ background: btn.active ? btn.soft : "rgba(255,255,255,0.04)", border: `1.5px solid ${btn.active ? btn.color : "transparent"}` }}>
            <div className="text-xs font-semibold" style={{ color: btn.active ? btn.color : "rgba(242,243,245,0.40)", fontFamily: "var(--font-ibm-plex-mono)" }}>{btn.label}</div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-xl text-xs" style={{ background: "#17191C", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(242,243,245,0.30)" }}>
        Add a note...
      </div>

      <div className="flex gap-2">
        {[0, 1].map((i) => (
          <div key={i} className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "#17191C", border: "1px dashed rgba(255,255,255,0.12)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(242,243,245,0.30)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between text-xs mb-1.5" style={{ color: "rgba(242,243,245,0.40)", fontFamily: "var(--font-ibm-plex-mono)" }}>
          <span>Progress</span><span>7 / 20</span>
        </div>
        <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <div className="h-full rounded-full" style={{ width: "35%", background: "#EAAA40" }} />
        </div>
      </div>
    </div>
  );
}
