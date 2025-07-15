import React, { useMemo, useState } from "react";
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
  const formatDateRange = (startDate: Date) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + numberOfDays - 1);

    return (
      <time
        dateTime={startDate.toISOString()}
        className="flex flex-col gap-1 px-2 py-3 items-center"
      >
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
      </time>
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
        <DialogContent className="sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-center font-secondary text-5xl">
              اختار تاريخ رحلتك
            </DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <section className="px-2" aria-labelledby="dates-dialog-title">
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
                <h2 className="text-2xl my-2 font-primary" id="weekly-schedule">
                  أيام {start_day} أسبوعياً
                </h2>
                <Separator className="mb-3" role="presentation" />

                {sortedFilteredPrices.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    role="list"
                    aria-label="قائمة تواريخ الرحلات المتاحة"
                  >
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-2">
                      {sortedFilteredPrices.map((price, index) => (
                        <motion.article
                          key={price.uuid}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={cn(
                            "rounded-lg shadow-lg overflow-hidden bg-light-blue"
                          )}
                          role="listitem"
                          aria-label={`تاريخ رحلة ${format(
                            new Date(price.date!),
                            "yyyy/MM/dd",
                            { locale: ar }
                          )}`}
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
                        </motion.article>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <NoTripsMessage />
                )}
              </motion.div>
            </AnimatePresence>
          </section>
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
