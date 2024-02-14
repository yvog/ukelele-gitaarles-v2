import React from 'react';
import { ButtonFragment, ServicePageHeroFragment } from '../../gql/graphql';
import { Button } from '../button/button';
import { icons } from '../icons/icons';
import styles from './service-page-hero.module.scss';

type ServicePageHeroProps = ServicePageHeroFragment;

export const ServicePageHero: React.FC<ServicePageHeroProps> = ({
  title,
  text: { html },
  kvpItems,
  button,
}) => {
  const { slug, label } = button as ButtonFragment;

  return (
    <section className={styles.service_page_hero}>
      <h2>{title}</h2>

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <ul className={styles.kvp}>
        {kvpItems?.map(({ __typename, id, icon, text }) => (
          <li key={`${__typename}-${id}`}>
            <object
              data={icons[icon]}
              width="40"
              height="40"
              aria-hidden="true"
              tabIndex={-1}
            >
              {icon}
            </object>
            {text}
          </li>
        ))}
      </ul>

      <div className={styles.signup_btn}>
        <Button href={slug}>{label}</Button>
      </div>
    </section>
  );
};
