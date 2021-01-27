import { Button, HeaderNavigation, HeroServices, HeroWrapper } from '..'
import styles from './hero-main.module.scss'

const HeroMainComponent: React.FC = () => {
  return (
    <>
      <HeroWrapper classes={[styles.hero_main]}>
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
      </HeroWrapper>

      <HeroServices />
    </>
  )
}

export const HeroMain = HeroMainComponent
