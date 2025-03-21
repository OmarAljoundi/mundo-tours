import { getCookie } from "@/lib/utils";
import { QueryTourSchema } from "@/schema";
import React, { useMemo } from "react";

export default function TourPrice({ tour }: { tour: QueryTourSchema }) {
  if (typeof window == "undefined") return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isOman = useMemo(
    () => getCookie("currency") == "OMR",

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [document?.cookie]
  );
  return (
    <div className=" text-primary">
      <span className="font-bold font-english text-3xl">
        {" "}
        {isOman ? tour?.priceDouble : tour?.priceDoubleSa}
      </span>{" "}
      <span className="font-primary text-black text-[10px]">
        {isOman ? "ريال عماني" : <span className="icon-saudi_riyal text-xl" />}
      </span>
    </div>
  );
}
