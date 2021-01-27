import classNames from 'classnames'
import { Button } from '..'
import parentStyles from '../hero-service-choice/hero-service-choice.module.scss'
import styles from '../hero-service-choice-article.module.scss'

type HeroServiceChoiceArticleComponentProps = {
  children: React.ReactNode
  imgSrc: string
  imgSize: any[]
  title: string
  buttonUrl: string
  buttonSubject: string
  cropWidth: number
  reversed?: boolean
}

const HeroServiceChoiceArticleComponent: React.FC<HeroServiceChoiceArticleComponentProps> = ({
  children,
  imgSrc,
  imgSize,
  title,
  buttonUrl,
  buttonSubject,
  cropWidth,
  reversed = false,
}) => {
  return (
    <article className={classNames('col-lg-6')}>
      <div className={parentStyles.crop} style={{ width: cropWidth + 'px' }}>
        <img
          src={imgSrc}
          // height={imgSize[0]}
          // width={imgSize[1]}
          alt={imgSrc}
          style={{
            transform: reversed ? `translate(-${cropWidth}px, 0)` : `translate(${cropWidth}px, 0)`,
          }}
        />
      </div>

      <h2>{title}</h2>

      <p>{children}</p>

      <div className={parentStyles.button_wrap}>
        <Button href={buttonUrl}>Ik wil {buttonSubject}</Button>
      </div>
    </article>
  )
}

export const HeroServiceChoiceArticle = HeroServiceChoiceArticleComponent
