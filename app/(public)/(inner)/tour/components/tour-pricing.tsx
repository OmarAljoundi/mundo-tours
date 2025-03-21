import React, { useState } from "react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

interface TourPricingProps {
  tourPrices: any[];
  numberOfDays: number;
  start_day: string[];
}

export function TourPricing({
  numberOfDays,
  tourPrices,
  start_day,
}: TourPricingProps) {
  const [open, setOpen] = useState(false);

  const sortedPrices = [...tourPrices].sort(
    (a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime()
  );

  const formatDateRange = (startDate: Date) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + numberOfDays - 1);

    return (
      <div className="flex flex-col gap-1 px-2 py-3 items-center">
        <div className="flex gap-x-1 font-bold">
          <span className="font-english">
            {format(startDate, "d", { locale: ar })}
          </span>
          <span className="font-primary">
            {format(startDate, "MMMM", { locale: ar })}
          </span>
          <span className="font-english">
            {format(startDate, "yyyy", { locale: ar })}
          </span>
        </div>
        <div className="flex gap-x-1 font-bold">
          <span className="font-english">
            {format(endDate, "d", { locale: ar })}
          </span>
          <span className="font-primary">
            {format(endDate, "MMMM", { locale: ar })}
          </span>
          <span className="font-english">
            {format(endDate, "yyyy", { locale: ar })}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setOpen(true)}
        className="max-w-fit font-primary"
        size="sm"
      >
        اضغط لعرض التواريخ
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-center font-secondary text-5xl">
              اختار تاريخ رحلتك
            </DialogTitle>
          </DialogHeader>

          <div className="px-2">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  opacity: { duration: 0.3 },
                  height: { duration: 0.4, ease: "easeInOut" },
                }}
                className="overflow-hidden"
              >
                <h1 className="text-2xl my-2 font-primary">
                  أيام {start_day} أسبوعياً
                </h1>
                <Separator className="mb-3" />

                {sortedPrices.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-2">
                      {sortedPrices.map((price, index) => (
                        <motion.div
                          key={price.uuid}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={cn(
                            "rounded-lg shadow-lg overflow-hidden",
                            index % 2 !== 0 ? "bg-primary" : "bg-light-blue"
                          )}
                        >
                          <motion.div
                            className="h-full flex flex-col justify-between"
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + 0.2,
                            }}
                          >
                            <div className="flex flex-col items-end space-y-2 rtl">
                              <span className="text-white text-right font-primary text-[13px] lg:text-sm w-full">
                                {formatDateRange(new Date(price.date!))}
                              </span>
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <NoTripsMessage />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const NoTripsMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center p-8 text-center"
  >
    <Calendar className="w-16 h-16 text-[#ff2b00] mb-4" />
    <h3 className="text-2xl font-bold text-[#ff2b00] mb-2">
      لا توجد رحلات في هذا الشهر
    </h3>
    <p className="text-gray-600">يرجى اختيار شهر آخر للعثور على رحلات متاحة</p>
  </motion.div>
);
