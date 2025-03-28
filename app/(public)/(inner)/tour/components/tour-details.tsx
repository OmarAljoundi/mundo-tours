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
import { notFound } from "next/navigation";
import { getTourDetails } from "@/server/public-query.server";
import { TourPricingRender } from "./tour-pricing-render";

export function TourDetails({
  dataPromise,
  isOman,
}: {
  dataPromise: ReturnType<typeof getTourDetails>;
  isOman: boolean;
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
    <main aria-label="Tour Details Page">
      <section className="bg-secondary/5 p-4" aria-labelledby="tour-overview">
        <div className="container">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-x-16 justify-center lg:justify-between items-start">
            <article className="flex flex-col-reverse lg:flex-col px-3 sm:px-4 lg:px-6 py-6 col-span-2 bg-white rounded-2xl border border-neutral-40 mb-6 shadow-card w-full">
              <div className="border-t border-dashed lg:border-none">
                <header className="flex justify-between items-center pt-4 lg:pt-0">
                  <h2
                    id="tour-pricing"
                    className="text-3xl text-center font-primary"
                  >
                    الأسعار
                  </h2>
                </header>
                <TourPricingRender tour={tour} isOman={isOman} />
              </div>
              <dl className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-8 lg:border-t lg:border-dashed mt-4 gap-md-0 divide-y divide-dashed font-primary">
                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-primary p-2 rounded-full"
                      aria-hidden="true"
                    >
                      <Barcode className="text-white" />
                    </div>
                    <div className="grid items-center">
                      <dt className="font-primary">رمز الرحلة</dt>
                      <dd className="text-primary font-english">{code}</dd>
                    </div>
                  </div>
                </div>
                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-primary p-2 rounded-full"
                      aria-hidden="true"
                    >
                      <MapPin className="text-white" />
                    </div>
                    <div className="grid items-center">
                      <dt className="font-primary">الدول</dt>
                      <dd className="text-primary font-primary">
                        {tourCountries?.map((i) => i)?.join(" - ")}
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-primary p-2 rounded-full"
                      aria-hidden="true"
                    >
                      <Clock7 className="text-white" />
                    </div>
                    <div className="grid items-center w-fit">
                      <dt className="font-primary">مدة الرحلة</dt>
                      <dd>
                        <span className="text-primary">
                          {numberOfDays}{" "}
                          <span className="font-primary">أيام</span> -{" "}
                          {(numberOfDays ?? 1) - 1}{" "}
                          <span className="font-primary">ليالي</span>
                        </span>
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-primary p-2 rounded-full"
                      aria-hidden="true"
                    >
                      <Type className="text-white" />
                    </div>
                    <div className="grid items-center">
                      <dt className="font-primary">نوع الرحلة</dt>
                      <dd>
                        <span className="text-primary font-primary">
                          {tourType?.name}
                        </span>
                      </dd>
                    </div>
                  </div>
                </div>
                <div className="py-2 col-span-2">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-primary p-2 rounded-full"
                        aria-hidden="true"
                      >
                        <CalendarDays className="text-white" />
                      </div>
                      <div className="grid items-center">
                        {prices.length > 0 ? (
                          <TourPricing
                            start_day={startDay ?? []}
                            numberOfDays={numberOfDays ?? 0}
                            tourPrices={prices}
                          />
                        ) : (
                          <React.Fragment>
                            <dt className="font-primary">تاريخ الرحلة</dt>

                            <dd className="flex justify-between items-center gap-4">
                              <span className="text-primary font-primary">
                                طوال أيام الأسبوع
                              </span>
                            </dd>
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </dl>
            </article>
            <aside className="px-3 sm:px-4 lg:px-6 py-6 bg-white rounded-2xl border border-neutral-40 mb-6 shadow-card grid justify-items-center">
              <h1
                id="tour-overview"
                className="text-3xl text-center font-primary mb-5"
              >
                {name}
              </h1>
              <figure>
                <BlurImage
                  className="rounded-md"
                  src={images && images.length > 0 ? images[0] : ""}
                  alt={`صورة لرحلة ${name}`}
                  priority={true}
                  loading={"eager"}
                  quality={100}
                  width={640}
                  height={427}
                />
                <figcaption className="sr-only">صورة توضيحية للرحلة</figcaption>
              </figure>
              <TourInformation info={additionalInfo} />
            </aside>
          </div>
        </div>
      </section>
      <section className="container mt-12">
        <TourStory tour={tour} />
        <TourLinks tour={tour} />
        <TourBenfits tour={tour} />
        {tourHotels && <TourHotels tour={tour} />}
      </section>
    </main>
  );
}
