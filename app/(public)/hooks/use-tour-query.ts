import { TourFilters, tourSearch } from "@/server/tours.server";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useTourQuery(
  filters: TourFilters = {},
  currency: "SAR" | "OMR"
) {
  return useInfiniteQuery({
    queryKey: ["tours", filters.country, filters.days, filters.type],
    queryFn: async ({ pageParam }) => {
      return tourSearch({
        cursor: pageParam,
        filters,
        currency,
      });
    },
    getNextPageParam: (lastPage) => {
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
}
