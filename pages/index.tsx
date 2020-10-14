import {AboutMeSummary, ExploreSignup, Gallery, Layout, MainHero, Usp} from '../components';
import {Testimonials} from '../components/testimonials/testimonials';

export default function Home() {
  return (
    <Layout title="Welkom">

      <div className="main-container">
        <MainHero />
        <Usp />
      </div>

      <ExploreSignup />

      <div className="main-container">
        <AboutMeSummary />
      </div>

      <Testimonials />

      {/* <Gallery /> */}

    </Layout>
  )
}
