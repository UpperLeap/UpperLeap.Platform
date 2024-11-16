"use client";

import { useSession } from "@/hooks/auth/useSession";
import { HubConnectionBuilder } from "@microsoft/signalr";
import * as signalR from "@microsoft/signalr";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import logo from "../../../public/logoipsum.svg";

const useNotificationsConnector = () => {
  const t = useTranslations();
  const isNotificationAllowed =
    typeof Notification !== "undefined" &&
    Notification?.permission === "granted";
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null,
  );
  const queryClient = useQueryClient();
  const { accessToken } = useSession();

  useEffect(() => {
    if (!accessToken) return;
    const connect = new HubConnectionBuilder()
      .withUrl(`https://api.upperleap.com/hub/notifications`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
        accessTokenFactory: () => accessToken,
      })
      .withAutomaticReconnect()
      .build();

    setConnection(connect);

    return () => {
      if (connect) connect.stop();
    };
  }, [accessToken]);

  useEffect(() => {
    if (!connection || connection.state === "Disconnected") return;
    connection.invoke("Join", "Boosters");

    return () => {
      if (!connection || connection.state === "Disconnected") return;
      connection.invoke("Leave", "Boosters");
    };
  }, [connection, connection?.state]);

  useEffect(() => {
    if (!connection) return;
    connection
      .start()
      .then(() => {
        connection.on("onOrdersUpdate", () => {
          queryClient.refetchQueries({ queryKey: ["boosting-orders"] });
          if (!isNotificationAllowed) return;
          new Notification(t("orders.newOrder"), {
            body: t("orders.newOrderDescription"),
            icon: logo,
          });
        });
      })
      .catch((error) => console.log(error));
  }, [connection]);
};

export default useNotificationsConnector;
