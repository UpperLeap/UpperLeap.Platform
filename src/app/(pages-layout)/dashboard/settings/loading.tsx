import { Skeleton } from "@nextui-org/skeleton";

export default function SettingsLoading() {
  return (
    <>
      <div className="flex items-center gap-5 ">
        <Skeleton className="w-14 aspect-square rounded-full" />
        <div className="flex flex-col gap-1">
          <Skeleton className="w-20 h-6 rounded-md" />
          <Skeleton className="w-40 h-4 rounded-md" />
        </div>
      </div>
      <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
        <div className="col-span-2 flex flex-col gap-5">
          <Skeleton className="w-full h-36 rounded-md" />
          <Skeleton className="w-full h-20 rounded-md" />
        </div>
        <Skeleton className="col-span-1 w-full h-28 rounded-md" />
      </div>
    </>
  );
}
