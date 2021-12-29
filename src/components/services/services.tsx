import Head from 'next/head'
import React from 'react'
import { ServicesItem } from '..'
import styles from './services.module.scss'

const ServicesComponent: React.FC = () => {
  return (
    <div className={styles.services}>
      <h2>Maak muziek</h2>
      <p>
        Jong of oud, gitaar of piano. Iedereen kan genieten van het muziek maken. Waar kan ik je mee
        helpen?
      </p>
      <div className={styles.services_row}>
        <ServicesItem
          src="/images/background/aanbod_ukeleleles_gitaarles.webp"
          firstTitle="Ukelele les"
          secondTitle="Gitaarles"
          url="/diensten/ukelele-gitaarles"
        />

        <ServicesItem
          src="/images/background/aanbod_pianoles_keyboardles.webp"
          firstTitle="Pianoles"
          secondTitle="Keyboardles"
          url="/diensten/piano-keyboardles"
        />

        <ServicesItem
          src="/images/background/aanbod_gitaarreparatie_onderhoud.webp"
          firstTitle="Reparatie"
          secondTitle="Onderhoud"
          url="/diensten/reparatie-en-onderhoud"
        />
      </div>
    </div>
  )
}

export const Services = ServicesComponent
