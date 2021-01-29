import classNames from 'classnames'
import { ExploreSignup, HeaderNavigation, Layout } from '../components'
import { Button } from '../components/button/button'

export default function FourOhFour() {
  return (
    <Layout title="Pagina niet gevonden">
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <div className="main-container body">
        <div className="row">
          <div className="col-lg-12">
            <h2>Pagina niet gevonden</h2>
          </div>
          <div className="col-lg-8">
            <p>De opgevraagde pagina kon helaas niet worden gevonden.</p>
            <Button filled={true} href="/">
              Terug
            </Button>
          </div>
        </div>
      </div>

      <ExploreSignup />
    </Layout>
  )
}
