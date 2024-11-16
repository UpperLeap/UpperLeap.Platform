"use client";

import { useTranslations } from "next-intl";

const NotificationsBanner = () => {
  const t = useTranslations();
  const isNotificationAllowed =
    typeof Notification !== "undefined" &&
    Notification?.permission === "granted";

  if (isNotificationAllowed || typeof Notification === "undefined") return null;

  return (
    <div className="flex items-center justify-between flex-wrap gap-3 p-5 bg-background-secondary/50 border-1 border-foreground-secondary/10 rounded-lg">
      <p className="text-foreground font-semibold">
        {t("settings.notificationsDescription")}
      </p>
      <button
        className="text-white bg-secondary px-5 py-2 rounded-lg duration-300 hover:bg-secondary/80 active:scale-95"
        onClick={() => {
          Notification.requestPermission();
        }}
      >
        {t("settings.enableNotifications")}
      </button>
    </div>
  );
};

export default NotificationsBanner;
