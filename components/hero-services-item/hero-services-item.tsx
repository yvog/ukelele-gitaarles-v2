import { PropsWithChildren } from 'react'
import styles from './hero-services-item.module.scss'

type HeroServicesItemProps = PropsWithChildren<{
  icon: string
  title: string
  href: string
}>

export const HeroServicesItemComponent: React.FC<HeroServicesItemProps> = ({ icon, title, href, children }) => {
  return (
    <article className={styles.hero_services_item}>
      <img src={icon} alt={icon} width="60" height="60" loading="eager" />
      <a href={href} className={styles.hero_services_item_link}>
        <h3>{title}</h3>
      </a>
      <p>{children}</p>
    </article>
  )
}

export const HeroServicesItem = HeroServicesItemComponent
