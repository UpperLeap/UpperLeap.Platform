import MessagesList from "./MessagesList";
import ChatInputs from "./ChatInputs";
import { getTranslations } from "next-intl/server";
import { getChatDataById } from "@/services/chat";
import { getSession } from "@/utils/auth";
import ActiveState from "./ActiveState";
import Link from "next/link";

const ChatHub = async ({
  orderId,
  isOrderCompleted,
}: {
  orderId: string;
  isOrderCompleted: boolean;
}) => {
  const t = await getTranslations();
  const chat = await getChatDataById(orderId);
  const session = await getSession();

  if (!chat || !session?.nameid) return null;

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg relative">
      <h2 className="text-foreground font-semibold py-3 px-5 border-b-1 border-foreground-secondary/20">
        {t("orders.chatHub")}
      </h2>
      <ActiveState />
      <MessagesList initialChatData={chat} userId={session.nameid} />
      {isOrderCompleted ? (
        <div className="py-2 px-5 border-foreground-secondary/10 border-t-1 text-green-700 dark:text-green-500 flex items-center gap-1">
          <span>{t("orders.boosterDeclaredCompleted")}</span>
          <Link href="/contact-us" className="underline">
            {t("orders.contactSupport")}
          </Link>
          <span>{t("orders.orReportOrder")}</span>
        </div>
      ) : (
        <ChatInputs />
      )}
    </div>
  );
};

export default ChatHub;
