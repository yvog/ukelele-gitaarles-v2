import classNames from 'classnames'
import React from 'react'
import { HeroServicesItem } from '..'
import styles from './hero-services.module.scss'
import classnames from 'classnames'
import iconGuitar from '../../../public/images/icon/icon_guitar.svg'
import iconPiano from '../../../public/images/icon/icon_piano.svg'
import iconWrench from '../../../public/images/icon/icon_wrench.svg'

const HeroServicesComponent: React.FC = () => {
  return (
    <section className={classNames(styles.hero_services, 'container')}>
      <h2 className="hidden">Hero services</h2>
      <img
        src="/images/background/blue_background.webp"
        alt="blue background"
        loading="lazy"
        width={446}
        height={300}
        className={classnames('hero_background_image')}
      />
      <div className={styles.hero_services_items}>
        <HeroServicesItem
          icon={iconGuitar}
          title="Ukelele / Gitaarles"
          href="/diensten/ukelele-gitaarles"
        >
          Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt
          voor zowel jongeren als ouderen, die graag de gitaar of ukelele willen bespelen.
        </HeroServicesItem>

        <HeroServicesItem
          icon={iconPiano}
          title="Piano / Keyboardles"
          href="/diensten/piano-keyboardles"
        >
          Er komen verschillende speelstijlen aan bod; van (licht-)klassiek tot jazz. De lessen
          kunnen zowel op keyboard als op een (akoestische) piano worden gevolgd. Hierbij luister ik
          altijd naar wat jij wilt.
        </HeroServicesItem>

        <HeroServicesItem
          icon={iconWrench}
          title="Reparatie / Onderhoud"
          href="/diensten/reparatie-en-onderhoud"
        >
          Mogelijkheid om snaarinstrumenten te laten repareren / onderhouden. Dit beperkt zich niet
          tot alleen gitaren en ukelele's, ook banjo's of Arabische snaarinstrumenten zijn welkom.
        </HeroServicesItem>
      </div>
    </section>
  )
}

export const HeroServices = HeroServicesComponent
