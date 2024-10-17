import MdxLayout from "@/components/shared/MdxLayout";
import { about } from "@/data/cms-markdown";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "About us",
  description:
    "We are a team of gamers who are passionate about helping others achieve their gaming goals. We offer a wide range of services to help you with your gaming needs.",
};

export default function AboutPage() {
  const t = useTranslations();

  return (
    <section className="min-h-[63vh] relative z-[1] max-w-medium mx-auto px-5 py-10">
      <div className="w-fit mx-auto text-center mt-20">
        <p className="text-xs font-bold mb-5 text-primary">
          {t("cms.lastUpdated")} Oct 8th, 2024
        </p>
        <h1 className="text-5xl font-bold text-foreground">
          {t("cms.aboutUs")}
        </h1>
        <p className="max-w-4xl mt-2">{t("cms.aboutUsDescription")}</p>
      </div>
      <div className="mt-10">
        <MdxLayout source={about} />
      </div>
    </section>
  );
}
