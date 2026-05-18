// LemonGuard ships on the App Store only for now. When the Android build
// is published, set ANDROID_AVAILABLE to true and fill in playStore — the
// Google Play buttons and "iOS & Android" copy are gated on this flag.
export const ANDROID_AVAILABLE = false;

export const STORE_LINKS = {
  appStore: "#",
  playStore: "#",
};

export const CATEGORIES = [
  { id: "documents", name: "Documents & History", items: 12, icon: "📄" },
  { id: "exterior",  name: "Exterior & Body",    items: 20, icon: "🚗" },
  { id: "interior",  name: "Interior & Safety",  items: 21, icon: "🪑" },
  { id: "engine",    name: "Engine Bay",          items: 20, icon: "🔧" },
  { id: "underbody", name: "Underbody & Chassis", items: 12, icon: "⬇" },
  { id: "brakes",    name: "Brakes & Suspension", items: 12, icon: "🔴" },
  { id: "electrical","name": "Electrical & Lighting", items: 10, icon: "⚡" },
  { id: "testdrive", name: "Test Drive",          items: 12, icon: "🏁" },
] as const;
