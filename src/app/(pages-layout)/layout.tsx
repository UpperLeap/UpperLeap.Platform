import Navbar from "@/components/navbar/Navbar";
import Cover from "@/components/shared/Cover";
import Footer from "@/components/footer/Footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Cover />
      {children}
      <div className="h-[3px] w-full bg-gradient-to-r from-20% to-80% from-gray-400/90 dark:from-gray-800/90 dark:via-secondary/80 via-secondary/90 to-gray-400/90 dark:to-gray-800/90 " />
      <Footer />
    </>
  );
}
