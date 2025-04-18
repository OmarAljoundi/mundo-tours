import { QueryTourSchema } from "@/schema";
import { Hotel } from "lucide-react";
import { FC } from "react";

const TourHotels: FC<{ tour: QueryTourSchema }> = ({ tour }) => {
  if (tour?.tourHotels && tour?.tourHotels.length > 0)
    return (
      <section
        className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10"
        aria-labelledby="tour-hotels-heading"
      >
        <h2
          id="tour-hotels-heading"
          className="mb-0 text-2xl font-semibold font-primary"
        >
          أسماء الفنادق المتوقعة
        </h2>
        <hr className="border border-dashed my-5" aria-hidden="true" />

        <ul
          className="flex flex-col gap-4 mb-10"
          aria-label="قائمة الفنادق المتوقعة للرحلة"
        >
          {tour?.tourHotels?.map((hotelName, index) => (
            <li key={`hotel-${index}`} className="flex items-center gap-2">
              <div
                className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-secondary/80"
                aria-hidden="true"
              >
                <Hotel className="p-1 text-white" />
              </div>
              <span className="inline-block font-primary">{hotelName}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  return null;
};

export default TourHotels;
