import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardBody } from '@nextui-org/react'
import { TourPrice } from '@/types/custom'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollArea } from '../ui/scroll-area'

interface TourPricingV2Props {
  tourPrices: TourPrice[]
  numberOfDays: number
}

const MONTHS_AR = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']

export function TourPricingV2({ numberOfDays, tourPrices }: TourPricingV2Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const sortedPrices = [...tourPrices].sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime())

  const isMonthDisabled = (month: number) => {
    if (selectedYear < currentYear) return true
    if (selectedYear === currentYear && month < currentMonth) return true
    if (selectedYear > currentYear + 1) return true
    return false
  }

  const getMonthPrices = (month: number) => {
    return sortedPrices.filter((price) => {
      const priceDate = new Date(price.date!)
      return priceDate.getMonth() === month && priceDate.getFullYear() === selectedYear
    })
  }

  const formatDateRange = (startDate: Date) => {
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + numberOfDays)

    return `${format(startDate, 'd MMMM', { locale: ar })} - ${format(endDate, 'd MMMM', { locale: ar })}`
  }

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={onOpen} className="max-w-fit">
        اضغط لعرض التواريخ
      </Button>
      <Modal isOpen={isOpen} placement={'auto'} size="3xl" onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center font-secondary text-5xl">اختار تاريخ رحلتك</ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-between mb-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setSelectedMonth(null)
                      setSelectedYear((prev) => prev + 1)
                    }}
                    disabled={selectedYear >= currentYear + 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold">{selectedYear}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setSelectedMonth(null)

                      setSelectedYear((prev) => prev - 1)
                    }}
                    disabled={selectedYear <= currentYear}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {MONTHS_AR.map((month, index) => (
                    <Button
                      key={month}
                      variant={selectedMonth === index ? 'default' : 'outline'}
                      disabled={isMonthDisabled(index)}
                      onClick={() => setSelectedMonth(index)}
                    >
                      {month}
                    </Button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  {selectedMonth != null && (
                    <motion.div
                      key={selectedMonth}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: { duration: 0.3 },
                        height: { duration: 0.4, ease: 'easeInOut' },
                      }}
                      className="overflow-hidden"
                    >
                      {getMonthPrices(selectedMonth).length > 0 ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {getMonthPrices(selectedMonth).map((price, index) => (
                              <motion.div
                                key={price.uuid}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-[#ff2b00] to-[#ff6b00] rounded-lg shadow-lg overflow-hidden"
                              >
                                <motion.div
                                  className="p-4 h-full flex flex-col justify-between"
                                  initial={{ y: 20 }}
                                  animate={{ y: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                >
                                  <div className="flex flex-col items-end space-y-2 rtl">
                                    <span className="font-bold text-lg text-right text-white w-full">{price.price} ريال</span>
                                    <span className="text-white text-right text-xs font-primary lg:text-xs w-full">
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
                  )}
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
