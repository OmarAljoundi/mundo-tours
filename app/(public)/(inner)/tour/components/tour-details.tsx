"use client";
import TourBenfits from "./tour-benfits";
import TourHotels from "./tour-hotels";
import { CalendarDays, Clock7, MapPin, Type, Barcode } from "lucide-react";
import { TourInformation } from "./tour-information";
import TourLinks from "./tour-links";
import React, { use, useMemo } from "react";
import { TourPricing } from "./tour-pricing";
import { TourStory } from "./tour-story";
import BlurImage from "@/components/shared/blur-image";
import { useAddBreadcrumb } from "@/store/bread-crumb-store";
import dynamic from "next/dynamic";
import { TourPricingRenderLoading } from "./tour-pricing-render-loading";
import { notFound } from "next/navigation";
import { getTourDetails } from "@/server/public-query.server";

const TourPriceRender = dynamic(() => import("./tour-pricing-render"), {
  loading: () => <TourPricingRenderLoading />,
  ssr: false,
});

export function TourDetails({
  dataPromise,
}: {
  dataPromise: ReturnType<typeof getTourDetails>;
}) {
  const tour = use(dataPromise);
  useAddBreadcrumb({ label: tour?.name ?? "لا يوجد عنوان للرحلة", href: "#" });

  const prices = useMemo(
    () => tour?.tourPrices?.filter((x) => x.one_price) ?? [],
    [tour?.tourPrices]
  );

  if (!tour) return notFound();

  const {
    tourHotels,
    images,
    name,
    numberOfDays,
    additionalInfo,
    startDay,
    tourCountries,
    tourType,
    code,
  } = tour;

  return (
    <div>
      <div className="bg-secondary/5 p-4">
        <div className="container">
          <div className="flex flex-col-reverse lg:grid  lg:grid-cols-3 lg:gap-x-16 justify-center lg:justify-between  items-start ">
            <div className="flex flex-col-reverse lg:flex-col px-3 sm:px-4 lg:px-6 py-6 col-span-2  bg-white rounded-2xl border border-neutral-40 mb-6 shadow-card w-full">
              <div className="border-t border-dashed lg:border-none">
                <div className="flex justify-between items-center  pt-4 lg:pt-0">
                  <h1 className="text-3xl text-center font-primary">الأسعار</h1>
                </div>
                <TourPriceRender tour={tour} />
              </div>
              <div className="grid  grid-cols-1 xl:grid-cols-2 xl:gap-x-8  lg:border-t lg:border-dashed mt-4  gap-md-0 divide-y divide-dashed font-primary">
                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4 ">
                    <div className="bg-primary p-2 rounded-full">
                      <Barcode className=" text-white " />
                    </div>
                    <div className="grid items-center ">
                      <span className="font-primary">رمز الرحلة</span>
                      <span className="text-primary font-english">{code}</span>
                    </div>
                  </div>
                </div>
                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4 ">
                    <div className="bg-primary p-2 rounded-full">
                      <MapPin className=" text-white " />
                    </div>
                    <div className="grid items-center ">
                      <span className="font-primary">الدول</span>
                      <span className="text-primary font-primary">
                        {tourCountries?.map((i) => i)?.join(" - ")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4 ">
                    <div className="bg-primary p-2 rounded-full">
                      <Clock7 className=" text-white " />
                    </div>
                    <div className="grid items-center w-fit">
                      <span className="font-primary">مدة الرحلة</span>
                      <span>
                        <span className="text-primary">
                          {numberOfDays}{" "}
                          <span className="font-primary">أيام</span> -{" "}
                          {(numberOfDays ?? 1) - 1}{" "}
                          <span className="font-primary">ليالي</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4 ">
                    <div className="bg-primary p-2 rounded-full">
                      <Type className=" text-white " />
                    </div>
                    <div className="grid items-center ">
                      <span className="font-primary">نوع الرحلة </span>
                      <span>
                        <span className="text-primary font-primary">
                          {tourType?.name}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-2 col-span-2">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-4 ">
                      <div className="bg-primary p-2 rounded-full">
                        <CalendarDays className=" text-white " />
                      </div>
                      <div className="grid items-center ">
                        {prices.length > 0 ? (
                          <TourPricing
                            start_day={startDay ?? []}
                            numberOfDays={numberOfDays ?? 0}
                            tourPrices={prices}
                          />
                        ) : (
                          <React.Fragment>
                            <span className="font-primary">تاريخ الرحلة</span>

                            <div className="flex justify-between items-center gap-4">
                              <span className="text-primary font-primary">
                                طوال أيام الأسبوع
                              </span>
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 sm:px-4 lg:px-6 py-6 bg-white rounded-2xl border border-neutral-40 mb-6 shadow-card grid justify-items-center">
              <h1 className="text-3xl text-center font-primary mb-5 ">
                {name}
              </h1>
              <BlurImage
                className="rounded-md"
                src={images && images.length > 0 ? images[0] : ""}
                alt={name}
                priority={true}
                loading={"eager"}
                quality={100}
                width={640}
                height={427}
              />
              <TourInformation info={additionalInfo} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12">
        <TourStory tour={tour} />
        <TourLinks tour={tour} />
        <TourBenfits tour={tour} />
        {tourHotels && <TourHotels tour={tour} />}
      </div>
    </div>
  );
}
