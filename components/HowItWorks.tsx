const STEPS = [
  {
    num: "01", title: "Set up the inspection",
    body: "Enter the year, make, and model. Choose Quick (30 min), Standard (1 hr), or Professional (2 hr) tier based on how thorough you want to be.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: "02", title: "Walk through each category",
    body: "119 guided items across 8 categories. Mark each as Pass, Flag, or Fail. Attach photos as evidence. Add notes for anything that needs follow-up.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    num: "03", title: "Score & negotiate",
    body: "Get an instant A–F grade with a repair-cost estimate. Export a PDF report to show the seller — or walk away knowing exactly why.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>
          How it works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "var(--text)" }}>
          Three steps to a confident decision
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px" style={{ background: "var(--amber-s)" }} />

          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              <div className="w-[104px] h-[104px] rounded-full flex items-center justify-center mb-6 relative z-10" style={{ background: "var(--amber-s)", border: "1.5px solid var(--amber-xs)", color: "var(--amber)" }}>
                {step.icon}
              </div>
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "var(--amber)", fontFamily: "var(--font-ibm-plex-mono)" }}>{step.num}</p>
              <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--text)" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
