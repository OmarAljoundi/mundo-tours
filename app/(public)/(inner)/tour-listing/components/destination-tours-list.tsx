"use client";
import React, { use } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TourCard from "@/components/shared/tour-card";
import { useAddBreadcrumb } from "@/store/bread-crumb-store";
import { useParams } from "next/navigation";
import { getToursByAttributes } from "@/server/public-query.server";
import { useQueryState } from "nuqs";
import { NoTours } from "@/components/no-tours";

export function DestinationToursList({
  dataPromise,
  currency,
  slug,
}: {
  dataPromise: ReturnType<typeof getToursByAttributes>;
  currency: "SAR" | "OMR";
  slug: string;
}) {
  const { tours, destinationName } = use(dataPromise);
  const [from] = useQueryState("from");

  const { destination } = useParams();

  const isTourWithAir = slug == "عروض-تشمل-الطيران";
  const showContent = (isTourWithAir && from) || !isTourWithAir;

  useAddBreadcrumb({
    href: `/tour-listing/${destination}`,
    label: destinationName ?? "",
  });

  if (!showContent) return null;

  if (tours.length == 0)
    return (
      <div className="relative flex flex-col w-full bg-background p-6 md:p-10">
        <NoTours
          title="لا توجد جولات متاحة حالياً"
          description="نعمل على إضافة جولات سياحية جديدة ومثيرة. يرجى العودة قريباً لاستكشاف وجهات سياحية رائعة."
        />
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
