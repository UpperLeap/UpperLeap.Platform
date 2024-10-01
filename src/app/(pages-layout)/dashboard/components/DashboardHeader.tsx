import { useTranslations } from "next-intl";
import { BsCart4 } from "react-icons/bs";
import { IoSettings, IoSwapVertical } from "react-icons/io5";

const DashboardHeader = ({ page }: { page: string }) => {
  const t = useTranslations();

  const headerIcon = {
    orders: <BsCart4 />,
    transactions: <IoSwapVertical />,
    settings: <IoSettings />,
  };

  return (
    <div className="flex items-center gap-5 ">
      <div className="p-4 rounded-full bg-background-secondary border-1 border-foreground-secondary/20">
        <span className="text-2xl text-foreground">
          {headerIcon[page as keyof typeof headerIcon]}
        </span>
      </div>
      <div>
        <h1 className="text-2xl text-foreground font-semibold">
          {t(`dashboard.${page}.title`)}
        </h1>
        <p className="text-sm text-foreground-secondary">
          {t(`dashboard.${page}.subTitle`)}
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
