import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function NavigationsLoading() {
  return (
    <nav
      className="z-40 w-full h-auto border-border border-b sticky top-0 inset-x-0 backdrop-blur-lg
         backdrop-saturate-150 bg-background/70"
    >
      <header className={cn("bg-white py-2")}>
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-1 lg:gap-8 px-2 sm:px-6 lg:px-8">
          <Skeleton className="h-10 w-[80px] lg:w-[100px] rounded-md" />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <div className="hidden md:flex md:gap-4">
              <Skeleton className="h-6 w-16 rounded-md" />
              <Skeleton className="h-6 w-20 rounded-md" />
              <Skeleton className="h-6 w-14 rounded-md" />
              <Skeleton className="h-6 w-18 rounded-md" />
              <Skeleton className="h-6 w-24 rounded-md" />
            </div>

            <div className="flex items-center gap-1">
              <Skeleton className="h-8 w-12 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}
