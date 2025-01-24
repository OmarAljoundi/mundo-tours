import { FunctionComponent } from 'react'
import AboutUsSeoForm from './about-us-seo'

interface HomePageProps {}

const Page: FunctionComponent<HomePageProps> = () => {
  return (
    <div className="lg:px-4 grid">
      <div className="p-8">
        <div className="shadow-card p-8">
          <AboutUsSeoForm />
        </div>
      </div>
    </div>
  )
}

export default Page
