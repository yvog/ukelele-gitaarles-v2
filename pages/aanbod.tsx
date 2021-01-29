import { HeaderNavigation, Layout, Services } from '../components'

export default function ServicesPage() {
  return (
    <Layout title="Aanbod">
      <div className="main-container header full-height">
        <HeaderNavigation variant="black" />
        <Services />
      </div>
    </Layout>
  )
}
