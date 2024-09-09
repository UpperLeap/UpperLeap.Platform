import OrbitingCircles from "@/components/ui/orbiting-circles";
import radiant from "../../../../../public/Radiant.png";
import immortal from "../../../../../public/Immortal_3.png";
import challenger from "../../../../../public/Challenger.png";
import grandmaster from "../../../../../public/Grandmaster.png";
import Image from "next/image";

const OrbitingRanks = () => {
  return (
    <div className="relative flex h-[340px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap opacity-50 bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Pros
      </span>

      <OrbitingCircles
        className="size-[45px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Image
          src={radiant}
          className="w-10 h-10 object-cover"
          width={20}
          height={20}
          alt="Radiant"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[45px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image
          src={immortal}
          className="w-10 h-10 object-cover"
          width={20}
          height={20}
          alt="Radiant"
        />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={150}
        duration={20}
        reverse
      >
        <Image
          src={challenger}
          className="w-10 h-10 object-cover"
          width={20}
          height={20}
          alt="Radiant"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={150}
        duration={20}
        delay={20}
        reverse
      >
        <Image
          src={grandmaster}
          className="w-10 h-10 object-cover"
          width={20}
          height={20}
          alt="Radiant"
        />
      </OrbitingCircles>
    </div>
  );
};

export default OrbitingRanks;
