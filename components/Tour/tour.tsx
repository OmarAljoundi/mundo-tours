'use client'
import TourStory from './tour-story'
import TourBenfits from './tour-benfits'
import TourHotels from './tour-hotels'
import { BedDouble, BedSingle, CalendarDays, Clock7, MapPin, Type, Barcode } from 'lucide-react'
import BlurImage from '../shared/blur-image'
import { TourInformation } from './tour-information'
import TourLinks from './tour-links'
import React, { FC, useMemo } from 'react'
import { type Tour } from '@/types/custom'
import { useCookies } from 'next-client-cookies'
import { TourPricingV2 } from './tour-pricing-v2'
import { TourStoryV2 } from './tour-story-v2'

const Tour: FC<{ tour: Tour }> = ({ tour }) => {
  const cookies = useCookies()
  const { id, tour_hotels, images, name, number_of_days, additional_Info, start_day, tour_countries, tour_type, tour_prices, code } = tour

  const isOman = cookies.get('currency') == 'OMR'

  const prices = useMemo(() => tour_prices?.filter((x) => x.one_price) ?? [], [tour_prices])

  return (
    <div>
      <div className="bg-secondary/5 p-4">
        <div className="container">
          <div className="flex flex-col-reverse lg:grid  lg:grid-cols-3 lg:gap-x-16 justify-center lg:justify-between  items-start ">
            <div className="flex flex-col-reverse lg:flex-col px-3 sm:px-4 lg:px-6 py-6 col-span-2  bg-white rounded-2xl border border-neutral-40 mb-6 shadow-card w-full">
              <div className="border-t border-dashed lg:border-none">
                <div className="flex justify-between items-center  pt-4 lg:pt-0">
                  <h1 className="text-3xl text-center font-primary">الأسعار</h1>
                  {/* {tour.tour_prices && tour.tour_prices.filter((x) => x.one_price).length > 0 && (
                    <TourPricingList tourPricing={tour.tour_prices.filter((x) => x.one_price)} />
                  )} */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between mt-5">
                  <div className="shadow-lg p-5 border rounded-lg">
                    <div className="grid items-center justify-items-center">
                      <div className="bg-primary p-2 rounded-full">
                        <BedSingle className=" text-white " />
                      </div>
                      <h4 className="mt-2  text-base sm:text-sm md:text-sm font-primary">الشخض في الغرفة المزدوجة</h4>
                      <h2 className="text-xl font-bold">
                        {isOman ? tour?.price_double : tour?.price_double_sa} {'  '} {isOman ? 'ر.ع' : 'ر.س'}
                      </h2>
                    </div>
                  </div>
                  <div className="shadow-lg p-5 border rounded-lg">
                    <div className="grid items-center justify-items-center ">
                      <div className="bg-primary p-2 rounded-full">
                        <BedDouble className=" text-white " />
                      </div>
                      <h4 className="mt-2 text-base sm:text-sm md:text-sm font-primary">الشخض في الغرفة المفردة</h4>
                      <h2 className="text-xl font-bold">
                        {isOman ? tour?.price_single : tour?.price_single_sa} {'  '} {isOman ? 'ر.ع' : 'ر.س'}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid  grid-cols-1 xl:grid-cols-2 xl:gap-x-8  lg:border-t lg:border-dashed mt-4  gap-md-0 divide-y divide-dashed font-primary">
                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4 ">
                    <div className="bg-primary p-2 rounded-full">
                      <Barcode className=" text-white " />
                    </div>
                    <div className="grid items-center ">
                      <span>رمز الرحلة</span>
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
                      <span>الدول</span>
                      <span className="text-primary font-primary">{tour_countries?.map((i) => i)?.join(' - ')}</span>
                    </div>
                  </div>
                </div>

                <div className="py-2 col-span-2">
                  <div className="flex items-center gap-4 ">
                    <div className="bg-primary p-2 rounded-full">
                      <Clock7 className=" text-white " />
                    </div>
                    <div className="grid items-center w-fit">
                      <span>المدة</span>
                      <span>
                        <span className="text-primary">{number_of_days} أيام</span>
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
                      <span>نوع الرحلة الرحلة</span>
                      <span>
                        <span className="text-primary">{tour_type?.name}</span>
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
                          <TourPricingV2 start_day={start_day ?? []} numberOfDays={number_of_days ?? 0} tourPrices={prices} />
                        ) : (
                          <React.Fragment>
                            <span>تاريخ الرحلة</span>

                            <div className="flex justify-between items-center gap-4">
                              <span className="text-primary">أيام {start_day} أسبوعياً</span>
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
              <h1 className="text-3xl text-center font-primary mb-5 ">{name}</h1>
              <BlurImage className="rounded-md" src={images && images.length > 0 ? images[0] : ''} alt={''} quality={100} width={640} height={427} />
              <TourInformation info={additional_Info} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12">
        <TourStoryV2 tour={tour} />
        <TourLinks tour={tour} />
        <TourBenfits tour={tour} />
        {tour_hotels && <TourHotels tour={tour} />}
      </div>
    </div>
  )
}

export default Tour
