import React from 'react'
import { ContentBlock, ExploreSignup, HeaderNavigation, Layout, UspBar, UspItem } from '../components'

export default function AboutMePage() {
  return (
    <Layout title="Over mij">
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <ContentBlock
        title="Bert Geldhof"
        img={<img src="/images/misc/bert_geldhof.jpg" alt="Bert Geldhof" width="380" height="524" />}
      >
        <p>
          Op jonge leeftijd ben ik begonnen met het maken van muziek. Ooit begonnen met blokfluitspelen, waardoor mijn
          interesse in muziek is ontstaan.
        </p>
        <p>
          Een flink aantal jaren heb ik intensief <b>klassiek-pianolessen</b> gevolgd bij{' '}
          <b>Tine Broersma (Sweelinck Conservatorium, Amsterdam)</b> en later nog bij{' '}
          <b>Leon van Veen (Koninklijk Conservatorium, Den Haag)</b>. Daar ik mijn muzikale horizon wilde verbreden, ben
          ik destijds ook met de gitaar aan de slag gegaan. Eerst begonnen met het ontdekken van de klassieke gitaar en
          later kwam daar rockgitaar bij. Ik vond gitaarspelen zo geweldig dat het mijn hoofdinstrument is geworden en
          de piano mijn tweede instrument.
        </p>
        <p>
          Tijdens en na mijn studietijd heb ik met veel plezier gespeeld in <b>Gospelband Dawwagiem</b> in Voorschoten.
          Ook bij <b>Stichting Kerk & Theater</b> in Oegstgeest heb ik gitaar gespeeld als{' '}
          <b>Lead- en Rhythm- gitarist</b> in verschillende Christelijke producties, zoals de musicals: Jesus Christ
          Superstar (1990-1991), The Story of J.C. (1996), Starring Peter (1997-Frank Sanders), Josef and the Amazing
          Technicolor Dreamcoat (1998) en Tamara (2000). Later speelde ik nog een aantal jaren gitaar bij
          <b>Rising Hope/Together Gospelkoor</b> in Hazerswoude-Dorp.
        </p>
        <p>
          Ook in de band <b>NEON</b> (Voorschoten) heb ik met veel plezier op vele podia binnen Nederland gitaar
          gespeeld, onder andere voor bedrijven en tijdens bruiloften. Momenteel draag ik mijn muzikaal spel bij “De
          Band” in Koudekerk aan den Rijn (ukelele en gitaar).
        </p>
        <p>
          Het geeft mij niet alleen enorme voldoening om mijn muzikale kennis op dit gebied over te brengen aan jonge of
          oudere leerlingen, ook geeft het mij plezier de opgedane ervaringen met hen te delen.
        </p>
      </ContentBlock>

      <div className="main-container">
        <div className="row">
          <UspItem icon="/images/icon/icon_metronome.svg">
            Met veel geduld wordt je begeleid gedurende het leerproces. Leer muziekspelen op je eigen tempo
          </UspItem>
          <UspItem icon="/images/icon/icon_knowledge.svg">
            Er wordt geluisterd naar wat jij wilt leren: van jazz tot rock en van tabblatuur tot (muziek)notenschrift
          </UspItem>
          <UspItem icon="/images/icon/icon_heart.svg">Veel passie voor muziek én meer dan 30 jaar ervaring</UspItem>
        </div>
      </div>
      <ExploreSignup />
    </Layout>
  )
}
