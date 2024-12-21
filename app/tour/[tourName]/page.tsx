import Tour from '@/components/Tour/tour'
import { getTours } from '@/lib/operations'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const response = await getTours()
  if (response && response.length > 0) {
    return response
      .filter((x) => x.is_active)
      .map((tour) => ({
        tourName: `${tour.slug}`,
      }))
  }
  return []
}

export async function generateMetadata({ params }: { params: { tourName: string } }): Promise<Metadata> {
  const slug = params.tourName
  const response = await getTours()
  const tour = response?.find((x) => x.slug == decodeURIComponent(slug) && x.is_active)
  if (tour) {
    console.log('tour', tour)

    return {
      title: tour?.seo?.title,
      description: tour?.seo?.description,
      keywords: tour.seo?.tags || '',
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
        title: tour?.seo?.title,
        description: tour?.seo?.description,
        url: `https://mundo-tours.com/tour/${decodeURIComponent(slug)}`,
        siteName: 'Mundo tours',
        images: tour?.images?.map((o: string) => {
          return {
            url: o,
            width: 640,
            height: 427,
            alt: tour?.name,
          }
        }),
        locale: 'ar_SA',
        type: 'website',
      },
    }
  }
  return {
    title: 'Error - Tour not found ',
  }
}

export default async function TourPage({ params }: { params: { tourName: string } }) {
  const tours = await getTours()
  const tour = tours?.find((x) => x.slug == decodeURIComponent(params.tourName) && x.is_active)

  if (!tour) return notFound()

  return (
    <>
      <Tour tour={tour!} />
    </>
  )
}
