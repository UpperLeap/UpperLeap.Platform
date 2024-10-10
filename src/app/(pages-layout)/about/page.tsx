import MdxLayout from "@/components/shared/MdxLayout";
import { about } from "@/data/cms-markdown";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();
  //   h1: (props: any) => (
  //     <h1 className="text-3xl font-bold text-foreground" {...props} />
  //   ),
  //   h2: (props: any) => (
  //     <h2 className="text-2xl font-bold text-foreground" {...props} />
  //   ),
  //   h3: (props: any) => (
  //     <h3 className="text-xl font-bold text-foreground" {...props} />
  //   ),

  //   p: (props: any) => (
  //     <p className="" {...props} />
  //   ),
  // };

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
