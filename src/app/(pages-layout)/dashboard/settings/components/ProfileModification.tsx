"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { User } from "@/types/user";
import { useTranslations } from "next-intl";
import { CiEdit } from "react-icons/ci";
import UserImage from "./UserImage";
import UserModificationForm from "./UserModificationForm";
import useModifyUser from "@/hooks/user/useModifyUser";
import { Button } from "@nextui-org/button";

const ProfileModification = ({ user }: { user: User }) => {
  const t = useTranslations();
  const { isOpen, userData, setUserData, handleSubmit, isPending, setIsOpen } =
    useModifyUser(user);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-background/60 z-[2]" />
      )}
      <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <div className="flex items-center gap-1 text-foreground text-sm px-2 py-1 rounded-md active:scale-90 border-1 border-foreground-secondary/20 bg-foreground-secondary/10 hover:bg-foreground-secondary/20 duration-300">
            <span className="text-lg">
              <CiEdit />
            </span>
            <span>{t("settings.editProfile")}</span>
          </div>
        </SheetTrigger>
        <SheetContent className="w-[550px] mobile:w-[350px] flex flex-col justify-between">
          <div>
            <SheetHeader className="text-left">
              <SheetTitle>{t("settings.editProfile")}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-5 mt-10">
              <UserImage user={user} />
              <UserModificationForm
                user={user}
                userData={userData}
                setUserData={setUserData}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
          <SheetFooter>
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
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProfileModification;
