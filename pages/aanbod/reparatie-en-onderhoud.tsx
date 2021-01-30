import React from 'react'
import { Button, ContentBlock, ExploreSignup, HeroServiceChoice, Layout, ServicePageHero } from '../../components'

function RepairsOrMaintenanceKVP() {
  return (
    <>
      <li>
        <img src="/images/icon/icon_home.svg" width="40" height="40" alt="home" />
        Technische kennis
      </li>
      <li>
        <img src="/images/icon/icon_guitar.svg" width="40" height="40" alt="warning" />
        Deze lessen beperken zich tot alleen een introductiecursus
      </li>
      <li>
        <img src="/images/icon/icon_guitar.svg" width="40" height="40" alt="grandma" />
        Zowel kinderen als (oudere) volwassenen zijn welkom: je bent nooit te laat om een muziekinstrument te leren
        bespelen
      </li>
      <li>
        <img src="/images/icon/icon_knowledge.svg" width="40" height="40" alt="knowledge" />
        Voor het volgen van de lessen is geen voorkennis benodigd
      </li>
      <li>
        <img src="/images/icon/icon_guitar.svg" width="40" height="40" alt="guitar" />
        Zowel persoonlijke lessen met veel aandacht voor het leerproces als groepslessen zijn mogelijk
      </li>
    </>
  )
}

export default function RepairsOrMaintenancePage() {
  return (
    <Layout title="Snaarinstrument reparatie en onderhoud">
      <HeroServiceChoice>
        <ServicePageHero
          kvp={<RepairsOrMaintenanceKVP />}
          button={<Button href="/aanmelden">Aanmelden</Button>}
          title="Snaarinstrument reparatie en onderhoud"
          description="Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen."
        />
      </HeroServiceChoice>

      {/* TODO: small portfolio here */}
      {/* <ContentBlock
        title="Lessenkaart cadeau geven"
        img={<img src="/images/icon/icon_box.svg" width="100" height="100" />}
      >
        <p>
          Mocht je liever iemand anders willen verrassen met een vaste reeks muzieklessen kan dat ook. Hiervoor bied ik
          een speciale lessenkaart aan, waarmee 5 tot 10 lessen voor een instrument naar keuze kunnen worden gevolgd.
          Vraag een lessenkaart aan via het{' '}
          <a className="blue-link" href="/contact">
            contactformulier
          </a>
          .
        </p>
      </ContentBlock> */}

      <ExploreSignup />
    </Layout>
  )
}
