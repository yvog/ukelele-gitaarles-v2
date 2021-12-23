import classNames from 'classnames'
import { ExploreSignup, HeaderNavigation, Layout } from '../components'
import { Button } from '../components/button/button'

export default function FourOhFour() {
  return (
    <Layout
      title="Pagina niet gevonden"
      description="De opgevraagde pagina kon helaas niet worden gevonden."
      robots={['noindex', 'nofollow']}
    >
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <div className="main-container body">
        <div>
          <div>
            <h2>Pagina niet gevonden</h2>
            <p>De opgevraagde pagina kon helaas niet worden gevonden.</p>
            <Button filled href="/">
              Terug
            </Button>
          </div>
        </div>
      </div>

      <ExploreSignup />
    </Layout>
  )
}
