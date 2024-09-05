import Image from "next/image";
import React from "react";

const Cover = () => {
  return (
    <div className="absolute z-[1] top-0 left-0 w-full">
      <div className="relative overflow-hidden h-[70vh]">
        <Image
          src="https://cdn.gameboost.com/games/league-of-legends/banner/katarina.webp"
          alt="Banner"
          loading="lazy"
          className="object-cover w-full h-full cover-light-up"
          width={500}
          height={300}
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
