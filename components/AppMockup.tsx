import Image from "next/image";

const SCREENS = [
  {
    src: "/screens/hub.jpg",
    caption: "Live score as you go",
    blurb: "Watch the score and category breakdown update with every check.",
  },
  {
    src: "/screens/checklist.jpg",
    caption: "Guided checklist",
    blurb: "Tap Pass, Flag or Fail on every item — no guesswork.",
  },
  {
    src: "/screens/compare.jpg",
    caption: "Compare cars side by side",
    blurb: "Line up your shortlist and see which one is worth a paid PPI.",
  },
];

export default function AppMockup() {
  return (
    <section className="py-24 px-6 overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 text-center" style={{ color: "var(--amber)" }}>
          The App
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "var(--text)" }}>
          Built for the parking lot.
        </h2>

        <div className="flex flex-wrap gap-10 lg:gap-12 items-start justify-center">
          {SCREENS.map((s) => (
            <PhoneFrame key={s.src} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src, caption, blurb }: { src: string; caption: string; blurb: string }) {
  return (
    <div className="flex flex-col items-center gap-5 max-w-[280px]">
      <div
        className="relative w-[260px] rounded-[44px] p-[10px]"
        style={{
          background: "var(--phone-bezel)",
          boxShadow: "0 32px 64px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        <div className="relative rounded-[36px] overflow-hidden" style={{ aspectRatio: "1080 / 2290", background: "var(--bg)" }}>
          <Image
            src={src}
            alt={caption}
            width={1080}
            height={2290}
            className="w-full h-full object-cover object-top"
            sizes="260px"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{caption}</p>
        <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--text3)" }}>{blurb}</p>
      </div>
    </div>
  );
}
