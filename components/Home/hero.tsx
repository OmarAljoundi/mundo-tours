'use client'
import Filter from '../shared/filter'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import BlurImage from '../shared/blur-image'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import { getContent, getDestination, getTours, getTourTypes } from '@/lib/operations'
import { use, useEffect, useMemo, useState } from 'react'
import React from 'react'

const Hero = ({
  contentPromise,
  destinationPromise,
  tourTypesPromise,
}: {
  contentPromise: ReturnType<typeof getContent>
  tourTypesPromise: ReturnType<typeof getTourTypes>
  destinationPromise: ReturnType<typeof getDestination>
}) => {
  const setting = use(contentPromise)

  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative">
      {!isMobile && (
        <div className="hidden lg:block">
          <Swiper
            loop={true}
            slidesPerView="auto"
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.btn-next-slide',
              prevEl: '.btn-prev-slide',
            }}
            modules={[Navigation, Pagination]}
            className="swiper choice-slider "
          >
            {setting?.home?.sliders?.map((item, index) => (
              <SwiperSlide key={item.uuid}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, translateY: 20 },
                    visible: {
                      opacity: 1,
                      translateY: 0,
                      transition: {
                        duration: Math.max(0.5, ((index + 1) * 10) / 100),
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                >
                  <div className="relative h-full group overflow-hidden ">
                    <BlurImage
                      src={item.image}
                      alt="Hero Image"
                      quality={70}
                      fill
                      sizes="77vw"
                      priority={index == 0}
                      loading={index == 0 ? 'eager' : 'lazy'}
                      className="bg-overlay mx-auto max-w-full object-cover object-right-top md:object-center"
                    />
                    <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
                      <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16  px-3 bg-no-repeat bg-cover bg-black/10 relative h-[500px]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black/20 ">
                          <div className="container grid items-center h-full">
                            <div className="text-center relative z-30">
                              <h1 className="text-6xl lg:text-7xl  font-secondary text-white">{item.title}</h1>
                              <p className=" mx-auto max-w-[600px] font-primary text-4xl lg:text-7xl text-white mt-4 md:mt-7 mb-6 ">
                                {item.sub_title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <section className=" bg-transparent border-t-1 lg:border-t-0 lg:absolute lg:mt-8 bottom-10 z-10 w-full max-w-7xl mx-auto right-0 left-0">
        <Filter onChange={false} destinationPromise={destinationPromise} tourTypesPromise={tourTypesPromise} />
      </section>
    </div>
  )
}

export default Hero
