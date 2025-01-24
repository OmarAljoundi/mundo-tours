import BreadCrumb from '@/components/About/bread-crumb'
import { getContent } from '@/lib/operations'

export async function generateMetadata() {
  const data = await getContent()
  return {
    title: data?.about?.seo?.title,
    description: data?.about?.seo?.description,
    keywords: data?.about?.seo?.tags || '',
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div>
        <div className="container">
          <BreadCrumb />
        </div>
        <div className="mb-16">{children}</div>
      </div>
    </section>
  )
}
