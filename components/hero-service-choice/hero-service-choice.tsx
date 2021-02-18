import { PropsWithChildren } from 'react'
import { HeaderNavigation, HeroWrapper } from '..'
import styles from './hero-service-choice.module.scss'

type HeroServiceChoiceComponentProps = PropsWithChildren<unknown>

// TODO: ServicePageHeroWrapper component
const HeroServiceChoiceComponent: React.FC<HeroServiceChoiceComponentProps> = ({ children }) => {
  return (
    <HeroWrapper classes={[styles.hero_service_choice]}>
      <img
        src="/images/background/blue_background.jpg"
        alt="alt"
        loading="eager"
        className="hero_background_image"
        width={800}
        height={543}
      />

      <div className="main-container header">
        <HeaderNavigation />
        {children}
      </div>
    </HeroWrapper>
  )
}

export const HeroServiceChoice = HeroServiceChoiceComponent
