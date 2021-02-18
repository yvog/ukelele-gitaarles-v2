import React from 'react'
import { ContentBlock } from '..'

const SurpriseComponent: React.FC = () => {
  return (
    <ContentBlock
      title="Lessenkaart cadeau geven"
      img={<img src="/images/icon/icon_box.svg" width="100" height="100" loading="lazy" />}
    >
      <p>
        Mocht je liever iemand anders willen verrassen met een vaste reeks muzieklessen kan dat ook. Hiervoor bied ik
        een speciale lessenkaart aan, waarmee 5 tot 10 lessen voor een instrument naar keuze kunnen worden gevolgd.
        Vraag een lessenkaart aan via het{' '}
        <a className="blue-link" href="/contact">
          contactformulier
        </a>
        .
      </p>
    </ContentBlock>
  )
}

export const Surprise = SurpriseComponent
