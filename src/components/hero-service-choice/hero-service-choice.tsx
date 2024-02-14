import Head from 'next/head';
import React from 'react';
import {
  HeroServiceChoiceFragment,
  NavigationItemFragment,
  ServicePageHeroFragment,
} from '../../gql/graphql';
import { HeaderNavigation } from '../header-navigation/header-navigation';
import { HeroWrapper } from '../hero-wrapper/hero-wrapper';
import { ServicePageHero } from '../service-page-hero/service-page-hero';
import styles from './hero-service-choice.module.scss';

type HeroServiceChoiceProps = HeroServiceChoiceFragment;

export const HeroServiceChoice: React.FC<HeroServiceChoiceProps> = ({
  mainNavigation: { items },
  servicePageHero,
}) => {
  return (
    <HeroWrapper classes={[styles.hero_service_choice]}>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/images/background/blue_background.webp"
        ></link>
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
        <HeaderNavigation
          items={items as NavigationItemFragment[]}
          variant="white_full"
        />
        <ServicePageHero {...(servicePageHero as ServicePageHeroFragment)} />
      </div>
    </HeroWrapper>
  );
};
