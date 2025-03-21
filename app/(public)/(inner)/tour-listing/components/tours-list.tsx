"use client";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QueryTourSchema } from "@/schema";
import TourCard from "@/components/shared/tour-card";
import { TourFilters } from "@/server/tours.server";
import { useTourQuery } from "../../../hooks/use-tour-query";
import { CardsLoading } from "@/components/cards-loading";

export function ToursList() {
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();

  const filters = useMemo<TourFilters>(() => {
    return {
      country: searchParams.get("country") || undefined,
      days: searchParams.get("days") || undefined,
      type: searchParams.get("type") || undefined,
      maxprice: searchParams.get("maxprice")
        ? parseInt(searchParams.get("maxprice") as string, 10)
        : undefined,
    };
  }, [searchParams]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useTourQuery(filters);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const tours = useMemo(() => {
    return data?.pages.flatMap((page) => page.tours) || [];
  }, [data]);

  if (isError) {
    return <div>Error loading tours: {error.message}</div>;
  }

  return (
    <div className="mt-4 mb-16">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardsLoading />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-12 gap-x-2 gap-y-4 lg:gap-8"
          >
            {tours.map((tour, index) => {
              // Only attach the ref to the last item
              const isLastItem = index === tours.length - 1;
              return (
                <TourContent
                  ref={isLastItem ? ref : null}
                  key={tour.id}
                  {...(tour as unknown as QueryTourSchema)}
                />
              );
            })}

            {isFetchingNextPage && (
              <div className="col-span-12 flex justify-center py-4">
                <CardsLoading />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const TourContent = React.forwardRef<HTMLElement, QueryTourSchema>(
  (tour, ref) => {
    const content = ref ? (
      <motion.article
        className="col-span-12 sm:col-span-6 xl:col-span-4 px-3 xl:px-0"
        key={tour.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <TourCard tour={tour} />
      </motion.article>
    ) : (
      <motion.article
        className="col-span-12 sm:col-span-6 xl:col-span-4 px-3 xl:px-0"
        key={tour.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <TourCard tour={tour} />
      </motion.article>
    );
    return content;
  }
);
