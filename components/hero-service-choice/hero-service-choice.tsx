import { PropsWithChildren } from 'react'
import { HeaderNavigation, HeroWrapper } from '..'
import styles from './hero-service-choice.module.scss'

type HeroServiceChoiceComponentProps = PropsWithChildren<unknown>

// TODO: ServicePageHeroWrapper component
const HeroServiceChoiceComponent: React.FC<HeroServiceChoiceComponentProps> = ({ children }) => {
  return (
    <HeroWrapper classes={[styles.hero_service_choice]} blue={true}>
      <div className="main-container header">
        <HeaderNavigation />
        {children}
      </div>
    </HeroWrapper>
  )
}

export const HeroServiceChoice = HeroServiceChoiceComponent
