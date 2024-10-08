'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { getTotalTours } from '@/lib/helpers'
import { motion, useAnimation } from 'framer-motion'
import { getDestination } from '@/lib/operations'
import { use, useEffect, useMemo } from 'react'
import { Location } from '@/types/custom'

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
          <DestinationCard {...location} />
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
        <Image
          src={location.image?.url || ''}
          alt={location.name ?? ''}
          className="w-full h-full object-cover"
          width={1600}
          height={1000}
          quality={80}
        />

        {/* Top gradient */}
        <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-black/60 to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute top-4 right-4 px-3 py-2 bg-white/80 rounded-full text-sm font-semibold text-gray-800 font-primary">
          {getTotalTours(location)}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-white text-lg lg:text-xl font-bold truncate">{location.name}</h2>
        </div>
      </motion.div>
    </Link>
  )
}

export default DestinationList
