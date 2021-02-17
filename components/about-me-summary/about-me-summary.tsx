import classNames from 'classnames'
import { Button } from '..'
import styles from './about-me-summary.module.scss'
import Image from 'next/image'

const AboutMeSummaryComponent: React.FC = () => {
  return (
    <section className={classNames(styles.about_me_summary, 'container')}>
      <h4>Bert Geldhof</h4>

      <div className="row">
        <div className="col-lg-4">
          <Image
            className={classNames(styles.about_me_summary_image)}
            src="/images/misc/bert_geldhof.jpg"
            alt="Bert Geldhof"
            width={240}
            height={312}
            loading="lazy"
          />
        </div>

        <div className={classNames(styles.about_me_summary_content, 'col-lg-8')}>
          <p>
            Op jonge leeftijd ben ik begonnen met het maken van muziek. Ooit begonnen met blokfluitspelen, waardoor mijn
            brede interesse in muziek is ontstaan.
          </p>
          <p>
            Tijdens en na mijn studietijd heb ik met veel plezier gespeeld in Gospelband Dawwagiem in Voorschoten. Ook
            bij Stichting Kerk & Theater (Oegstgeest) heb ik gitaar in de band gespeeld: als Lead- en Rhythm- gitarist
            in verschillende Christelijke producties.
          </p>
          <Button filled={true} href="/over-mij">
            Meer over mij
          </Button>
        </div>
      </div>
    </section>
  )
}

export const AboutMeSummary = AboutMeSummaryComponent
