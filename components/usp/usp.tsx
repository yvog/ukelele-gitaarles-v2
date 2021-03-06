import classNames from 'classnames'
import React from 'react'
import { UspItem } from '..'
import styles from './usp.module.scss'

const UspComponent: React.FC = () => {
  return (
    <section className={classNames(styles.usp, 'container')}>
      <h4>
        Je hoeft er de deur niet voor uit, want ik bied de mogelijkheid om gitaar-, ukelele- of pianoles bij jou thuis
        te geven.
      </h4>
      <div className="row">
        <UspItem icon="/images/icon/icon_metronome.svg">
          Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren
          als ouderen, die graag de gitaar, ukelele of piano willen bespelen
        </UspItem>
        <UspItem icon="/images/icon/icon_home.svg">
          Mogelijkheid tot lessen thuis, je hoeft er de deur niet voor uit. Met de lessen wordt rekening gehouden met
          wat je wilt leren en welke liedjes jij graag zou willen leren spelen
        </UspItem>
        <UspItem icon="/images/icon/icon_knowledge.svg">
          Het is niet noodzakelijk om al voorkennis te hebben van muziek(notenschrift). Leren spelen met tablatuur is
          daarnaast ook mogelijk
        </UspItem>
      </div>
    </section>
  )
}

export const Usp = UspComponent
