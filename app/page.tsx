import SectionProvider from '@/components/shared/section-provider'
import Hero from '@/components/Home/hero'
import HowWorks from '@/components/Home/how-works'
import Intro from '@/components/Home/intro'
import { getContentData, getTours } from '@/lib/operations'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { REVALIDATE_CONTENT_DATA } from '@/lib/keys'
import DestinationList from '@/components/Home/destination-list'
import BestToursList from '@/components/Home/best-tours.list'
import CategoryList from '@/components/Home/category-list'

export async function generateMetadata() {
  const data = await getContentData()
  return {
    title: data?.home?.seo?.title,
    description: data?.home?.seo?.description,
    keywords: data?.home?.seo?.tags || '',
  }
}

export default async function Home() {
  const query = new QueryClient()
  await query.prefetchQuery({
    queryKey: [REVALIDATE_CONTENT_DATA],
    queryFn: getContentData,
  })

  return (
    <div>
      <HydrationBoundary state={dehydrate(query)}>
        <Hero />
      </HydrationBoundary>

      <SectionProvider title="إنت اختار" sub="وجهتك السياحية">
        <DestinationList />
      </SectionProvider>

      <SectionProvider>
        <Intro />
      </SectionProvider>

      <SectionProvider title="البرامج الاكثر مبيعاً">
        <BestToursList />
      </SectionProvider>

      <SectionProvider title="انواع البرامج">
        <CategoryList />
      </SectionProvider>

      <SectionProvider title="أسهل مما تتخيل">
        <HowWorks />
      </SectionProvider>
    </div>
  )
}
