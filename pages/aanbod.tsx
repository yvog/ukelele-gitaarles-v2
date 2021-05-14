import { HeaderNavigation, Layout, Services } from '../components'

export default function ServicesPage() {
  return (
    <Layout
      title="Aanbod"
      description={'Naast gitaarles, ukelele les en pianoles repareert Bert Geldhof snaarinstrumenten.'}
      canonical="/aanbod"
    >
      <div className="main-container header full-height">
        <HeaderNavigation variant="black" />
        <Services />
      </div>
    </Layout>
  )
}
