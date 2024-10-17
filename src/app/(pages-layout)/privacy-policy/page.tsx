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
        <MdxLayout source={privacyPolicy} />
      </div>
    </section>
  );
}
