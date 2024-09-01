import Tours from '@/components/TourListing/tours'
import Filter from '@/components/shared/filter'
import { getContent } from '@/lib/operations'

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
    <>
      <Filter onChange={true} enableTabs={true} />
      <Tours />
    </>
  )
}

export default Destination
