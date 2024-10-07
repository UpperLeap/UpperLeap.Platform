"use client";

import { useTranslations } from "next-intl";
import { useAction } from "../api/useAction";
import toast from "react-hot-toast";
import { useState } from "react";
import { User } from "@/types/user";

const useUploadImage = () => {
  const t = useTranslations();
  const [newImage, setNewImage] = useState("");

  const { mutate, isPending } = useAction({
    method: "PUT",
    endpoint: "/authentication/me/image",
    mutationOptions: {
      onSuccess: (data: User) => {
        toast.success(t("settings.imageUploadedSuccess"));
        setNewImage(data.imageUrl + "?t=" + Date.now());
      },
    },
  });

  const uploadImage = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 5000000) {
      toast.error(t("common.maximumSizeIs5mb"));

      return;
    }
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      mutate(formData);
    }
  };

  return {
    uploadImage,
    isPending,
    newImage,
  };
};

export default useUploadImage;
