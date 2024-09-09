import { useTranslations } from "next-intl";
import Link from "next/link";

const Company = () => {
  const t = useTranslations();

  const companyLinks = [
    { name: t("footer.aboutUs"), href: "/about" },
    { name: t("footer.workWithUs"), href: "/careers" },
    { name: t("footer.blogs"), href: "/blogs" },
  ];

  return (
    <div>
      <h4 className="text-foreground font-semibold text-lg mb-5">
        {t("footer.company")}
      </h4>
      <ul className="list-none flex flex-col gap-2">
        {companyLinks.map((link) => (
          <li
            key={link.name}
            className="hover:text-foreground duration-300 hover:translate-x-1"
          >
            <Link href={link.href}>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
