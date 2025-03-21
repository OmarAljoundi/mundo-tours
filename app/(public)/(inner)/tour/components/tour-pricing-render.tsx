import { getCookie } from "@/lib/utils";
import { QueryTourSchema } from "@/schema";
import { BedDouble, BedSingle } from "lucide-react";
import React, { useMemo } from "react";

export default function TourPricingRender({ tour }: { tour: QueryTourSchema }) {
  if (typeof window == "undefined") return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isOman = useMemo(
    () => getCookie("currency") == "OMR",

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [document?.cookie]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between mt-5">
      <div className="shadow-lg p-5 border rounded-lg">
        <div className="grid items-center justify-items-center space-y-1">
          <div className="bg-primary p-2 rounded-full">
            <BedDouble className=" text-white " />
          </div>
          <h4 className="mt-2  text-base sm:text-sm md:text-sm font-primary">
            الشخض في الغرفة المزدوجة
          </h4>

          <div className="text-primary">
            <span className="font-bold font-english text-xl">
              {" "}
              {isOman ? tour?.priceDouble : tour?.priceDoubleSa}
            </span>
            {"  "}
            <span className="font-primary text-black text-[10px]">
              {isOman ? (
                "ريال عماني"
              ) : (
                <span className="icon-saudi_riyal text-xl" />
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="shadow-lg p-5 border rounded-lg">
        <div className="grid items-center justify-items-center space-y-1">
          <div className="bg-primary p-2 rounded-full">
            <BedSingle className=" text-white " />
          </div>
          <h4 className="mt-2 text-base sm:text-sm md:text-sm font-primary">
            الشخض في الغرفة المفردة
          </h4>

          <div className="text-primary">
            <span className="font-bold font-english text-xl">
              {" "}
              {isOman ? tour?.priceSingle : tour?.priceSingleSa}
            </span>
            {"  "}
            <span className="font-primary text-black text-[10px]">
              {isOman ? (
                "ريال عماني"
              ) : (
                <span className="icon-saudi_riyal text-xl" />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
