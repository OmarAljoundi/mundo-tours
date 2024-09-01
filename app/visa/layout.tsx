import BreadCrumb from '@/components/Visa/bread-crumb'
import { getContent } from '@/lib/operations'

export async function generateMetadata() {
  const data = await getContent()
  return {
    title: data?.visa?.seo?.title,
    description: data?.visa?.seo?.description,
    keywords: data?.visa?.seo?.tags || '',
  }
}

export default function VisaLayout({ children }: { children: React.ReactNode }) {
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
