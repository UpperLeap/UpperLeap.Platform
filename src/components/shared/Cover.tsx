"use client";

import useCoverStore from "@/stores/cover";
import Image from "next/image";
import deadlockCover from "../../../public/deadlock-cover.jpg";

const covers = {
  "league-of-legends":
    "https://cdn.upperleap.com/games/covers/katarina.webp",
  valorant: "https://cdn.upperleap.com/games/covers/valorant.jpg",
  "counter-strike-2":
    "https://cdn.upperleap.com/games/covers/cs2.webp",
  deadlock: deadlockCover,
};

const Cover = () => {
  const { gameName } = useCoverStore();

  return (
    <div className="absolute z-[1] top-0 left-0 w-full">
      <div className="relative overflow-hidden h-[70vh]">
        <Image
          src={covers[gameName as keyof typeof covers]}
          alt="Banner"
          className="object-cover w-full h-full cover-light-up"
          width={500}
          height={300}
          priority
          style={{
            objectPosition: "0px 40%",
          }}
        />
        <div className="absolute inset-0 z-[2] -m-5 bg-gradient-to-t from-background from-25% backdrop-blur-sm via-background/90 to-background/50 dark:via-background/95 dark:to-background/80"></div>
      </div>
    </div>
  );
};

export default Cover;
