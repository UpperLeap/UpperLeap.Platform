import { cn } from "@/utils/utils";

const Placeholder = ({
  icon,
  title,
  description,
  size = "lg",
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  size?: "lg" | "md" | "sm";
}) => {
  const fontSize = {
    lg: {
      icon: "text-5xl",
      title: "text-xl",
      description: "max-w-sm",
    },
    md: {
      icon: "text-3xl",
      title: "text-lg",
      description: "max-w-sm",
    },
    sm: {
      icon: "text-xl",
      title: "text-base",
      description: "max-w-sm text-sm",
    },
  };

  return (
    <div className="flex flex-col items-center">
      <span className={cn("mb-2", fontSize[size].icon)}>{icon}</span>
      <span
        className={cn("mb-1 font-semibold capitalize", fontSize[size].title)}
      >
        {title}
      </span>
      <span className={cn("max-w-sm text-center", fontSize[size].description)}>
        {description}
      </span>
    </div>
  );
};

export default Placeholder;
