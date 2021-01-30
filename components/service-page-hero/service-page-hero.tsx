import React from 'react'
import styles from './service-page-hero.module.scss'

type ServicePageHeroComponentProps = {
  title: string
  description: string
  kvp: React.ReactNode
  button: React.ReactNode
}

const ServicePageHeroComponent: React.FC<ServicePageHeroComponentProps> = ({ title, description, kvp, button }) => {
  return (
    <section className={styles.service_page_hero}>
      <h2>{title}</h2>

      <div className={styles.description}>{description}</div>

      <ul className={styles.kvp}>{kvp}</ul>

      <div className={styles.signup_btn}>{button}</div>
    </section>
  )
}

export const ServicePageHero = ServicePageHeroComponent
