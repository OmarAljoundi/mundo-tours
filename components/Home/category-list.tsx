'use client'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { getTourTypes } from '@/lib/operations'
import { use, useState } from 'react'
import { Compass, MapPin, Plane, Ship, Train } from 'lucide-react'
import { motion } from 'framer-motion'
const iconMap = {
  Plane: Plane,
  Ship: Ship,
  Train: Train,
  Compass: Compass,
  MapPin: MapPin,
}

const CategoryList = ({ categoryPromise }: { categoryPromise: ReturnType<typeof getTourTypes> }) => {
  const response = use(categoryPromise)
  const [hoveredId, setHoveredId] = useState<number | undefined>(undefined)
  return (
    // <div className="container">
    //   <div className="grid grid-cols-2 lg:grid-cols-5 mt-8 gap-4">
    //     {response?.results?.map((i) => (
    //       <div key={i.id} className="w-full">
    //         <div className="grid justify-items-center p-4 border-2 border-dashed border-primary rounded-2xl gap-4 shadow-xl">
    //           <Image src={i.image ?? ''} width={50} height={50} alt={i.name ?? ''} />
    //           <h4 className="font-primary text-xl">{i.name}</h4>
    //           <Link href={`/tour-listing?type=${i.name}`}>
    //             <Button>المزيد</Button>
    //           </Link>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {response?.results?.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="w-full"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(undefined)}
            >
              <motion.div
                className="h-full flex flex-col items-center justify-center p-1 bg-gradient-to-br from-secondary/10 to-secondary/30 rounded-2xl shadow-lg transition-shadow
                 duration-300 ease-in-out"
                animate={{
                  boxShadow:
                    hoveredId === item.id
                      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* <motion.div
            className="mb-4 text-primary"
            initial={{ scale: 1 }}
            animate={{ scale: hoveredId === item.id ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon size={40} />
          </motion.div> */}
                <Image src={item.image ?? ''} width={50} height={50} alt={item.name ?? ''} className="rounded-full mb-4" />
                <h4 className="font-primary text-xl mb-4 text-center">{item.name}</h4>
                <Link href={`/tour-listing?type=${item.name}`}>
                  <Button variant="outline" className="transition-colors duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground">
                    المزيد
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default CategoryList
