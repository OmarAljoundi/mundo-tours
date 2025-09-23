"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

  const sortedFilteredPrices = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sortedPrices = [...tourPrices]
      .filter((price) => {
        const tourDate = new Date(price.date!);
        tourDate.setHours(0, 0, 0, 0);
        return tourDate >= today;
      })
      .sort(
        (a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime()
      );

    return sortedPrices;
  }, [tourPrices]);

  const formatDate = (date: Date) => {
    return (
      <span className="flex gap-1 justify-center">
        <span className="font-english">
          {format(date, "dd", { locale: ar })}
        </span>
        <span className="font-primary">
          {format(date, "MMMM", { locale: ar })}
        </span>
        <span className="font-english">
          {format(date, "yyyy", { locale: ar })}
        </span>
      </span>
    );
  };

  return (
    <div
      className="flex flex-col gap-2"
      role="region"
      aria-label="تواريخ الرحلة"
    >
      <Button
        onClick={() => setOpen(true)}
        className="max-w-fit font-primary"
        size="sm"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        اضغط لعرض التواريخ
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-4xl flex flex-col max-h-[80vh]">
          <DialogHeader className="bg-background pb-4 flex-shrink-0">
            <DialogTitle className="text-center font-secondary text-5xl">
              اختار تاريخ رحلتك
            </DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-2">
            <section aria-labelledby="dates-dialog-title">
              {sortedFilteredPrices.length > 0 ? (
                <div role="table" aria-label="قائمة تواريخ الرحلات المتاحة">
                  <div className="sticky top-0 z-10 bg-background pt-2">
                    <h2
                      className="text-2xl font-primary"
                      id="weekly-schedule"
                      dir="rtl"
                    >
                      أيام {start_day} أسبوعياً
                    </h2>
                    <Separator className="my-3" role="presentation" />
                    <div className="grid grid-cols-2 bg-gray-100 border-b border-gray-300">
                      <div className="p-3 text-center font-bold text-gray-700 font-primary">
                        بداية الرحلة
                      </div>
                      <div className="p-3 text-center font-bold text-gray-700 font-primary">
                        نهاية الرحلة
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {sortedFilteredPrices.map((price, index) => {
                      const startDate = new Date(price.date!);
                      const endDate = new Date(startDate);
                      endDate.setDate(endDate.getDate() + numberOfDays - 1);

                      return (
                        <motion.div
                          key={price.uuid}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.05,
                          }}
                          className={cn(
                            "grid grid-cols-2 border-b border-gray-200",
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          )}
                          role="row"
                          aria-label={`تاريخ رحلة ${format(
                            startDate,
                            "yyyy/MM/dd",
                            { locale: ar }
                          )}`}
                        >
                          <div className="p-3 text-center text-gray-800">
                            {formatDate(startDate)}
                          </div>
                          <div className="p-3 text-center text-gray-800">
                            {formatDate(endDate)}
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              ) : (
                <NoTripsMessage />
              )}
            </section>
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
    role="alert"
    aria-live="polite"
  >
    <Calendar className="w-16 h-16 text-[#ff2b00] mb-4" aria-hidden="true" />
    <h3 className="text-2xl font-bold text-[#ff2b00] mb-2">
      لا توجد رحلات في هذا الشهر
    </h3>
    <p className="text-gray-600">يرجى اختيار شهر آخر للعثور على رحلات متاحة</p>
  </motion.div>
);
