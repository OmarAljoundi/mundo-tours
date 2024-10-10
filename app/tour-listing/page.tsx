import Tours from '@/components/TourListing/tours'
import Filter from '@/components/shared/filter'
import { getContent, getDestination, getTourTypes } from '@/lib/operations'
import { Suspense } from 'react'

export async function generateMetadata() {
  const data = await getContent()
  return {
    title: data?.best_tours?.seo?.title,
    description: data?.best_tours?.seo?.description,
    keywords: data?.best_tours?.seo?.tags || '',
  }
}
const Destination = async () => {
  return (
    <Suspense>
      <Filter onChange={true} enableTabs={true} destinationPromise={getDestination()} tourTypesPromise={getTourTypes()} />
      <Tours />
    </Suspense>
  )
}

export default Destination
