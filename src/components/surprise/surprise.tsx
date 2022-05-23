import React from 'react'
import { ContentBlock } from '../content-block/content-block'
import iconBox from '../../../public/images/icon/icon_box.svg'

const SurpriseComponent: React.FC = () => {
  return (
    <ContentBlock
      title="Lessenkaart cadeau geven"
      img={
        <object data={iconBox} width="100" height="100" aria-hidden="true">
          box
        </object>
      }
    >
      <p>
        Mocht je liever iemand anders willen verrassen met een vaste reeks muzieklessen kan dat ook.
        Hiervoor bied ik een speciale lessenkaart aan, waarmee 5 tot 10 lessen voor een instrument
        naar keuze kunnen worden gevolgd. Vraag een lessenkaart aan via het{' '}
        <a className="blue-link" href="/contact">
          contactformulier
        </a>
        .
      </p>
    </ContentBlock>
  )
}

export const Surprise = SurpriseComponent
