import { PropsWithChildren } from 'react'
import styles from './usp-item.module.scss'

type UspItemProps = PropsWithChildren<{
  icon: string
}>

const UspItemComponent: React.FC<UspItemProps> = ({ icon, children }) => {
  return (
    <div className={styles.usp_item}>
      <object data={icon} type="image/svg+xml" className={styles.icon} aria-hidden="true">
        usp icon
      </object>
      <p>{children}</p>
    </div>
  )
}

export const UspItem = UspItemComponent
