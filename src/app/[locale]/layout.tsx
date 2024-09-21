import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../../styles/globals.css";
import Providers from "@/providers";
import { IParams } from "@/types/globals";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpperLeap",
  description: "",
};

interface RootLayoutProps extends IParams {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={manrope.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
