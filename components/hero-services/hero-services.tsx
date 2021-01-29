import classNames from 'classnames'
import { HeroServicesItem } from '..'
import styles from './hero-services.module.scss'

const HeroServicesComponent: React.FC = () => {
  return (
    <section className={classNames(styles.hero_services, 'container')}>
      <div className="row">
        <HeroServicesItem icon="/images/icon/icon_guitar.svg" title="Ukelele / Gitaarles">
          Je favoriete muziek leren spelen in je eigen tempo. De gebruikte lesmethode is geschikt voor zowel jongeren
          als ouderen, die graag de gitaar of ukelele willen bespelen.
        </HeroServicesItem>

        <HeroServicesItem icon="/images/icon/icon_piano.svg" title="Piano / Keyboardles">
          Tegenwoordig bied ik ook piano / keyboardlessen aan. Voorkennis van (muziek)notenschrift is niet vereist.
        </HeroServicesItem>

        <HeroServicesItem icon="/images/icon/icon_wrench.svg" title="Reparatie / Onderhoud">
          Mogelijkheid om snaarinstrumenten te laten repareren / onderhouden. Dit beperkt zich niet tot alleen gitaren
          en ukelele's, ook banjo's of Arabische snaarinstrumenten zijn welkom.
        </HeroServicesItem>
      </div>
    </section>
  )
}

export const HeroServices = HeroServicesComponent
