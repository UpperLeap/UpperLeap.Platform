"use client";

import Message from "./Message";
import { Chat } from "@/types/chat";
import useChat from "@/hooks/chat/useChat";
import useChatConnector from "@/hooks/chat/useChatConnector";
import useChatDataStore from "@/stores/chat";
import { useEffect, useRef } from "react";

const MessagesList = ({
  initialChatData,
  userId,
}: {
  initialChatData: Chat;
  userId: string;
}) => {
  useChat(initialChatData);
  useChatConnector(initialChatData.id);
  const { messages } = useChatDataStore();
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop += 10000; 
    }
  }, [messages]);

  return (
    <div ref={messagesRef} className="flex flex-col w-full p-5 gap-2 max-h-[400px] overflow-y-auto">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          isSender={message.userId === userId}
        />
      ))}
    </div>
  );
};

export default MessagesList;
