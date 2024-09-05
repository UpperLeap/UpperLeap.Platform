import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../../styles/globals.css";
import Providers from "@/providers";
import { IParams } from "@/types/globals";
import Navbar from "@/components/navbar/Navbar";
import Cover from "@/components/shared/Cover";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={dmSans.className} suppressHydrationWarning={true}>
        <Providers>
          <Cover />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
