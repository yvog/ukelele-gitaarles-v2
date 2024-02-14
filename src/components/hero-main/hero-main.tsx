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

        <picture>
          <source
            media="(min-width:1200px)"
            srcSet="/images/background/hero_1600x900.webp"
          />
          <source
            media="(min-width:0)"
            srcSet="/images/background/hero_768x432.webp"
          />
          <img
            src="/images/background/hero_1600x900.webp"
            alt="alt"
            loading="eager"
            className="hero_background_image darken"
            width={1366}
            height={768}
          />
        </picture>
      </HeroWrapper>

      <div className="main-container">
        <HeroServices
          services={heroMainServices as HeroMainServicesItemFragment[]}
        />
      </div>
    </>
  );
};
