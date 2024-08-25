import { TProvider } from "@/types/globals";
import { DefaultToastOptions, Toaster } from "react-hot-toast";

export default function ToasterProvider({ children }: TProvider) {
  const globalToasterOptions: DefaultToastOptions = {
    duration: 2000,
    style: {
      padding: "16px",
      minWidth: "fit-content",
      maxWidth: "unset",
      textAlign: "center",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#040307",
      borderRadius: "20px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      border: `2px solid #1a1a1a`,
    },
    error: {
      style: {
        backgroundColor: "#040307",
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
