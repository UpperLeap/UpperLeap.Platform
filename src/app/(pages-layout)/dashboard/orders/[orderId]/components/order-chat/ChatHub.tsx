import { useTranslations } from "next-intl";
import React from "react";
import MessagesList from "./MessagesList";
import ChatInputs from "./ChatInputs";

const ChatHub = () => {
  const t = useTranslations();

  const messages = [
    {
      id: "1",
      message: "Hello, how are you?",
      createdAt: new Date().toISOString(),
      senderId: "1",
    },
    {
      id: "2",
      message: "I'm fine, thank you!",
      createdAt: new Date().toISOString(),
      senderId: "2",
    },
  ];

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <h2 className="text-foreground font-semibold py-3 px-5 border-b-1 border-foreground-secondary/20">
        {t("orders.chatHub")}
      </h2>
      <MessagesList messages={messages} />
      <ChatInputs />
    </div>
  );
};

export default ChatHub;
