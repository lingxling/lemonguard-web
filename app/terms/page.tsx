import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — LemonGuard",
  description: "The Terms of Service governing use of the LemonGuard used-car inspection app.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="May 17, 2026">
      <LegalSection heading="1. Agreement to These Terms">
        <p>
          These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) are a
          binding legal agreement between you (&ldquo;<strong>you</strong>&rdquo;
          or &ldquo;<strong>user</strong>&rdquo;) and{" "}
          <strong>Xiaoling Ling</strong>, an individual developer
          (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;,
          or &ldquo;<strong>LemonGuard</strong>&rdquo;), governing your access
          to and use of the <strong>LemonGuard</strong> mobile application, the
          website at lemonguard.app, and any related services (together, the
          &ldquo;<strong>Service</strong>&rdquo;).
        </p>
        <p>
          By downloading, installing, or using the Service, you confirm that you
          have read, understood, and agree to be bound by these Terms and by our{" "}
          <a href="/privacy">Privacy Policy</a>, which is incorporated here by
          reference. <strong>If you do not agree, do not use the Service.</strong>
        </p>
        <p>
          You must be at least 18 years old, or the age of legal majority in
          your jurisdiction, to use the Service.
        </p>
      </LegalSection>

      <LegalSection heading="2. What LemonGuard Is — and What It Is Not">
        <p>
          LemonGuard is a <strong>self-inspection guidance tool</strong>. It
          provides a structured checklist, lets you record your own observations
          about a used vehicle, and generates a score, grade, repair-cost
          estimate, and PDF report <strong>based solely on the inputs you
          enter</strong>.
        </p>
        <p><strong>LemonGuard is not, and does not provide:</strong></p>
        <ul>
          <li>a professional vehicle inspection, appraisal, or mechanical diagnosis;</li>
          <li>the services of a licensed mechanic, dealer, or automotive expert;</li>
          <li>a recommendation, endorsement, or advice to buy, reject, or pay any particular price for any vehicle;</li>
          <li>a guarantee about the condition, history, value, safety, or fitness of any vehicle;</li>
          <li>legal, financial, or insurance advice.</li>
        </ul>
        <p>
          The score, grade, estimates, and reports are{" "}
          <strong>for your reference and convenience only</strong>. They may be
          incomplete or inaccurate, are limited by the checklist&rsquo;s scope
          and by the accuracy of the information you enter, and{" "}
          <strong>do not replace a professional pre-purchase inspection (PPI) by
          a qualified mechanic.</strong> We strongly recommend obtaining a
          professional PPI before purchasing any vehicle.
        </p>
      </LegalSection>

      <LegalSection heading="3. Your Responsibility and Assumption of Risk">
        <p>You acknowledge and agree that:</p>
        <ul>
          <li><strong>All decisions are your own.</strong> Any decision to buy, not buy, negotiate, pay a price for, or walk away from a vehicle is made solely by you, at your own discretion and risk.</li>
          <li><strong>You are responsible for the inputs.</strong> The Service&rsquo;s output depends entirely on the observations and data you enter. We do not verify them.</li>
          <li><strong>You assume all risk</strong> arising from your use of the Service and from any vehicle transaction, including the risk of undisclosed damage, mechanical failure, misrepresentation by a seller, financial loss, or any other adverse outcome.</li>
          <li><strong>Inspection has limits.</strong> Many vehicle defects — including hidden frame damage, flood damage, prior accidents, odometer fraud, and latent mechanical faults — cannot be reliably detected by a visual or self-guided inspection.</li>
          <li>You will comply with all applicable laws when inspecting a vehicle, and you will obtain the seller&rsquo;s permission before inspecting or test-driving any vehicle.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. License to Use the Service">
        <p>
          Subject to these Terms, we grant you a personal, limited,
          non-exclusive, non-transferable, revocable license to use the Service
          for your own non-commercial purposes. You may <strong>not</strong>:
        </p>
        <ul>
          <li>copy, modify, reverse-engineer, decompile, or create derivative works of the Service, except as permitted by law;</li>
          <li>resell, sublicense, rent, or commercially exploit the Service or its content;</li>
          <li>use the Service to violate any law or the rights of any third party;</li>
          <li>interfere with or disrupt the Service or attempt to gain unauthorized access to it.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Purchases, Pricing, and Refunds">
        <p>
          The Service offers an optional one-time, non-subscription in-app
          purchase that unlocks unlimited inspections and additional features.
          The first inspection is free.
        </p>
        <ul>
          <li><strong>All purchases are processed by the Apple App Store</strong> (and, where offered, the Google Play Store). We do not collect or store your payment-card details.</li>
          <li><strong>Prices</strong> are shown in the app before purchase and may change for future purchases.</li>
          <li><strong>No auto-renewal.</strong> Purchases are one-time and do not renew automatically.</li>
          <li><strong>Refunds</strong> are handled by Apple (or Google) under their respective policies. We generally cannot issue refunds directly; please contact the relevant app store. To the extent the law of your jurisdiction grants you mandatory refund or cancellation rights, nothing in these Terms limits those rights.</li>
          <li>A purchase unlocks the Service on-device for the account that bought it. You can restore a prior purchase from the Settings screen.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Your Content">
        <p>
          The Service stores your inspection data, notes, and photos. Depending
          on the app&rsquo;s configuration, this data may be stored locally on
          your device and/or in backups you control. You retain all rights to
          the content you create. You are responsible for backing up your own
          data; we are not liable for any loss of inspection data, notes, or
          photos.
        </p>
      </LegalSection>

      <LegalSection heading="7. Disclaimer of Warranties">
        <p>
          THE SERVICE IS PROVIDED <strong>&ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo;</strong>, WITHOUT WARRANTIES OF ANY KIND, WHETHER
          EXPRESS, IMPLIED, OR STATUTORY. TO THE MAXIMUM EXTENT PERMITTED BY LAW,
          WE DISCLAIM ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE,
          OR THAT ITS SCORES, ESTIMATES, OR REPORTS WILL BE ACCURATE, COMPLETE,
          OR RELIABLE.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties,
          so some of the above exclusions may not apply to you.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of Liability">
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
        <ul>
          <li>WE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATING TO YOUR USE OF — OR INABILITY TO USE — THE SERVICE, OR TO ANY VEHICLE TRANSACTION OR DECISION YOU MAKE.</li>
          <li>IN PARTICULAR, AND WITHOUT LIMITATION, WE WILL NOT BE LIABLE FOR ANY LOSS RELATED TO A VEHICLE YOU BUY, SELL, KEEP, OR REJECT — INCLUDING REPAIR COSTS, DIMINISHED VALUE, UNDISCLOSED DAMAGE, OR THE PURCHASE PRICE — EVEN IF THE SERVICE&rsquo;S SCORE, GRADE, OR REPORT INFLUENCED YOUR DECISION.</li>
          <li>OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID US FOR THE SERVICE IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) USD $20.</li>
        </ul>
        <p>
          Some jurisdictions do not allow the limitation or exclusion of
          liability for certain damages, so some of the above may not apply to
          you. Nothing in these Terms excludes liability that cannot be excluded
          under applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="9. Indemnification">
        <p>
          You agree to indemnify and hold harmless LemonGuard from any claims,
          losses, liabilities, and expenses (including reasonable legal fees)
          arising out of your use of the Service, your violation of these Terms,
          or any vehicle transaction or dispute involving you and a third party.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to the Service and These Terms">
        <p>
          We may modify, suspend, or discontinue the Service, in whole or in
          part, at any time. We may also update these Terms from time to time.
          If we make material changes, we will update the &ldquo;Last
          updated&rdquo; date above and, where appropriate, provide notice
          within the app. Your continued use of the Service after changes take
          effect constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="11. Termination">
        <p>
          We may suspend or terminate your access to the Service if you violate
          these Terms. You may stop using the Service at any time by deleting
          the app. Sections that by their nature should survive termination —
          including Sections 2, 3, 7, 8, 9, and 12 — will survive.
        </p>
      </LegalSection>

      <LegalSection heading="12. Governing Law and Dispute Resolution">
        <p>
          These Terms are governed by the laws of the State of{" "}
          <strong>Delaware</strong> and the federal laws of the United States,
          without regard to its conflict-of-laws rules.
        </p>
        <p>
          Any dispute arising out of or relating to these Terms or the Service
          will be resolved exclusively in the state or federal courts located in{" "}
          <strong>New Castle County, Delaware</strong>, and you consent to the
          personal jurisdiction of those courts.
        </p>
      </LegalSection>

      <LegalSection heading="13. Apple App Store Terms">
        <p>
          If you download the app from the Apple App Store, you acknowledge
          that:
        </p>
        <ul>
          <li>These Terms are between you and LemonGuard only, <strong>not with Apple</strong>, and Apple is not responsible for the app or its content.</li>
          <li>Apple has no obligation to provide maintenance or support for the app.</li>
          <li>Apple is not responsible for any product warranties or for addressing any claims relating to the app (including product-liability, legal/regulatory, or consumer-protection claims).</li>
          <li>Apple and its subsidiaries are <strong>third-party beneficiaries</strong> of these Terms and may enforce them against you.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="14. Miscellaneous">
        <ul>
          <li><strong>Entire agreement.</strong> These Terms and the Privacy Policy are the entire agreement between you and us regarding the Service.</li>
          <li><strong>Severability.</strong> If any provision is found unenforceable, the remaining provisions stay in effect.</li>
          <li><strong>No waiver.</strong> Our failure to enforce any provision is not a waiver of it.</li>
          <li><strong>Assignment.</strong> You may not assign these Terms; we may assign them in connection with a merger, acquisition, or sale of assets.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="15. Contact">
        <p>
          Questions about these Terms? Contact us at{" "}
          <a href="mailto:support@lemonguard.app">support@lemonguard.app</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
