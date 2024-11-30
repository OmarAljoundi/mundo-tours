import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react'
import { TourPrice } from '@/types/custom'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'
import { Calendar } from 'lucide-react'
import { Button } from '../ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TourPricingV2Props {
  tourPrices: TourPrice[]
  numberOfDays: number
  start_day: string[]
}

export function TourPricingV2({ numberOfDays, tourPrices, start_day }: TourPricingV2Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const sortedPrices = [...tourPrices].sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime())

  const formatDateRange = (startDate: Date) => {
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + numberOfDays)

    return (
      <div className="flex flex-col gap-1">
        <h1>
          من {'  '}
          {format(startDate, 'd MMMM yyyy', { locale: ar })}
        </h1>
        <h1>
          الى {'  '}
          {format(endDate, 'd MMMM yyyy', { locale: ar })}
        </h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={onOpen} className="max-w-fit" size={'sm'}>
        اضغط لعرض التواريخ
      </Button>
      <Modal isOpen={isOpen} placement={'auto'} size="4xl" onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center font-secondary text-5xl">اختار تاريخ رحلتك</ModalHeader>
              <ModalBody>
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      height: { duration: 0.4, ease: 'easeInOut' },
                    }}
                    className="overflow-hidden"
                  >
                    <h1 className="text-2xl my-4 font-primary ">أيام {start_day} أسبوعياً</h1>
                    {sortedPrices.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                          {sortedPrices.map((price, index) => (
                            <motion.div
                              key={price.uuid}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className={cn('rounded-lg shadow-lg overflow-hidden', index % 2 != 0 ? 'bg-primary' : 'bg-secondary')}
                            >
                              <motion.div
                                className="py-4 px-2 lg:p-4 h-full flex flex-col justify-between"
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                              >
                                <div className="flex flex-col items-end space-y-2 rtl">
                                  <span className="text-white text-right font-primary  text-[13px] lg:text-base w-full">
                                    {formatDateRange(new Date(price.date!))}
                                  </span>
                                </div>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <NoTripsMessage />
                    )}
                  </motion.div>
                </AnimatePresence>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

const NoTripsMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center p-8 text-center"
  >
    <Calendar className="w-16 h-16 text-[#ff2b00] mb-4" />
    <h3 className="text-2xl font-bold text-[#ff2b00] mb-2">لا توجد رحلات في هذا الشهر</h3>
    <p className="text-gray-600">يرجى اختيار شهر آخر للعثور على رحلات متاحة</p>
  </motion.div>
)
