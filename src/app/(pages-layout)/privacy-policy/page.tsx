import MdxLayout from "@/components/shared/MdxLayout";
import { privacyPolicy } from "@/data/cms-markdown";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from us.",
};

export default function PrivacyPolicyPage() {
  const t = useTranslations();

  return (
    <section className="min-h-[63vh] relative z-[1] max-w-medium mx-auto px-5 py-10">
      <div className="w-fit mx-auto text-center mt-20">
        <p className="text-xs font-bold mb-5 text-primary">
          {t("cms.lastUpdated")} Oct 8th, 2024
        </p>
        <h1 className="text-5xl font-bold text-foreground">
          {t("cms.privacyPolicy")}
        </h1>
        <p className="max-w-4xl mt-2">{t("cms.privacyPolicyDescription")}</p>
      </div>
      <div className="mt-10">
        <section className="prose dark:prose-invert max-w-none space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Commitment to Privacy</h2>
            <p>
              At UpperLeap (accessible via https://upperleap.com), we take the protection of your personal data seriously.
              This document outlines our practices regarding data collection, usage, and protection measures.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Protection Rights Under GDPR</h2>
            <p>
              As the Data Controller for your information, UpperLeap processes personal data based on:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contractual necessity for service delivery</li>
              <li>Explicit user consent</li>
              <li>Legitimate business interests</li>
              <li>Legal compliance requirements</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p>European Economic Area (EEA) residents are entitled to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and modify their personal data</li>
              <li>Request data deletion</li>
              <li>Limit data processing</li>
              <li>Data portability</li>
              <li>Withdraw previous consent</li>
              <li>Object to data processing</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Collection & Usage</h2>
            <p>
              We collect standard technical information through log files, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP addresses</li>
              <li>Browser specifications</li>
              <li>Access timestamps</li>
              <li>Navigation patterns</li>
              <li>Technical interaction data</li>
            </ul>
            <p>
              This information helps us improve our services and user experience while maintaining security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Cookie Usage</h2>
            <p>
              UpperLeap uses cookies to enhance user experience and analyze service usage.
              You can manage cookie preferences through your browser settings.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
            <p>
              Our advertising partners may use their own tracking technologies.
              While we carefully select our partners, we recommend reviewing their respective privacy policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Age Restrictions</h2>
            <p>
              Our services are not intended for users under 13 years of age.
              We do not knowingly collect data from children under 13.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p>
              For privacy-related inquiries or to exercise your data rights, please contact us at:
            </p>
            <p className="not-prose">
              <a href="mailto:contact@upperleap.com" className="text-primary hover:underline">
                contact@upperleap.com
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
            <p>
              We may update this privacy policy to reflect changes in our practices or legal requirements.
              Continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
