"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function CardsLoading({ cards = 3 }: { cards?: number }) {
  return (
    <div className="my-8 container">
      <div className="grid grid-cols-12 gap-4 lg:gap-6 px-3 xl:px-0">
        {Array.from(new Array(cards)).map((i, index) => (
          <Skeleton className={"col-span-12 lg:col-span-4"} key={index}>
            <div className="relative rounded-2xl group">
              <div className="listing-card__img aspect-[4/3]">
                <Skeleton className=" w-full rounded-2xl" />
              </div>
              <div
                className="absolute top-0 left-0 flex flex-col justify-between h-full w-full before:w-full 
                before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t 
               before:rounded-2xl  group-hover:before:transition-all group-hover:before:duration-500
                group-hover:before:blur-2xl  group-hover:after:w-full group-hover:after:absolute"
              >
                <div>
                  <Skeleton className="inline-block py-2 px-5 rounded-full bg-[var(--tertiary)] absolute top-6 left-6 w-max"></Skeleton>
                </div>
                <div className="self-end px-5 pb-5 flex flex-wrap w-full gap-4 items-center justify-between z-10">
                  <div>
                    <div className="flex gap-2 items-center">
                      <Skeleton className="text-2xl  font-semibold w-32 h-4"></Skeleton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
    </div>
  );
}
