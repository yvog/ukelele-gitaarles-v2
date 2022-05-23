import classNames from 'classnames'
import styles from './about-me-summary.module.scss'

const AboutMeSummaryComponent: React.FC = () => {
  return (
    <section className={classNames(styles.about_me_summary, 'container')}>
      <h2>Bert Geldhof</h2>
      <div className={styles.about_me_summary_inner}>
        <img
          src="/images/bert_geldhof.webp"
          alt="Bert Geldhof"
          width={240}
          height={240}
          loading="lazy"
        />
        <div>
          <p>
            Op jonge leeftijd ben ik begonnen met het maken van muziek. Ooit begonnen met
            blokfluitspelen, waardoor mijn brede interesse in muziek is ontstaan. Tijdens en na mijn
            studietijd heb ik met veel plezier gespeeld in Gospelband Dawwagiem in Voorschoten. Ook
            bij Stichting Kerk & Theater (Oegstgeest) heb ik gitaar in de band gespeeld: als Lead-
            en Rhythm- gitarist in verschillende Christelijke producties.
          </p>
          <a href="/over-mij" className="text">
            Lees meer over mij
          </a>
        </div>
      </div>
    </section>
  )
}

export const AboutMeSummary = AboutMeSummaryComponent
