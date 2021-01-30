import classNames from 'classnames'
import styles from './hero-services-item.module.scss'
import { PropsWithChildren } from 'react'

type HeroServicesItemProps = PropsWithChildren<{
  icon: string
  title: string
}>

export const HeroServicesItemComponent: React.FC<HeroServicesItemProps> = ({ icon, title, children }) => {
  return (
    <article className={classNames(styles.hero_services_item, 'col-md-4')}>
      <img src={icon} alt={icon} width="60" height="60" />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}

export const HeroServicesItem = HeroServicesItemComponent
