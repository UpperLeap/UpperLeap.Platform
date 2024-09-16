import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function GamePage({
  params: { gameName },
}: {
  params: { gameName: string };
}) {
  let gameData;

  try {
    gameData = await import(`../../../../data/${gameName}.ts`);
    gameData = gameData.default;
  } catch (error) {
    notFound();
  }

  const t = await getTranslations();

  return (
    <div className="min-h-[55vh]">
      <div className="flex items-center gap-5">
        <div className="p-2 rounded-full bg-background-secondary">
          <Image
            src={gameData?.logo}
            alt={""}
            width={45}
            height={45}
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{t(gameData?.mainTitle)}</h1>
          <p className="text-sm text-gray-500">{t(gameData?.subTitle)}</p>
        </div>
      </div>
    </div>
  );
}
