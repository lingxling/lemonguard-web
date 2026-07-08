import { STORE_LINKS, ANDROID_AVAILABLE, IOS_AVAILABLE } from "@/lib/constants";

/**
 * The App Store / Google Play button pair used in the Hero and the download
 * CTA. Live links are gated on the availability flags so we never ship a
 * dead link — until then the buttons render as disabled "Coming soon".
 */
export default function StoreButtons({ glow = false }: { glow?: boolean }) {
  const appleStyle = {
    background: "var(--amber)",
    color: "#0E0F11",
    ...(glow ? { boxShadow: "0 0 32px var(--amber-s)" } : null),
  };
  return (
    <>
      {IOS_AVAILABLE ? (
        <a
          href={STORE_LINKS.appStore}
          className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm cursor-pointer transition-all hover:scale-[1.03]"
          style={appleStyle}
        >
          <AppleIcon />
          Download on the App Store
        </a>
      ) : (
        <span
          className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm cursor-not-allowed"
          style={{ ...appleStyle, opacity: 0.55 }}
          aria-disabled="true"
        >
          <AppleIcon />
          App Store &mdash; Coming soon
        </span>
      )}
      {ANDROID_AVAILABLE ? (
        <a
          href={STORE_LINKS.playStore}
          className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm cursor-pointer transition-all hover:scale-[1.03]"
          style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border2)" }}
        >
          <AndroidIcon />
          Get it on Google Play
        </a>
      ) : (
        <span
          className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-sm cursor-not-allowed"
          style={{ background: "var(--surface2)", color: "var(--text3)", border: "1px solid var(--border2)", opacity: 0.65 }}
          aria-disabled="true"
        >
          <AndroidIcon />
          Android &mdash; Coming soon
        </span>
      )}
    </>
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
