import React from 'react'
import iconBook from '../../../public/images/icon/icon_book.svg'
import iconCamera from '../../../public/images/icon/icon_camera.svg'
import iconGrandma from '../../../public/images/icon/icon_grandma.svg'
import iconHouse from '../../../public/images/icon/icon_house.svg'
import iconMan from '../../../public/images/icon/icon_man.svg'
import {
  Button,
  ExploreSignup,
  HeroServiceChoice,
  Layout,
  ServicePageHero,
  Surprise,
  Testimonials,
} from '../../components'

function PianoKeyboardLessonsKVP() {
  return (
    <>
      <li>
        <object data={iconHouse} width="40" height="40">
          house
        </object>
        Lessen aan huis. Je hoeft er de deur niet voor uit
      </li>
      <li>
        <object data={iconBook} width="40" height="40">
          book
        </object>
        Deze keyboard- of pianolessen zijn vooral geschikt voor beginnende muzikanten
      </li>
      <li>
        <object data={iconGrandma} width="40" height="40">
          grandma
        </object>
        Zowel kinderen als (oudere) volwassenen zijn welkom: je bent nooit te laat om een
        muziekinstrument te leren bespelen
      </li>
      <li>
        <object data={iconMan} width="40" height="40">
          man
        </object>
        Persoonlijke lessen met veel aandacht voor de leerling
      </li>
      <li>
        <object data={iconCamera} width="40" height="40">
          camera
        </object>
        Les op afstand via Zoom gedurende de Covid-19 pandemie, maar ook op aanvraag
      </li>
    </>
  )
}

export default function PianoKeyboardLessonsPage() {
  return (
    <Layout title="Piano- of keyboardles" canonical="/diensten/piano-keyboardles">
      <HeroServiceChoice>
        <ServicePageHero
          kvp={<PianoKeyboardLessonsKVP />}
          button={<Button href="/aanmelden">Aanmelden</Button>}
          title="Piano- of keyboardles"
          description={
            <>
              <p>
                In de lessen komen verschillende speelstijlen aan bod; van (licht-)klassiek tot
                jazz. De lessen kunnen zowel op keyboard als op een (akoestische) piano worden
                gevolgd. Hierbij luister ik altijd naar wat jij wilt.
              </p>
              <p>
                Als basis voor welke muziekstijl dan ook, wordt er gewerkt met een beproefde
                leermethode die ontworpen is voor iedereen vanaf 6 á 7 jaar. Spelenderwijs leer je
                op een leuke manier keyboard of piano spelen en muzieknoten lezen. Iedereen van jong
                of oud is van harte welkom.
              </p>
            </>
          }
        />
      </HeroServiceChoice>

      <Surprise />

      <Testimonials />

      <ExploreSignup />
    </Layout>
  )
}
