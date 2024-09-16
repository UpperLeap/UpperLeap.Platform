import { notFound } from "next/navigation";

export default async function GamePage({
  params: { gameName },
}: {
  params: { gameName: string };
}) {
  let gameData;

  try {
    gameData = await import(`../../../../../data/${gameName}.ts`);
  } catch (error) {
    notFound();
  }

  console.log(gameData.default);

  return <div className="h-[70vh]">{gameName}</div>;
}
