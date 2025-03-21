"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TourCard from "@/components/shared/tour-card";
import { useAddBreadcrumb } from "@/store/bread-crumb-store";
import { notFound, useParams } from "next/navigation";
import { QueryTourSchema } from "@/schema";

export function DestinationToursList({
  data,
}: {
  data: { tours: QueryTourSchema[]; destinationName: string | undefined };
}) {
  const { tours, destinationName } = data;

  const { destination } = useParams();

  useAddBreadcrumb({
    href: `/tour-listing/${destination}`,
    label: destinationName ?? "",
  });

  if (tours.length == 0) return notFound();

  return (
    <div className="mt-4 mb-16">
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-12 gap-x-2 gap-y-4 lg:gap-8"
        >
          {tours.map((tour) => {
            return (
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
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
