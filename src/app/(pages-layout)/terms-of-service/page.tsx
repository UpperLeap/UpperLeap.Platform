import MdxLayout from "@/components/shared/MdxLayout";
import { termsOfService } from "@/data/cms-markdown";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Terms of services",
  description:
    "Welcome to UpperLeap! These Terms of Service govern your relationship with us.",
};

export default function TermsOfServicePage() {
  const t = useTranslations();
  return (
    <section className="min-h-[63vh] relative z-[1] max-w-medium mx-auto px-5 py-10">
      <div className="w-fit mx-auto text-center mt-20">
        <p className="text-xs font-bold mb-5 text-primary">
          {t("cms.lastUpdated")} Oct 8th, 2024
        </p>
        <h1 className="text-5xl font-bold text-foreground">
          {t("cms.termsOfService")}
        </h1>
        <p className="max-w-4xl mt-2">{t("cms.termsOfServiceDescription")}</p>
      </div>
      <div className="mt-10">
      <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using UpperLeap services (available at https://upperleap.com), you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p>
            UpperLeap provides game boosting services for various online multiplayer games. Our services include, but are not limited to, rank boosting, win boosting, and coaching services. We act as an intermediary connecting clients with skilled players (boosters) who perform these services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Eligibility and Account</h2>
          <p>
            You must be at least 18 years old to use UpperLeap services. By using our services, you warrant that you are 18 years of age or older. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. General Rules of Platform Use</h2>
          <p>
            When using UpperLeap, users agree to:
          </p>
          <ul className="list-disc pl-6">
            <li>Provide accurate and complete information when creating an account</li>
            <li>Use the platform for its intended purpose of game boosting and coaching services</li>
            <li>Communicate respectfully with boosters, coaches, and other users</li>
            <li>Not engage in any activity that could compromise the integrity of the boosting process</li>
            <li>Report any suspicious activity or violations of these terms</li>
            <li>Not use the platform for any illegal activities or to violate any laws</li>
            <li>Respect the intellectual property rights of UpperLeap and other users</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. User-Generated Content</h2>
          <p>
            UpperLeap allows users to generate certain content, including but not limited to chat messages, profile biographies, and profile pictures. By submitting such content, you grant UpperLeap a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute the content for the purpose of providing and improving our services.
          </p>
          <p className="mt-2">
            You are solely responsible for your user-generated content and the consequences of posting or publishing it. UpperLeap reserves the right to remove any content that violates these terms or is deemed inappropriate.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">6. Payment and Refunds</h2>
          <p>
            All payments are processed securely through our payment processor, LemonSqueezy. UpperLeap may, at its sole discretion, issue refunds for services. Refunds are not guaranteed and are handled on a case-by-case basis.
          </p>
          <p className="mt-2">
            Refund requests must be submitted via email to contact@upperleap.com. However, once a booster or coach has been assigned to your order, we cannot process a refund. UpperLeap reserves the right to make final decisions on all refund requests.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p>
            UpperLeap is not responsible for any actions taken by game publishers against user accounts as a result of using our services. Users acknowledge that using boosting services may violate the terms of service of certain games and accept all associated risks.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
          <p>
            All content on UpperLeap, including but not limited to text, graphics, logos, and software, is the property of UpperLeap and protected by copyright laws. Users may not reproduce, distribute, or create derivative works without our express consent.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination of Service</h2>
          <p>
            UpperLeap reserves the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page. Continued use of the service after any such changes shall constitute your consent to such changes.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            Email: <a href="mailto:legal@upperleap.com" className="text-blue-600 hover:underline">legal@upperleap.com</a>
          </p>
        </section>
      </div>
    </section>
  );
}
