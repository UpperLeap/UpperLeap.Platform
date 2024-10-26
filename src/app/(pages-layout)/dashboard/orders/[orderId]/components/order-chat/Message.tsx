import { Message as TMessage } from "@/types/order";
import { cn, getHourAndMinutes } from "@/utils/utils";
import React from "react";

const Message = ({
  message,
  isSender,
}: {
  message: TMessage;
  isSender: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 text-foreground bg-default rounded-lg px-2 py-1 w-fit",
        isSender && "self-end bg-primary text-white",
      )}
    >
      <p className="text-foreground text-sm whitespace-pre-wrap">
        {message.message}
      </p>
      <p className="text-foreground-secondary/70 text-xs self-end font-semibold">
        {getHourAndMinutes(message.createdAt)}
      </p>
    </div>
  );
};

export default Message;
