import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — LemonGuard",
  description: "How the LemonGuard used-car inspection app handles your data. Local-first, no tracking, no account required.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="May 17, 2026">
      <LegalSection heading="1. Who We Are">
        <p>
          LemonGuard (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;,
          or &ldquo;<strong>LemonGuard</strong>&rdquo;) is a used-car
          self-inspection app provided by <strong>Xiaoling Ling</strong>, an
          individual developer. This Privacy Policy explains what information the
          LemonGuard app and the website at lemonguard.app (together, the
          &ldquo;<strong>Service</strong>&rdquo;) collect, how it is used, and
          the choices you have.
        </p>
        <p>
          By using the Service, you agree to this Privacy Policy. If you do not
          agree, please do not use the Service.
        </p>
      </LegalSection>

      <LegalSection heading="2. Summary — The Short Version">
        <p>LemonGuard is built to be <strong>local-first and privacy-respecting</strong>:</p>
        <ul>
          <li><strong>No account required.</strong> You can use the Service without signing up or giving us your name or email.</li>
          <li><strong>Your inspection data stays on your device.</strong> Inspections, checklist answers, notes, and photos are stored locally in the app on your device. We do not upload them to our servers, and we cannot see them.</li>
          <li><strong>We do not run analytics, advertising, or tracking SDKs</strong> in the app.</li>
          <li>The only personal data that leaves your device is what is necessary to <strong>process in-app purchases</strong>, which is handled by Apple (or Google) and our payments provider, RevenueCat — not by us directly.</li>
        </ul>
        <p>The sections below explain this in detail.</p>
      </LegalSection>

      <LegalSection heading="3. Information We Do Not Collect">
        <p>We do <strong>not</strong> collect, store, or have access to:</p>
        <ul>
          <li>your name, email address, phone number, or postal address (unless you voluntarily email us — see Section 7);</li>
          <li>your inspection records, checklist answers, notes, or photos;</li>
          <li>your precise location, contacts, or browsing history;</li>
          <li>analytics, usage tracking, advertising identifiers, or behavioral profiles.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Information Stored Locally on Your Device">
        <p>
          The following data is created and stored <strong>only on your
          device</strong>, within the app&rsquo;s storage. We do not receive or
          have access to it:
        </p>
        <ul>
          <li><strong>Inspection data</strong> — the vehicles you add, checklist answers (Pass / Flag / Fail / Skip), scores, grades, and repair-cost estimates.</li>
          <li><strong>Notes</strong> — any text you write about an item or vehicle.</li>
          <li><strong>Photos</strong> — images you capture or attach as inspection evidence. These are stored in the app&rsquo;s storage on your device.</li>
          <li><strong>App preferences</strong> — such as your light/dark theme choice.</li>
        </ul>
        <p>
          This data remains on your device until you delete it within the app or
          delete the app itself. It may also be included in any device backup
          you create (for example, an iCloud or Google backup); those backups
          are controlled by you and your device platform, not by us.
        </p>
      </LegalSection>

      <LegalSection heading="5. Camera, Microphone, and Photo Library Permissions">
        <p>The app may ask for these device permissions so it can function:</p>
        <ul>
          <li><strong>Camera</strong> — to let you photograph vehicle issues as inspection evidence.</li>
          <li><strong>Photo Library</strong> — to let you attach existing photos to an inspection.</li>
          <li><strong>Microphone</strong> — required by the device for video capture.</li>
        </ul>
        <p>
          These permissions are used <strong>only</strong> for the features you
          trigger. Photos and any media you capture are stored locally on your
          device (see Section 4). You can grant or revoke these permissions at
          any time in your device settings; some features will not work without
          them.
        </p>
      </LegalSection>

      <LegalSection heading="6. In-App Purchases">
        <p>
          LemonGuard offers an optional one-time in-app purchase. Purchases are
          processed by the <strong>Apple App Store</strong> (or{" "}
          <strong>Google Play Store</strong>) and by our payments provider,{" "}
          <strong>RevenueCat, Inc.</strong>, which we use to validate purchases
          and unlock the app.
        </p>
        <ul>
          <li>We do <strong>not</strong> collect or store your payment-card or billing details. Those are handled by Apple or Google.</li>
          <li>To validate and restore purchases, RevenueCat and the app store process a purchase receipt and a pseudonymous app-user identifier and store-assigned identifiers. This allows the app to confirm whether you have purchased it.</li>
          <li>RevenueCat acts as our service provider for this purpose. See RevenueCat&rsquo;s privacy policy at <a href="https://www.revenuecat.com/privacy">revenuecat.com/privacy</a> and Apple&rsquo;s or Google&rsquo;s privacy policies for how they handle purchase information.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="7. If You Contact Us">
        <p>
          If you email us (for example, to send feedback or ask for support), we
          will receive your email address and whatever information you choose to
          include. We use it only to respond to you and to provide support. We
          do not use it for marketing.
        </p>
      </LegalSection>

      <LegalSection heading="8. How We Use Information">
        <p>We use the limited information described above only to:</p>
        <ul>
          <li>operate, maintain, and provide the Service and its features;</li>
          <li>process and validate in-app purchases and restore them on request;</li>
          <li>respond to your support requests; and</li>
          <li>comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell or rent personal information, and we do
          not use it for targeted advertising.
        </p>
      </LegalSection>

      <LegalSection heading="9. Sharing of Information">
        <p>We do not share personal information with third parties except:</p>
        <ul>
          <li><strong>Service providers</strong> — Apple, Google, and RevenueCat, solely to process in-app purchases as described in Section 6.</li>
          <li><strong>Legal reasons</strong> — if required by law, legal process, or to protect the rights, safety, or property of LemonGuard or others.</li>
          <li><strong>Business transfer</strong> — if the Service is involved in a merger, acquisition, or sale of assets, information may be transferred as part of that transaction, subject to this Privacy Policy.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="10. Data Retention and Deletion">
        <p>
          Because inspection data, notes, and photos are stored only on your
          device, you control them directly. To delete this data, delete the
          relevant inspections within the app, or uninstall the app to remove all
          of it.
        </p>
        <p>
          Purchase records held by Apple, Google, or RevenueCat are retained
          under those companies&rsquo; own policies.
        </p>
      </LegalSection>

      <LegalSection heading="11. Children's Privacy">
        <p>
          The Service is not directed to children under 13 (or the minimum age
          required in your jurisdiction), and we do not knowingly collect
          personal information from children. If you believe a child has provided
          us personal information, please contact us and we will take appropriate
          steps to delete it.
        </p>
      </LegalSection>

      <LegalSection heading="12. Your Privacy Rights">
        <p>
          Depending on where you live, you may have rights regarding your
          personal information — such as the right to access, correct, or delete
          it, or to object to certain processing.
        </p>
        <ul>
          <li>Because we do not collect or store your inspection data or contact details on our servers, most of your data is already under your direct control on your device.</li>
          <li>For purchase-related data, contact Apple, Google, or RevenueCat.</li>
          <li>For any request relating to information we do hold (such as an email you sent us), contact us using Section 14. We will respond as required by applicable law. We will not discriminate against you for exercising these rights.</li>
        </ul>
        <p>
          <strong>California residents:</strong> we do not &ldquo;sell&rdquo; or
          &ldquo;share&rdquo; personal information as those terms are defined
          under the CCPA/CPRA.
        </p>
      </LegalSection>

      <LegalSection heading="13. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will update the &ldquo;Last updated&rdquo; date
          above and, where appropriate, provide notice within the app or on the
          website. Your continued use of the Service after the changes take
          effect constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection heading="14. Contact Us">
        <p>
          Questions about this Privacy Policy or your information? Contact us at{" "}
          <a href="mailto:support@lemonguard.app">support@lemonguard.app</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
