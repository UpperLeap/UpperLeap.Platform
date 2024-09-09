import { useTranslations } from "next-intl";
import Link from "next/link";

const Legal = () => {
  const t = useTranslations();

  const legalLinks = [
    { name: t("footer.tos"), href: "/terms-of-service" },
    { name: t("footer.privacyPolicy"), href: "/privacy-policy" },
    { name: t("footer.cookiePolicy"), href: "/cookies-policy" },
  ];

  return (
    <div>
      <h4 className="text-foreground font-semibold text-lg mb-5">
        {t("footer.legal")}
      </h4>
      <ul className="list-none flex flex-col gap-2">
        {legalLinks.map((link) => (
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

export default Legal;
