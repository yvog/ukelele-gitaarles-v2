import { PropsWithChildren } from 'react'
import { HeaderNavigation, HeroWrapper } from '..'
import styles from './hero-service-choice.module.scss'

type HeroServiceChoiceComponentProps = PropsWithChildren<unknown>

// TODO: ServicePageHeroWrapper component
const HeroServiceChoiceComponent: React.FC<HeroServiceChoiceComponentProps> = ({ children }) => {
  return (
    <HeroWrapper classes={[styles.hero_service_choice]}>
      <picture>
        <source media="(min-width:1200px)" srcSet="/images/background/blue_background.png" />
        <source media="(min-width:992px)" srcSet="/images/background/blue_background.png" />
        <source media="(min-width:0)" srcSet="/images/background/blue_background.png" />
        <img
          src="/images/background/blue_background.png"
          alt="alt"
          loading="eager"
          className="hero_background_image"
          width={1920}
          height={540}
        />
      </picture>

      <div className="main-container header">
        <HeaderNavigation />
        {children}
      </div>
    </HeroWrapper>
  )
}

export const HeroServiceChoice = HeroServiceChoiceComponent
