import { HeaderNavigation, HeroWrapper } from '..'
import styles from './hero-service-choice.module.scss'

type HeroServiceChoiceComponentProps = {
  children: React.ReactNode
}

const HeroServiceChoiceComponent: React.FC<HeroServiceChoiceComponentProps> = ({ children }) => {
  return (
    <HeroWrapper classes={[styles.hero_service_choice]} blue={true}>
      <div className="main-container header-main-container">
        <HeaderNavigation />

        {children}
      </div>
    </HeroWrapper>
  )
}

export const HeroServiceChoice = HeroServiceChoiceComponent
