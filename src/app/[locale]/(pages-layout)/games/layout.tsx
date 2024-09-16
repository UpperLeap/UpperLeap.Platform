import React from "react";
import GameNav from "./components/GameNav";

export default function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <section>
      <GameNav />
      <div className="z-[1] relative">{children}</div>
    </section>
  );
}
