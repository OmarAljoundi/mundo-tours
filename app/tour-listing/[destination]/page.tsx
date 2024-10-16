export const dynamicParams = true
import Tours from '@/components/TourListing/tours'
import { getDestination } from '@/lib/operations'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { destination: string } }): Promise<Metadata> {
  const response = (await getDestination())?.results?.find((x) => x.slug == decodeURIComponent(params.destination) && x.is_active)
  if (!response) {
    return {
      title: 'No destination found',
    }
  }

  const { description, tags, title } = response.seo || { title: '', description: '', tags: '' }
  return {
    title: title,
    description: description,
    keywords: tags,
  }
}

export async function generateStaticParams() {
  const response = await getDestination()
  if (response.success && response.results && response.results.length > 0) {
    return response.results
      .filter((x) => x.is_active)
      .map((dest) => ({
        destination: `${dest.slug}`,
      }))
  }
  return []
}

export default async function DestinationPage({ params }: { params: { destination: string } }) {
  let tours_ids: number[] = []
  const destination = await getDestination()
  const currentDest = destination.results?.find((x) => x.slug == decodeURIComponent(params.destination) && x.is_active)

  if (!currentDest) return notFound()
  currentDest?.location_attributes?.map((x: any) => {
    tours_ids = [...tours_ids, ...(x.location_tours?.map((g: any) => g.tour_id) ?? [])]
  })

  return <Tours tourIds={tours_ids} />
}
