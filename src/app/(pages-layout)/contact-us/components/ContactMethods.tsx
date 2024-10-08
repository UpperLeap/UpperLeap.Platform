import { useTranslations } from "next-intl";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";

const ContactMethods = () => {
  const t = useTranslations();

  const contactMethods = [
    {
      icon: <HiOutlineMail />,
      key: "email",
      link: "mailto:contact@upperleap.com",
    },
    {
      icon: <MdOutlineWorkOutline />,
      key: "workWithUs",
      link: "/careers",
    },
    {
      icon: <RxDiscordLogo />,
      key: "joinCommunity",
      link: "https://discord.gg/upperleap",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-5 flex-wrap mt-20">
      {contactMethods.map((method) => (
        <div
          key={method.key}
          className="p-5 border-1 border-foreground-secondary/20 rounded-lg min-w-[340px]"
        >
          <div className="bg-primary/20 text-primary text-3xl w-fit rounded-lg p-2 mb-10">
            {method.icon}
          </div>
          <p className="text-xl font-bold text-foreground mb-1">
            {t(`cms.${method.key}.title`)}
          </p>
          <p className="text-sm text-foreground-secondary">
            {t(`cms.${method.key}.description`)}
          </p>
          <Link
            href={method.link}
            className="flex items-center gap-2 bg-background-secondary/70 border-1 border-foreground-secondary/20 w-fit px-3 text-sm py-[6px] text-foreground rounded-md hover:bg-default-50 duration-300 active:scale-90 mt-3"
          >
            {t(`cms.${method.key}.anchor`)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactMethods;
