import { Skeleton } from "@nextui-org/skeleton";

export default function TransactionsLoading() {
  return (
    <>
      <div className="flex items-center gap-5 ">
        <Skeleton className="w-14 aspect-square rounded-full" />
        <div className="flex flex-col gap-1">
          <Skeleton className="w-20 h-6 rounded-md" />
          <Skeleton className="w-40 h-4 rounded-md" />
        </div>
      </div>
      <div className="grid grid-cols-7 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
        <Skeleton className="col-span-2 w-full h-28 rounded-md" />
        <div className="col-span-5 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <Skeleton className="w-32 h-8 rounded-md" />
            <Skeleton className="w-48 h-8 rounded-md" />
          </div>
          <Skeleton className="w-full h-60 rounded-md" />
          <div className="flex items-center justify-between">
            <Skeleton className="w-48 h-8 rounded-md" />
            <Skeleton className="w-32 h-8 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}
