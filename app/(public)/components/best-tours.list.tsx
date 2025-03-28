"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getBestTours } from "@/server/public-query.server";
import SectionProvider from "./section-provider";
import TourCard from "@/components/shared/tour-card";

const BestToursList = ({
  data,
  currency,
}: {
  data: Awaited<ReturnType<typeof getBestTours>>;
  currency: "SAR" | "OMR";
}) => {
  if (data?.length == 0) return null;

  return (
    <SectionProvider title="البرامج الاكثر مبيعاً" className="mt-8 lg:mt-12">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 mt-8">
          <div className="col-span-12">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={8}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              modules={[Navigation, Autoplay]}
              className="swiper choice-slider"
            >
              {data?.map((item) => (
                <SwiperSlide className="px-3 my-5" key={item.id}>
                  <article className="col-span-12 sm:col-span-6 xl:col-span-4 px-3 xl:px-0">
                    <TourCard tour={item} currency={currency} />
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-4 mt-10">
              <div className="btn-next w-11 h-11 rounded-full border border-[var(--primary)] duration-300 text-2xl text-primary flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer">
                <ArrowRight />
              </div>
              <div className="btn-prev w-11 h-11 rounded-full border border-[var(--primary)] duration-300 text-2xl text-primary flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer">
                <ArrowLeft />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionProvider>
  );
};

export default BestToursList;
