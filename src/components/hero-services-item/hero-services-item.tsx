import { PropsWithChildren } from 'react'
import styles from './hero-services-item.module.scss'

type HeroServicesItemProps = PropsWithChildren<{
  icon: string
  title: string
  href: string
}>

export const HeroServicesItemComponent: React.FC<HeroServicesItemProps> = ({
  icon,
  title,
  href,
  children,
}) => {
  return (
    <div className={styles.hero_services_item}>
      <object data={icon} type="image/svg+xml" width="60" height="60" aria-hidden="true">
        service icon
      </object>
      <div>
        <a href={href} className={styles.hero_services_item_link}>
          <h3>{title}</h3>
        </a>
        <p>{children}</p>
      </div>
    </div>
  )
}

export const HeroServicesItem = HeroServicesItemComponent
