import { CostsCalculator, HeaderNavigation, Layout } from '../components'

export default function CostsPage() {
  return (
    <Layout
      title="Leskosten"
      scripts={[`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY}`]}
    >
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <section className="main-container body">
        <h2>Leskosten</h2>
        <p>
          Ukelele-Gitaarles bied de mogelijkheid om ukelele- en/of gitaarles aan huis te krijgen. Je hoeft er de deur
          niet voor uit! Hierdoor worden de leskosten bepaald op basis van het aantal kilometers vanaf mijn adres.
          Hierbij geldt een maximale straal van 40 kilometer.
        </p>

        <CostsCalculator />
      </section>
    </Layout>
  )
}
