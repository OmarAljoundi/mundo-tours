import BreadCrumb from '@/components/About/bread-crumb'
import { getContent } from '@/lib/operations'

export async function generateMetadata() {
  const data = await getContent()
  return {
    title: data?.about?.title,
    description: data?.about?.description,
    keywords: data?.about?.tags || '',
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div>
        <div className="container">
          <BreadCrumb />
        </div>
        <div className="mt-4 mb-16">{children}</div>
      </div>
    </section>
  )
}
