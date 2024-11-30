'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { getTotalTours, getTotalToursSeprate } from '@/lib/helpers'
import { motion, useAnimation } from 'framer-motion'
import { getDestination } from '@/lib/operations'
import { use, useEffect, useMemo } from 'react'
import { Location } from '@/types/custom'
import BlurImage from '../shared/blur-image'

const DestinationList = ({ destinationPromise }: { destinationPromise: ReturnType<typeof getDestination> }) => {
  const response = use(destinationPromise)

  const filtredData = useMemo(() => {
    return (
      response?.results
        ?.filter((x) => x.is_office == false && x.is_active == true)
        .sort((a, b) => (a.image?.order ?? 100) - (b.image?.order ?? 200)) || []
    )
  }, [])

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4 px-4 lg:gap-4 mt-8">
        {filtredData.map((location) => (
          <DestinationCard key={location.id} {...location} />
        ))}
      </div>
    </div>
  )
}

const DestinationCard = (location: Location) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  return (
    <Link
      href={`/tour-listing/${location.slug}`}
      key={location.id}
      scroll={true}
      className={cn(
        'block col-span-6',
        location.image?.size == 1
          ? 'lg:col-span-1'
          : location.image?.size.toString() == '1/6'
          ? 'lg:col-span-2'
          : location.image?.size.toString() == '1/3'
          ? 'lg:col-span-3'
          : location.image?.size.toString() == '1/4'
          ? 'lg:col-span-4'
          : location.image?.size.toString() == '1/5'
          ? 'lg:col-span-5'
          : location.image?.size.toString() == '1/2'
          ? 'lg:col-span-6'
          : location.image?.size == 7
          ? 'lg:col-span-7'
          : location.image?.size == 8
          ? 'lg:col-span-8'
          : location.image?.size == 9
          ? 'lg:col-span-9'
          : location.image?.size == 10
          ? 'lg:col-span-10'
          : location.image?.size == 11
          ? 'lg:col-span-11'
          : 'col-span-12',
      )}
    >
      <motion.div className="relative w-full h-full overflow-hidden rounded-2xl" initial="hidden" animate={controls} variants={variants}>
        <BlurImage
          priority={false}
          loading="lazy"
          src={location.image?.url || ''}
          alt={location.name ?? ''}
          className="w-full h-full object-cover"
          width={1000}
          height={1200}
          quality={100}
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/60 to-transparent" />

        <div
          className="absolute top-2 right-2
          bg-white
          inline-block 
          bg-opacity-70 
          backdrop-filter backdrop-blur-sm 
          text-gray-800 
          rounded-lg 
          px-3 py-1
          lg:px-4 lg:py-2 
          font-semibold
          shadow-md
          text-xs 
          border-secondary border-2
            font-primary"
        >
          <span className="font-english ml-1">{getTotalToursSeprate(location)?.count}</span>
          <span>{getTotalToursSeprate(location).word}</span>
        </div>

        <div className="absolute bottom-2 left-2 right-4">
          <h2 className="text-white text-lg lg:text-2xl font-bold truncate">{location.name}</h2>
        </div>
      </motion.div>
    </Link>
  )
}

export default DestinationList
