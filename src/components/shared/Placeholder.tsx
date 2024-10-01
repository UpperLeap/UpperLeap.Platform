const Placeholder = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-2 text-5xl">{icon}</span>
      <span className="mb-1 text-xl font-semibold capitalize">{title}</span>
      <span className="max-w-sm text-center">{description}</span>
    </div>
  );
};

export default Placeholder;
