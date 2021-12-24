import { HeaderNavigation, Layout, Services } from '../components'

export default function ServicesPage() {
  return (
    <Layout
      title="Diensten"
      description={
        'Naast gitaarles, ukelele les en pianoles repareert Bert Geldhof snaarinstrumenten.'
      }
      canonical="/diensten"
    >
      <div className="main-container header full-height">
        <HeaderNavigation variant="black" />
        <Services />
      </div>
    </Layout>
  )
}
