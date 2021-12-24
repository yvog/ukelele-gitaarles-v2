import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import { HeaderNavigation, HeroWrapper } from '..'
import styles from './hero-service-choice.module.scss'

type HeroServiceChoiceComponentProps = PropsWithChildren<unknown>

const HeroServiceChoiceComponent: React.FC<HeroServiceChoiceComponentProps> = ({ children }) => {
  return (
    <HeroWrapper classes={[styles.hero_service_choice]}>
      <Head>
        <link rel="preload" as="image" href="/images/background/blue_background.webp"></link>
      </Head>

      <img
        src="/images/background/blue_background.webp"
        alt="alt"
        loading="eager"
        className="hero_background_image"
        width={800}
        height={543}
      />

      <div className="main-container header">
        <HeaderNavigation />
        {children}
      </div>
    </HeroWrapper>
  )
}

export const HeroServiceChoice = HeroServiceChoiceComponent
