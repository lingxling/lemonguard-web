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
