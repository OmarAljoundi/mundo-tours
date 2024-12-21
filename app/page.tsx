import SectionProvider from '@/components/shared/section-provider'
import Hero from '@/components/Home/hero'
import { getContent, getDestination, getTours, getTourTypes } from '@/lib/operations'
import DestinationList from '@/components/Home/destination-list'
import BestToursList from '@/components/Home/best-tours.list'
import CategoryList from '@/components/Home/category-list'
import { cache, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import BestToursListLoading from '@/components/Loading/best-tours-list-loading'
import DestinationHomeLoading from '@/components/Loading/destination-home-loading'
import InstagramSection from '@/components/Home/instagram-section'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContent()
  return {
    title: data?.home?.seo?.title,
    description: data?.home?.seo?.description,
    keywords: data?.home?.seo?.tags || '',
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
      title: data?.home?.seo?.title || '',
      description: data?.home?.seo?.description || '',
      url: 'https://mundo-tours.com',
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

export default function Home() {
  const getContentDataCached = cache(() => {
    return getContent()
  })

  const getToursCached = cache(() => {
    return getTours()
  })

  return (
    <div>
      <Suspense fallback={<Skeleton className="w-full h-[200px] lg:h-[400px]" />}>
        <Hero contentPromise={getContentDataCached()} destinationPromise={getDestination()} tourTypesPromise={getTourTypes()} />
      </Suspense>
      <SectionProvider title="الباقات السياحية">
        <Suspense
          fallback={
            <div className="container">
              <DestinationHomeLoading />
            </div>
          }
        >
          <DestinationList destinationPromise={getDestination()} />
        </Suspense>
      </SectionProvider>

      <SectionProvider title="البرامج الاكثر مبيعاً">
        <Suspense
          fallback={
            <div className="container">
              <BestToursListLoading />
            </div>
          }
        >
          <BestToursList contactPromise={getContentDataCached()} toursPromise={getToursCached()} />
        </Suspense>
      </SectionProvider>

      <SectionProvider title="انواع البرامج">
        <Suspense fallback={<></>}>
          <CategoryList categoryPromise={getTourTypes()} />
        </Suspense>
      </SectionProvider>

      <InstagramSection />
    </div>
  )
}
