"use client";

import { Chat } from "@/types/chat";
import { useEffect } from "react";
import { useGet } from "../api/useGet";
import useChatDataStore from "@/stores/chat";

const useChat = (initialChatData: Chat) => {
  const { setChatData } = useChatDataStore();

  const { data, isSuccess } = useGet<Chat>({
    endpoint: `/chats/room/${initialChatData.id}`,
    queryKey: [`chat-${initialChatData.id}`, initialChatData.id],
    queryOptions: {
      enabled: !!initialChatData.id,
      initialData: initialChatData,
    },
  });

  useEffect(() => {
    if (isSuccess && data) {
      setChatData({ messages: data?.messagesList || [] });
    }
  }, [isSuccess, data]);

  // return { messages, setMessages };
};

export default useChat;
