import {AboutMeSummary, Button, ExploreSignup, HeaderNavigation, HeroServices, Layout, Usp} from '../components';
import {Testimonials} from '../components/testimonials/testimonials';
import styles from '../styles/pages/index.module.scss';

export default function Home() {
  return (
    <Layout title="Welkom">

      <HeaderNavigation />

      { /* for SEO purposes */}
      <h1 className="hidden">Welkom - Ukelele-Gitaarles</h1>

      <section>
        <img src="/images/background.jpg" alt="background" width="60" height="60" className="background" />

        <article id={styles.hero_info}>
          <h2>Bert Geldhof</h2>
          <p>Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en omstreken.</p>
          <Button href="/aanmelden">Aanmelden</Button>
        </article>
      </section>

      <HeroServices />

      <main>

        <Usp />

        <ExploreSignup />

        <AboutMeSummary />

        <Testimonials />

      </main>

    </Layout>
  )
}
