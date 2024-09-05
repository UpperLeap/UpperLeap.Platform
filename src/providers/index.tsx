// "use client";
import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import ToasterProvider from "./ToasterProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
// import { NextUIProvider } from "@nextui-org/system";
import LenisScrollProvider from "./LenisScrollProvider";
import NextUiProvider from "./NextUiProvider";

export default async function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LenisScrollProvider>
        <NextUiProvider>
          <ReactQueryProvider>
            <ThemeProvider attribute="class">
              <ToasterProvider>{children}</ToasterProvider>
            </ThemeProvider>
          </ReactQueryProvider>
        </NextUiProvider>
      </LenisScrollProvider>
    </NextIntlClientProvider>
  );
}
