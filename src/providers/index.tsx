// "use client";
import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import ToasterProvider from "./ToasterProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/system";
import LenisScrollProvider from "./LenisScrollProvider";

export default async function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LenisScrollProvider>
        <NextUIProvider>
          <ReactQueryProvider>
            <ThemeProvider>
              <ToasterProvider>{children}</ToasterProvider>
            </ThemeProvider>
          </ReactQueryProvider>
        </NextUIProvider>
      </LenisScrollProvider>
    </NextIntlClientProvider>
  );
}
