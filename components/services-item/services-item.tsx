import styles from './services-item.module.scss'

type ServicesItemComponentProps = {
  src: string
  firstTitle: string
  secondTitle: string
  url: string
}

const ServicesItemComponent: React.FC<ServicesItemComponentProps> = ({ src, firstTitle, secondTitle, url }) => {
  return (
    <div className={styles.item_container}>
      <a href={url} className={styles.services_item}>
        <img src={src} width="300" height="200" alt={src} loading="eager" />
        <h3>
          {firstTitle}
          <span className={styles.divider}></span>
          {secondTitle}
        </h3>
      </a>
    </div>
  )
}

export const ServicesItem = ServicesItemComponent
