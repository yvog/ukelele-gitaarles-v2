import classNames from 'classnames'
import React from 'react'
import { ContentBlock, ExploreSignup, HeaderNavigation, Layout, UspItem } from '../components'
import styles from '../styles/page/over-mij.module.scss'

export default function AboutMePage() {
  return (
    <Layout title="Over mij" canonical="/over-mij">
      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <main role="main">
        <div className={styles.content}>
          <ContentBlock
            title="Bert Geldhof"
            img={
              <img
                src="/images/bert_geldhof.webp"
                alt="Bert Geldhof"
                width="550"
                height="413"
                loading="eager"
                className={styles.image}
              />
            }
            swapOnMobile
          >
            <p>
              Op jonge leeftijd ben ik begonnen met het maken van muziek. Ooit begonnen met
              blokfluitspelen, waardoor mijn interesse in muziek is ontstaan.
            </p>
            <p>
              Een flink aantal jaren heb ik intensief <strong>klassiek-pianolessen</strong> gevolgd
              bij <strong>Tine Broersma (Sweelinck Conservatorium, Amsterdam)</strong> en later nog
              bij <strong>Leon van Veen (Koninklijk Conservatorium, Den Haag)</strong>. Daar ik mijn
              muzikale horizon wilde verbreden, ben ik destijds ook met de gitaar aan de slag
              gegaan. Eerst begonnen met het ontdekken van de klassieke gitaar en later kwam daar
              rockgitaar bij. Ik vond gitaarspelen zo geweldig dat het mijn hoofdinstrument is
              geworden en de piano mijn tweede instrument.
            </p>
            <p>
              Tijdens en na mijn studietijd heb ik met veel plezier gespeeld in{' '}
              <strong>Gospelband Dawwagiem</strong> in Voorschoten. Ook bij{' '}
              <strong>Stichting Kerk & Theater</strong> in Oegstgeest heb ik gitaar gespeeld als{' '}
              <strong>Lead- en Rhythm- gitarist</strong> in verschillende Christelijke producties,
              zoals de musicals: Jesus Christ Superstar (1990-1991), The Story of J.C. (1996),
              Starring Peter (1997-Frank Sanders), Josef and the Amazing Technicolor Dreamcoat
              (1998) en Tamara (2000). Later speelde ik nog een aantal jaren gitaar bij{' '}
              <strong>Rising Hope/Together Gospelkoor</strong> in Hazerswoude-Dorp.
            </p>
            <p>
              Ook in de band <strong>NEON</strong> (Voorschoten) heb ik met veel plezier op vele
              podia binnen Nederland gitaar gespeeld, onder andere voor bedrijven en tijdens
              bruiloften. Tot slot heb ik mijn muzikaal spel bijgedragen aan “De Band” in Koudekerk
              aan den Rijn (ukelele en gitaar).
            </p>
            <p>
              Het geeft mij niet alleen enorme voldoening om mijn muzikale kennis op dit gebied over
              te brengen aan jonge of oudere leerlingen, ook geeft het mij plezier de opgedane
              ervaringen met hen te delen.
            </p>
          </ContentBlock>
        </div>

        <div className={classNames('main-container', styles.about_me_usps)}>
          <UspItem icon="/images/icon/icon_metronome.svg">
            Met veel geduld wordt je begeleid gedurende het leerproces. Leer muziekspelen op je
            eigen tempo
          </UspItem>
          <UspItem icon="/images/icon/icon_knowledge.svg">
            Er wordt geluisterd naar wat jij wilt leren: van jazz tot rock en van tabblatuur tot
            (muziek)notenschrift
          </UspItem>
          <UspItem icon="/images/icon/icon_heart.svg">
            Veel passie voor muziek én meer dan 30 jaar ervaring
          </UspItem>
        </div>
        <ExploreSignup />
      </main>
    </Layout>
  )
}
