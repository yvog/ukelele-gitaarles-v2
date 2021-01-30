import React from 'react'
import {
  Button,
  ContentBlock,
  ExploreSignup,
  HeroServiceChoice,
  Layout,
  ServicePageHero,
  Surprise,
} from '../../components'

function PianoKeyboardLessonsKVP() {
  return (
    <>
      <li>
        <img src="/images/icon/icon_home.svg" width="40" height="40" alt="home" />
        Lessen aan huis. Je hoeft er de deur niet voor uit
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

export default function PianoKeyboardLessonsPage() {
  return (
    <Layout title="Piano- of keyboardles">
      <HeroServiceChoice>
        <ServicePageHero
          kvp={<PianoKeyboardLessonsKVP />}
          button={<Button href="/aanmelden">Aanmelden</Button>}
          title="Piano- of keyboardles"
          description="Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen."
        />
      </HeroServiceChoice>

      <Surprise />

      <ExploreSignup />
    </Layout>
  )
}
