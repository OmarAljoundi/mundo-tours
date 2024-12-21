import Tours from '@/components/TourListing/tours'
import Filter from '@/components/shared/filter'
import { getContent, getDestination, getTourTypes } from '@/lib/operations'
import { Metadata } from 'next'
import { Suspense } from 'react'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContent()
  return {
    title: data?.best_tours?.seo?.title,
    description: data?.best_tours?.seo?.description,
    keywords: data?.best_tours?.seo?.tags || '',
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
      title: data?.best_tours?.seo?.title || '',
      description: data?.best_tours?.seo?.description || '',
      url: 'https://mundo-tours.com/tour-listing',
      siteName: 'Mundo tours',
      images: [
        {
          url: `https://www.mundo-tours.com/_next/image?url=/imgs/mundo_logo.png&w=384&q=100`,
          width: 100,
          height: 55,
          alt: 'Mundo tours',
        },
      ],
      locale: 'ar_SA',
      type: 'website',
    },
  }
}
const Destination = async () => {
  return (
    <Suspense>
      <div className="mt-8">
        <Filter onChange={true} enableTabs={true} destinationPromise={getDestination()} tourTypesPromise={getTourTypes()} />
      </div>
      <Tours />
    </Suspense>
  )
}

export default Destination
