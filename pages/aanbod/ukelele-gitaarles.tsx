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
        <img src="/images/icon/icon_house.svg" width="40" height="40" alt="house" />
        Lessen aan huis. Je hoeft er de deur niet voor uit
      </li>
      <li>
        <img src="/images/icon/icon_book.svg" width="40" height="40" alt="book" />
        De lessen gaan verder dan alleen het leren van akkoorden of een introductiecursus
      </li>
      <li>
        <img src="/images/icon/icon_grandma.svg" width="40" height="40" alt="grandma" />
        Zowel kinderen als (oudere) volwassenen zijn welkom: je bent nooit te laat om een muziekinstrument te leren
        bespelen
      </li>
      <li>
        <img src="/images/icon/icon_preknowledge.svg" width="40" height="40" alt="preknowledge" />
        Voor het volgen van de lessen is geen voorkennis benodigd
      </li>
      <li>
        <img src="/images/icon/icon_man.svg" width="40" height="40" alt="man" />
        Zowel persoonlijke lessen met veel aandacht voor de leerling als groepslessen zijn mogelijk
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
