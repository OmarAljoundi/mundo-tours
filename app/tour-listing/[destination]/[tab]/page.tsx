export const dynamicParams = true
import Tours from '@/components/TourListing/tours'
import { getDestination } from '@/lib/operations'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { destination: string; tab: string } }): Promise<Metadata> {
  const response = (await getDestination())?.results?.find((x) => x.slug == decodeURIComponent(params.destination) && x.is_active)
  const attr = response?.location_attributes?.find((x: any) => x.title == decodeURIComponent(params.tab.replaceAll('-', ' ')))
  if (!attr) {
    return {
      title: 'No section found',
    }
  }

  const { description, tags, title } = attr.seo || { title: '', description: '', tags: '' }
  return {
    title: title,
    description: description,
    keywords: tags,
  }
}

export async function generateStaticParams() {
  const response = await getDestination()
  var results: { destination: string; section: string }[] = []

  response?.results
    ?.filter((x) => x.is_active)
    .map((dest) => {
      if (dest.location_attributes && dest.location_attributes.length > 1) {
        dest.location_attributes?.map((attr: any) => {
          results.push({
            destination: dest.slug!,
            section: attr.title!.replaceAll(' ', '-'),
          })
        })
      }
    })

  return results
}

export default async function TabPage({ params }: { params: { destination: string; tab: string } }) {
  const destination = await getDestination()

  const currentDest = destination.results?.find((x) => x.slug == decodeURIComponent(params.destination) && x.is_active)

  const attr = currentDest?.location_attributes?.find((x: any) => x.title == decodeURIComponent(params.tab.replaceAll('-', ' ')))
  if (!attr) return notFound()
  const tourIds = attr?.location_tours?.map((x: any) => x.tour_id!)

  return <Tours tourIds={tourIds} />
}
