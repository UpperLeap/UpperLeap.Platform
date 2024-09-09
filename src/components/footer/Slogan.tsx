import Link from "next/link";
import Logo from "../shared/Logo";
import { useTranslations } from "next-intl";

const Slogan = () => {
  const t = useTranslations();

  return (
    <div>
      <Link href="/" className="max-w-[201px] w-full">
        <Logo />
      </Link>
      <p className="text-foreground text-xl font-semibold mt-5">
        {t("footer.title")}
      </p>
      <p>{t("footer.subTitle")}</p>
    </div>
  );
};

export default Slogan;
