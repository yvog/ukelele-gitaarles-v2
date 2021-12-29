import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './content-block.module.scss'

type ContentBlockComponentProps = {
  title: string
  img?: React.ReactNode
  swapOnMobile?: boolean
}

const ContentBlockComponent: React.FC<PropsWithChildren<ContentBlockComponentProps>> = ({
  title,
  children,
  img,
  swapOnMobile,
}) => {
  return (
    <section className={classNames(styles.content_block, 'main-container body')}>
      <h2>{title}</h2>
      <div
        className={classNames(styles.content_block_row, { [styles.swapOnMobile]: swapOnMobile })}
      >
        <div
          className={classNames(styles.content_block_row_content, {
            [styles.no_image]: img === undefined,
          })}
        >
          {children}
        </div>
        <div className={styles.image}>{img}</div>
      </div>
    </section>
  )
}

export const ContentBlock = ContentBlockComponent
