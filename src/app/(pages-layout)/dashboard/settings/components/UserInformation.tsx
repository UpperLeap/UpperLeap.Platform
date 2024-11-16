import { User } from "@/types/user";
import { useTranslations } from "next-intl";
import LanguagesList from "./LanguagesList";
import ProfileModification from "./ProfileModification";

const UserInformation = ({ user }: { user: User }) => {
  const t = useTranslations();

  const userInformation = [
    {
      title: t("settings.username"),
      value: user.userName,
    },
    {
      title: t("settings.email"),
      value: user.email,
    },
    {
      title: t("settings.userId"),
      value: `#${user.id.slice(0, 12)}`,
    },
  ];

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <div className="flex items-center justify-between py-3 px-5 border-b-1 border-foreground-secondary/20">
        <h2 className="text-foreground font-semibold">
          {t("settings.userInformation")}
        </h2>
        <ProfileModification user={user} />
      </div>
      <div className="grid grid-cols-3 px-5 medium:grid-cols-2">
        {userInformation.map((data) => (
          <div
            key={data.title}
            className="p-5 w-full max-w-[300px] flex-wrap border-b-1 border-foreground-secondary/10"
          >
            <p className="text-foreground font-medium">{data?.title}</p>
            <p
              className="mt-2 text-sm max-w-full text-ellipsis overflow-hidden"
              title={data?.value}
            >
              {data?.value}
            </p>
          </div>
        ))}
        <div className="p-5 w-full max-w-[300px] flex-wrap border-b-1 border-foreground-secondary/10">
          <p className="text-foreground font-medium">
            {t("settings.languages")}
          </p>
          <LanguagesList languages={user.languages} />
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
