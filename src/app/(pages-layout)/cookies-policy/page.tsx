import MdxLayout from "@/components/shared/MdxLayout";
import { cookiesPolicy } from "@/data/cms-markdown";
import { useTranslations } from "next-intl";

export default function CookiesPolicyPage() {
  const t = useTranslations();
  return (
    <section className="min-h-[63vh] relative z-[1] max-w-medium mx-auto px-5 py-10">
      <div className="w-fit mx-auto text-center mt-20">
        <p className="text-xs font-bold mb-5 text-primary">
          {t("cms.lastUpdated")} Oct 8th, 2024
        </p>
        <h1 className="text-5xl font-bold text-foreground">
          {t("cms.cookiesPolicy")}
        </h1>
        <p className="max-w-4xl mt-2">{t("cms.cookiesPolicyDescription")}</p>
      </div>
      <div className="mt-10">
        <MdxLayout source={cookiesPolicy} />
      </div>
    </section>
  );
}
