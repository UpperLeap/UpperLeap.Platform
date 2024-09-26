import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="max-w-medium mx-auto px-5">
      <h1 className="text-foreground text-5xl font-bold mx-auto w-fit mb-4 hero-title text-center mobile:text-3xl">
        {t("landing.title")}
        <span className="text-primary">{t("landing.effortlessly")}</span>
      </h1>
      <p className="max-w-3xl mx-auto text-center hero-description mobile:text-sm">
        {t("landing.description")}
      </p>
    </section>
  );
};

export default Hero;
