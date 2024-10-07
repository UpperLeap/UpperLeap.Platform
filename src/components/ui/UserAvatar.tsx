import { cn } from "@/utils/utils";
import Image from "next/image";

const UserAvatar = ({
  src,
  width,
  height,
  username,
  className,
}: {
  src: string | undefined;
  width: number;
  height: number;
  username: string | undefined;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "w-10 aspect-square bg-secondary rounded-full mobile:w-9 flex items-center justify-center font-medium uppercase text-white",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`${username}-image`}
          width={width}
          height={height}
          className={cn("rounded-full object-cover w-full h-full", className)}
        />
      ) : (
        <p>{username && username[0]}</p>
      )}
    </div>
  );
};

export default UserAvatar;
