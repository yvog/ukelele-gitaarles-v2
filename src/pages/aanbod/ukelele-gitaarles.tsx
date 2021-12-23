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
        <img src="/images/icon/icon_house.svg" width="40" height="40" alt="house" loading="lazy" />
        Lessen aan huis. Je hoeft er de deur niet voor uit
      </li>
      <li>
        <img src="/images/icon/icon_book.svg" width="40" height="40" alt="book" loading="lazy" />
        De lessen gaan verder dan alleen het leren van akkoorden of een introductiecursus
      </li>
      <li>
        <img src="/images/icon/icon_grandma.svg" width="40" height="40" alt="grandma" loading="lazy" />
        Zowel kinderen als (oudere) volwassenen zijn welkom: je bent nooit te laat om een muziekinstrument te leren
        bespelen
      </li>
      <li>
        <img src="/images/icon/icon_preknowledge.svg" width="40" height="40" alt="preknowledge" loading="lazy" />
        Voor het volgen van de lessen is geen voorkennis benodigd
      </li>
      <li>
        <img src="/images/icon/icon_man.svg" width="40" height="40" alt="man" loading="lazy" />
        Zowel persoonlijke lessen met veel aandacht voor de leerling als groepslessen zijn mogelijk
      </li>
      <li>
        <img src="/images/icon/icon_camera.svg" width="40" height="40" alt="man" loading="lazy" />
        Les op afstand via Zoom gedurende de Covid-19 pandemie, maar ook op aanvraag
      </li>
    </>
  )
}

export default function UkeleleGuitarLessonsPage() {
  return (
    <Layout title="Ukelele- of gitaarles" canonical="/aanbod/ukelele-gitaarles">
      <HeroServiceChoice>
        <ServicePageHero
          kvp={<UkeleleGuitarLessonsKVP />}
          button={<Button href="/aanmelden">Aanmelden</Button>}
          title="Ukelele- of gitaarles"
          description={
            <>
              <p>
                In de lessen komen verschillende speelstijlen aan bod; van (licht-)klassiek, jazz, folk, country tot
                moderne rock. Het samenspel wordt gestimuleerd, wat gitaar of ukulele spelen nóg leuker maakt. Hierbij
                luister ik altijd naar wat jij wilt.
              </p>
              <p>
                Les op een elektrische of een akoestische gitaar? Ook dat kan. Het plezier in het muziek maken staat
                voorop!
              </p>
              <p>
                Als basis voor welke muziekstijl dan ook, wordt er gewerkt met een beproefde leermethode die ontworpen
                is voor iedereen vanaf 6 á 7 jaar. Spelenderwijs leer je op een leuke manier verschillende stijlen
                spelen en (eventueel) muzieknoten lezen. Je hebt er dus geen voorkennis voor nodig.
              </p>
              <p>Iedereen van jong of oud is van harte welkom.</p>
            </>
          }
        />
      </HeroServiceChoice>

      <ContentBlock title="Gitaar of ukelele huren">
        <p>
          Als service bied ik verhuur van een Spaanse gitaar of ukulele aan. Je komt hiervoor in aanmerking als je
          minimaal 12 lessen volgt. De huurprijs is €5,- per maand, inclusief normaal onderhoud. Hieronder valt onder
          andere het vervangen van de snaren. Let op, de{' '}
          <a className="blue-link" target="_blank" href="/algemene-voorwaarden">
            algemene voorwaarden
          </a>{' '}
          zijn hierop van toepassing.
        </p>
      </ContentBlock>

      <ExploreSignup />

      <Surprise />
    </Layout>
  )
}
