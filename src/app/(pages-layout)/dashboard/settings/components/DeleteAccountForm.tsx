"use client";

import { Input } from "@/components/ui/Input";
import useDeleteAccount from "@/hooks/user/useDeleteAccount";
import { User } from "@/types/user";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

const DeleteAccountForm = ({ user }: { user: User }) => {
  const t = useTranslations();
  const { handleSubmit, isPending, username, setUsername } =
    useDeleteAccount(user);

  return (
    <>
      <div className="h-[1px] my-5 w-full bg-red-500/20" />
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="font-medium text-foreground bg-default/20 border-1 border-foreground-secondary/20 p-2 px-4 rounded w-fit text-sm mb-2">
          {user.userName}
        </div>
        <div>
          <label htmlFor="username" className="text-sm mb-1 block">
            {t("settings.username")}
          </label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder={t("settings.rewriteYourUsername")}
          />
        </div>
        <Button
          className="bg-red-800 text-white h-9 self-end"
          isDisabled={isPending || !username || username !== user.userName}
          isLoading={isPending}
          radius="sm"
          type="submit"
        >
          {t("common.delete")}
        </Button>
      </form>
    </>
  );
};

export default DeleteAccountForm;
