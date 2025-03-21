import { Skeleton } from "@/components/ui/skeleton";

export function TourPricingRenderLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between mt-5">
      <div className="shadow-lg p-5 border rounded-lg">
        <div className="grid items-center justify-items-center space-y-1">
          <Skeleton className="h-10 w-10 rounded-full bg-primary/20" />
          <Skeleton className="h-5 w-28 mt-2" />
          <div className="flex items-center space-x-2 mt-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>

      <div className="shadow-lg p-5 border rounded-lg">
        <div className="grid items-center justify-items-center space-y-1">
          <Skeleton className="h-10 w-10 rounded-full bg-primary/20" />
          <Skeleton className="h-5 w-28 mt-2" />
          <div className="flex items-center space-x-2 mt-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
