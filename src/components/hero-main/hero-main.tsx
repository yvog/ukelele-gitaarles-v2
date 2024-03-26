import Image from 'next/image';
import React from 'react';
import { Button, HeaderNavigation, HeroServices, HeroWrapper } from '..';
import {
  ButtonFragment,
  HeroMainFragment,
  HeroMainServicesItemFragment,
  NavigationItemFragment,
} from '../../gql/graphql';
import styles from './hero-main.module.scss';

type HeroMainProps = HeroMainFragment;

export const HeroMain: React.FC<HeroMainProps> = ({
  heroMainServices,
  mainNavigation,
  button,
  description,
  title,
}) => {
  const { slug, label } = button as ButtonFragment;

  return (
    <>
      <HeroWrapper classes={[styles.hero_main]}>
        <div className="main-container header header-main-container">
          <HeaderNavigation
            items={mainNavigation.items as NavigationItemFragment[]}
          />

          <section id={styles.hero_info}>
            <h2 className={styles.new_typography}>{title}</h2>
            <p>{description}</p>
            {button && <Button href={slug}>{label}</Button>}
          </section>
        </div>

        <div className={styles.hero_background_image_container}>
          <Image
            src="/images/background/hero_1600x900.webp"
            alt="alt"
            className="hero_background_image darken"
            layout="fill"
            objectFit="cover"
            loading="eager"
            priority
            quality={100}
          />
        </div>
      </HeroWrapper>

      <div className="main-container">
        <HeroServices
          services={heroMainServices as HeroMainServicesItemFragment[]}
        />
      </div>
    </>
  );
};
