import { useTranslations } from "next-intl";
import { LuSendHorizonal } from "react-icons/lu";
import { BiImageAdd } from "react-icons/bi";

const ChatInputs = () => {
  const t = useTranslations();

  return (
    <div className="py-2 px-5 border-foreground-secondary/10 border-t-1 ">
      <form className="flex items-center gap-2 flex-wrap">
        <textarea
          name="bio"
          id="bio"
          className="bg-transparent resize-none flex-grow h-10 border-1 border-foreground-secondary/20 rounded-lg p-2 focus:border-white outline-none placeholder:text-sm text-sm"
          placeholder={t("orders.typeMessage")}
        />
        <label htmlFor="image" className="cursor-pointer">
          <div className="hover:bg-default/20 p-2 rounded-lg duration-300 group h-10 px-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
            <BiImageAdd className="text-2xl group-hover:text-foreground duration-300" />
          </div>
          <input type="file" id="image" className="hidden" hidden accept="image/*" />
        </label>
        <button
          type="submit"
          className="hover:bg-default/20 p-2 rounded-lg duration-300 group h-10 px-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <LuSendHorizonal className="text-xl group-hover:text-foreground duration-300" />
        </button>
      </form>
    </div>
  );
};

export default ChatInputs;
