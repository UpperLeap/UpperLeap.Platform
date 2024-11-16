"use client";

import { Input } from "@/components/ui/Input";
import { cn } from "@/utils/utils";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import DeleteAccountForm from "./DeleteAccountForm";
import { User } from "@/types/user";

const DeleteAccount = ({ user }: { user: User }) => {
  const t = useTranslations();
  const [isInputVisible, setIsInputVisible] = useState(false);

  return (
    <div className="p-5  border-1 border-red-500/20 rounded-lg bg-background-secondary/70 ">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            {t("settings.deleteAccount")}
          </h3>
          <p className="text-sm text-foreground-secondary max-w-xl">
            {t("settings.deleteAccountDescription")}
          </p>
        </div>
        <Button
          onPress={() => setIsInputVisible((prev) => !prev)}
          radius="sm"
          className={cn(
            "bg-red-800 text-white h-9",
            isInputVisible && "bg-default",
          )}
        >
          <span>{isInputVisible ? <IoMdArrowBack /> : <FaRegTrashCan />}</span>
          <span>
            {isInputVisible ? t("common.cancel") : t("settings.deleteAccount")}
          </span>
        </Button>
      </div>
      {isInputVisible && <DeleteAccountForm user={user} />}
    </div>
  );
};

export default DeleteAccount;
