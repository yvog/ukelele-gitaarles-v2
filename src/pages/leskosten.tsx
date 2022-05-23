import { CostsCalculator, HeaderNavigation, Layout } from '../components'

export default function CostsPage() {
  return (
    <Layout
      title="Leskosten"
      useReCaptcha
      description={
        'Bereken jouw kosten voor gitaarles, ukelele les of pianoles aan huis van Bert Geldhof.'
      }
      canonical="/leskosten"
    >
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>
      <main role="main">
        <section className="main-container body">
          <h2>Leskosten</h2>
          <p className="max-width-content">
            Ukelele-Gitaarles bied de mogelijkheid om ukelele- en/of gitaarles aan huis te krijgen.
            Je hoeft er de deur niet voor uit! Hierdoor worden de leskosten bepaald op basis van het
            aantal kilometers vanaf mijn adres. Hierbij geldt een maximale straal van 40 kilometer.
          </p>

          <CostsCalculator />
        </section>
      </main>
    </Layout>
  )
}
