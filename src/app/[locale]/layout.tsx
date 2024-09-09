import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../../styles/globals.css";
import Providers from "@/providers";
import { IParams } from "@/types/globals";
import Navbar from "@/components/navbar/Navbar";
import Cover from "@/components/shared/Cover";
import Footer from "@/components/footer/Footer";

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
          <div className="h-[3px] w-full bg-gradient-to-r from-20% to-80% from-gray-400/90 dark:from-gray-800/90 dark:via-secondary/80 via-secondary/90 to-gray-400/90 dark:to-gray-800/90 " />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
