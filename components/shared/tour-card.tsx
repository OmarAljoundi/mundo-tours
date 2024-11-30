import Link from 'next/link'
import { Button } from '../ui/button'
import BlurImage from './blur-image'
import { Tour } from '@/types/custom'
import { useCookies } from 'next-client-cookies'
import { ReactNode, useMemo } from 'react'
import { cn } from '@/lib/utils'

const TourCard: React.FC<{ tour: Tour }> = ({ tour }) => {
  const cookies = useCookies()

  const isOman = useMemo(() => cookies.get('currency') == 'OMR', [cookies.get('currency')])

  return (
    <div className="bg-white shadow-xl rounded-2xl p-2 ">
      <div className="rounded-2xl relative group">
        <div className="property-card__img relative">
          <Link href={`/tour/${tour.slug}`}>
            <BlurImage
              priority={false}
              loading="lazy"
              width={1000}
              height={400}
              quality={70}
              src={tour.images && tour.images.length > 0 ? tour.images[0] : ''}
              alt="image"
              className="rounded-2xl w-full h-[200px] lg:h-[260px]"
              sizes="(max-width: 768px) 100vw, 640px"
            />
          </Link>

          <BadgeDetail className="top-2 right-2">{tour.number_of_days} يوم</BadgeDetail>
          <BadgeDetail className="top-2 left-2">{tour.tour_type?.name}</BadgeDetail>
        </div>
      </div>
      <div className="p-2 sm:p-4 lg:p-5">
        <div className="flex items-center gap-1 mb-4 mt-5 sm:mt-3">
          <div className="flex gap-1">
            {tour?.tour_countries?.slice(0, 4).map((i) => (
              <span className="inline-block bg-secondary text-white px-2 py-1 text-[14px] rounded-md" key={i}>
                {i}
              </span>
            ))}
          </div>
        </div>
        <Link href={`/tour/${tour.slug}`} className="text-base sm:text-xl font-medium text-neutral-700 mb-4 font-primary">
          {tour.name}
        </Link>
      </div>
      <div className="property-card__body py-0 mx-5">
        <div className=" border-t border-dashed"></div>
      </div>
      <div className="px-2 sm:px-5 pb-5 pt-3">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <span className="text-primary text-xl font-medium">
            {isOman ? tour?.price_double : tour?.price_double_sa} {'  '} {isOman ? 'ر.ع' : 'ر.س'}
            <span className="text-base text-neutral-700 font-primary"> / للشخص في الغرفة المزدوجة </span>
          </span>

          <Link href={`/tour/${tour.slug}`}>
            <Button variant={'default'} size={'sm'}>
              عرض التفاصيل
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TourCard

function BadgeDetail({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div
      className={cn(
        className,
        `absolute bg-white
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
          font-primary`,
      )}
    >
      <span>{children}</span>
    </div>
  )
}
