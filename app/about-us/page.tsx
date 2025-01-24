import AboutMundo from './about-mundo'
import Slogan from './slogan'
import Goal from './goal'
import WhyMundo from './why-mundo'

export default function Page() {
  return (
    <main className=" bg-background text-foreground overflow-hidden font-primary">
      <AboutMundo />
      <Slogan />
      <Goal />
      <WhyMundo />
    </main>
  )
}
