"use client";

import React, { useState } from "react";
import { useAction } from "../api/useAction";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import useChatDataStore from "@/stores/chat";
import { useAuthStore } from "@/stores/auth";
import { Message } from "@/types/chat";

const useSendMessage = () => {
  const t = useTranslations();
  const { orderId } = useParams();
  const { setChatData, messages, loadingMessagesIds } = useChatDataStore();
  const { user } = useAuthStore();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const { mutate: sendMessage, isPending: isSendingMessage } = useAction({
    endpoint: "/chats",
    method: "POST",
    mutationOptions: {
      onSuccess: () => setMessage(""),
      onError: () => {
        setChatData({
          messages: messages.filter(
            (message) =>
              message.id !==
              `${orderId}-${user?.id}-${new Date().getTime()}-text`,
          ),
        });
      },
      onSettled: () => {
        setChatData({
          isPending: false,
          loadingMessagesIds: [],
        });
      },
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
      onError: () => {
        setChatData({
          messages: messages.filter(
            (message) =>
              message.id !==
              `${orderId}-${user?.id}-${new Date().getTime()}-image`,
          ),
        });
      },
      onSettled: () => {
        setChatData({
          isPending: false,
          loadingMessagesIds: [],
        });
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
      const newMessage = {
        content: image,
        isImage: true,
        fromUserName: user?.userName,
        userId: user?.id,
        timestamp: new Date().toISOString(),
        imageUrl: user?.imageUrl,
        id: `${orderId}-${user?.id}-${new Date().getTime()}-image`,
      } as Message;
      setChatData({
        messages: [...messages, newMessage],
        loadingMessagesIds: [...loadingMessagesIds, newMessage.id],
        isPending: true,
      });
      const formData = new FormData();
      formData.append("image", file);
      uploadImage(formData);
    }

    if (message) {
      const newMessage = {
        content: message,
        isImage: false,
        fromUserName: user?.userName,
        userId: user?.id,
        timestamp: new Date().toISOString(),
        imageUrl: user?.imageUrl,
        id: `${orderId}-${user?.id}-${new Date().getTime()}-text`,
      } as Message;
      setChatData({
        messages: [...messages, newMessage],
        loadingMessagesIds: [...loadingMessagesIds, newMessage.id],
        isPending: true,
      });
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
