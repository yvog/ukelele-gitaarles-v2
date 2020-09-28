import {Button, HeaderNavigation, HeroServices, HeroServicesItem, Layout} from '../components'

export default function Home() {
  return (
    <Layout title="Welkom">

      <HeaderNavigation />

      { /* for SEO purposes */}
      <h1 className="hidden">Welkom - Ukelele-Gitaarles</h1>

      <div>
        <h2>Bert Geldhof</h2>
        <p>Met veel plezier geef ik leuke ukelele- en gitaarlessen aan huis in Alphen aan den Rijn, Leiden en omstreken.</p>
        <Button>Aanmelden</Button>
      </div>

      <HeroServices>
        <HeroServicesItem></HeroServicesItem>
        <HeroServicesItem></HeroServicesItem>
        <HeroServicesItem></HeroServicesItem>
      </HeroServices>

    </Layout>
  )
}
