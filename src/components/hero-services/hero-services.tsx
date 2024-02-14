import { default as classNames, default as classnames } from 'classnames';
import React from 'react';
import { HeroMainServicesItemFragment } from '../../gql/graphql';
import { HeroServicesItem } from '../hero-services-item/hero-services-item';
import { icons } from '../icons/icons';
import styles from './hero-services.module.scss';

type HeroServicesProps = {
  services: HeroMainServicesItemFragment[];
};

export const HeroServices: React.FC<HeroServicesProps> = ({ services }) => {
  return (
    <section className={classNames(styles.hero_services, 'container')}>
      <h2 className="hidden">Hero services</h2>
      <img
        src="/images/background/blue_background.webp"
        alt="blue background"
        loading="lazy"
        width={446}
        height={300}
        className={classnames('hero_background_image')}
      />
      <div className={styles.hero_services_items}>
        {services?.map(({ __typename, id, icon, title, slug, description }) => (
          <HeroServicesItem
            key={`${__typename}-${id}`}
            icon={icons[icon]}
            title={title}
            href={slug}
          >
            {description}
          </HeroServicesItem>
        ))}
      </div>
    </section>
  );
};
