import { useTranslations } from "next-intl";
import Company from "./Company";
import Legal from "./Legal";
import Support from "./Support";
import Slogan from "./Slogan";
import Socials from "./Socials";

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16">
      <div className="max-w-large mx-auto px-5">
        <div className="flex justify-between flex-wrap gap-10">
          <Slogan />
          <Company />
          <Legal />
          <Support />
        </div>

        <div className="border-t border-foreground-secondary/30 mt-10 py-5 flex items-center justify-between flex-wrap gap-5">
          <p>
            © {currentYear} UpperLeap, {t("footer.rightsReserved")}
          </p>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
