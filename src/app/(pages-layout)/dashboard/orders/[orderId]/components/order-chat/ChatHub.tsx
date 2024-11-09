import MessagesList from "./MessagesList";
import ChatInputs from "./ChatInputs";
import { getTranslations } from "next-intl/server";
import { getChatDataById } from "@/services/chat";
import { getSession } from "@/utils/auth";

const ChatHub = async ({ orderId }: { orderId: string }) => {
  const t = await getTranslations();
  const chat = await getChatDataById(orderId);
  const session = await getSession();

  if (!chat || !session?.nameid) return null;

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <h2 className="text-foreground font-semibold py-3 px-5 border-b-1 border-foreground-secondary/20">
        {t("orders.chatHub")}
      </h2>

      <MessagesList initialChatData={chat} userId={session.nameid} />
      <ChatInputs />
    </div>
  );
};

export default ChatHub;
