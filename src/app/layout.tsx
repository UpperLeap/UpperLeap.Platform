import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/providers";
import { getLocale } from "next-intl/server";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | UpperLeap",
    default: "UpperLeap",
  },
  description: " ",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={manrope.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
