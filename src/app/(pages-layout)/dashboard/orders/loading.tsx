import { Skeleton } from "@nextui-org/skeleton";

export default function OrdersLoading() {
  return (
    <>
      <div className="flex items-center gap-5 ">
        <Skeleton className="w-14 aspect-square rounded-full" />
        <div className="flex flex-col gap-1">
          <Skeleton className="w-20 h-6 rounded-md" />
          <Skeleton className="w-40 h-4 rounded-md" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="w-48 h-8 rounded-md" />
        <Skeleton className="w-32 h-8 rounded-md" />
      </div>
      <Skeleton className="w-full h-60 rounded-md" />
      <div className="flex items-center justify-between">
        <Skeleton className="w-32 h-8 rounded-md" />
        <Skeleton className="w-48 h-8 rounded-md" />
      </div>
    </>
  );
}
