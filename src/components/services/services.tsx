import classnames from 'classnames';
import React from 'react';
import {
  ServicesContentFragment,
  ServicesContentItemFragment,
} from '../../gql/graphql';
import { ServicesItem } from '../services-item/services-item';
import styles from './services.module.scss';

type ServicesProps = ServicesContentFragment;

export const Services: React.FC<ServicesProps> = ({
  servicesTitle,
  servicesText,
  servicesItems,
}) => {
  return (
    <div className={classnames('main-container', styles.services)}>
      <h2>{servicesTitle}</h2>
      <p>{servicesText}</p>
      <div className={styles.services_row}>
        {(servicesItems as ServicesContentItemFragment[])?.map((item) => (
          <ServicesItem key={`${item.__typename}-${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
};
