import React from "react";
import BoostingNav from "./components/BoostingNav";

export default function BoostingCategoriesLayout({
  children,
  params: { gameName, locale },
}: {
  children: React.ReactNode;
  params: { gameName: string; locale: string };
}) {
  return (
    <>
      <BoostingNav gameName={gameName} locale={locale} />
      {children}
    </>
  );
}
