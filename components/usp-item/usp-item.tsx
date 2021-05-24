import { PropsWithChildren } from 'react'
import styles from './usp-item.module.scss'

type UspItemProps = PropsWithChildren<{
  icon?: string
}>

const UspItemComponent: React.FC<UspItemProps> = ({ icon, children }) => {
  return (
    <article className={styles.usp_item}>
      <img src={icon} alt={icon} width="60" height="60" loading="lazy" />
      <p>{children}</p>
    </article>
  )
}

export const UspItem = UspItemComponent
