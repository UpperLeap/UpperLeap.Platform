import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12 sm:py-32">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="hero-title text-6xl font-bold tracking-tight text-foreground sm:text-6xl">
          {t("landing.title")}{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("landing.effortlessly")}
          </span>
        </h1>

        <p className="hero-description mt-6 text-lg leading-8 text-muted-foreground">
          {t("landing.description")}
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link 
            href="#games-list"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get Started
          </Link>
          <Link 
            href="/about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-foreground/80"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
};

export default Hero;
