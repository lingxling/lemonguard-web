// LemonGuard ships on the App Store only for now. When the Android build
// is published, set ANDROID_AVAILABLE to true — the "iOS & Android" copy
// is gated on this flag.
export const ANDROID_AVAILABLE = false;

// IOS_AVAILABLE gates whether the App Store button is a live link or a
// disabled "Coming soon" state. Flip to true and set STORE_LINKS.appStore
// to the real listing URL once the app is published on the App Store.
export const IOS_AVAILABLE = true;

export const STORE_LINKS = {
  appStore: "https://apps.apple.com/us/app/lemon-guard/id6767219162",
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
