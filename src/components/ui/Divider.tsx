import { twMerge } from "tailwind-merge";

type DividerProps = {
  text: string;
  className?: string;
};

const Divider = ({ text, className }: DividerProps) => {
  return (
    <div className={twMerge("relative w-full", className)}>
      <p className="mx-auto w-fit bg-background px-2 text-center capitalize text-foreground relative z-[1]">
        {text}
      </p>
      <span className="absolute left-1/2 top-1/2 z-[0] h-[1px] w-full -translate-x-1/2 -translate-y-1/2 bg-gray-400/80"></span>
    </div>
  );
};

export default Divider;
