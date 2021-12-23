import classNames from 'classnames'
import React from 'react'
import { HeroServicesItem } from '..'
import styles from './hero-services.module.scss'
import classnames from 'classnames'

const HeroServicesComponent: React.FC = () => {
  return (
    <section className={classNames(styles.hero_services, 'container')}>
      <img
        src="/images/background/blue_background.webp"
        alt="blue background"
        loading="lazy"
        width={446}
        height={300}
        className={classnames('hero_background_image')}
      />

      <div className="row">
        <HeroServicesItem
          icon="/images/icon/icon_guitar.svg"
          title="Ukelele / Gitaarles"
          href="/aanbod/ukelele-gitaarles"
        >
          Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren
          als ouderen, die graag de gitaar of ukelele willen bespelen.
        </HeroServicesItem>

        <HeroServicesItem
          icon="/images/icon/icon_piano.svg"
          title="Piano / Keyboardles"
          href="/aanbod/piano-keyboardles"
        >
          Er komen verschillende speelstijlen aan bod; van (licht-)klassiek tot jazz. De lessen kunnen zowel op keyboard
          als op een (akoestische) piano worden gevolgd. Hierbij luister ik altijd naar wat jij wilt.
        </HeroServicesItem>

        <HeroServicesItem
          icon="/images/icon/icon_wrench.svg"
          title="Reparatie / Onderhoud"
          href="/aanbod/reparatie-en-onderhoud"
        >
          Mogelijkheid om snaarinstrumenten te laten repareren / onderhouden. Dit beperkt zich niet tot alleen gitaren
          en ukelele's, ook banjo's of Arabische snaarinstrumenten zijn welkom.
        </HeroServicesItem>
      </div>
    </section>
  )
}

export const HeroServices = HeroServicesComponent
