import { BoostingCategories } from "@/data/valorant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const BoostingList = ({
  boostingCategories,
  gameName,
  locale,
}: {
  boostingCategories: BoostingCategories[];
  gameName: string;
  locale: string;
}) => {
  const t = useTranslations();

  return (
    <div className="flex items-center gap-5 flex-wrap medium:justify-center">
      {boostingCategories?.map((category) => (
        <Link
          key={category?.path}
          href={`/${locale}/${gameName}/${category?.path}`}
          className="p-5 border-1 active:scale-95 hover:ring-2 hover:ring-foreground-secondary/20 duration-300 border-foreground-secondary/20 rounded-lg w-60 h-64 relative flex flex-col justify-end"
        >
          <Image
            src={category?.image}
            alt={category?.name}
            width={200}
            height={200}
            className="w-full h-full object-cover absolute top-0 left-0"
            draggable={false}
          />
          <div className="relative z-[1]">
            <h3 className="text-lg font-semibold text-foreground">
              {t(category?.name)}
            </h3>
            <p className="text-xs text-foreground-secondary">
              {t(category?.description)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BoostingList;
