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

function UkeleleGuitarLessonsKVP() {
  return (
    <>
      <li>
        <img src="/images/icon/icon_home.svg" width="40" height="40" alt="home" />
        Lessen aan huis. Je hoeft er de deur niet voor uit
      </li>
      <li>
        <img src="/images/icon/icon_guitar.svg" width="40" height="40" alt="book" />
        De lessen gaan verder dan alleen het leren van akkoorden of een introductiecursus
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

export default function UkeleleGuitarLessonsPage() {
  return (
    <Layout title="Ukelele- of gitaarles">
      <HeroServiceChoice>
        <ServicePageHero
          kvp={<UkeleleGuitarLessonsKVP />}
          button={<Button href="/aanmelden">Aanmelden</Button>}
          title="Ukelele- of gitaarles"
          description="Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen."
        />
      </HeroServiceChoice>

      <ContentBlock title="Gitaar of ukelele huren">
        <p>
          Als service bied ik verhuur van een redelijke lesgitaar/ukulele aan in combinatie met 12 lessen (mits
          voorradig). Alle gitaren en ukelele's zijn van redelijke kwaliteit en klank. Daarnaast makkelijk bespeelbaar
          en goed genoeg om er de lessen mee te volgen. De huurprijs is inclusief normaal onderhoud, zoals bijvoorbeeld
          snaren vervangen. Let er wel op dat als het instrument verloren, gestolen of beschadigd is, je aansprakelijk
          bent voor eventueel herstel of vervanging ervan (zie{' '}
          <a className="blue-link" target="_blank" href="/algemene-voorwaarden">
            algemene voorwaarden
          </a>
          ). Alle gitaren worden met hoes geleverd. Bij interesse kun je het huren van een gitaar of ukelele benoemen in
          het{' '}
          <a className="blue-link" href="/aanmelden">
            aanmeldformulier
          </a>
          .
        </p>
      </ContentBlock>

      <ExploreSignup />

      <Surprise />
    </Layout>
  )
}
