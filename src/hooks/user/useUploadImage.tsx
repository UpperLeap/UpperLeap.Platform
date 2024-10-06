"use client";

import { useTranslations } from "next-intl";
import { useAction } from "../api/useAction";
import toast from "react-hot-toast";
import { useState } from "react";

const useUploadImage = () => {
  const t = useTranslations();
  const [newImage, setNewImage] = useState("");

  const { mutate, isPending } = useAction({
    method: "PUT",
    endpoint: "/authentication/me/image",
    mutationOptions: {
      onSuccess: (img: string) => {
        toast.success(t("settings.imageUploadedSuccess"));
        setNewImage(img);
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
