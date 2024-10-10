'use client'
import React, { FC, useMemo } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CountryDropdown from './country-dropdown'
import DestinationDropdown from './destination-dropdown'
import TypeDropdown from './type-dropdown'
import { motion } from 'framer-motion'
import { CONTAINER_VAR, ITEMS_VAR } from '@/lib/animations'
import { getDestination, getTourTypes } from '@/lib/operations'
import { useSearchParams } from 'next/navigation'

type FilterOptions = {
  onChange: boolean
  enableTabs?: boolean
  tourTypesPromise: ReturnType<typeof getTourTypes>
  destinationPromise: ReturnType<typeof getDestination>
}

const Filter: FC<FilterOptions> = ({ onChange, destinationPromise, tourTypesPromise, enableTabs = false }) => {
  const { results: types } = React.use(tourTypesPromise)
  const { results: destinations } = React.use(destinationPromise)
  const searchParams = useSearchParams()

  const url = useMemo(() => {
    const params = new URLSearchParams(searchParams)
    return `/tour-listing?${params.toString()}`
  }, [searchParams])

  return (
    <div>
      <motion.div
        variants={CONTAINER_VAR}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn('p-3 sm:p-4 lg:py-6 lg:px-8 bg-white  shadow-lg  grid gap-2  grid-cols-2 lg:grid-cols-3')}
      >
        {enableTabs && <DestinationDropdown destinations={destinations || []} />}
        <motion.div variants={{ ...ITEMS_VAR }}>
          <CountryDropdown />
        </motion.div>

        <motion.div variants={{ ...ITEMS_VAR }}>
          <TypeDropdown types={types || []} />
        </motion.div>

        {!onChange && (
          <motion.section variants={{ ...ITEMS_VAR }} className={cn(onChange ? 'col-span-1' : 'col-span-2 lg:col-span-1')}>
            <Link href={url}>
              <Button className="w-full" size={'sm'}>
                <SearchIcon className="text-white" />
                <span className="mr-2 text-white text-lg">أبحث</span>
              </Button>
            </Link>
          </motion.section>
        )}
      </motion.div>
    </div>
  )
}

export default Filter
