// LemonGuard ships on the App Store only for now. When the Android build
// is published, set ANDROID_AVAILABLE to true — the "iOS & Android" copy
// is gated on this flag.
export const ANDROID_AVAILABLE = false;

// IOS_AVAILABLE gates whether the App Store button is a live link or a
// disabled "Coming soon" state. Flip to true and set STORE_LINKS.appStore
// to the real listing URL once the app is published on the App Store.
export const IOS_AVAILABLE = true;

export const APP_STORE_ID = "6767219162";

export const STORE_LINKS = {
  appStore: "https://apps.apple.com/us/app/lemon-guard/id6767219162",
  playStore: "#",
};

export const SITE_URL = "https://lemonguard.app";

// Build-time year — refreshes on every deploy, single source for all footers.
export const COPYRIGHT = `© ${new Date().getFullYear()} LemonGuard`;
