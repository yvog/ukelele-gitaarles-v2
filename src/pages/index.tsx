import { AboutMeSummary, ExploreSignup, Layout, MainHero, Usp } from '../components'
import { Testimonials } from '../components/testimonials/testimonials'

export default function Home() {
  return (
    <Layout title="Welkom" canonical="/">
      <MainHero />

      <main>
        <div className="main-container body">
          <Usp />
        </div>

        <ExploreSignup />

        <div className="main-container">
          <AboutMeSummary />
        </div>

        <Testimonials />
      </main>
    </Layout>
  )
}
