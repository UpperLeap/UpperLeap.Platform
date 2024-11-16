"use client";

import { Input } from "@/components/ui/Input";
import { useTranslations } from "next-intl";
import LanguagesSelect from "./LanguagesSelect";
import { UserData } from "@/hooks/user/useModifyUser";
import { Dispatch, SetStateAction } from "react";
import { User } from "@/types/user";
import { formatDate } from "@/utils/utils";
import { languagesPrefixes } from "@/i18n/config";
import { useSession } from "@/hooks/auth/useSession";

const UserModificationForm = ({
  user,
  userData,
  setUserData,
  handleSubmit,
}: {
  user: User;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const t = useTranslations();
  const session = useSession();
  const isBooster =
    session?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ]?.includes("Booster");
  const nextChangeDate = new Date(user.lastUserNameChangeDate);
  nextChangeDate.setDate(nextChangeDate.getDate() + 30);
  const isUsernameDisabled = user.lastUserNameChangeDate
    ? nextChangeDate > new Date()
    : false;

  return (
    <form
      className="mt-10 flex flex-col gap-5"
      onSubmit={handleSubmit}
      id="user-modification-form"
    >
      <div className="opacity-50">
        <label htmlFor="email" className="text-foreground text-sm mb-1 block">
          {t("settings.email")}
        </label>
        <Input
          id="email"
          type="email"
          disabled
          value={user.email}
          name="email"
          placeholder={t("settings.email")}
        />
        <p className="text-foreground-secondary text-xs font-semibold mt-1">
          {t("settings.emailIsUnchangeable")}
        </p>
      </div>
      <div className={isUsernameDisabled ? "opacity-50" : "opacity-100"}>
        <label
          htmlFor="username"
          className="text-foreground text-sm mb-1 block"
        >
          {t("settings.username")}
        </label>
        <Input
          type="text"
          id="username"
          name="username"
          disabled={isUsernameDisabled}
          value={userData.userName}
          onChange={(e) =>
            setUserData({ ...userData, userName: e.target.value })
          }
          placeholder={t("settings.username")}
        />
        <p className="text-foreground-secondary text-xs font-semibold mt-1">
          <span>
            {isUsernameDisabled
              ? t("settings.usernameIsUnchangeable")
              : t("settings.userNameIsChangeableEvery")}
          </span>
          {isUsernameDisabled && (
            <span>
              {formatDate(
                nextChangeDate?.toISOString(),
                languagesPrefixes["en-US" as keyof typeof languagesPrefixes],
              )}
            </span>
          )}
        </p>
      </div>
      {isBooster && (
        <div className="w-full">
          <label htmlFor="bio" className="text-foreground text-sm mb-1 block">
            {t("settings.bio")}
          </label>
          <textarea
            name="bio"
            id="bio"
            className="bg-transparent resize-none w-full h-[90px] border-1 border-foreground-secondary/20 rounded-md p-2 focus:border-white outline-none placeholder:text-sm text-sm"
            placeholder={t("settings.bioPlaceholder")}
            value={userData.biography}
            onChange={(e) =>
              setUserData({ ...userData, biography: e.target.value })
            }
          />
        </div>
      )}
      <LanguagesSelect userData={userData} setUserData={setUserData} />
    </form>
  );
};

export default UserModificationForm;
