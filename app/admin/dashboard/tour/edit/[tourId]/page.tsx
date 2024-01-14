import TourForm from '@/components/tour-form'
import { getTours } from '@/lib/operations'
import { formatDistance, subDays } from 'date-fns'
import { notFound } from 'next/navigation'
import { FunctionComponent } from 'react'

interface NewTourPageProps {
  params: { tourId: string }
}

const NewTourPage: FunctionComponent<NewTourPageProps> = async ({ params }) => {
  const tour = (await getTours())?.find((x) => x.id == Number(params.tourId))

  if (!tour) {
    return notFound()
  }
  delete tour.tour_type

  return (
    <div className="px-8">
      <div className="flex justify-between">
        <h1 className="text-3xl mt-16"> {tour?.name}</h1>
        <h1 className="text-3xl mt-16"> {formatDistance(subDays(new Date(tour.created_at!), 3), new Date(), { addSuffix: true })}</h1>
      </div>
      <TourForm data={tour} />
    </div>
  )
}

export default NewTourPage
