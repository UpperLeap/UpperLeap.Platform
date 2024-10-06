import { Input } from "@/components/ui/Input";
import { useTranslations } from "next-intl";
import LanguagesSelect from "./LanguagesSelect";
import { UserData } from "@/hooks/user/useModifyUser";
import { Dispatch, SetStateAction } from "react";

const UserModificationForm = ({
  email,
  userData,
  setUserData,
  handleSubmit,
}: {
  email: string;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const t = useTranslations();

  return (
    <form
      className="mt-10 flex flex-col gap-5"
      onSubmit={handleSubmit}
      id="user-modification-form"
    >
      <div>
        <Input
          type="email"
          className="opacity-50"
          disabled
          value={email}
          name="email"
          placeholder={t("settings.email")}
        />
        <p className="text-foreground-secondary text-xs font-semibold opacity-50 mt-1">
          {t("settings.emailIsUnchangeable")}
        </p>
      </div>
      <Input
        type="text"
        name="username"
        value={userData.userName}
        onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
        placeholder={t("settings.username")}
      />
      <textarea
        name="bio"
        id="bio"
        className="bg-transparent resize-none h-[90px] border-1 border-foreground-secondary/20 rounded-md p-2 focus:border-white outline-none placeholder:text-sm text-sm"
        placeholder={t("settings.bioPlaceholder")}
        value={userData.biography}
        onChange={(e) =>
          setUserData({ ...userData, biography: e.target.value })
        }
      />
      <LanguagesSelect userData={userData} setUserData={setUserData} />
    </form>
  );
};

export default UserModificationForm;
