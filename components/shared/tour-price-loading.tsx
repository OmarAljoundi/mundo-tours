import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function TourPriceLoading() {
  return (
    <div className="text-primary flex items-center gap-1">
      <Skeleton className="h-8 w-24 rounded-md" />
      <Skeleton className="h-5 w-5 rounded-md" />
    </div>
  );
}
