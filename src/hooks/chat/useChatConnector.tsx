import { useSession } from "@/hooks/auth/useSession";
import { HubConnectionBuilder } from "@microsoft/signalr";
import * as signalR from "@microsoft/signalr";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useChatDataStore from "@/stores/chat";
import { useRouter } from "next/navigation";

const useChatConnector = (orderId: string) => {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null,
  );
  const queryClient = useQueryClient();
  const { setChatData, addMessage } = useChatDataStore();
  const { accessToken } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) return;
    const connect = new HubConnectionBuilder()
      .withUrl(`https://api.upperleap.com/hub/chats`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
        accessTokenFactory: () => accessToken,
      })
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
    queryClient.refetchQueries({ queryKey: [`chat-${orderId}`] });

    return () => {
      if (connect) connect.stop();
    };
  }, [accessToken]);

  useEffect(() => {
    if (!connection || connection.state === "Disconnected") return;
    connection.invoke("Join", orderId);
    // connection.invoke("Leave", orderId);
  }, [connection, orderId, connection?.state]);

  useEffect(() => {
    if (!connection) return;
    connection
      .start()
      .then(() => {
        connection.on("onMessage", (message: string) => {
          const messageObj = JSON.parse(message);
          addMessage(messageObj);
        });
        connection.on("onOrderUpdate", () => {
          router.refresh();
        });
        connection.on("onJoin", () => {
          setChatData({
            isActive: true,
          });
        });
        connection.on("onLeave", () => {
          setChatData({
            isActive: false,
          });
        });
      })
      .catch((error) => console.log(error));
  }, [connection]);
};

export default useChatConnector;
