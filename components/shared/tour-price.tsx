import { QueryTourSchema } from "@/schema";
import React from "react";

export default function TourPrice({
  tour,
  currency,
}: {
  tour: QueryTourSchema;
  currency: "SAR" | "OMR";
}) {
  return (
    <div className=" text-primary">
      <span className="font-bold font-english text-3xl">
        {" "}
        {currency == "OMR" ? tour?.priceDouble : tour?.priceDoubleSa}
      </span>{" "}
      <span className="font-primary text-black text-[10px]">
        {currency == "OMR" ? (
          "ريال عماني"
        ) : (
          <span className="icon-saudi_riyal text-xl" />
        )}
      </span>
    </div>
  );
}
