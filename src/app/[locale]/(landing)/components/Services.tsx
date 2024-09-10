import { useTranslations } from "next-intl";
import OrbitingRanks from "./OrbitingRanks";
import { FaLock } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";

const Services = () => {
  const t = useTranslations();

  return (
    <section className="max-w-medium mx-auto my-52 px-5">
      <h2 className="text-4xl text-foreground text-center max-w-2xl mx-auto mobile:text-2xl">
        {t("landing.servicesTitle")}
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-10 mobile:grid-cols-1">
        <div className="bg-background-secondary row-span-2 p-5 rounded-xl flex flex-col gap-10">
          <OrbitingRanks />
          <div>
            <p className="text-primary text-sm font-bold">
              {t("landing.efficiency.title")}
            </p>
            <h3 className="text-foreground my-2 font-bold text-3xl">
              {t("landing.efficiency.header")}
            </h3>
            <p className="text-sm">{t("landing.efficiency.description")}</p>
          </div>
        </div>
        <div className=" bg-background-secondary col-span-1 p-5 rounded-xl relative overflow-hidden group">
          <span className="absolute right-0 -bottom-5 -rotate-[20deg] text-9xl opacity-55 group-hover:text-primary duration-500">
            <IoSpeedometerOutline />
          </span>
          <div>
            <p className="text-primary text-sm font-bold">
              {t("landing.speed.title")}
            </p>
            <h3 className="text-foreground my-2 font-bold text-3xl">
              {t("landing.speed.header")}
            </h3>
            <p className="text-sm">{t("landing.speed.description")}</p>
          </div>
        </div>
        <div className="bg-background-secondary col-span-1 p-5 rounded-xl relative overflow-hidden group">
          <span className="absolute right-0 -bottom-5 -rotate-[20deg] text-9xl opacity-55 group-hover:text-primary duration-500">
            <FaLock />
          </span>
          <div>
            <p className="text-primary text-sm font-bold">
              {t("landing.security.title")}
            </p>
            <h3 className="text-foreground my-2 font-bold text-3xl">
              {t("landing.security.header")}
            </h3>
            <p className="text-sm">{t("landing.security.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
