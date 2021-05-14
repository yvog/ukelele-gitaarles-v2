import classNames from 'classnames'
import Head from 'next/head'
import React from 'react'
import { ServicesItem } from '..'
import styles from './services.module.scss'

const ServicesComponent: React.FC = () => {
  return (
    <div className={styles.services}>
      <h2>Maak muziek</h2>
      <p>Jong of oud, gitaar of piano. Geniet van het muziek maken. Waar kan ik je mee helpen?</p>

      <Head>
        <link rel="preload" as="image" href="/images/background/aanbod_ukeleleles_gitaarles.webp"></link>
        <link rel="preload" as="image" href="/images/background/aanbod_pianoles_keyboardles.webp"></link>
        <link rel="preload" as="image" href="/images/background/aanbod_gitaarreparatie_onderhoud.webp"></link>
      </Head>

      <div className={classNames('row', styles.services_row)}>
        <ServicesItem
          src="/images/background/aanbod_ukeleleles_gitaarles.webp"
          firstTitle="Ukelele les"
          secondTitle="Gitaarles"
          url="/aanbod/ukelele-gitaarles"
        />

        <ServicesItem
          src="/images/background/aanbod_pianoles_keyboardles.webp"
          firstTitle="Pianoles"
          secondTitle="Keyboardles"
          url="/aanbod/piano-keyboardles"
        />

        <ServicesItem
          src="/images/background/aanbod_gitaarreparatie_onderhoud.webp"
          firstTitle="Reparatie"
          secondTitle="Onderhoud"
          url="/aanbod/reparatie-en-onderhoud"
        />
      </div>
    </div>
  )
}

export const Services = ServicesComponent
