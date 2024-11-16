"use client";

import { User } from "@/types/user";
import { useTranslations } from "next-intl";
import { CiEdit } from "react-icons/ci";
import UserImage from "./UserImage";
import UserModificationForm from "./UserModificationForm";
import useModifyUser from "@/hooks/user/useModifyUser";
import { Button } from "@nextui-org/button";
import { cn } from "@/utils/utils";

const ProfileModification = ({ user }: { user: User }) => {
  const t = useTranslations();
  const { isOpen, userData, setUserData, handleSubmit, isPending, setIsOpen } =
    useModifyUser(user);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 text-foreground text-sm px-2 py-1 rounded-md active:scale-90 border-1 border-foreground-secondary/20 bg-foreground-secondary/10 hover:bg-foreground-secondary/20 duration-300"
      >
        <span className="text-lg">
          <CiEdit />
        </span>
        <span>{t("settings.editProfile")}</span>
      </button>
      {isOpen && (
        <div
          className="fixed bg-black/50 w-dvw h-dvh left-0 top-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={cn(
          "fixed bg-background overflow-y-auto w-[550px] mobile:w-[350px] h-dvh right-0 top-0 z-50 duration-300 border-l-2 border-foreground-secondary/30 flex flex-col justify-between gap-2 p-5",
          isOpen ? "right-0" : "-right-[550px] mobile:-right-[350px]",
        )}
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-foreground font-semibold text-2xl mb-10">
            {t("settings.editProfile")}
          </h2>
          <UserImage user={user} />
          <UserModificationForm
            user={user}
            userData={userData}
            setUserData={setUserData}
            handleSubmit={handleSubmit}
          />
        </div>
        <div>
          <Button
            type="submit"
            form="user-modification-form"
            isLoading={isPending}
            disabled={isPending}
            className="self-end text-white"
            color="secondary"
            radius="sm"
          >
            {t("common.save")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfileModification;
