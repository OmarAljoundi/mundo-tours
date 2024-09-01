import SectionProvider from '@/components/shared/section-provider'
import Hero from '@/components/Home/hero'
import HowWorks from '@/components/Home/how-works'
import Intro from '@/components/Home/intro'
import { getContent, getDestination, getTours, getTourTypes } from '@/lib/operations'
import DestinationList from '@/components/Home/destination-list'
import BestToursList from '@/components/Home/best-tours.list'
import CategoryList from '@/components/Home/category-list'
import { cache, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import BestToursListLoading from '@/components/Loading/best-tours-list-loading'
import DestinationHomeLoading from '@/components/Loading/destination-home-loading'
import InstagramSection from '@/components/Home/instagram-section'

export async function generateMetadata() {
  const data = await getContent()
  return {
    title: data?.home?.seo?.title,
    description: data?.home?.seo?.description,
    keywords: data?.home?.seo?.tags || '',
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
      <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
        <Hero contentPromise={getContentDataCached()} toursPromise={getToursCached()} />
      </Suspense>
      <SectionProvider title="إنت اختار" sub="وجهتك السياحية">
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

      <SectionProvider>
        <Intro />
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

      <SectionProvider title="أسهل مما تتخيل">
        <HowWorks />
      </SectionProvider>

      <InstagramSection />
    </div>
  )
}
