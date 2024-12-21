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
    creator: 'Mundo tours',
    publisher: 'Mundo tours Inc.',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://mundo-tours.com/tour-listing/${decodeURIComponent(params.destination)}`,
      siteName: 'Mundo tours',
      images: [
        {
          url: response?.image?.url,
          width: 1000,
          height: 1200,
          alt: response?.image?.name,
        },
      ],
      locale: 'ar_SA',
      type: 'website',
    },
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
