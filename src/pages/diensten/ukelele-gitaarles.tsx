import React from 'react'
import iconBook from '../../../public/images/icon/icon_book.svg'
import iconCamera from '../../../public/images/icon/icon_camera.svg'
import iconGrandma from '../../../public/images/icon/icon_grandma.svg'
import iconHouse from '../../../public/images/icon/icon_house.svg'
import iconMan from '../../../public/images/icon/icon_man.svg'
import iconPreknowledge from '../../../public/images/icon/icon_preknowledge.svg'
import {
  Button,
  ContentBlock,
  ExploreSignup,
  HeroServiceChoice,
  Layout,
  ServicePageHero,
  Surprise,
  Testimonials,
} from '../../components'

function UkeleleGuitarLessonsKVP() {
  return (
    <>
      <li role="listitem">
        <object data={iconHouse} width="40" height="40" aria-hidden="true">
          house
        </object>
        Lessen aan huis. Je hoeft er de deur niet voor uit
      </li>
      <li role="listitem">
        <object data={iconBook} width="40" height="40" aria-hidden="true">
          book
        </object>
        De lessen gaan verder dan alleen het leren van akkoorden of een introductiecursus
      </li>
      <li role="listitem">
        <object data={iconGrandma} width="40" height="40" aria-hidden="true">
          grandma
        </object>
        Zowel kinderen als (oudere) volwassenen zijn welkom: je bent nooit te laat om een
        muziekinstrument te leren bespelen
      </li>
      <li role="listitem">
        <object data={iconPreknowledge} width="40" height="40" aria-hidden="true">
          preknowledge
        </object>
        Voor het volgen van de lessen is geen voorkennis benodigd
      </li>
      <li role="listitem">
        <object data={iconMan} width="40" height="40" aria-hidden="true">
          man
        </object>
        Zowel persoonlijke lessen met veel aandacht voor de leerling als groepslessen zijn mogelijk
      </li>
      <li role="listitem">
        <object data={iconCamera} width="40" height="40" aria-hidden="true">
          camera
        </object>
        Les op afstand via Zoom gedurende de Covid-19 pandemie, maar ook op aanvraag
      </li>
    </>
  )
}

export default function UkeleleGuitarLessonsPage() {
  return (
    <Layout title="Ukelele- of gitaarles" canonical="/diensten/ukelele-gitaarles">
      <HeroServiceChoice>
        <ServicePageHero
          kvp={<UkeleleGuitarLessonsKVP />}
          button={<Button href="/aanmelden">Aanmelden</Button>}
          title="Ukelele- of gitaarles"
          description={
            <>
              <p>
                In de lessen komen verschillende speelstijlen aan bod; van (licht-)klassiek, jazz,
                folk, country tot moderne rock. Het samenspel wordt gestimuleerd, wat gitaar of
                ukulele spelen nóg leuker maakt. Hierbij luister ik altijd naar wat jij wilt.
              </p>
              <p>
                Les op een elektrische of een akoestische gitaar? Ook dat kan. Het plezier in het
                muziek maken staat voorop!
              </p>
              <p>
                Als basis voor welke muziekstijl dan ook, wordt er gewerkt met een beproefde
                leermethode die ontworpen is voor iedereen vanaf 6 á 7 jaar. Spelenderwijs leer je
                op een leuke manier verschillende stijlen spelen en (eventueel) muzieknoten lezen.
                Je hebt er dus geen voorkennis voor nodig.
              </p>
              <p>Iedereen van jong of oud is van harte welkom.</p>
            </>
          }
        />
      </HeroServiceChoice>

      <ContentBlock title="Gitaar of ukelele huren">
        <p>
          Als service bied ik verhuur van een Spaanse gitaar of ukulele aan. Je komt hiervoor in
          aanmerking als je minimaal 12 lessen volgt. De huurprijs is €5,- per maand, inclusief
          normaal onderhoud. Hieronder valt onder andere het vervangen van de snaren. Let op, de{' '}
          <a className="blue-link" target="_blank" href="/algemene-voorwaarden">
            algemene voorwaarden
          </a>{' '}
          zijn hierop van toepassing.
        </p>
      </ContentBlock>

      <Testimonials />

      <Surprise />

      <ExploreSignup />
    </Layout>
  )
}
