import { PropsWithChildren } from 'react'
import styles from './usp-item.module.scss'

type UspItemProps = PropsWithChildren<{
  icon: string
}>

const UspItemComponent: React.FC<UspItemProps> = ({ icon, children }) => {
  return (
    <article className={styles.usp_item}>
      <object data={icon} type="image/svg+xml" className={styles.icon}>
        usp icon
      </object>
      <p>{children}</p>
    </article>
  )
}

export const UspItem = UspItemComponent
