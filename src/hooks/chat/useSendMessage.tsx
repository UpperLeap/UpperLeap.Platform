"use client";

import React, { useState } from "react";
import { useAction } from "../api/useAction";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const useSendMessage = () => {
  const t = useTranslations();
  const { orderId } = useParams();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const { mutate: sendMessage, isPending: isSendingMessage } = useAction({
    endpoint: "/chats",
    method: "POST",
    mutationOptions: {
      onSuccess: () => setMessage(""),
    },
  });

  const { mutate: uploadImage, isPending: isUploadingImage } = useAction({
    method: "POST",
    endpoint: `/chats/${orderId}/image`,
    mutationOptions: {
      onSuccess: () => {
        setFile(null);
        setImage(null);
      },
    },
  });

  const pickImage = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 5000000) {
      toast.error(t("common.maximumSizeIs5mb"));

      return;
    }
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        setImage(reader.result as string);
      });
      reader.readAsDataURL(file);
      return;
    }
  };

  const isLoading = isSendingMessage || isUploadingImage;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim() && !file && !image) return;

    if (file && image) {
      const formData = new FormData();
      formData.append("image", file);
      uploadImage(formData);
    }

    if (message) {
      sendMessage({
        content: message,
        room: orderId,
      });
    }
  };

  return {
    message,
    setMessage,
    handleSubmit,
    pickImage,
    isLoading,
    image,
    setImage,
  };
};

export default useSendMessage;
