import Image from 'next/image';
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
      <div className={styles.hero_background_image_container}>
        <Image
          src="/images/background/blue_background.webp"
          alt="background"
          loading="eager"
          priority
          className="hero_background_image"
          layout="fill"
          objectFit="fill"
          quality={100}
        />
      </div>
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
