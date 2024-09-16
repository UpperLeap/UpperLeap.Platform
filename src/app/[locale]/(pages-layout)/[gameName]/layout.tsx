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
      <div className="z-[1] relative max-w-large mx-auto px-10 mt-10">{children}</div>
    </section>
  );
}
