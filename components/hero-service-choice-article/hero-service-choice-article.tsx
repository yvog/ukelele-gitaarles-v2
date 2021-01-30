import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import { Button } from '..'
import parentStyles from '../hero-service-choice/hero-service-choice.module.scss'

type HeroServiceChoiceArticleComponentProps = PropsWithChildren<{
  title: string
  buttonUrl: string
  buttonSubject: string
}>

const HeroServiceChoiceArticleComponent: React.FC<HeroServiceChoiceArticleComponentProps> = ({
  children,
  title,
  buttonUrl,
  buttonSubject,
}) => {
  return (
    <article className={classNames('col-lg-6')}>
      <h2>{title}</h2>

      <p>{children}</p>

      <div className={parentStyles.button_wrap}>
        <Button href={buttonUrl}>Ik wil {buttonSubject}</Button>
      </div>
    </article>
  )
}

export const HeroServiceChoiceArticle = HeroServiceChoiceArticleComponent
