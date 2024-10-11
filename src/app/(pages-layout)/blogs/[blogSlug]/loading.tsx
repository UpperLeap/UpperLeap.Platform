import { Skeleton } from "@nextui-org/skeleton";

export default function BlogLoading() {
  return (
    <section className="min-h-[63vh] relative z-[1] max-w-[1100px] mx-auto px-5 py-10">
      <Skeleton className="w-52 h-6 rounded-lg mt-2 mx-auto" />
      <div className="flex items-center gap-3 mt-5">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div>
          <Skeleton className="w-14 h-6 rounded-lg" />
          <Skeleton className="w-16 h-3 rounded-lg" />
        </div>
      </div>
      <Skeleton className="w-40 h-9 rounded-lg mt-5" />
      <Skeleton className="w-full aspect-[16/8] rounded-lg mt-5" />
      <div className="my-10">
        <Skeleton className="w-1/3 h-3 rounded-lg" />
        <Skeleton className="w-1/6 h-3 rounded-lg" />
        <Skeleton className="w-1/2 h-3 rounded-lg" />
        <Skeleton className="w-1/5 h-3 rounded-lg" />
        <Skeleton className="w-1/4 h-3 rounded-lg" />
        <Skeleton className="w-1/2 h-3 rounded-lg" />
      </div>
    </section>
  );
}
