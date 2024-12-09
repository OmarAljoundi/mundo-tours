import { TourPrice } from '@/types/custom'
import { Button, Chip, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { FunctionComponent, useMemo } from 'react'
import { format } from 'date-fns'
import arSA from 'date-fns/locale/ar-SA'
import { useCookies } from 'next-client-cookies'
import { toSar } from '@/lib/utils'

interface TourPricingListProps {
  tourPricing: TourPrice[]
}

const TourPricingList: FunctionComponent<TourPricingListProps> = ({ tourPricing }) => {
  const formattedDate = (currentDate: any) => format(new Date(currentDate), ' d MMMM yyyy', { locale: arSA })
  const cookies = useCookies()

  const isOman = useMemo(() => cookies.get('currency') == 'OMR', [cookies.get('currency')])

  return (
    <Popover showArrow placement="bottom" backdrop="blur">
      <PopoverTrigger>
        <Button className="font-primary" color="primary">
          عرض الأسعار
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-4 py-2 w-[350px] ">
        <div dir="rtl" className="max-h-[400px] overflow-auto w-[350px] custom-scrollbar border-none bg-transparent">
          <div className="divide-y-2 ">
            {tourPricing?.map((price, index) => (
              <div key={price.uuid} className="flex justify-between p-2 items-center">
                <h1 className="font-primary text-small">{formattedDate(price.date)}</h1>
                <Chip color="secondary" className="text-white">
                  {isOman ? price.price : toSar(price.price ?? 0)} {'  '} {isOman ? 'ريال عماني' : 'ريال سعودي'}
                </Chip>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default TourPricingList
