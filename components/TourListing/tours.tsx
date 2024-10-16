'use client'
import TourCard from '../shared/tour-card'
import { useState, useEffect, FC, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { useInView } from 'react-intersection-observer'
import React from 'react'
import { Tour } from '@/types/custom'
import { filterTours } from '@/lib/utils'
import useTours from '@/hooks/react-query/use-tours'
import BestToursListLoading from '../Loading/best-tours-list-loading'
import { AnimatePresence, motion } from 'framer-motion'

const Tours: FC<{ tourIds?: number[] }> = ({ tourIds }) => {
  const searchParams = useSearchParams()
  const { ref, inView } = useInView()
  const [currentSize, setCurrentSize] = useState(10)

  const { data: tours, isLoading } = useTours()
  useEffect(() => {
    if (inView) {
      setCurrentSize(currentSize + 10)
    }
  }, [inView])

  const currentTours = useMemo(() => {
    return filterTours(
      {
        country: searchParams?.get('country') as string,
        days: searchParams?.get('days') as string,
        type: searchParams?.get('type') as string,
        sortMemebr: searchParams?.get('sortMemebr'),
        maxprice: searchParams?.get('maxprice') as any,
        sortOrder: searchParams?.get('sortOrder') as any,
      },
      tours || [],
    )
  }, [
    searchParams?.get('country'),
    searchParams?.get('days'),
    searchParams?.get('tab'),
    searchParams?.get('type'),
    searchParams?.get('page'),
    searchParams?.get('maxprice'),
    searchParams?.get('sortMemebr'),
    searchParams?.get('sortOrder'),
    isLoading,
  ])

  const getData = () => (tourIds ? currentTours?.filter((m) => tourIds.includes(m.id!) && m.is_active) : currentTours?.filter((x) => x.is_active))
  return (
    <div className="mt-4 mb-16">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <BestToursListLoading />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-12 gap-x-2 gap-y-4 lg:gap-8"
          >
            {getData()
              ?.slice(0, currentSize)
              .map((tour) => (
                <TourContent ref={ref} key={tour.id} {...tour} />
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tours

const TourContent = React.forwardRef((tour: Tour, ref) => {
  const content = ref ? (
    <motion.article
      className="col-span-12 sm:col-span-6 xl:col-span-4 px-3 xl:px-0"
      key={tour.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      //@ts-ignore
      ref={ref}
    >
      <TourCard tour={tour} />
    </motion.article>
  ) : (
    <motion.article
      className="col-span-12 sm:col-span-6 xl:col-span-4 px-3 xl:px-0"
      key={tour.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <TourCard tour={tour} />
    </motion.article>
  )
  return content
})
