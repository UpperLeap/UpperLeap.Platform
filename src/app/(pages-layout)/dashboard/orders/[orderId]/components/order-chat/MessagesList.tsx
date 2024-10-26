import type { Message as TMessage } from "@/types/order";
import React from "react";
import Message from "./Message";

const MessagesList = ({ messages }: { messages: TMessage[] }) => {
  return (
    <div className="flex flex-col w-full p-5">
      {messages.map((message) => (
        <Message key={message.id} message={message} isSender={message.senderId === "1"} />
      ))}
    </div>
  );
};

export default MessagesList;
