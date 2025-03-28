import { SearchParams } from "nuqs";
import React from "react";
import { loadSearchParams } from "../lib/tour-lising-search-params";
import { cookies } from "next/headers";
import { tourSearch } from "@/server/tours.server";
import { ToursList } from "./tours-list";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function ToursListServer({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const queryClient = getQueryClient();

  const { country, days, type } = await loadSearchParams(searchParams);
  const localCookies = await cookies();
  const currency =
    (localCookies.get("currency")?.value as "SAR" | "OMR") || "SAR";

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["tours", country, days, type],
    queryFn: async ({ pageParam }) => {
      return tourSearch({
        cursor: pageParam,
        currency,
        filters: {
          country,
          days,
          type,
        },
      });
    },
    getNextPageParam: (lastPage: any) => {
      if (!lastPage.tours || lastPage.tours.length === 0) {
        return undefined;
      }

      if (lastPage.nextCursor === null || lastPage.nextCursor === undefined) {
        return undefined;
      }

      return lastPage.nextCursor;
    },
    initialPageParam: 0,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursList currency={currency} />
    </HydrationBoundary>
  );
}
