import Image from 'next/image'
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

          <picture>
            <source media="(min-width:1200px)" srcSet="/images/background/hero.jpg" />
            <source media="(min-width:992px)" srcSet="/images/background/hero.jpg" />
            <source media="(min-width:0)" srcSet="/images/background/hero.jpg" />
            <img
              src="/images/background/hero.jpg"
              alt="alt"
              loading="eager"
              className="hero_background_image"
              width={1920}
              height={1080}
            />
          </picture>
        </div>
      </HeroWrapper>

      <div className="main-container">
        <HeroServices />
      </div>
    </>
  )
}

export const HeroMain = HeroMainComponent
