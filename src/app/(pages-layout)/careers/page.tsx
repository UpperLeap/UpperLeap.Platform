import { useTranslations } from "next-intl";
import React from "react";

export default function CareersPage() {
  const t = useTranslations();

  return (
    <section className="min-h-[63vh] relative z-[1] max-w-medium mx-auto px-5 py-10">
      <div className="w-fit mx-auto text-center mt-20">
        <h1 className="text-5xl font-bold text-foreground">
          {t("cms.workWithUs.title")}
        </h1>
        <p className="max-w-4xl mt-2">{t("cms.workWithUs.description")}</p>
      </div>
      <div className="mt-20">
        <div className="max-w-[500px] h-[600px] w-full p-5 border-1 border-foreground-secondary/20 rounded-lg mx-auto" />
      </div>
    </section>
  );
}
