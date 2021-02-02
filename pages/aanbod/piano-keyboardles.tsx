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
        Deze keyboard- of pianolessen zijn vooral geschikt voor beginnende muzikanten
      </li>
      <li>
        <img src="/images/icon/icon_guitar.svg" width="40" height="40" alt="grandma" />
        Zowel kinderen als (oudere) volwassenen zijn welkom: je bent nooit te laat om een muziekinstrument te leren
        bespelen
      </li>
      <li>
        <img src="/images/icon/icon_guitar.svg" width="40" height="40" alt="guitar" />
        Persoonlijke lessen met veel aandacht voor de leerling
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
          description={
            <>
              <p>
                In de lessen komen verschillende speelstijlen aan bod; van (licht-)klassiek tot jazz. De lessen kunnen
                zowel op keyboard als op een (akoestische) piano worden gevolgd. Hierbij luister ik altijd naar wat jij
                wilt.
              </p>
              <p>
                Als basis voor welke muziekstijl dan ook, wordt er gewerkt met een beproefde leermethode die ontworpen
                is voor iedereen vanaf 6 á 7 jaar. Spelenderwijs leer je op een leuke manier keyboard of piano spelen en
                muzieknoten lezen. Iedereen van jong of oud is van harte welkom.
              </p>
            </>
          }
        />
      </HeroServiceChoice>

      <Surprise />

      <ExploreSignup />
    </Layout>
  )
}
