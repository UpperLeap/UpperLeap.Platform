"use client";

import { useTranslations } from "next-intl";
import { LuSendHorizonal } from "react-icons/lu";
import { BiImageAdd } from "react-icons/bi";
import useSendMessage from "@/hooks/chat/useSendMessage";
import { IoClose } from "react-icons/io5";
import { PiSpinnerBall } from "react-icons/pi";

const ChatInputs = () => {
  const t = useTranslations();
  const {
    message,
    setMessage,
    handleSubmit,
    pickImage,
    isLoading,
    image,
    setImage,
  } = useSendMessage();

  return (
    <div className="py-2 px-5 border-foreground-secondary/10 border-t-1">
      <form onSubmit={handleSubmit}>
        {image && (
          <div className="mb-2">
            <div className="w-20 h-20 relative">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                type="button"
                className="absolute -top-1 -right-1 bg-default p-0.5 rounded-full"
                onClick={() => setImage(null)}
              >
                <IoClose className="text-red-500" />
              </button>
            </div>
          </div>
        )}
        <div className="flex items-center gap-2 flex-wrap">
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent resize-none flex-grow h-10 border-1 border-foreground-secondary/20 rounded-lg p-2 focus:border-white outline-none placeholder:text-sm text-sm"
            placeholder={t("orders.typeMessage")}
            disabled={isLoading}
          />
          <label htmlFor="image" className="cursor-pointer">
            <div className="hover:bg-default/20 p-2 rounded-lg duration-300 group h-10 px-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
              <BiImageAdd className="text-2xl group-hover:text-foreground duration-300" />
            </div>
            <input
              type="file"
              id="image"
              className="hidden"
              hidden
              accept="image/*"
              onChange={(e) => pickImage(e.target.files?.[0])}
              disabled={isLoading}
            />
          </label>
          <button
            type="submit"
            disabled={isLoading || (!message.trim() && !image)}
            className="hover:bg-default/20 p-2 rounded-lg duration-300 group h-10 px-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <PiSpinnerBall className="animate-spin text-xl" />
            ) : (
              <LuSendHorizonal className="text-xl group-hover:text-foreground duration-300" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInputs;
