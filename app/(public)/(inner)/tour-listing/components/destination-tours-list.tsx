"use client";
import React, { use } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TourCard from "@/components/shared/tour-card";
import { useAddBreadcrumb } from "@/store/bread-crumb-store";
import { useParams } from "next/navigation";
import { getToursByAttributes } from "@/server/public-query.server";
import { Illustration, NotFound } from "@/components/not-found";

export function DestinationToursList({
  dataPromise,
  currency,
}: {
  dataPromise: ReturnType<typeof getToursByAttributes>;
  currency: "SAR" | "OMR";
}) {
  const { tours, destinationName } = use(dataPromise);

  const { destination } = useParams();

  useAddBreadcrumb({
    href: `/tour-listing/${destination}`,
    label: destinationName ?? "",
  });

  if (tours.length == 0)
    return (
      <div className="relative flex flex-col w-full justify-center  bg-background p-6 md:p-10">
        <div className="relative max-w-5xl mx-auto w-full">
          <Illustration className="absolute inset-0 w-full h-[50vh] opacity-[0.04]  text-foreground" />
          <NotFound
            title="الصفحة غير موجودة"
            description="نأسف، لم نتمكن من العثور على الوجهة السياحية التي تبحث عنها. يمكنك استكشاف وجهاتنا السياحية الأخرى من الصفحة الرئيسية."
          />
        </div>
      </div>
    );

  return (
    <div className="mt-4 mb-16">
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
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
                <TourCard tour={tour} currency={currency} />
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
