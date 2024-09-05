import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="max-w-large mx-auto">
      <h1 className="text-foreground text-5xl font-bold mx-auto w-fit mb-4 flex items-center gap-2 hero-title">
        {t("landing.title")}
        <span className="text-primary">{t("landing.effortlessly")}</span>
      </h1>
      <p className="max-w-3xl mx-auto text-center hero-description">
        {t("landing.description")}
      </p>
    </section>
  );
};

export default Hero;
