"use client";

import { User } from "@/types/user";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useAction } from "../api/useAction";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export type UserData = {
  userId: string;
  userName: string;
  biography: string;
  languages: string[];
};

const useModifyUser = (user: User) => {
  const t = useTranslations();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    userId: user.id || "",
    userName: user.userName || "",
    biography: user.biography || "",
    languages: user.languages || [],
  });

  const { mutate, isPending } = useAction({
    method: "PUT",
    endpoint: "/authentication/me",
    mutationOptions: {
      onSuccess: () => {
        toast.success(t("settings.profileUpdatedSuccessfully"));
        setIsOpen(false);
        router.refresh();
      },
    },
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(userData);
  };

  return { userData, setUserData, isOpen, handleSubmit, isPending, setIsOpen };
};

export default useModifyUser;
