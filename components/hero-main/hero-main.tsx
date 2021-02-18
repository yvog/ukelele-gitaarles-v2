import { Button, HeaderNavigation, HeroServices, HeroWrapper } from '..'
import styles from './hero-main.module.scss'

const HeroMainComponent: React.FC = () => {
  return (
    <>
      <HeroWrapper classes={[styles.hero_main]}>
        <div className="main-container header header-main-container">
          <HeaderNavigation />

          <section>
            <article id={styles.hero_info}>
              <h2>Bert Geldhof</h2>
              <p>
                Met veel plezier geef ik persoonlijke ukelele-, gitaar- en pianolessen aan huis in Alphen aan den Rijn,
                Leiden en omstreken.
              </p>
              <Button href="/aanmelden">Aanmelden</Button>
            </article>
          </section>
        </div>

        <picture>
          <source media="(min-width:1200px)" srcSet="/images/background/hero_1600x900.jpg" />
          <source media="(min-width:0)" srcSet="/images/background/hero_768x432.jpg" />
          <img
            src="/images/background/hero_1600x900.jpg"
            alt="alt"
            loading="eager"
            className="hero_background_image darken"
            width={1366}
            height={768}
          />
        </picture>
      </HeroWrapper>

      <div className="main-container">
        <HeroServices />
      </div>
    </>
  )
}

export const HeroMain = HeroMainComponent
