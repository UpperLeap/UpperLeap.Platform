"use client";

import { Message as TMessage } from "@/types/chat";
import { cn, getHourAndMinutes } from "@/utils/utils";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const Message = ({
  message,
  isSender,
}: {
  message: TMessage;
  isSender: boolean;
}) => {
  return (
    <div className={cn("flex gap-1", isSender && "flex-row-reverse")}>
      {message.imageUrl && (
        <Tooltip content={message.fromUserName} size="sm" radius="sm">
          <Image
            src={message.imageUrl}
            alt="image"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
        </Tooltip>
      )}
      <div
        className={cn(
          "flex flex-col gap-1 text-foreground bg-default rounded-lg px-2 py-1 w-fit max-w-[85%] overflow-hidden",
          isSender && "self-end bg-primary/70 text-white",
        )}
      >
        {message.isImage && message.content ? (
          <Image
            src={message.content}
            alt="image"
            width={160}
            height={160}
            className="max-h-60 w-auto object-cover rounded-lg"
          />
        ) : (
          <p className="text-foreground text-sm whitespace-pre-wrap">
            {message.content}
          </p>
        )}
        <div className="flex items-center gap-1 text-foreground-secondary/70 self-end text-xs">
          <p className=" font-semibold">
            {getHourAndMinutes(message.timestamp)}
          </p>
          {isSender && (
            <span>
              <FaCheck />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
