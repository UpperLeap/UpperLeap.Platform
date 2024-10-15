"use client";

import { TProvider } from "@/types/globals";
import { useTheme } from "next-themes";
import { DefaultToastOptions, Toaster } from "react-hot-toast";

export default function ToasterProvider({ children }: TProvider) {
  const { theme } = useTheme();

  const globalToasterOptions: DefaultToastOptions = {
    duration: 2000,
    style: {
      padding: "16px",
      minWidth: "fit-content",
      maxWidth: "unset",
      textAlign: "center",
      fontWeight: "bold",
      color: theme === "dark" ? "#fff" : "#000",
      backgroundColor: theme === "dark" ? "#040307" : "#F9F8FC",
      borderRadius: "20px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      border: `2px solid ${theme === "dark" ? "#1a1a1a" : "#f7f7f9"}`,
    },
    error: {
      style: {
        backgroundColor: theme === "dark" ? "#040307" : "#F9F8FC",
      },
    },
  };

  return (
    <>
      <Toaster position="bottom-right" toastOptions={globalToasterOptions} />
      {children}
    </>
  );
}
