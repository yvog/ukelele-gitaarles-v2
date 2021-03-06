import React from 'react'
import { Button, ExploreSignup, HeroServiceChoice, Layout, ServicePageHero } from '../../components'

function RepairsOrMaintenanceKVP() {
  return (
    <>
      <li>
        <img src="/images/icon/icon_wrench.svg" width="40" height="40" alt="invoice" loading="lazy" />
        Jarenlange vakkundige, technische kennis
      </li>
      <li>
        <img src="/images/icon/icon_guitar.svg" width="40" height="40" alt="guitar" loading="lazy" />
        Van nieuwe snaren en afstellen tot het repareren van een scheur in jouw gitaar
      </li>
      <li>
        <img src="/images/icon/icon_invoice.svg" width="40" height="40" alt="wrench" loading="lazy" />
        Betaalbare reparatie / onderhoudsbeurt
      </li>
    </>
  )
}

export default function RepairsOrMaintenancePage() {
  return (
    <Layout title="Snaarinstrument reparatie en onderhoud" canonical="/aanbod/reparatie-en-onderhoud">
      <HeroServiceChoice>
        <ServicePageHero
          kvp={<RepairsOrMaintenanceKVP />}
          button={<Button href="/aanvragen">Aanvragen</Button>}
          title="Snaarinstrument reparatie en onderhoud"
          description={
            <>
              <p>
                Bij mij kun je terecht voor aanpassingen en/of reparaties aan jouw gitaar, ukulele of ander
                snaarinstrument. Onder andere vervanging van snaren kan ik uitvoeren. Ook voor het beter afstellen van
                je snaarinstrument (bijv. snaren die te hoog staan), ben je bij mij aan het goede adres.
              </p>
              <p>
                Door jarenlange ervaring en vakkundige technische kennis van snaarinstrumenten is je snaarinstrument bij
                mij in vertrouwde handen. Dit alles tegen een zeer redelijke (per situatie berekende) prijs.
              </p>
              <p>
                Na een aanvraag zal een moment worden ingepland om het snaarinstrument nader te bekijken. Hier komt een
                vrijblijvende offerte uit, waarna de keuze voor reparatie/onderhoud nog gemaakt kan worden.
              </p>
            </>
          }
        />
      </HeroServiceChoice>

      <ExploreSignup />
    </Layout>
  )
}
