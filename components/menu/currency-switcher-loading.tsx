"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function CurrencySwitcherLoading() {
  return (
    <div className="w-[135px] h-9 flex items-center pl-2 pr-3 rounded-md border border-input bg-background">
      <div className="flex items-center gap-x-2 w-full">
        <Skeleton className="w-6 h-6 rounded-full" />
        <Skeleton className="h-4 w-16 rounded" />
      </div>
      <div className="ml-auto">
        <Skeleton className="h-4 w-4 rounded" />
      </div>
    </div>
  );
}
