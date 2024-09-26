import React from "react";
import BoostingNav from "./components/BoostingNav";

export default function BoostingCategoriesLayout({
  children,
  params: { gameName },
}: {
  children: React.ReactNode;
  params: { gameName: string; };
}) {
  return (
    <>
      <BoostingNav gameName={gameName}  />
      {children}
    </>
  );
}
