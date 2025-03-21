import React from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PlusCircle } from "lucide-react";

const LoadingSkeleton = () => {
  return (
    <div className="w-full space-y-6">
      <div className="flex justify-end items-center w-full">
        <Button variant="outline" size="sm" disabled className="gap-1">
          <PlusCircle className="h-4 w-4" />
          <Skeleton className="h-4 w-12" />
        </Button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 h-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-lg border overflow-hidden">
            <div className="p-4 space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="p-4 border-t flex justify-between">
              <Skeleton className="h-8 w-20 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
